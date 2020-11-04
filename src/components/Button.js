import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'



const Button = (props) => {
    return (
       <TouchableOpacity 
       style={styles.container}
       onPress = {props.onPress}
       >
           <Text style={styles.text}>{props.BtnName}</Text>
       </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffff81',
        padding:10,
        marginHorizontal:30,
        borderRadius:10,
        marginVertical:10
    },
    text:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    }
})
