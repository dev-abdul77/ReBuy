import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './Signup';
import Login from './Login';
import LoginCustomHeader from '../CustomHeader';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header: props => <LoginCustomHeader {...props}></LoginCustomHeader>,
        }}
        name="SIGNUP"
        component={Signup}
      />
      <Stack.Screen
        options={{
          header: props => <LoginCustomHeader {...props}></LoginCustomHeader>,
        }}
        name="LOGIN"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;