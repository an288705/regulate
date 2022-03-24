import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image} from 'react-native'
import React from 'react'

export default function registerScreen({setEmail,setPassword,register,routeLogin}) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(e) => setEmail(e)}
        />
        </View>

        <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
        />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={register}>
            <Text>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccount} onPress={routeLogin}>
            <Text>Have an account? Log In</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      resizeMode: 'contain',
      flex: 0.5, //flex determines how much screen property takes
      width: 100
    },
   
    inputView: {
      backgroundColor: "#89CFF0",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      alignItems: "center"
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
  
    createAccount: {
      padding: 10
    },
   
    loginBtn: {
      width: "70%",
      borderRadius: 30,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#CE1855",
    },
  });