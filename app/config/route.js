import React from 'react';

//import react navigation - bottom tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import react navigation - stack nav
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import main screens
import Home from './../screens/Home';
import Shop from './../screens/Shop';
import AfterRepair from './../screens/AfterRepair';

//import Welcome screen
import Welcome from './../screens/Welcome';

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
              case 'Rental':
                return <Ionicons name={'calculator-outline'} size={size} color={color}/>
              case 'Repair':
                return <Ionicons name={'hammer-outline'} size={size} color={color}/>
            }
          }
        })}
        tabBarOptions={{ }}
        >
  
          <Tab.Screen name="Invest">
            {props => <Home {...props} />}
          </Tab.Screen>
  
          <Tab.Screen name="Rental" component={Shop} />

          <Tab.Screen name="Repair" component={AfterRepair} />
        </Tab.Navigator>
    );
}


const Stack = createStackNavigator();

function WelcomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: ''
          }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{
            title: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export { MainApp, WelcomeStack }