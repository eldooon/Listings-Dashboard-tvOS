import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableHighlight, Modal } from 'react-native';

export class NeighborhoodPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  pressedButton() {
    console.log('pressed!')
  }
  
  render() {
    console.log('inside render')
    return (
      // <TouchableHighlight
      //   style={styles.button}
      //   onPress={this.pressedButton}>
      //   <Text>BOOP</Text>
      // </TouchableHighlight>
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22, height: 200, width: 200}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              console.log('i am not groot')
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          console.log('i am groot')
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
      // {/* <TouchableHighlight
      //   style={styles.button}
      //   onPress={this.pressedButton}
      //   title="Learn More"
      //   color="red"
      // /> */}
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    // color: 'green'
  }
});