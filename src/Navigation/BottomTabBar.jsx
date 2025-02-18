import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home'
import Settings from '../screens/Settings/Settings'
import Profile from '../screens/Profile/Profile'
import { HomeIcon, ProfileIcon, SettingIcon } from './TabIcon'

const Tab = createBottomTabNavigator()

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#FF7722",
        tabBarInactiveTintColor:'#666',
        lazy:true,
      }
      }
    >
        <Tab.Screen
         name='Home' 
         component={Home}
         options={{
            tabBarIcon: ({ focused, color, size }) => (
                <HomeIcon focused={focused} color={color} size={size} />
              )   
         }}
        />

        <Tab.Screen 
        name='Settings' 
        component={Settings}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
                <SettingIcon focused={focused} color={color} size={size} />
              )   
         }}
        />

        <Tab.Screen 
        name='profile' 
        component={Profile}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
                <ProfileIcon focused={focused} color={color} size={size} />
              )   
         }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabBar