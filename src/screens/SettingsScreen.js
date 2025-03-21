import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SettingsScreen({ route }) {
    const navigation = useNavigation();
    const { itemId, otherParam } = route.params || {};  

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>

            <Button 
                title="Go to Details" 
                onPress={() => navigation.push('Details')} 
            />
            <Button 
                title="Go Back" 
                onPress={() => navigation.goBack()} 
            />
            <Button 
                title="Go to Home" 
                onPress={() => navigation.navigate('Home')} 
            />
        </View>
    );
}

export default SettingsScreen;
