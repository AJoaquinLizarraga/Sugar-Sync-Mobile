import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from '../const/navigation.contant';
import SignUp from '../views/SignUp';
import Login from '../views/Login';
import Profile from '../views/Profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name={ROUTES.profile} component={Profile} />
        <Stack.Screen name={ROUTES.signUp} component={SignUp} />
        <Stack.Screen
          name={ROUTES.login}
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
