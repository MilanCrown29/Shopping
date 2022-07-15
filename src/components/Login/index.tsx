import {useState} from 'react';
import * as React from 'react';
import CheckBox from '@react-native-community/checkbox'
import {View, Text, TextInput} from 'react-native';
import {baseStyles} from '../../styles';
import loginStyle from './style';
import Inputs from '../Inputs';
import Button from '../../components/Button';
import {useAccount} from '../../hook/UseAccount'

interface LoginProps {
  heading: string;
  subHeading: string;
  signIn: boolean;
}
const Login = (props: LoginProps) => {
  const [toggleCheckBox, seToggleCheckBox] = useState(false);
  const {signInorUp, email, setEmail, password, setPassword, loading} =
    UseAccount();

  const TermsAndPolicy = () => {
    return (
      <View>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => seToggleCheckBox(newValue)}
        />
        <Text style={[baseStyles.body, loginStyle.termsText]}>
          By creating an account, you agree to
          <Text style={[baseStyles.headerSm, loginStyle.termsText]}>
            our Terms & Conditions
          </Text>
        </Text>
      </View>
    );
  };

  return (
    <View style={loginStyle.container}>
      <Text style={[baseStyles.headerLg, loginStyle.heading]}>
        {props.heading}
      </Text>
      <Text style={[baseStyles.headerLg, loginStyle.subHeading]}>
        {props.subHeading}
      </Text>
      <View style={[baseStyles.cardShadow, loginStyle.card]}>
        <Inputs
          value={email}
          setValue={setEmail}
          icon="person-outline"
          label="Your Email Address"
          placeHolder="Email"
        />
        <Inputs
          value={password}
          setValue={setPassword}
          icon="lock-closed-outline"
          label="Password"
          placeHolder="Password"
          secureText={true}
        />
        {!props.signIn && <TermsAndPolicy />}
        <Button
          title={props.signIn ? 'SIGN IN' : 'SIGN UP'}
          isLoading={loading}
          onPress={() => {
            signInorUp(props.signIn);
          }}
        />
      </View>
    </View>
  );
};
export default Login