import {useStripe} from '@stripe/stripe-react-native';
import React, {useContext} from 'react';

export default function UsePayment() {
    
  const {user} = useContext(LoginContext);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const getPaymentIntent = () => {
    if (!user) return;
  };
  return {};
}
