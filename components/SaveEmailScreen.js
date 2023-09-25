import React from 'react';
import { View, Button, Pressable } from 'react-native';
import Mailer from 'react-native-mail';

const SaveEmailScreen = () => {
  const sendEmail = () => {
    // Mailer.mail(
    //   {
    //     subject: 'Hello',
    //     recipients: ['Nikhilseth495@gmail.com'],
    //     // ccRecipients: ['cc@example.com'],
    //     // bccRecipients: ['bcc@example.com'],
    //     body: 'This is the body of the email',
    //     isHTML: false, // true if you want to send HTML content
    //     attachments: [
    //       {
    //         path: '', // your file path
    //         type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
    //         name: '', // Optional: Custom filename for attachment
    //       },
    //     ],
    //   },
    //   (error, event) => {
    //     if (error) {
    //       console.error('Could not send email', error);
    //     }
    //   }
    // );
    console.log('hi');
  };

  return (
    <View>
      {/* Wrap the Button in a Pressable */}
      {/* <Pressable onPress={sendEmail}> */}
        <Button title="Send Email" />
      {/* </Pressable> */}
    </View>
  );
};

export default SaveEmailScreen;
