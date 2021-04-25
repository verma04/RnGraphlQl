import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './compoent/Home'
import News from './compoent/News'
import Cafes from './compoent/Cafes'
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://3.131.190.17:3000/graphql',
  cache: new InMemoryCache()
});

const Stack = createStackNavigator();

export default function App() {
  //Hide Splash screen on app load.

  return (
    <ApolloProvider client={client}>
    <NavigationContainer>

   
      <Stack.Navigator  initialRouteName="Home" >
      <Stack.Screen name="Cafes" component={Cafes} />
        
        <Stack.Screen name="News"
         component={News}
          options={({ route }) => ({ title: route.params.itemId })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  )
}
