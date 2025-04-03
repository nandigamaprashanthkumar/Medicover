import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Animated, TextInput, Dimensions } from 'react-native';
import HamburgerMenu from './HamburgerMenu';

const MedicalAdvisorHome = ({ navigation }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const renderServiceCard = (title, imageSource, routeName, imageWidth = 100, imageHeight = 100) => (
        <View style={styles.serviceCard}>
            <Text style={{ color: '#00a1e4', fontWeight: '500', marginBottom: 10, fontSize: 17 }}>{title}</Text>
            <Image style={[styles.serviceImage, { width: imageWidth, height: imageHeight }]} source={imageSource} />
            <TouchableOpacity style={styles.serviceButton} onPress={() => navigation.navigate(routeName)}>
                <Text style={styles.serviceButtonText}>SEE SERVICE</Text>
            </TouchableOpacity>
        </View>
    );
    
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Image style={{width:160,height:40,margin:8}} source={require('../../assets/images/medical.png')} />
                <TouchableOpacity onPress={toggleMenu}>
                    <Image style={styles.hamburger} source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.numbar}>
                    <Image style={styles.icon} source={require('../../assets/images/icon.png')} />
                    <Text style={styles.number}>9876543210</Text>
                </View>
                <View style={styles.upload}>
                    <Text style={{ marginLeft: 135, color: 'white', marginTop: 10, fontSize: 15 }}>UPLOAD REPORTS</Text>
                    <TextInput style={styles.input} placeholder="   " />
                    <View style={styles.ull}>
                    <View style={styles.ton}>
                        <TouchableOpacity style={styles.button}>
                            <Image style={styles.uld} source={require('../../assets/images/upload.png')} />
                            <Text style={styles.buttonText}>UPLOAD</Text>
                        </TouchableOpacity>
                    </View>
                        <TouchableOpacity style={styles.enterButton}>
                            <Text style={styles.enterButtonText}>ENTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {renderServiceCard('HOME CARE SERVICES', require('../../assets/images/Homeservice.png'), 'HomeCareService',120,110)}
                {renderServiceCard('IP PATIENT SERVICES', require('../../assets/images/IPpatientservice.png'), 'ITPatientService', 80,100)}
                {renderServiceCard('OP CONSULTATION SERVICES', require('../../assets/images/opconsultationservice.png'), 'OPConsultationService',110,100)}
                {renderServiceCard('REHABILITATION SERVICES', require('../../assets/images/rehabilitationserv.png'), 'RehabilitationServices',85,100)}
                {renderServiceCard('MEDICAL EQUIPMENT SERVICES', require('../../assets/images/medicalequipserv.png'), 'MedicalEquipmentService')}
                {renderServiceCard('AROGYA SRI SERVICES', require('../../assets/images/arogyaserv.png'), 'ArogyaSriServices')}
                {renderServiceCard('HEALTH INSURANCE SERVICES', require('../../assets/images/healthinsurance.png'), 'HealthInsuranceServices')}
                {renderServiceCard('24/7 AMBULANCE SERVICES', require('../../assets/images/ambulanceserv.png'), 'AmbulanceServiceEmergency',170,100)}
                {renderServiceCard('UP COMING SERVICES', require('../../assets/images/upcoming.png'), 'UpcomingServices')}
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
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        margin:10,
    },
    hamburger: {
        width: 30,
        height: 30,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 120,
        alignItems: 'center',
        marginTop: 5,
    },
    numbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    number: {
        fontSize: 17,
        color: '#00a1e4',
        marginRight: 130,
        alignItems: 'center',
    },
    upload: {
        flex: 1,
        backgroundColor: '#00a1e4',
    },
    input: {
        color: 'black',
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 50,
        width: 280,
        height: 38,
        marginLeft: 65,
        paddingHorizontal:20,
    },
    ull: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    ton: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        width: 120,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 75,
    },
    serviceCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: 370,
        height: 230,
        margin: 21,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 20,
    },
    serviceImage: {
        width: 10,
        height: 120,
    },
    serviceButton: {
        backgroundColor: '#00a1e4',
        borderRadius: 30,
        paddingVertical: 5,
        paddingLeft:50,
        paddingHorizontal: 20,
        marginTop: 10,
        width:190,
        height:35,
    },
    serviceButtonText: {
        color: 'white',
        fontSize: 16,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 5,
    },
    uld: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 12,  
    },
    enterButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 120,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    enterButtonText: {
        color: 'black',
        fontSize: 12, 
    },
});

export default MedicalAdvisorHome;