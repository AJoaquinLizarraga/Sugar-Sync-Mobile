import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Modal, Portal, TextInput} from 'react-native-paper';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Form from '../../Components/Form';

GoogleSignin.configure({
  webClientId:
    '797764504841-fdbv5dhj1cgb3nmvqo79nllppqfbafsq.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    console.log('llega hasta el 1');
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    console.log('llega hasta el 2');

    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    console.log('llega hasta el 3', idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('llega hasta el 4', googleCredential);

    // Sign-in the user with the credential
    return await auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log('cancelled', statusCodes.SIGN_IN_CANCELLED);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log('in progress', statusCodes.IN_PROGRESS);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log('not available', statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
    } else {
      // some other error happened
      console.log(error.message);
    }
  }
}

const data = {
  diabetesType: 1,
  age: 25,
  creadoConMobile: 'siiiii',
  // dateExample: Timestamp.fromDate(new Date("November 15, 2023")),
};

const logOut = async () => {
  await GoogleSignin.signOut().then(() => {
    console.log('log out');
  });
};

const Login = () => {
  const [token, setToken] = useState({});

  return (
    <View style={styles.container}>
      <View>
        <Form />
      </View>
      <Text>este es el login</Text>
      {/* <GoogleSigninButton
        title="Google Sign-In"
        onPress={() => {
          onGoogleButtonPress()
            .then(() => {
              console.log('conectado con google');
            })
            .then(() => {
              firestore()
                .collection('android')
                // .doc('algo mas')
                .add(data)
                .then(() => {
                  console.log('User added!');
                });
            });
        }}
      /> */}
      {/* <Button title="show" onPress={showModal} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 6,
  },
});
export default Login;
