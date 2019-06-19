import React from 'react'
import {View, StyleSheet, Text, FlatList, Image} from 'react-native'

const DisplayText = (props) => {
    return(
        // <View style={styles.displayText}>
        //   {
        //     props.places.map((place, i) => {
        //       return(
        //         <Text key={i} onPress={() => {props.handleRemove(i)}}>{place}</Text>
        //       )
        //     })
        //   }
        // </View>
        <FlatList
            data={props.places}
            renderItem={(info) => {
                return(
                    <View style={styles.displayText}>
                        <Image source={info.item.image} style={styles.placeImage}/>
                        <Text onPress={() => {props.handleRemove(info.item.key)}}>{info.item.value}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    displayText: {
        width: "100%",
        backgroundColor: "#eee",
        margin: 15,
        flexDirection: "row"
        // alignItems: "center"
      },
    placeImage: {
        marginRight: 8,
        height: 50,
        width: 50
    }
})

export default DisplayText