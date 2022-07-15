import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {baseStyles} from '../../styles';
import Login from '../../components/Login/index';
import loginStyles from '../../components/Login/style';

export default function LoginScreen() {
  const [signIn, setSignIn] = useState(true);

  if (signIn) {
    return (
      <ScrollView contentContainerStyle={loginStyles.container}>
        <Login
          heading="Getting Started"
          subHeading="Creating a account to continue"
          signIn={false}
        />
        <Text
          style={[baseStyles.body, loginStyles.footer]}
          onPress={() => setSignIn(false)}>
          Already have an Account ?
        </Text>
        <Text style={baseStyles.headerSm}>SignIn</Text>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView contentContainerStyle={loginStyles.container}>
        <Login
          heading="Welcome back!"
          subHeading="Use your account email and password"
          signIn={true}
        />
        <Text
          style={[baseStyles.body, loginStyles.footer]}
          onPress={() => setSignIn(true)}>
          Don't have an account?
        </Text>
        <Text style={baseStyles.headerSm}>Sign Up</Text>
      </ScrollView>
    );
  }
}
