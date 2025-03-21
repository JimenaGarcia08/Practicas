import { View, Text} from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      />
      <Button onPress={() => navigation.push('Settings')}>
                Go to Settings
            </Button>
    </View>
  );  
}

export default HomeScreen;