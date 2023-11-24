import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import {Modal, Portal, TextInput, Divider, Menu} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Form = () => {
  const [visible, setVisible] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const showModal = () => setVisible(!visible);
  const openMenu = () => setVisibleMenu(!visibleMenu);

  return (
    <View style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={showModal}
          contentContainerStyle={styles.modal}>
          <ScrollView>
            <TextInput
              mode="outlined"
              label="Fullname"
              placeholder="John Random"
              contentStyle={styles.textInput}
              outlineStyle={styles.outline}
            />
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Type something"
              outlineStyle={styles.outline}
              keyboardType="email-address"
            />
            <TextInput
              mode="outlined"
              label="Age"
              placeholder="Type something"
              outlineStyle={styles.outline}
              keyboardType="number-pad"
            />
            <TextInput
              mode="outlined"
              label="Diabetes Type"
              placeholder="Type something"
              outlineStyle={styles.outline}
              keyboardType="number-pad"
            />

            <Menu
              visible={visibleMenu}
              onDismiss={openMenu}
              anchorPosition={('center', 'bottom')}
              anchor={
                <TouchableOpacity title="algo" onPress={openMenu}>
                  <TextInput
                    mode="outlined"
                    label="Press for select gender"
                    contentStyle={styles.textInput}
                    // placeholder="Press for select"
                    outlineStyle={styles.outline}
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
  textInput: {
    // marginVertical: 10
    // textColor: 'white',
  },
  outline: {
    borderRadius: 10,
  },

  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: wp('2%'),
  },
});

export default Form;
