import {
  View,
  Text,
  Pressable,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Computer from '../commons/images/computer';
import common from '../styles/common';
import TextInput from '../commons/ui/inputs/textInput';
import PrimaryButton from '../commons/ui/buttons/primaryButton';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions';
import { useState } from 'react';
import { useEffect } from 'react';
import Select2 from "react-native-select-two"
import {authFail, getRole, getRoleSuccess} from "../../store/actions/auth";
import axios from '../../axios-base';

const Register = ({ navigation }) => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState();
  const [rolez, setRolez] = useState([]);

  const [open, setOpen] = useState(false);

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const userId = useSelector((state) => state.auth.userId);
  const roles = useSelector((state) => state.auth.role);

  useEffect(() => {
      axios
          .get('/roles')
          .then((response) => {
            setRolez(response.data);
          })
          .catch((err) => {
                console.error(err);
              }
          );
  } , []);

  useEffect(() => {
    if (userId) {
      navigation.navigate('verify');
    }
  }, [userId]);

  const handleRegister = async () => {
   dispatch(register(name, email, password, role));

  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <View style={styles.registerBanner}>
          <Computer style={styles.image} />
        </View>
        <View style={styles.formSection}>
          <View style={styles.registerTitle}>
            <Text style={[common.commonStyles.appH1, styles.localH1]}>
              Create an Account
            </Text>
            <Text style={styles.registerP}>
              Let’s get you started on the journey to success
            </Text>
          </View>
          <KeyboardAvoidingView style={styles.registerBtn}>
            <View style={[common.commonStyles.formSmall]}>
              <TextInput
                style={common.commonStyles.inputSmall}
                title="Username"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={common.commonStyles.inputSmall}
                title="Email"
                email
                value={email}
                onChangeText={setEmail}
              />

              <Select2
                  isSelectSingle
                  style={styles.select}
                  colorTheme="#A90A0A"
                  popupTitle="Account Type"
                  title="Account Type"
                  data={rolez}
                  selectButtonText={'Select'}
                  cancelButtonText={'Cancel'}
                  onSelect={data => {
                    setRole( data[0] );
                    console.log(role)
                  }}
                  onRemoveItem={data => {
                    setRole( data[0] )
                  }}
              />
              <TextInput
                style={common.commonStyles.inputSmall}
                title="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
            {loading && <Text style={styles.registerP}>loading...</Text>}
            {error && (
              <Text style={styles.registerP}>
                {typeof error.message === 'string'
                  ? error.message
                  : error.message}
              </Text>
            )}
            <View style={styles.homeButtons}>
              <PrimaryButton
                title={'Register'}
                style={styles.registerBtn}
                large
                navigate={handleRegister}
              />
            </View>
          </KeyboardAvoidingView>

          <View style={common.commonStyles.bottomLinkView}>
            <Text
              style={[
                common.commonStyles.bottomLinkText,
                common.commonStyles.linkText,
              ]}
            >
              Already a member
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('login');
              }}
            >
              <Text
                style={[
                  common.commonStyles.linkText,
                  common.commonStyles.linkRed,
                ]}
              >
                Login now
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: '20@vs',
  },
  registerBanner: {
    paddingTop: '20@s',
    height: '15%',
    width: '20%',
    alignSelf: 'center',
    objectFit: 'container',
    alignItems: 'center',
    justifyContent: 'center',
  },
  select:{
    marginTop: '10@vs',
    paddingVertical: '10@vs',
    fontSize: '18@vs',
    fontWeight: 'bold',
  },
  localH1: {
    paddingTop: '40@ms',
    lineHeight: '21@s',
  },
  image: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formSection: {
    flex: 1,
    alignItems: 'center',
  },
  registerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerP: {
    paddingTop: '20@ms',
    fontSize: '16@ms',
    opacity: 0.7,
    color: '#19191C',
    textAlign: 'center',
    maxWidth: '320@ms',
    letterSpacing: 0.5,
  },

  homeButtons: {
    width: '100%',
    paddingRight: '26@s',
    paddingLeft: '26@s',
    paddingTop: '30@s',
  },
  registerBtn: {
    width: '100%',
  },
});
