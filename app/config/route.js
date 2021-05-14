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
              case 'Invest':
                return <Ionicons name={'analytics-outline'} size={size} color={color}/>
              case 'Mortgage':
                return <Ionicons name={'calculator-outline'} size={size} color={color}/>
            }
          }
        })}
        tabBarOptions={{ }}
        >
  
          <Tab.Screen name="Invest">
            {props => <Home {...props} />}
          </Tab.Screen>
  
          <Tab.Screen name="Mortgage" component={Shop} />
        </Tab.Navigator>
    );
}

export { MainApp }