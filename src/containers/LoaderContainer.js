// import React, { Component } from 'react';
import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet, Image } from 'react-native';

export const LoaderContainer = ({ text }) => (
  <View style={styles.container}>
    <ActivityIndicator style={styles.activityIndicator} size="large"/>
    <Text style={styles.text}>{text}</Text>
    {/* <Image style={styles.image} source={require('../../assets/corcoran_logo_black.png')} /> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicator: {
    paddingBottom: 25,
  },
  text: {
    // color: 'white',
    fontSize: 36,
    // fontFamily: 'AvenirNext-DemiBold',
    // fontFamily: 'AvenirNext-Regular',
    fontFamily: 'AvenirNext-UltraLight',
  },
});