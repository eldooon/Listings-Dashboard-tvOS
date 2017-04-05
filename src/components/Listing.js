import React, { Component } from 'react';
import { Text, View, Dimensions, Image, LayoutAnimation, StyleSheet } from 'react-native';
import Carousel from 'react-native-looped-carousel';

import { AgentHeadshot } from './AgentHeadshot';
import { ListingDetails } from './ListingDetails';

const { width, height } = Dimensions.get('window');

export class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = { size: { width, height }, listing: this.props.listing };
    this.renderCarousel = this.renderCarousel.bind(this);
    this.renderAgentHeadshots = this.renderAgentHeadshots.bind(this);
    this.renderAgentList = this.renderAgentList.bind(this);
  }
  
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigator.replace({ index: this.props.nextIndex });
    }, 30000);
  }
  
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  
  renderCarousel() {
    let images = this.state.listing.Media.map((p, i) => {
      return <Image key={i} source={{uri: 'https:' + p.Url }} style={this.state.size} />
    });
    return images.length > 1 ?
      <Carousel delay={7500} style={this.state.size} autoplay>{images}</Carousel> :
      <View>{images}</View>;
  }
  
  renderAgentHeadshots() {
    return <View style={styles.agentHeadshotsContainer}>
      {this.props.listing.Agents.map((agent, i) => <AgentHeadshot key={i} agent={agent}/> )}
    </View>;
  }
  
  renderAgentList() {
    return <View style={styles.agentListContainer}>
      {this.props.listing.Agents.map((agent, i) => <Text key={i} style={styles.agentListText}>{agent.Name}</Text> )}
    </View>
  }
  
  render() {
    return <View style={{ flex: 1 }}>
      {this.renderCarousel()}
      <View style={styles.blackOverlay}></View>
      <ListingDetails
        address={this.state.listing.Property.Address1}
        baths={this.state.listing.Bathrooms}
        beds={this.state.listing.Bedrooms}
        combinedType={this.state.listing.CombinedType}
        neighborhood={this.state.listing.Property.NeighborhoodName}
        price={this.state.listing.Price}
        unit={this.state.listing.Address2}
      />
      {/* {this.renderAgentHeadshots()} */}
      {this.renderAgentList()}
    </View>
  }
}

const styles = StyleSheet.create({
  blackOverlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  agentHeadshotsContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 20,
    flexDirection: 'row'
  },
  agentListContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 25,
    alignItems: 'flex-end'
  },
  agentListText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    lineHeight: 36
  }
});