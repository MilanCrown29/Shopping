import * as React from 'react';
import {ScrollView, Image, Text, Alert} from 'react-native';
import Button from '../../components/Button';
import emptyCartStyles from './styles';
import {baseStyles} from '../../styles';

interface EmptyCartProps {}
const EmptyCart = (props: EmptyCartProps) => {
  return (
    <ScrollView
      contentContainerStyle={[
        baseStyles.containerJustify,
        emptyCartStyles.container,
      ]}>
      <Image
        style={emptyCartStyles.image}
        source={require('./assets/images/noCart.png')}
      />
      <Text style={[baseStyles.headerLg, emptyCartStyles.heading]}>
        Your cart is empty:({''})
      </Text>
      <Button
        style={emptyCartStyles.button}
        title="Go Back Home"
        onPress={() => Alert.alert('goes back')}></Button>
    </ScrollView>
  );
};
export default EmptyCart;
