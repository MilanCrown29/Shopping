import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import gridStyles from './styles';
import {baseStyles} from '../../styles';
import { useNavigation } from '@react-navigation/native';

interface GridProps{
  prodcuts:Product[]
}
const Grid = (props: GridProps) => {
  const navigation=useNavigation();
  const renderItem: React.FC<{item: Product; index: number}> = ({
    item,
    index,
  }) => {

    const handlePress = () => {
      navigation.navigate('ProductScreen', {product: item});
    };

    return (
      <TouchableOpacity
        style={[gridStyles.card, baseStyles.buttonShadow]}
        onPress={handlePress}>
        <Image source={{uri: item.image}} style={gridStyles.image} />
        <View style={gridStyles.cardDesc}>
          <Text style={[gridStyles.cardTitle,baseStyles.headerSm]}>{item.title}</Text>
          <Text style={[baseStyles.headerSm]}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        style={gridStyles.grid}
        data={props.products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{paddingBottom: 100}}
      />
    </SafeAreaView>
  );
};
export default Grid
