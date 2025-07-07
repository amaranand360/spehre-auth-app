import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

const PasswordCreationScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleCreatePassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    try {
      const user = auth().currentUser;
      if (user) {
        await user.updatePassword(newPassword);
        Alert.alert('Success', 'Password created successfully!', [
          { text: 'OK', onPress: () => navigation.navigate('Main') }
        ]);
      }
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
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.gearIconContainer}>
            <Icon name="settings" size={50} color="#666" />
            <View style={styles.checkmarkContainer}>
              <Icon name="check" size={16} color="white" />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Choose new password</Text>
        <Text style={styles.subtitle}>Choose a new password to login</Text>

        <View style={styles.inputContainer}>
          <View style={[
            styles.passwordInputContainer,
            focusedInput === 'newPassword' ? styles.inputContainerFocused : styles.inputContainerDefault
          ]}>
            <Icon
              name="lock"
              size={20}
              color={focusedInput === 'newPassword' ? "#1E90FF" : "#999"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.passwordInput}
              placeholder="New Password"
              placeholderTextColor="#999"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!showNewPassword}
              onFocus={() => setFocusedInput('newPassword')}
              onBlur={() => setFocusedInput(null)}
            />
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
              style={styles.eyeIcon}
            >
              <Icon
                name={showNewPassword ? "visibility" : "visibility-off"}
                size={20}
                color={focusedInput === 'newPassword' ? "#1E90FF" : "#999"}
              />
            </TouchableOpacity>
          </View>

          <View style={[
            styles.passwordInputContainer,
            focusedInput === 'confirmPassword' ? styles.inputContainerFocused : styles.inputContainerDefault
          ]}>
            <Icon
              name="lock"
              size={20}
              color={focusedInput === 'confirmPassword' ? "#1E90FF" : "#999"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              onFocus={() => setFocusedInput('confirmPassword')}
              onBlur={() => setFocusedInput(null)}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeIcon}
            >
              <Icon
                name={showConfirmPassword ? "visibility" : "visibility-off"}
                size={20}
                color={focusedInput === 'confirmPassword' ? "#1E90FF" : "#999"}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleCreatePassword}
          disabled={loading}
        >
          <Text style={styles.confirmButtonText}>
            {loading ? 'Creating...' : 'Confirm'}
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
  gearIconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkContainer: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    width: 24,
    height: 24,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 16,
    height: 16,
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
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8F8',
    marginBottom: 15,
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
  inputIcon: {
    marginRight: 10,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 5,
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

export default PasswordCreationScreen;