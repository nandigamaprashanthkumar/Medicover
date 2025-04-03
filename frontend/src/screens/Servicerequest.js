import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { DropDown } from 'react-native-paper-dropdown';
import { Button } from 'react-native-paper';

const Servicerequest = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [serviceNeeded, setServiceNeeded] = useState('');
    const [problemDetail, setProblemDetail] = useState('');

    // Sample options for the dropdowns
    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ];

    const serviceOptions = [
        { label: 'Home Care', value: 'home-care' },
        { label: 'Medical Equipment', value: 'medical-equipment' },
        { label: 'OP Consultation', value: 'op-consultation' },
        { label: 'Rehabilitation', value: 'rehabilitation' }
    ];

    const handleSubmit = () => {
        // Handle form submission logic
        const formData = {
            name,
            gender,
            age,
            contact,
            serviceNeeded,
            problemDetail
        };
        console.log('Submitted data:', formData);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Gender</Text>
                <Dropdown
                    label="Select Gender"
                    data={genderOptions}
                    value={gender}
                    onChange={(value) => setGender(value)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Age</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={setAge}
                    placeholder="Enter your age"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Contact</Text>
                <TextInput
                    style={styles.input}
                    value={contact}
                    onChangeText={setContact}
                    placeholder="Enter your contact"
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Service Needed</Text>
                <Dropdown
                    label="Select Service"
                    data={serviceOptions}
                    value={serviceNeeded}
                    onChange={(value) => setServiceNeeded(value)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Problem Detail</Text>
                <TextInput
                    style={styles.input}
                    value={problemDetail}
                    onChangeText={setProblemDetail}
                    placeholder="Briefly describe your problem"
                    multiline
                />
            </View>

            <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
                Submit
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    submitButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#00a1e4',
    },
});

export default Servicerequest;
