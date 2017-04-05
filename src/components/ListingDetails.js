import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

var numeral = require('numeral');

export const ListingDetails = ({ address, baths, beds, combinedType, neighborhood, price, unit }) => (
  <View style={styles.container}>
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Text style={styles.header}>{address} </Text>
        <Text style={[styles.text, { marginBottom: 10 }]}>{unit}</Text>
      </View>
      <Text style={styles.text}>{neighborhood.toUpperCase()}</Text>
      {baths && beds ?
        <Text style={styles.textSmall}>{beds}BD / {baths}BA</Text> :
        null}
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <Text style={styles.header}>${numeral(price).format('0,0')}</Text>
      <Text style={styles.textSmall}>{combinedType.toUpperCase()}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  header: {
    color: 'white',
    fontSize: 52,
    fontFamily: 'AvenirNext-DemiBold',
    fontWeight: '700',
    lineHeight: 58
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    lineHeight: 30
  },
  textSmall: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'AvenirNext-DemiBold',
    lineHeight: 24
  }
})