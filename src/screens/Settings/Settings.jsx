import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View>

        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" color="black" size={24} />
          </TouchableOpacity>
          <Text style={styles.headingText}>Settings</Text>
          <View style={{ width: 24 }} /> 
        </View>

        {/* Settings Options */}
        <View style={styles.settingsContainer}>

          {/* Dark Mode Toggle */}
          <View style={styles.settingRow}>
            <Ionicons name="moon-outline" size={22} color="black" />
            <Text style={styles.settingText}>Dark Mode</Text>
            <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
          </View>

          {/* Notifications Toggle */}
          <View style={styles.settingRow}>
            <Ionicons name="notifications-outline" size={22} color="black" />
            <Text style={styles.settingText}>Notifications</Text>
            <Switch value={notifications} onValueChange={() => setNotifications(!notifications)} />
          </View>

          {/* Change Password */}
          <TouchableOpacity style={styles.settingRow} onPress={() => console.log("Change Password")}>
            <Ionicons name="lock-closed-outline" size={22} color="black" />
            <Text style={styles.settingText}>Change Password</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    headingText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    settingsContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    settingRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderColor: "#ddd",
    },
    settingText: {
        fontSize: 16,
        flex: 1,
        marginLeft: 10,
    },
})
