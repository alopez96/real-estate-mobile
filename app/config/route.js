import React from 'react';

//import react navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screens
import Home from './../screens/Home';
import Shop from './../screens/Shop';

// import Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MainApp({ }) {
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
        tabBarOptions={{ }}
        >
  
          <Tab.Screen name="Home">
            {props => <Home {...props} />}
          </Tab.Screen>
  
          <Tab.Screen name="Shop" component={Shop} />
        </Tab.Navigator>
    );
}

export { MainApp }