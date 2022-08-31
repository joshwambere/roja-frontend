import { View, Text, StatusBar, ScrollView } from 'react-native';
import Envelop from '../commons/images/envelop';
import common from '../styles/common';
import VerificationInput from '../commons/ui/inputs/verificationInput';
import PrimaryButton from '../commons/ui/buttons/primaryButton';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { verify } from '../../store/actions';
import { useState, useEffect } from 'react';

const Verify = ({ navigation }) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const verified = useSelector((state) => state.auth.verified);
  const [inputs, setInputs] = useState(Array(4).fill(0));
  const handleVerify = () => {
    dispatch(verify(inputs.join('')));
  };
  useEffect(() => {
    if (verified) {
      navigation.navigate('login');
    }
  }, [verified]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <>
        <View style={styles.container}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          <View style={styles.verifySection}>
            <Envelop />
            <Text style={[common.commonStyles.appH1, styles.localH1]}>
              Verify your email
            </Text>
            <Text style={styles.verifyText}>
              We have sent a verification email to
            </Text>
            <Text style={styles.verifyEmail}>{email}</Text>
          </View>

          <View>
            <VerificationInput otp={inputs} setOtp={setInputs} />
          </View>
          {loading && <Text style={styles.verifyText}>loading...</Text>}
          {error && (
            <Text style={styles.verifyText}>
              {typeof error.message === 'string'
                ? error.message
                : error.message[0]}
            </Text>
          )}
          <View style={styles.verifyButtons}>
            <PrimaryButton
              title={'Verify'}
              large
              route={'onboarding'}
              navigate={handleVerify}
            />
          </View>
        </View>
      </>
    </ScrollView>
  );
};

export default Verify;

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: '30@ms',
    flex: 1,
  },
  verifySection: {
    alignItems: 'center',
    paddingBottom: '10@ms',
    paddingTop: '30@ms',
  },
  verifyText: {
    color: '#19191C',
    opacity: 0.7,
    fontSize: '14@s',
    lineHeight: 20,
    paddingTop: '10@s',
  },
  localH1: {
    paddingTop: '15@s',
    lineHeight: '22@s',
  },
  verifyEmail: {
    color: '#19191C',
    opacity: 0.7,
    fontSize: '18@s',
    lineHeight: '20@s',
    paddingTop: 4,
  },
  verifyButtons: {
    width: '100%',
    paddingTop: '40@s',
    paddingLeft: '34@s',
    paddingRight: '34@s',
  },
});
