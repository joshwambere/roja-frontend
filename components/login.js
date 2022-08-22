import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import Percentage from '../components/commons/images/percentage';
import TextInput from '../components/commons/ui/inputs/textInput';
import PrimaryButton from '../components/commons/ui/buttons/primaryButton';
import common from './styles/common';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { useState, useEffect } from 'react';
import { login } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const verified = useSelector((state) => state.auth.verified);
  const handleLogin = (route) => {
    dispatch(login(email, password));
  };
  useEffect(() => {
    if (verified) {
      navigation.navigate('onboarding');
    }
  }, [verified]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.homeBanner}>
        <Percentage style={styles.image} />
        <View style={styles.formSection}>
          <View style={common.commonStyles.form}>
            <View style={styles.helloBanner}>
              <Text style={[common.commonStyles.appH1, styles.localH1]}>
                Hello Again
              </Text>
              <Text style={styles.homeP}>
                Have you Share of the economy here
              </Text>
            </View>
            <KeyboardAvoidingView>
              <TextInput
                style={common.commonStyles.input}
                title="Username"
                email
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={common.commonStyles.input}
                title="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              {loading && <Text style={styles.verifyText}>loading...</Text>}
              {error && (
                <Text style={styles.verifyText}>
                  {typeof error.message === 'string'
                    ? error.message
                    : error.message[0]}
                </Text>
              )}

              <View style={styles.homeButtons}>
                <PrimaryButton
                  style={styles.loginButton}
                  title={'Login'}
                  large
                  navigate={handleLogin}
                  route={'verify'}
                />
              </View>
            </KeyboardAvoidingView>

            <View style={styles.registerNow}>
              <Text style={styles.registerText}>Not a member</Text>
              <Pressable
                onPress={() => {
                  navigation.navigate('register');
                }}
              >
                <Text style={[styles.registerText, styles.registerNowLink]}>
                  Register now
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeBanner: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  localH1: {
    paddingTop: '15@s',
    lineHeight: '22@s',
  },
  image: {},
  formSection: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  helloBanner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeP: {
    fontSize: '18@s',
    lineHeight: '20@s',
    opacity: 0.7,
    maxWidth: '185@s',
    textAlign: 'center',
    paddingTop: '18@s',
    letterSpacing: 0.4,
  },
  homeButtons: {
    paddingTop: 50,
  },
  registerNow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '8%',
  },
  registerNowLink: {
    color: '#A90A0A',
    paddingLeft: 5,
  },
  registerText: {
    fontSize: 18,
  },
  loginButton: {
    width: '100%',
  },
});
