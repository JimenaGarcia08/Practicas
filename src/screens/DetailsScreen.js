import { View, Text} from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

function DetailsScreen({ route }) {
    const navigation = useNavigation();
    const { itemId, otherParam } = route.params || {};
    return (  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>

            <Button 
                onPress={() => navigation.push('Details', { itemId: Math.floor(Math.random() * 100) })}
                title="Go to Details... again"
            />
            <Button onPress={() => navigation.goBack()} title="Go Back" />
            <Button onPress={() => navigation.popToTop()} title="Go Back to first screen in stack" />
            <Button onPress={() => navigation.push('Settings')}>
                Go to Settings
            </Button>
            <Button onPress={() => navigation.push('Home')}>
                Go to Home
            </Button>
        </View>
    );
}

export default DetailsScreen;
