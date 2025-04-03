import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ onPress, title, color }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Intro3 = () => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 50) {
          navigation.goBack();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={[styles.background, { transform: [{ translateX: slideAnim }] }]}
      {...panResponder.panHandlers}
    >
      <ImageBackground 
        source={require('../../assets/images/background.png')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Image source={require('../../assets/images/intro3i.png')} style={{ marginBottom: 10 }} />
          <Text style={{ color: 'white', marginBottom: 8, fontSize: 16 ,opacity:0.7}}>We provide rehabilitation services</Text>
          <Text style={{ color: 'white', marginBottom: 100, fontSize: 16,opacity:0.7 }}>Home care services</Text>
          <View style={styles.load}>
            <Image style={styles.dot} source={require('../../assets/images/le1.png')} />
            <Image style={styles.dot} source={require('../../assets/images/le3.png')} />
            <Image style={styles.dot} source={require('../../assets/images/le4.png')} />
            <Image style={styles.dot} source={require('../../assets/images/le2.png')} />
          </View>
          <View style={{ flex: 0.2 }} />
          <View style={styles.buttonContainer}>
            <CustomButton
              title="LET'S GO"
              onPress={() => navigation.navigate('LoginSignUp')}
              color="#00a1e4"
            />
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  load: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  dot: {
    height: 10,
    width: 10,
    marginHorizontal: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default Intro3;
