import React from 'react'
import { StyleSheet, Text, View,TextInput} from 'react-native'

const Input = (props) => {

    const[userName,setUserName] = React.useState('')
    const[password,setPassword] = React.useState('')
    return (
       <View style = {styles.container}>
           <TextInput 
           placeholder = {props.placeholder}
           onChangeText = {(text) => props.changeText(text) }
           secureTextEntry = {props.pass}
           clearTextOnFocus = {props.clear}
           onFocus = {props.focus}
           keyboardType = {props.keyboard}
           />
       </View>
       
    )
}

export default Input

const styles = StyleSheet.create({
    container:{
        padding:12,
        backgroundColor:'#efefef',
        margin:5,
        borderRadius:7,
    }
})
