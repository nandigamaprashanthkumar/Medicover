import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native';
import HamburgerMenu from './HamburgerMenu';

const SettingsScreen = ({ navigation }) => {
    const animatedValue = new Animated.Value(0);
    const titleOpacity = new Animated.Value(0);
    const buttonScale = new Animated.Value(1);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        // Fade in title
        Animated.timing(titleOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Image style={{ width: 160, height: 40, margin: 8 }} source={require('../../assets/images/medical.png')} />
                <TouchableOpacity onPress={toggleMenu}>
                    <Image style={styles.hamburger} source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <View>d</View>
            </ScrollView>
            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    navbar: {
        backgroundColor: '#efeff4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 30,
    },
    hamburger: {
        width: 40,
        height: 40,
    },
    content: {
        padding: 20,
    },
});

export default SettingsScreen;
