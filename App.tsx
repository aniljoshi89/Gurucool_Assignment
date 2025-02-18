import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/Navigation/BottomTabBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './src/screens/Splash/Splash'
import BottomTabBar from './src/Navigation/BottomTabBar'


const App = () => {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='BottomTabBar' component={BottomTabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

