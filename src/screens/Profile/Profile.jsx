import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'  

const Profile = () => {
  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={styles.container}>
      <View>

        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" color="black" size={24} />
          </TouchableOpacity>
          <Text style={styles.headingText}>My Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-outline" color="black" size={24} />
          </TouchableOpacity>
        </View>

        {/* Profile Image & Name Section */}
        <View style={styles.imgContainer}>
          <Image 
            source={{uri: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}}
            style={styles.img} 
          />
          <Text style={styles.name}>Anil Joshi</Text>
          <Text style={styles.bio}>React Native Developer</Text>
        </View>

        {/* User Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Ionicons name="mail-outline" size={20} color="black" />
              <Text style={styles.infoText}>aniljoshi7340@gmail.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="call-outline" size={20} color="black" />
              <Text style={styles.infoText}>+91 7340669879</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={20} color="black" />
              <Text style={styles.infoText}>Rajasthan, India</Text>
            </View>
          </View>
        </View>

        {/* FAQ & Help Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <TouchableOpacity style={styles.supportRow} onPress={() => console.log("FAQ Pressed")}>
            <Ionicons name="help-circle-outline" size={22} color="black" />
            <Text style={styles.supportText}>FAQs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportRow} onPress={() => console.log("Help & Support Pressed")}>
            <Ionicons name="chatbubbles-outline" size={22} color="black" />
            <Text style={styles.supportText}>Help & Support</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("Logout Pressed")}>
          <Ionicons name="log-out-outline" size={20} color="white" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default Profile

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
    imgContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 60, 
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10,
    },
    bio: {
        fontSize: 16,
        color: "gray",
        marginTop: 2,
    },
    section: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    infoContainer: {
        backgroundColor: "#f8f8f8",
        padding: 12,
        borderRadius: 10,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        marginLeft: 10,
        color: "black",
    },
    supportRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },
    supportText: {
        fontSize: 16,
        marginLeft: 10,
        color: "black",
    },
    logoutButton: {
        flexDirection: "row",
        backgroundColor: "#d9534f",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        marginTop: 30,
    },
    logoutText: {
        color: "white",
        fontSize: 18,
        marginLeft: 8,
        fontWeight: "bold",
    },
})
