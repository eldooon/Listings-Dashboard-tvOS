import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export const ErrorContainer = () => (
  <View style={styles.container}>
    <Image style={styles.image} source={require('../../assets/corcoran_logo_black.png')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});