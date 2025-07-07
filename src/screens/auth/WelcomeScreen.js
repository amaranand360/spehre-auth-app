import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

// Import images
import { logoImage } from '../../assets/images';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Image
              source={logoImage}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>
        
        <Text style={styles.title}>Welcome to spehre!</Text>
        <Text style={styles.subtitle}>
          Find peers, internships, and job opportunities{'\n'}
          within your college community.
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.createAccountButton}
            onPress={() => navigation.navigate('PhoneNumber')}
          >
            <Text style={styles.createAccountText}>Create Account</Text>
          </TouchableOpacity>
          
          <Text style={styles.orText}>OR</Text>
          
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing, you agree to Spehre.io's{' '}
            <Text style={styles.linkText}>Terms of Service</Text>
            {' '}and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 60,
  },
  logoBackground: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 80,
    opacity: 0.9,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  createAccountButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  createAccountText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
    opacity: 0.8,
  },
  loginButton: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: '600',
  },
  termsContainer: {
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: 20,
  },
  termsText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.8,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;