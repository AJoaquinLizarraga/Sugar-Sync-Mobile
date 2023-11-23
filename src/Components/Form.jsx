import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Modal,
  Portal,
  TextInput,
  Divider,
  Text,
  Menu,
} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Form = () => {
  const [visible, setVisible] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [genderSelected, setGenderSelected] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const openMenu = () => setVisibleMenu(true);

  const closeMenu = () => setVisibleMenu(false);

  const menuGender = () => {
    return (
      <View style={{flex: 1}}>
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Portal>
        <Modal
          style={styles.modal}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <ScrollView>
            <TextInput
              mode="outlined"
              label="Fullname"
              placeholder="John Random"
              // keyboardType="ascii-capable"
            />
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Type something"
              keyboardType="email-address"
            />
            <TextInput
              mode="outlined"
              label="edad"
              placeholder="Type something"
              keyboardType="number-pad"
            />
            <TextInput
              mode="outlined"
              label="edad"
              placeholder="Type something"
              keyboardType="number-pad"></TextInput>
            <Text
              // mode="outlined"
              label="gender"
              // value={gender}
              placeholder="Male/Female"
              keyboardType="number-pad"
            />
            <Menu
              visible={visibleMenu}
              onDismiss={closeMenu}
              anchorPosition={('center', 'bottom')}
              anchor={
                <TouchableOpacity
                  title="algo"
                  onPress={() => {
                    openMenu();
                  }}>
                  <TextInput
                    mode="outlined"
                    label="show"
                    placeholder="Gender"
                    disabled="false"
                    // onPress={openMenu}
                  />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Male" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Female" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Other" />
            </Menu>
          </ScrollView>
        </Modal>
      </Portal>
      <Button title="show" onPress={showModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    marginHorizontal: wp('3%'),
  },
});

export default Form;
