import React, { useState, useRef } from 'react';
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

const OTPVerificationScreen = ({ navigation, route }) => {
  const { confirmation, phoneNumber } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = async () => {
    const otpCode = otp.join('');

    if (otpCode.length !== 6) {
      Alert.alert('Error', 'Please enter the complete 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      await confirmation.confirm(otpCode);
      Alert.alert('Success', 'Phone number verified successfully!');
      navigation.navigate('PasswordCreation');
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
    setLoading(false);
  };

  const getLastFourDigits = (phone) => {
    return phone.slice(-4);
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
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Log In</Text>
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

        <Text style={styles.title}>Confirm your number</Text>
        <Text style={styles.subtitle}>
          Enter the code we sent to the number{'\n'}
          ending with {getLastFourDigits(phoneNumber)}
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => inputRefs.current[index] = ref}
              style={[
                styles.otpInput,
                digit ? styles.otpInputFilled : styles.otpInputEmpty
              ]}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleVerifyOTP}
          disabled={loading}
        >
          <Text style={styles.confirmButtonText}>
            {loading ? 'Verifying...' : 'Confirm'}
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
  loginButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E90FF',
  },
  loginText: {
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
    textAlign: 'left',
  },
  otpContainer: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'space-between',
    marginBottom: 60,
    paddingHorizontal: 1,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  otpInputEmpty: {
    borderWidth: 2,
    borderColor: '#E0E0E0',
    backgroundColor: '#F8F8F8',
    color: '#333',
  },
  otpInputFilled: {
    borderWidth: 2,
    borderColor: '#1E90FF',
    backgroundColor: '#F8F9FF',
    color: '#1E90FF',
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

export default OTPVerificationScreen;