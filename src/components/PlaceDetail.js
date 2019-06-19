import React from 'react'
import {View, Modal, Image, Text, Button, StyleSheet} from 'react-native'

const PlaceDetail = (props) => {
    let modalContent = null

    if(props.selectedPlace){
        modalContent = (
            <View>
                <Text style={styles.txtStyle}>{props.selectedPlace.value}</Text>
                <Image source={props.selectedPlace.image} style={styles.imgStyle}/>
            </View>
        )
    }

    return(
        <Modal 
            visible={props.selectedPlace !== null} 
            animationType="slide"
            onRequestClose={props.onModalClosed}
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View style={styles.btnContainer}>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    btnContainer:{
        flexDirection: "column",
        justifyContent: 'space-between'
    },
    imgStyle:{
        height: 100,
        width: "100%"
    },
    txtStyle: {
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center"
    }
})

export default PlaceDetail