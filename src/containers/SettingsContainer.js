import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, TouchableHighlight, ScrollView } from 'react-native';

import { NeighborhoodPicker } from '../components/NeighborhoodPicker';

export class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'js'
    }
  }
  
  render() {
    console.log('inside settings container')
    return (
      <View style={styles.container}>
        <Text>SettingsContainer</Text>
        <NeighborhoodPicker />
        {/* <View> */}
          <ScrollView style={{ width: 100 }}>
          {/* <ScrollView> */}
            <View><TouchableHighlight onPress={() => console.log('dorp')}><Text>one</Text></TouchableHighlight></View>
            <View><TouchableHighlight onPress={() => console.log('dorp')}><Text>two</Text></TouchableHighlight></View>
            {/* <TouchableHighlight onPress={() => console.log('dorp')}><Text>one</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('dorp')}><Text>two</Text></TouchableHighlight> */}
          </ScrollView>
        {/* </View> */}
        <TouchableHighlight
          onPress={this.props.goToListingsView}>
          <Text>Go to not settings</Text>
        </TouchableHighlight>
        <View>
            <Picker
              style={{width: 100, backgroundColor: 'tomato'}}
              selectedValue={this.state.language}
              onValueChange={(lang) => {
                console.log('lang', lang)
                this.setState({language: lang})
              }}>
              {/* <View><TouchableHighlight>
                <Picker.Item style={{width: 100, backgroundColor: 'goldenRod' }} label="Java" value="java" />
              </TouchableHighlight></View>
              <View><TouchableHighlight>
                <Picker.Item style={{width: 100, backgroundColor: 'goldenRod' }} label="JavaScript" value="js" />
              </TouchableHighlight></View> */}
            </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato'
  }
});