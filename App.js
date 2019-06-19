import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

import InputElements from './src/components/InputElements'
import DisplayText from './src/components/DisplayText'
import PlaceDetail from './src/components/PlaceDetail'
import img from './assets/car1.jpg'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      placeName: "",
      places: [],
      selectedPlace: null
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

  onItemDeleted = () => {
    this.setState((prevState) => ({
      places: prevState.places.filter((place) => {
        return place.key !== prevState.selectedPlace.key
      }),
      selectedPlace: null
    }))
  }

  onModalClosed = () => {
    this.setState(() => ({
      selectedPlace: null
    }))
  }

  handleSelect = (index) => {
    this.setState((prevState) => ({
      selectedPlace: prevState.places.find((place) => {
        return(
          place.key == index
        )
      })
    }))
  }

  render(){
    return (
      <View style={styles.container}>
        <InputElements handleTxt={this.handleTxt} handleBtn={this.handleBtn}/>
        <DisplayText places={this.state.places} handleSelect={this.handleSelect}/>
        <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.onItemDeleted} onModalClosed={this.onModalClosed}/>
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