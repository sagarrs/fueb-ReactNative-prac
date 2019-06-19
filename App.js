import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

import InputElements from './src/components/InputElements'
import DisplayText from './src/components/DisplayText'
import img from './assets/car1.jpg'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      placeName: "",
      places: []
    }
  }

  handleTxt = (val) => {
    this.setState(() => ({
      placeName: val
    }))
  }

  handleBtn = () => {
    // this.setState((prevState) => ({
    //   places: prevState.places.concat(this.state.placeName)
    // }))

    this.setState((prevState) => ({
      places: prevState.places.concat(
        {
          key: Math.random(), 
          value:this.state.placeName,
          image: img
        }
      )
    }))
  }

  handleRemove = (index) => {
    this.setState((prevState) => ({
      places: prevState.places.filter((place) => {
        return place.key !== index
      })
    }))
  }

  render(){
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}

        <InputElements handleTxt={this.handleTxt} handleBtn={this.handleBtn}/>

        <DisplayText places={this.state.places} handleRemove={this.handleRemove}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: "column"
  }
});


export default App