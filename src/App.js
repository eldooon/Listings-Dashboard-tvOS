import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import { ListingsContainer } from './containers/ListingsContainer';
import { SettingsContainer } from './containers/SettingsContainer';

export default class ListingsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { showSettingsontainer: true };
    this.goToSettingsView = this.goToSettingsView.bind(this);
    this.goToListingsView = this.goToListingsView.bind(this);
  }

  goToSettingsView() {
    this.setState({ showListingsContainer: false });
  }

  goToListingsView() {
    this.setState({ showListingsContainer: true });
  }

  render() {
    return this.state.showListingsContainer ?
      <ListingsContainer goToSettingsView={this.goToSettingsView} /> :
      <SettingsContainer goToListingsView={this.goToListingsView} />;
  }
}

AppRegistry.registerComponent('ListingsDashboard', () => ListingsDashboard);
