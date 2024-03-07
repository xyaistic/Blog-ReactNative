
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './Home';
import BlogDetail from './BlogDetail';

const Stack = createNativeStackNavigator()
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='blogDetail' component={BlogDetail} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}