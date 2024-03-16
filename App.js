import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './Components/Home';
import BlogDetail from './Components/BlogDetail';

import { StyleSheet} from 'react-native'
import AddBlog from './Components/AddBlog';
const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='BlogDetail' component={BlogDetail} /> 
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
