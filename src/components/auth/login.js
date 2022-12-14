import {
  StatusBar,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';
import Percentage from '../commons/images/percentage';
import TextInput from '../commons/ui/inputs/textInput';
import PrimaryButton from '../commons/ui/buttons/primaryButton';
import common from '../styles/common';
import { ScaledSheet } from 'react-native-size-matters';
import {useEffect} from 'react';
import { login } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import {useForm,Controller} from "react-hook-form";
import {clearCompany} from "../../store/actions/company";


const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const verified = useSelector((state) => state.auth.verified);
  const role = useSelector((state) => state.auth.role);
  const token = useSelector((state) => state.auth.token);
  const company = useSelector((state) => state.auth.company);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });


  const handleLogin = ({email, password})=>{
    dispatch(clearCompany())
    dispatch(login(email, password));
  };


  useEffect(()=>{
      if (role === 'INVESTOR' && verified) {
        navigation.navigate('investorHome');
      }

      if (role === 'ENTREPRENEUR' && verified) {
        company? navigation.navigate('companyHome') : navigation.navigate('onboarding')
      }

  },[token!==null])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.homeBanner}>
        <Percentage />
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
              <Controller
                  control={control}
                  rules={{
                    required: {
                        value: true,
                        message: 'Email is required'
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address'
                    }
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    style={common.commonStyles.input}
                    title="Username"
                    email
                    value={value}
                    onChangeText={onChange}

                    />
                  )}
                  name="email"
              />
              {errors.email && <Text style={styles.errors}>{errors.email.message}</Text>}

              <Controller
                  control={control}
                  rules={{
                    required: {
                        value: true,
                        message: 'Password is required'
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                          style={common.commonStyles.input}
                          title="Password"
                          secureTextEntry
                          value={value}
                          onChangeText={onChange}
                      />
                  )}
                  name="password"
              />
              {errors.password && <Text style={styles.errors}>{errors.password.message}</Text>}

              {loading &&  <ActivityIndicator style={styles.loader} size="small" color="#A90A0A" />}
              {error && (
                <Text style={styles.errors}>
                  {typeof error.message === 'string'
                    ? error.message
                    : error.message}
                </Text>
              )}

              <View style={styles.homeButtons}>
                <PrimaryButton
                  style={styles.loginButton}
                  title={'Login'}
                  large
                  navigate={handleSubmit(handleLogin)}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBanner: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  localH1: {
    paddingVertical: '15@s',
    lineHeight: '22@s',
  },
  formSection: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  helloBanner: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '20@s',
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
  errors:{
    color: '#A90A0A',
    paddingTop: '5@s',
    paddingLeft: '5@s',
  },
  loader:{
    marginTop: '5@s',
  },
  registerText: {
    fontSize: 18,
  },
  loginButton: {
    width: '100%',
  },
});
