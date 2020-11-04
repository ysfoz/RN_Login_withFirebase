import React from 'react'
import { StyleSheet,SafeAreaView, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';



import Input from '../components/Input'
import Button from '../components/Button'



const LoginPage = (props) => {
    const[email,setEmail] = React.useState('')
    const[password,setPassword] = React.useState('')

    const onSetEmail =(text => setEmail(text))
    const onSetPassword =(text => setPassword(text))
   

function signUp (){
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log(response);
  })
  .catch(error => {
   
    console.log(error);
  });
}
function signIn (){
    auth()
    .signInWithEmailAndPassword(email,password)
    .then ((res)=> {
        res && props.navigation.navigate('Home')
    })
    .catch((error) => {
        console.log(error)})}


    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
              <View style= {styles.input}>
                <Input 
                placeholder = 'Enter your Email . . . ' 
                changeText ={onSetEmail}
                clear = 'true'
                keyboard = 'email-address'
                />
                <Input placeholder = 'Enter Your Password . . .' 
                changeText={onSetPassword}
                pass = 'true'
                clear = 'true'
                
                />
              </View>
                <Button 
                BtnName = 'Sign In'
                onPress = {() => signIn()}
                />

                <Button 
                BtnName = 'Sign Up'
                onPress = {signUp()}
                />
            <Button 
            BtnName = 'ac'
            onPress={() => props.navigation.navigate('Home') }
            />
            </View>
           
        </SafeAreaView>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    safe:{
        flex:1
    },
    container:{
        flex:1,
        backgroundColor:'#80cbc4'
        
    },
    input:{
        marginTop:150,
        marginBottom:20
    }
})

