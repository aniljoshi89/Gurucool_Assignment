import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';


export const HomeIcon = ({ focused, color, size }) =>(
    <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />
)

export const SettingIcon = ({ focused, color, size }) =>(
    <Ionicons name={focused ? "settings" : "settings-outline"} color={color} size={size} />
)

export const ProfileIcon = ({ focused, color, size }) =>(
    <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size} />
)
