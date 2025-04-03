import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Button, Animated, PanResponder } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Intro1 = () => {
    const navigation = useNavigation();
    const slideAnim = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 50) {
                    navigation.goBack();
                } else if (gestureState.dx < -50) {
                    navigation.navigate('Intro3');
                }
            },
        })
    ).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [slideAnim]);

    const slideInterpolate = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const animatedStyle = {
        transform: [{ translateX: slideInterpolate }],
    };

    return (
        <Animated.View
            style={[styles.background, animatedStyle]}
            {...panResponder.panHandlers}
        >
            <ImageBackground
                source={require('../../assets/images/background.png')}
                style={styles.background}
                resizeMode="cover" 
            >
                <View style={styles.overlay}>
                    <Image source={require('../../assets/images/intro2i.png')} style={{marginBottom:10}} />
                    <Text style={{ color: 'white',marginBottom:8,fontSize:16 ,opacity:0.7}}>We provide anbulance services and</Text>
                    <Text style={{ color: 'white',marginBottom:100,fontSize:16, opacity:0.7 }}>Physiotherapy services</Text>
                    <View style={styles.load}>
                        <Image style={styles.dot} source={require('../../assets/images/le3.png')} />
                        <Image style={styles.dot} source={require('../../assets/images/le1.png')} />
                        <Image style={styles.dot} source={require('../../assets/images/le2.png')} />
                        <Image style={styles.dot} source={require('../../assets/images/le4.png')} />
                    </View>
                    <View style={{ flex: 0.2 }} />
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
        width: '100%',
        height: '100%',
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
});

export default Intro1;