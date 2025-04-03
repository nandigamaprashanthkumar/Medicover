import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, title, color }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const LoginSignUp = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image source={require('../../assets/images/medical.png')} style={styles.logo} />
        <View style={{ flex: 0.2 }} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Login"
          onPress={() => navigation.navigate('Login')}
          color="#3498db"
        />
        <CustomButton
          title="Signup"
          onPress={() => navigation.navigate('Signup')}
          color="#585656"
        />
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
  logo: {
    marginTop: 100,
    resizeMode: 'contain',
    height: 100,
    width:280,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});

export default LoginSignUp;
