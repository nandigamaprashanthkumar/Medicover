import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import HamburgerMenu from './HamburgerMenu';

const HomeCareService = ({ navigation }) => {
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

    const handleHamburgerPress = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            navigation.navigate('HamburgerMenu');
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
            }).start();
        });
    };

    const handleBackPress = () => {
        navigation.navigate('MedicalAdvisorHome');
    };

    const handleButtonPressIn = () => {
        Animated.spring(buttonScale, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handleButtonPressOut = () => {
        Animated.spring(buttonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const CustomButton = ({ label, color, onPress }) => (
        <TouchableOpacity
            onPressIn={handleButtonPressIn}
            onPressOut={handleButtonPressOut}
            onPress={onPress}
            style={[styles.button, { backgroundColor: color || '#47b8e9' }]}
        >
            <Animated.Text style={[styles.buttonText, { transform: [{ scale: buttonScale }] }]}>
                {label}
            </Animated.Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.navbar}>
                <Image style={{ width: 160, height: 40, margin: 8 }} source={require('../../assets/images/medical.png')} />
                <TouchableOpacity onPress={toggleMenu}>
                    <Image style={styles.hamburger} source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>HOME CARE SERVICES</Animated.Text>
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Text style={styles.backButtonText}>BACK</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.conta}>
                <View style={styles.tabRow}>
                    <CustomButton
                        label="LAB SERVICE"
                        color="#00a1e4"
                        onPress={() => navigation.navigate('HomeCareService')}
                    />
                    <CustomButton
                        label="PHYSIOTHERAPY"
                        onPress={() => navigation.navigate('HomeCSPhysiotherapy')}
                    />
                    <CustomButton
                        label="PHARMACY"
                        onPress={() => navigation.navigate('HomeCSPharmacy')}
                    />
                </View>
                <View style={styles.tabRow}>
                    <CustomButton
                        label="DAY CARE NURSING"
                        onPress={() => navigation.navigate('HomeCSDayCNursing')}
                    />
                    <CustomButton
                        label="HOME CARE NURSING"
                        onPress={() => navigation.navigate('HomeCSHomeCNursing')}
                    />
                    <CustomButton
                        label="CARE TAKER"
                        onPress={() => navigation.navigate('HomeCSCareTaker')}
                    />
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image style={{ margin: 30, height: 150, width: 165 }} source={require('../../assets/images/Homeservices.png')} />
                <TouchableOpacity style={styles.serviceButton} onPress={() => navigation.navigate('RequestService')}>
                    <Text style={styles.serviceButtonText}>REQUEST SERVICE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.info}>
                <View style={styles.tit}>
                    <View style={styles.tick}>
                        <Text style={styles.ticktext}>NAME</Text>
                    </View>
                    <View style={styles.tick}>
                        <Text style={styles.ticktext}>LOCATION</Text>
                    </View>
                    <View style={styles.tick}>
                        <Text style={styles.ticktext}>CONTACT NUMBER</Text>
                    </View>
                    <View style={styles.tick}>
                        <Text style={styles.ticktext}>PROBLEM</Text>
                    </View>
                </View>
                <View style={styles.tat}>
                    <View style={styles.tao}>
                        <Text style={styles.taotext}>NARESH</Text>
                    </View>
                    <View style={styles.tao}>
                        <Text style={styles.taotext}>SURYAPET</Text>
                    </View>
                    <View style={styles.tao}>
                        <Text style={styles.taotext}>MAIN CAMPUS</Text>
                    </View>
                    <View style={styles.tao}>
                        <Text style={styles.taotext}>TEXT FIELD</Text>
                    </View>
                </View>
            </View>
            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    conta: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    image: {
        width: 160,
        height: 40,
        margin: 10,
    },
    hamburger: {
        width: 40,
        height: 40,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#efeff4',
        height: 50,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 30,
    },
    title: {
        fontSize: 15,
        justifyContent: 'center',
        alignContent: 'center',
        fontWeight: '600',
        marginLeft: 20,
    },
    backButton: {
        backgroundColor: '#00a1e4',
        borderRadius: 30,
        width: 70,
        height: 35,
        marginLeft: 140,
        paddingBottom: 5,
    },
    backButtonText: {
        color: 'white',
        padding: 4.5,
        paddingLeft: 17,
        paddingTop: 7,
        fontWeight: '500',
    },
    tabRow: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#47b8e9',
        width: 136,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 1,
        marginVertical: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    serviceButton: {
        backgroundColor: '#ff796d',
        borderRadius: 30,
        paddingVertical: 8,
        paddingLeft: 40,
        paddingHorizontal: 20,
        marginTop: 10,
        width: 190,
        height: 35,
        marginBottom: 30,
    },
    serviceButtonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: '500',
    },
    info: {
        flex: 1,
        flexDirection: 'row',
    },
    tit: {
        flex: 1,
        height: 320,
    },
    tat: {
        flex: 1,
        width: 200,
        height: 320,
    },
    tick: {
        flex: 0.17,
        backgroundColor: '#e8e8ea',
        marginVertical: 0.5,
    },
    tao: {
        flex: 0.17,
        borderBottomColor: 'black',
        borderColor: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 0.5,
    },
    ticktext: {
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 12,
        fontSize: 15,
        color: '#707070',
    },
    taotext: {
        justifyContent: 'center',
        fontSize: 15,
        color: '#707070',
        marginTop: 12,
        marginLeft: 40,
    },
});

export default HomeCareService;