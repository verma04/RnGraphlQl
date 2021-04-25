import React from 'react'
import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cafe from './Cafe'
import Home from './Home'
import Events from './Events'
import { Entypo  , Ionicons  , MaterialIcons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();
const Cafes = () => {
    return (
      
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          
          inactiveTintColor: 'lightgray',
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'black',
              style: {
                backgroundColor:"black",
                   borderRadius:10,
                   paddingTop: 10,
                    paddingBottom: 10
              }
       }}
>

<Tab.Screen
          options={{
     
            headerTitleStyle: {
              color: '#fff',
            
            },
            headerStyle: {
              backgroundColor: '#833471',
              
            },
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color}  size={26} />
            ),
          }}
        name="Home" component={Home} />
          <Tab.Screen name="Cafe"
           component={Cafe} 
           
           options={{
            tabBarLabel: 'Cafes',
            tabBarIcon: ({ color }) => (
             

<Ionicons name="cafe" color={color}  size={26}  />      
      ),
          }}
           />


<Tab.Screen name="Events"
           component={Events} 
           
           options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({ color }) => (
             
<MaterialIcons name="emoji-events" size={24} color="black" />

      ),
          }}
           />
           
         
        </Tab.Navigator>
    
    )
}

export default Cafes
