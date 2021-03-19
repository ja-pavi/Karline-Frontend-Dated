import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const Splash = ({navigation}) => {
 return(
  <View style={styles.container}>
    <Text style={styles.text}>Splash Screen</Text>
    
    <Button 
      title="Click to Sign In"
      color="#577399"
      onPress={() => navigation.navigate("Sign In")}
      />

      <Button 
      title="Click to Sign Up"
      color="#577399"
      onPress={() => navigation.navigate("Sign Up")}
      />

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: "#F0EFEB"
  },

  text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: "#DCD9D0"
  }
})
export default Splash; 