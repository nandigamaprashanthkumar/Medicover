import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { login } from '../utils/auth'; // Make sure your auth.js path is correct

const CustomButton = ({ onPress, title, color, style, fontSize }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style, { backgroundColor: color }]}>
    <Text style={[styles.buttonText, { fontSize: fontSize || 18 }]}>{title}</Text>
  </TouchableOpacity>
);

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Basic validation for empty fields
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password');
      return;
    }

    // Attempt to login using the auth.js function
    const success = await login(email, password);
    if (success) {
      Alert.alert('Success', 'Login Successful', [
        {
          text: 'OK', onPress: () => navigation.navigate('MedicalAdvisorHome')
        },
      ]);
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../assets/images/medical.png')} />
          <View style={{ flex: 0.2 }} />
          
          {/* Email Input Field */}
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/images/mail.png')} style={styles.icon} />
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="lightgray"
              />
            </View>
          </View>

          {/* Password Input Field */}
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/images/lock.png')} style={styles.icon1} />
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="lightgray"
              />
            </View>
          </View>

          {/* Login Button */}
          <CustomButton title="Login" onPress={handleLogin} color="#3498db" />

          {/* Sign Up Button */}
          <View style={styles.switch}>
            <Text style={styles.switchText}>DON'T HAVE AN ACCOUNT?</Text>
            <CustomButton 
              title="SIGN UP" 
              onPress={() => navigation.navigate('Signup')}
              style={styles.signUpButton}
              fontSize={15}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    height: '80%',
    width: '80%',
    borderRadius: 10,
    marginTop: 250,
  },
  label: {
    color: 'white',
    opacity:0.7,
    marginLeft: 10, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 20, 
    height: 20,
    marginRight: 10,
    marginTop:25
  },
  icon1: {
    width: 15, 
    height: 20,
    marginRight: 15,
    marginTop:20,
    marginLeft:2
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
    fontWeight:'500',
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  switchText: {
    color: 'white',
    fontSize: 14,
    marginRight: 10,
  },
  signUpButton: {
    marginBottom: 35,
  },
  image: {
    marginTop: 50,
    resizeMode: 'contain',
    height: 100,
    width: 280,
    marginBottom: 20,
  },
});

export default Login;