import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons'
import inputStyles from './styles';
import {baseStyles} from '../../styles';

interface InputsProps {
  value: string;
  setValue: any;
  label?: string;
  placeHolder: string;
  icon: string;
  secureText?: boolean;
}

const Inputs = (props: InputsProps) => {
  return (
    <View>
      {props.label && (
        <Text style={[baseStyles.headerSm, inputStyles.label]}>
          {props.label}
        </Text>
      )}
      <View style={inputStyles.inputcontainer}>
        {/* <Ionicons
          name={props.icon}
          color="black"
          size={24}
          style={inputStyles.icon}
        /> */}
        <TextInput
          placeholder={props.placeHolder}
          onChangeText={props.setValue}
          value={props.value}
          style={inputStyles.textInput}
          secureTextEntry={props.secureText}
        />
      </View>
    </View>
  );
};
export default Inputs;
