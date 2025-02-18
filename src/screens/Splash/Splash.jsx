import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const Splash = () => {
const navigation = useNavigation()
useEffect(()=>{
    setTimeout(()=>{
        navigation.replace("BottomTabBar");
    },2000)
},[])
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/appicon.webp")} style={styles.img} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f93"
  },
  img:{
    width:"100%",
    height:"20%",
    borderRadius:50,
    resizeMode:"contain"
  }
})