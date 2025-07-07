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
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Import images
import { googleIcon, appleIcon } from '../../assets/images';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleEmailLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      // Navigate directly to Main app after successful login
      navigation.navigate('Main');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
      const { idToken } = await GoogleSignin.signIn();
      
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      

      await auth().signInWithCredential(googleCredential);
      Alert.alert('Success', 'Signed in with Google successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Main') }
      ]);
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
          onPress={() => navigation.navigate('PhoneNumber')}
        >
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Login to your{'\n'}account{' '}
            <Icon name="lock-open" size={30} color="#1E90FF"  />
          </Text>            
        </View>
        
        <Text style={styles.subtitle}>Enter your credentials to sign in.</Text>

        <View style={styles.inputContainer}>
          <View style={[
            styles.emailInputContainer,
            focusedInput === 'email' ? styles.inputContainerFocused : styles.inputContainerDefault
          ]}>
            <Icon
              name="email"
              size={20}
              color={focusedInput === 'email' ? "#1E90FF" : "#999"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.emailInput}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
            />
          </View>

          <View style={[
            styles.passwordInputContainer,
            focusedInput === 'password' ? styles.inputContainerFocused : styles.inputContainerDefault
          ]}>
            <Icon
              name="lock"
              size={20}
              color={focusedInput === 'password' ? "#1E90FF" : "#999"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              onFocus={() => setFocusedInput('password')}
              onBlur={() => setFocusedInput(null)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Icon
                name={showPassword ? "visibility" : "visibility-off"}
                size={20}
                color={focusedInput === 'password' ? "#1E90FF" : "#999"}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orLoginText}>Or login using</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGoogleSignIn}
            disabled={loading}
          >
            <Image
              source={googleIcon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={appleIcon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.signUpLinkContainer}>
          <Text style={styles.signUpLinkText}>
            Don't have an account{' '}
            <Text 
              style={styles.signUpLink}
              onPress={() => navigation.navigate('PhoneNumber')}
            >
              sign up?
            </Text>
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleEmailLogin}
          disabled={loading}
        >
          <Text style={styles.confirmButtonText}>
            {loading ? 'Loading...' : 'Confirm'}
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
    paddingTop: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  logoIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  logoImage: {
    width: 20,
    height: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 30,
  },
  emailInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
  },
  inputContainerDefault: {
    borderColor: '#E0E0E0',
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
  },
  inputContainerFocused: {
    borderColor: '#1E90FF',
    backgroundColor: '#F8F9FF',
    borderWidth: 2,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8F8',
  },
  inputIcon: {
    marginRight: 10,
  },
  emailInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 5,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#1E90FF',
    fontSize: 14,
  },
  orLoginText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 60,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  signUpLinkContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  signUpLinkText: {
    color: '#666',
    fontSize: 14,
  },
  signUpLink: {
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

export default LoginScreen;