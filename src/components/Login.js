// src/components/Login.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Simple authentication check
    if (email === 'user@example.com' && password === 'password123') {
      navigation.navigate('Profile');
    } else {
      Alert.alert('Invalid Credentials', 'Please check your email and password.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image 
        source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.ZO2UnkvC5wL3-vo0FeHfdgHaHa&pid=Api&P=0&h=180' }} // Replace with your image URL
        style={styles.profilePic} 
      />

      <TextInput
        style={styles.input}
        placeholder="Email ID"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      
      {/* Forgot Password Link */}
      <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Reset link sent to your email.')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}
