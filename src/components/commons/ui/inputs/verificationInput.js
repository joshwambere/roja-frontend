import { TextInput, View } from 'react-native';
import { useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';

const VerificationInput = (props) => {
  const [active, setActive] = useState(false);
  const handelFocus = () => {
    setActive(true);
  };
  return (
    <View style={styles.otp}>
      {props.otp.map((input, index) => {
        return (
          <TextInput
            key={index}
            style={active ? [styles.input, styles.inputActive] : styles.input}
            keyboardType={'numeric'}
            maxLength={1}
            onFocus={() => handelFocus(index)}
            onChangeText={(text) => {
              let newOtp = props.otp;
              newOtp[index] = text;
              props.setOtp(newOtp);
            }}
          />
        );
      })}
    </View>
  );
};

export default VerificationInput;

const styles = ScaledSheet.create({
  otp: {
    flexDirection: 'row',
    paddingTop: 50,
  },
  input: {
    borderColor: '#EDEFF1',
    borderStyle: 'solid',
    borderWidth: '2@s',
    marginLeft: '9@s',
    marginRight: '9@s',
    borderRadius: '5@s',
    paddingTop: '8@s',
    paddingRight: '16@s',
    paddingLeft: '16@s',
    paddingBottom: '8@s',
    fontSize: '28@s',
    fontWeight: 'bold',
  },
  inputActive: {
    borderColor: '#3F8AFC',
  },
});
