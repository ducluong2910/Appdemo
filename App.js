import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Slider ,
   SafeAreaView, StatusBar , KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
       <StatusBar barStyle='light-content'/>
       <KeyboardAvoidingView behavior='padding' style={styles.container}>
       <TouchableWithoutFeedback style={styles.container}>
      <View style={styles.logoContainer}>
      <Image style={styles.logo}
           source={require('./imgs/fb.png')}>
      </Image>
      <Text style={styles.title}> Hello! </Text>
        </View>
        <View style={styles.infoContainer} >
               <TextInput style={styles.input}
                 placeholder="Enter username/email"
                 placeholderTextcolor='rgba(255,255,255,0.8)'
                 keyboardType ='email/address'
                 returnKeyType='next'
                 autoCorrect={false}
               />
               <TextInput style={styles.input} 
                placeholder="Enter password"
                placeholderTextcolor='rgba(255,255,255,0.8)'
                returnKeyType ='Go'
                secureTextEntry
                autoCorrect={false}
               />
        </View>
       </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  
  },

  logoContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100 ,
    height: 200 ,
  },
  title:{
    color: '#f7c774',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
   // backgroundColor: 'red',
    height: 200,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor:'rgba(255,255,255,0.2)',
    color: '#FFF',
    marginBottom: 20,
    paddingHorizontal: 10

  }
   
});
