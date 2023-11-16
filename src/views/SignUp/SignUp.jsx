import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import {Icon} from '@rneui/themed';
import {TextInput, Button, Icon} from 'react-native-paper';

const SignUp = () => {
  return (
    <View>
      <TextInput mode="outlined" label="Usuario" placeholder="Type something" />
      <Button
        // icon={{source: 'add-circle-outline'}}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
};

export default SignUp;
