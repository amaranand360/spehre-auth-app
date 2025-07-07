import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

const PhoneNumberScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSendOTP = async () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }

    const fullPhoneNumber = `+91${phoneNumber}`;
    
    setLoading(true);
    try {
      const confirmation = await auth().signInWithPhoneNumber(fullPhoneNumber);
      navigation.navigate('OTPVerification', { 
        confirmation,
        phoneNumber: fullPhoneNumber 
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#1E90FF" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <View style={styles.starsContainer}>
              <Text style={styles.stars}>✱ ✱ ✱</Text>
            </View>
          </View>
          <View style={styles.phoneIconContainer}>
            <Icon name="lock" size={24} color="#FFF" />
          </View>
        </View>

        <Text style={styles.title}>Enter your phone number</Text>
        <Text style={styles.subtitle}>We will send an OTP verification to you.</Text>

        <View style={styles.inputContainer}>
          <View style={[
            styles.phoneInputContainer,
            isFocused ? styles.phoneInputContainerFocused : styles.phoneInputContainerDefault
          ]}>
            <Text style={styles.countryCode}>+91</Text>
            <View style={styles.separator} />
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone Number"
              placeholderTextColor="#999"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              maxLength={10}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </View>
        </View>

        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleSendOTP}
          disabled={loading}
        >
          <Text style={styles.confirmButtonText}>
            {loading ? 'Sending...' : 'Confirm'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E90FF',
  },
  signUpText: {
    color: '#1E90FF',
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconBackground: {
    backgroundColor: '#2C5F7C',
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  starsContainer: {
    alignItems: 'center',
  },
  stars: {
    color: 'white',
    fontSize: 26,
  },
  phoneIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#1E90FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 60,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8F8',
  },
  phoneInputContainerDefault: {
    borderColor: '#E0E0E0',
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
  },
  phoneInputContainerFocused: {
    borderColor: '#1E90FF',
    backgroundColor: '#F8F9FF',
    borderWidth: 2,
  },
  countryCode: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 15,
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 15,
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PhoneNumberScreen;