import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import SaveEmailScreen from './SaveEmailScreen';
import Mailer from 'react-native-mail';
import * as MailComposer from 'expo-mail-composer';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Number:', number);
  };
  const sendEmail = async() => {
    await MailComposer.composeAsync()
    
    }
  return (
    <ScrollView>
    <View style={{ marginTop:150, alignItems:'center', justifyContent: 'center', padding: 20, }}>
      <Text >Name:</Text>
      <TextInput
      style={{ borderColor:'black', borderWidth:2, padding:10, width:"90%"}}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text>Email:</Text>
      <TextInput
      style={{ borderColor:'black', borderWidth:2, padding:10, width:"90%"}}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text>Message:</Text>
      <TextInput
      style={{ borderColor:'black', borderWidth:2, padding:10, width:"90%"}}
        placeholder="Enter your message"
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline={true}
        numberOfLines={4}
      />
      <Text>Number:</Text>
      <TextInput
      style={{ borderColor:'black', borderWidth:2, padding:10, width:"90%" ,marginBottom:20}}
      placeholder="Enter your number"
      value={number}
      onChangeText={(number)=>setNumber(number)}
      multiline={true}
      keyboardType="numeric"

      />
      <Pressable onPress={()=>sendEmail()} >
        <Text style={{backgroundColor:'black', color:'white', padding:20, borderRadius:15}}>
          Save
        </Text>
      </Pressable>
      {/* <Button title="Submit" onPress={handleSubmit} /> */}
    </View>
    </ScrollView>
  );
};


// const styles = StyleSheet.create({
//     demo:{
//         backgroundColor: "#edcd82"
//     },
//   input: {
//     justifyContent:'center',
//     alignContent:'center',
//     height: 40,
//     margin: 15,
//     borderWidth: 1,
//     padding: 10,

// },
// });

export default FormScreen;