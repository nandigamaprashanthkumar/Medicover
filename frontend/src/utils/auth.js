import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const API_URL = 'http://192.168.125.89:3991'; // Replace with your backend URL

// Sign Up Function
export const signUp = async (username, email, password) => {
    try {
        const user = { username, email, password };

        // Optionally send the user data to the backend
        const response = await axios.post(`${API_URL}/user/signup`, user);

        // Handle backend response
        if (response.status === 201) {
            // Store user data locally using AsyncStorage
            await AsyncStorage.setItem('user', JSON.stringify(user));
            return true;
        } else {
            console.error('Signup failed:', response.data.message);
            return false;
        }
    } catch (error) {
        console.error('Sign Up Error:', error);
        return false;
    }
};

// Login Function
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, { email, password });

        // Log the response for debugging
        console.log('Login Response:', response.data);

        if (response.data.success) {
            // Store JWT token and user details locally
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
            return true;
        } else {
            console.error('Login Failed:', response.data.message);
            return false;
        }
    } catch (error) {
        console.error('Login Error:', error.response?.data || error.message);
        return false;
    }
};

// Logout Function
export const logout = async () => {
    try {
        // Clear stored user and token
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('token');
        return true;
    } catch (error) {
        console.error('Logout Error:', error);
        return false;
    }
};
