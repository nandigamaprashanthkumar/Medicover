import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { signUp } from '../utils/auth';

const CustomButton = ({ onPress, title, color, style, fontSize }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style, { backgroundColor: color }]}>
    <Text style={[styles.buttonText, { fontSize: fontSize || 18 }]}>{title}</Text>
  </TouchableOpacity>
);

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    const success = await signUp(username, email, password);
    if (success) {
      Alert.alert('Success', 'Sign Up Successful', [
        {
          text: 'OK', onPress: () => navigation.navigate('Login')
        },
      ]);
    } else {
      Alert.alert('Error', `Sign Up Failed`);
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/background.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.inputField}>
            <Text style={styles.text}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the username"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.text}>Confirm password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
          <CustomButton title="Create Account" onPress={handleSignUp} color="#3498db" />
          <View style={styles.switch}>
            <Text style={styles.switchText}>ALREADY HAVE AN ACCOUNT?</Text>
            <CustomButton 
              title="LOGIN" 
              onPress={() => navigation.navigate('Login')} 
              style={styles.loginButton}
              fontSize={14}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    height: '80%',
    width: '80%',
    borderRadius: 10,
    marginTop: 100,
  },
  inputField: {
    marginBottom: 20,
  },
  text: {
    width: '80%',
    justifyContent: 'center',
    marginLeft: 10,
    color: 'white',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'white',
    opacity: 0.7,
    borderRadius: 10,
    color: 'white',
    fontWeight:'500'
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  switchText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 30,
  },
  loginButton: {
    marginRight: 50,
    marginBottom: 36,
  },
});

export default Signup;