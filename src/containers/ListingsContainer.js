import React, { Component } from 'react';
import { Text, View, ActivityIndicator, TouchableHighlight, StyleSheet } from 'react-native';

import { Listings } from '../components/Listings';
import { ListingsApi } from '../utils/Listings.Http.utils';
import { LoaderContainer } from '../containers/LoaderContainer';


export class ListingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [], nextListings: null, page: 1 };
    this.ListingsApi = new ListingsApi();
    this.renderListings = this.renderListings.bind(this);
    this.getNextListings = this.getNextListings.bind(this);
    console.log(`LISTING OFFICE: ${office}`)
  }

  componentWillMount() {
    this.ListingsApi.Get({ 'Page': this.state.page })
      .then(listings => {
        this.setState({ listings: listings})
      });
  }

  componentWillUpdate(nextProps, nextState) {
    if (!nextState.nextListings) {
      this._fetchNextListings();
    }
  }

  _fetchNextListings(pageNum) {
    let page = pageNum || this.state.page + 1;
    this.ListingsApi.Get({ 'Page': page })
      .then(nextListings => {
        if (nextListings && nextListings.length) {
          this.setState({ nextListings: nextListings, page: page });
        } else if (nextListings && !nextListings.length) {
          // if response is empty, fetch from page 1
          return this._fetchNextListings(1);
        } else {
          setTimeout(() => this._fetchNextListings(), 15000);
        }
      });
  }

  getNextListings() {
    let nextListings = this.state.nextListings;
    if (nextListings) {
      this.setState({ listings: nextListings, nextListings: null });
    }
  }

  renderListings() {
    if (!this.state.listings) {
      return <ErrorContainer />;
    } else if (!this.state.listings.length) {
      return <LoaderContainer text="Getting Listings..."/>;
    } else {
      return <Listings listings={this.state.listings} getNextListings={this.getNextListings} />;
    }
  }

  render() {
    return this.renderListings();
  }
}

var office = ''

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 32
  },
  settingsButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'blue'
  },
  button: {
    backgroundColor: 'tomato',
    padding: 20
  }
});
