import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HamburgerMenu = ({ isOpen, toggleMenu}) => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const translateX = React.useRef(new Animated.Value(screenWidth)).current;

    React.useEffect(() => {
        Animated.timing(translateX, {
            toValue: isOpen ? screenWidth * 0.15 : screenWidth,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isOpen]);

    return (
        <View style={styles.container}>
            {isOpen && <TouchableOpacity style={styles.overlay} onPress={toggleMenu} />}
            <Animated.View style={[styles.menuContainer, { transform: [{ translateX }] }]}>
                <View style={styles.profileContainer}>
                    <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
                    <Text style={styles.profileName}>Naresh N</Text>
                </View>
                <View style={{ flex: 0.1 }}>
                    <TouchableOpacity
                       style={styles.menuconthome}
                       onPress={() => navigation.navigate('MedicalAdvisorHome')}
                    >
                       <Image style={styles.menuima} source={require('../../assets/images/home.png')} />
                       <Text style={styles.menutex}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.1 }}>
                    <TouchableOpacity
                       style={styles.menucont}
                       onPress={() => navigation.navigate('Signup')}
                    >
                       <Image style={styles.menuima} source={require('../../assets/images/myprofile.png')} />
                       <Text style={{ marginLeft: 17, color: 'white' }}>My Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.1}}>
                    <TouchableOpacity 
                        style={styles.menuconta} 
                        onPress={() => navigation.navigate('Signup')}
                    >
                       <Image style={{marginLeft:25}} source={require('../../assets/images/notification.png')}/>
                       <Text style={{marginLeft:22.5,color:'white'}}>Notifications</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.1}}>
                    <TouchableOpacity 
                        style={styles.menuconti} 
                        onPress={() => navigation.navigate('DoctorScreen')}
                    >
                       <Image style={{marginLeft:23}} source={require('../../assets/images/doctor.png')}/>
                       <Text style={{marginLeft:20.5,color:'white'}}>If you are Doctor</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.1}}>
                    <TouchableOpacity 
                        style={styles.menucont} 
                        onPress={() => navigation.navigate('SettingsScreen')}>
                       <Image style={{marginLeft:22}} source={require('../../assets/images/settings.png')}/>
                       <Text style={{marginLeft:17,color:'white'}}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.2 }}></View>
                <View style={{ flex: 0.1 }}>
                    <TouchableOpacity
                       style={styles.logoutb}
                       onPress={() => navigation.navigate('Login')}
                    >
                       <Image style={{ marginLeft: 22 }} source={require('../../assets/images/logout.png')} />
                       <Text style={{ marginLeft: 17, color: 'white' }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: '80%',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        backgroundColor: '#00a1e4',
        paddingVertical: 40,
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
        flexDirection:'row',
        marginLeft:30,
        alignItems:'center'
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        color: 'white',
        marginLeft:20,
        marginBottom:10
    },
    menuContent: {
        flex: 1,
    },
    menuItem: {
        fontSize: 18,
        color: 'white',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        textAlign: 'center',
    },
    menuItemText: {
        fontSize: 16,
    },
    menuItemHovered: {
        transform: [{ scale: 1.05 }],
        borderColor: '#00a1e4',
        backgroundColor: 'white',
        color: '#00a1e4',
    },
    logoutButton: {
        fontSize: 18,
        color: 'white',
        marginVertical: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#ff4d4d',
        marginTop: 20,
    },
    logoutButtonText: {
        fontSize: 16,
    },
    menucont:{
        flex:1,
        flexDirection:'row',
        padding:0,
        margin:0,
        alignItems:'center',
        elevation:2,
        backgroundColor:'#0da6e5',
        marginVertical:0.5,

    },
    menuconta:{
        flex:1,
        flexDirection:'row',
        padding:0,
        margin:0,
        alignItems:'center',
        elevation:3,
        backgroundColor:'#0da6e5',
        marginVertical:0.5,
    },
    menuconti:{
        flex:1,
        flexDirection:'row',
        padding:0,
        margin:0,
        alignItems:'center',
        elevation:3,
        backgroundColor:'#0da6e5',
        marginVertical:0.5,
    },
    menuconthome:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#26afe8',
        padding:0,
        margin:0,
        elevation:3,
        alignItems:'center',
        marginVertical:0.5,
    },
    menuima:{
        marginLeft:20,
    },
    menutex:{
        marginLeft:18,
        color:'white',
    },
    logoutb:{
        flexDirection:'row',
        backgroundColor:'#0da6e5',
        alignItems:'center',
        marginTop:165,
        height:50,
        elevation:5
    }
});

export default HamburgerMenu;