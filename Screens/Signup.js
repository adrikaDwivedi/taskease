import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Signup = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!email || !password) {
      Alert.alert('Input Error', 'Email and password are required');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert('Success', 'Account created successfully!');
        setEmail('');
        setPassword('');
        navigation.navigate('LoginPage');
      })
      .catch((err) => {
        Alert.alert('Signup Error', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.text1}>Let's get started!</Text>

      <TextInput
        style={styles.inputboxes}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.inputboxes}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.btn} onPress={handleSignup}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.text2}>or sign up with</Text>

      <View style={styles.imgView}>
        <Image source={require('../assets/facebook.png')} style={styles.icons} />
        <Image source={require('../assets/google.png')} style={styles.icons} />
        <Image source={require('../assets/apple.png')} style={styles.icons} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.text3}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.mtxt}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 100,
  },
  text1: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  inputboxes: {
    marginTop: 20,
    width: '80%',
    height: 60,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
  },
  btn: {
    width: '50%',
    height: 60,
    marginTop: 30,
    backgroundColor: '#148c7c',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#000',
    shadowOpacity: 0.8,
  },
  text2: {
    marginTop: 20,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '400',
  },
  imgView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  icons: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 25,
  },
  text3: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
  mtxt: {
    fontSize: 16,
    fontWeight: '800',
    color: '#148c7c',
  },
});


