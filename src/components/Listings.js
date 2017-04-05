import React, { Component } from 'react';
import { Text, View, Navigator  } from 'react-native';

import { Listing } from './Listing';

export class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: this.props.listings, index: 0 };
    this.renderScene = this.renderScene.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.listings !== this.state.listings) {
      this.setState({ listings: nextProps.listings });
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return false; // mwahahaha
  }
  
  renderScene(route, navigator) {
    let nextIndex = route.index + 1;
    if (route.index == this.state.listings.length-1) {
      this.props.getNextListings();
      nextIndex = 0;
    }
    return <Listing
      listing={this.state.listings[route.index]}
      navigator={navigator}
      nextIndex={nextIndex}
    />
  }
  
  render() {
    return <Navigator
      initialRoute={{ listing: this.state.listings[0], index: 0 }}
      renderScene={this.renderScene}
    />
  }
}