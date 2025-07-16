import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginPage = () => {
    const navigation = useNavigation();


const [request, response, promptAsync] = Google.useAuthRequest({
  expoClientId: '1024095845227-605iij06q5a3lvrg5kkkgvca9qihr9r4.apps.googleusercontent.com',
    androidClientId: '1024095845227-605iij06q5a3lvrg5kkkgvca9qihr9r4.apps.googleusercontent.com',

});
    useEffect(() => {
  if (response?.type === 'success') {
    const { id_token } = response.authentication;
    const credential = GoogleAuthProvider.credential(id_token);
    signInWithCredential(auth, credential)
      .then(() => {
        Alert.alert("Google Login Successful");
        navigation.replace('HomePage');  
      })
      .catch(err => Alert.alert("Google Login Failed", err.message));
  }
}, [response]);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      Alert.alert('Logged in!');
      navigation.replace('HomePage'); 
    })
    .catch(err => Alert.alert('Login Error', err.message));
};

  return (
     <View style={styles.container}>
          
          <View style={styles.logo}>
             <Image
                   source={require('../assets/logo.png')}
                   style={styles.logo}
            />
          </View>
            <Text style={styles.text1}>Welcome Back!</Text>
    
          <View> 
         <TextInput
         style={styles.inputboxes}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

            <TextInput
            style={styles.inputboxes}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
      <Text>Login</Text>
      </TouchableOpacity>
          </View>

          <View>
          <Text style={styles.text2}>or log in with</Text>
          </View>
<View style={styles.imgView}>
  <Image source={require('../assets/facebook.png')} style={styles.icons} />
  
  <TouchableOpacity onPress={() => promptAsync()}>
    <Image source={require('../assets/google.png')} style={styles.icons} />
  </TouchableOpacity>
  
  <Image source={require('../assets/apple.png')} style={styles.icons} />
</View>

          <View>
              <Text style={styles.text3}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.mtxt}>Get started!</Text>
              </TouchableOpacity>     
          </View>
        </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   logo:{
    width: 200,
    height: 200,
    marginLeft: 50,
    marginTop: 20,
    borderRadius: 100,
  },
  text1:{
    marginTop: 40,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  inputboxes:{
    marginTop: 30,
    width: '80%',
    height: 60,
    marginLeft: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
  },
  btn:{
    width: '40%',
    height: 60,
    marginLeft: 20,
    marginTop: 30,
    backgroundColor: '#148c7c',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#000',
    shadowOpacity: 0.8,
  },
  text2:{
    marginTop: 20,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '400',
    textAlign: 'center',
    marginLeft: 28,
  },
  imgView:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  icons:{
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 25,
    borderColor: '#ccc',
  },
  text3:{
    marginTop: 10,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '300',
    textAlign: 'center',
    marginLeft: 28,
  },
  mtxt:{
    marginTop: 10,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '800',
    textAlign: 'center',
    marginLeft: 28,  
    color: '#148c7c',
  },
})