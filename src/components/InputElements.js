import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const InputElements = (props) => {
    return(
        <View style={styles.input}>
          <TextInput style={styles.textInput} onChangeText={props.handleTxt}/>
          <Button title="Add" onPress={props.handleBtn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: 'center',
      },
      textInput:{
        width: "70%",
        borderColor: "black",
        borderWidth: 2
      },
})

export default InputElements