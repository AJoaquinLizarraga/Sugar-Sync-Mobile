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
import {
  DIABETESTYPES,
  GENDERS,
  RAPIDACTIONINSULIN,
  SLOWACTIONINSULIN,
} from '../const/profile.constant';
import {imcCalcule} from '../utils/imcFormula';

const Form = () => {
  const [visible, setVisible] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleMenu2, setVisibleMenu2] = useState(false);
  const [visibleMenu3, setVisibleMenu3] = useState(false);
  const [visibleMenu4, setVisibleMenu4] = useState(false);
  const [visibleMenu5, setVisibleMenu5] = useState(false);
  const [valueType, setValueType] = useState('');
  const [valueGender, setValueGender] = useState('');
  const [rapidInsulin, setRapidInsulin] = useState('');
  const [slowInsulin, setSlowInsulin] = useState('');
  // const [calculoDeFactorDeCorreccion, setCalculoDeFactorDeCorreccion] =
  //   useState('algo');

  const showModal = () => setVisible(!visible);
  const openMenu = () => setVisibleMenu(!visibleMenu);
  const openMenu2 = () => setVisibleMenu2(!visibleMenu2);
  const openMenu3 = () => setVisibleMenu3(!visibleMenu3);
  const openMenu4 = () => setVisibleMenu4(!visibleMenu4);
  const openMenu5 = () => setVisibleMenu5(!visibleMenu5);

  const handleType = type => {
    setValueType(type);
    return;
  };
  const handleGender = gender => {
    setValueGender(gender);
    return;
  };
  const handleRapidInsulin = insulin => {
    setRapidInsulin(insulin);
    return;
  };
  const handleSlowInsulin = insulin => {
    setSlowInsulin(insulin);
    return;
  };

  return (
    <View style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={showModal}
          contentContainerStyle={styles.modal}>
          <ScrollView>
            {/* *************************************************************************************** */}
            {/* ***************************************FULLNAME**************************************** */}
            {/* *************************************************************************************** */}
            <TextInput
              style={styles.textInput}
              mode="outlined"
              label="Fullname"
              placeholder="John Random"
              // contentStyle={styles.textInput}
              outlineStyle={styles.outline}
            />
            {/* *************************************************************************************** */}
            {/* *****************************************EMAIL***************************************** */}
            {/* *************************************************************************************** */}
            <TextInput
              style={styles.textInput}
              mode="outlined"
              label="Email"
              placeholder="Type something"
              outlineStyle={styles.outline}
              keyboardType="email-address"
            />
            {/* *************************************************************************************** */}
            {/* ******************************************AGE****************************************** */}
            {/* *************************************************************************************** */}
            <TextInput
              style={styles.textInput}
              mode="outlined"
              label="Age"
              placeholder="Type something"
              outlineStyle={styles.outline}
              keyboardType="number-pad"
            />
            {/* *************************************************************************************** */}
            {/* *****************************************GENDER**************************************** */}
            {/* *************************************************************************************** */}
            <Menu
              visible={visibleMenu2}
              anchorPosition={('center', 'bottom')}
              anchor={
                <TouchableOpacity onPress={openMenu2}>
                  <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label={
                      valueGender === ''
                        ? 'Press for select gender'
                        : valueGender
                    }
                    // contentStyle={styles.textInput}
                    outlineStyle={styles.outline}
                    editable={false}
                  />
                </TouchableOpacity>
              }>
              {GENDERS.map((gender, index) => {
                return (
                  <Menu.Item
                    key={index}
                    onPress={() => {
                      handleGender(gender), openMenu2();
                    }}
                    title={gender}
                  />
                );
              })}
            </Menu>
            {/* *************************************************************************************** */}
            {/* *************************************DIABETES TYPE************************************* */}
            {/* *************************************************************************************** */}
            <Menu
              visible={visibleMenu}
              anchorPosition={('center', 'bottom')}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label={
                      valueType === ''
                        ? 'Press for select Diabetes Type'
                        : valueType
                    }
                    // contentStyle={styles.textInput}
                    outlineStyle={styles.outline}
                    // disabled="false"
                    editable={false}
                  />
                </TouchableOpacity>
              }>
              {DIABETESTYPES.map((type, index) => {
                return (
                  <Menu.Item
                    key={index}
                    onPress={() => {
                      handleType(type);
                      openMenu();
                    }}
                    title={type}
                  />
                );
              })}
            </Menu>
            {/* *************************************************************************************** */}
            {/* **********************************RAPID ACTION INSULIN********************************* */}
            {/* *************************************************************************************** */}
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 0.75}}>
                <Menu
                  visible={visibleMenu3}
                  anchorPosition={'bottom'}
                  anchor={
                    <TouchableOpacity onPress={openMenu3}>
                      <TextInput
                        style={styles.textInput}
                        mode="outlined"
                        label={
                          rapidInsulin === ''
                            ? 'Rapid Action Insulin'
                            : rapidInsulin
                        }
                        // contentStyle={styles.textInput}
                        outlineStyle={styles.outline}
                        editable={false}
                      />
                    </TouchableOpacity>
                  }>
                  {RAPIDACTIONINSULIN.map((insulin, index) => {
                    return (
                      <Menu.Item
                        key={index}
                        onPress={() => {
                          handleRapidInsulin(insulin), openMenu3();
                        }}
                        title={insulin}
                      />
                    );
                  })}
                </Menu>
              </View>
              <View style={{flex: 0.25}}>
                <TextInput
                  style={[
                    {
                      alignContent: 'center',
                      textAlign: 'center',
                      marginLeft: 3,
                    },
                    styles.textInput,
                  ]}
                  mode="outlined"
                  label="dose"
                  placeholder="Type something"
                  outlineStyle={styles.outline}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            {/* *************************************************************************************** */}
            {/* **********************************SLOW ACTION INSULIN********************************** */}
            {/* *************************************************************************************** */}
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 0.75}}>
                <Menu
                  visible={visibleMenu4}
                  anchorPosition={'bottom'}
                  anchor={
                    <TouchableOpacity onPress={openMenu4}>
                      <TextInput
                        style={styles.textInput}
                        mode="outlined"
                        label={
                          slowInsulin === ''
                            ? 'Slow Action Insulin'
                            : slowInsulin
                        }
                        // contentStyle={styles.textInput}
                        outlineStyle={styles.outline}
                        editable={false}
                      />
                    </TouchableOpacity>
                  }>
                  {SLOWACTIONINSULIN.map((insulin, index) => {
                    return (
                      <Menu.Item
                        key={index}
                        onPress={() => {
                          handleSlowInsulin(insulin), openMenu4();
                        }}
                        title={insulin}
                      />
                    );
                  })}
                </Menu>
              </View>
              <View style={{flex: 0.25}}>
                <TextInput
                  style={[
                    {textAlign: 'center', marginLeft: 3},
                    styles.textInput,
                  ]}
                  mode="outlined"
                  label="dose"
                  placeholder="Type something"
                  outlineStyle={styles.outline}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            {/* <TextInput
              style={styles.textInput}
              mode="outlined"
              label={
                calculoDeFactorDeCorreccion === ''
                  ? 'Correction Factor'
                  : calculoDeFactorDeCorreccion
              }
              // contentStyle={styles.textInput}
              outlineStyle={styles.outline}
              editable={false}
            /> */}
            {/* <TextInput
              style={styles.textInput}
              mode="outlined"
              label={
                imcCalcule === undefined ? 'Slow Action Insulin' : imcCalcule
              }
              // contentStyle={styles.textInput}
              outlineStyle={styles.outline}
              editable={false}
            /> */}
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
    marginTop: 5,
    // textColor: 'white',
  },
  outline: {
    borderRadius: 10,
  },

  modal: {
    // height: hp('60%'),
    flex: 1,
    maxHeight: hp('60%'),
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: wp('2%'),
  },
});

export default Form;
