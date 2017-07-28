import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, TouchableHighlight, ScrollView, Modal } from 'react-native';

import { NeighborhoodPicker } from '../components/NeighborhoodPicker';
import { ListingsContainer } from '../containers/ListingsContainer';

export class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   language: 'js'
    // }
  }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible, office) {
    ListingsContainer.office = office
    this.setState({modalVisible: visible});
    //office = office
    console.log(`PASSING THIS OFFICE: ${office}`)
  }

  render() {
    console.log('inside settings container')
    return (
      <View style={styles.container}>
        <Modal style = {styles.container}
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>
          <ListingsContainer/>
        </Modal>
        <Text style={styles.welcome}>
          Corcoran
        </Text>
        <Text style={styles.instructions}>
          Please select your office location.
        </Text>
        <TouchableHighlight style ={styles.button} underlayColor= '#80DEEA' onPress={() => console.log ('LISTINGS!') & this.setModalVisible(!this.state.modalVisible, 'Eastside')}>
          <Text style={styles.buttonsText}>
            Eastside
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style ={styles.button} underlayColor= '#80DEEA' onPress={() => console.log('Westside') & this.setModalVisible(!this.state.modalVisible, 'Westside')}>
          <Text style={styles.buttonsText}>
            Westside
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style ={styles.button} underlayColor= '#80DEEA' onPress={() => console.log('Carnegie') & this.setModalVisible(!this.state.modalVisible, 'Carnegie')}>
          <Text style={styles.buttonsText}>
            Carnegie
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style ={styles.button} underlayColor= '#80DEEA' onPress={() => console.log('Union Square') & this.setModalVisible(!this.state.modalVisible, 'Union Square')}>
          <Text style={styles.buttonsText}>
            Union Square
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style ={styles.button} underlayColor= '#80DEEA' onPress={() => console.log('Chelsea')& this.setModalVisible(!this.state.modalVisible, 'Chelsea')}>
          <Text style={styles.buttonsText}>
            Chelsea
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style ={styles.button} underlayColor= '#80DEEA' onPress={() => console.log('Soho') & this.setModalVisible(!this.state.modalVisible, 'Soho')}>
          <Text style={styles.buttonsText}>
            Soho
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function SetLocation(office) {
  //set criteria = office
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  welcome: {
    fontFamily: 'Baskerville-SemiBoldItalic',
    fontSize: 120,
    textAlign: 'center',
    margin: 10,
    paddingTop: 10,
  },
  instructions: {
    fontFamily: 'Baskerville-Bold',
    fontSize: 40,
    textAlign: 'center',
    color: '#333333',
  },
  buttonsText: {
    fontFamily: 'Baskerville-SemiBold',
    fontSize: 80,
    textAlign: 'center',
    color: 'black',
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  }
});
