//import react navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

//import screens
import Home from './../screens/Home';
import Shop from './../screens/Shop';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function MainApp({ posts }) {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ size, color }) => {
              switch(route.name) {
                case 'Home':
                  return <Ionicons name={'home-outline'} size={size} color={color}/>
                case 'Shop':
                  return <Ionicons name={'cart-outline'} size={size} color={color}/>
              }
            }
          })}
          tabBarOptions={{
            
          }}>
  
          <Tab.Screen name="Home">
            {props => <Home {...props} posts={posts} />}
          </Tab.Screen>
  
          <Tab.Screen name="Shop" component={Shop} />
        </Tab.Navigator>
    );
}


const Stack = createStackNavigator();


export default MainApp