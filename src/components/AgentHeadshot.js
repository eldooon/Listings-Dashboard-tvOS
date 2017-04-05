import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export class AgentHeadshot extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'https://authenticsoundrecording.com/1-Prince-Headshot.gif' }}
          // source={{uri: 'https://i.dailymail.co.uk/i/pix/2016/06/07/17/34DE496C00000578-3629776-image-a-55_1465318001024.jpg' }}
          // source={{uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
        <Text style={styles.text}>{this.props.agent.Name}</Text>
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    // borderColor: 'white',
    // borderStyle: 'solid',
    // borderWidth: 1,
    marginLeft: 20,
    alignItems: 'center'
  },
  image: {
    height: 160,
    width: 160,
  },
  text: {
    color: 'white',
    // fontFamily: 'Futura'
  }
})