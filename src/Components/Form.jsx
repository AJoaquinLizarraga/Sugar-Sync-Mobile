import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
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
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    age: '',
    gender: '',
    diabetesType: '',
    rapidInsulin: '',
    slowInsulin: '',
    doseRapidInsulin: '',
    doseSlowInsulin: '',
  });

  const showModal = () => setVisible(!visible);
  const openMenu = menuName => setFormValues({...formValues, [menuName]: true});
  const handleInputChange = (name, value) =>
    setFormValues({...formValues, [name]: value});

  const handleDeleteMenuSelection = name => {
    const formValueUpgraded = {...formValues};
    const nombre = `${name}MenuVisible`;
    delete formValueUpgraded[nombre];
    setFormValues(formValueUpgraded);
  };

  const handleMenuSelection = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
      [`${name}MenuVisible`]: false,
    });
  };

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
              onChangeText={text => handleInputChange('fullName', text)}
              mode="outlined"
              label="Fullname"
              placeholder="John Random"
              // contentStyle={styles.textInput}
              outlineStyle={styles.outline}
              keyboardType="name-phone-pad"
              autoCapitalize="words"
            />
            {/* *************************************************************************************** */}
            {/* *****************************************EMAIL***************************************** */}
            {/* *************************************************************************************** */}
            <TextInput
              style={styles.textInput}
              onChangeText={text => handleInputChange('email', text)}
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
              onChangeText={text => handleInputChange('age', text)}
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
              visible={formValues.genderMenuVisible}
              anchorPosition={('center', 'bottom')}
              anchor={
                <TouchableOpacity onPress={() => openMenu('genderMenuVisible')}>
                  <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label={
                      formValues.gender === ''
                        ? 'Press for select gender'
                        : formValues.gender
                    }
                    outlineStyle={styles.outline}
                    editable={false}
                  />
                </TouchableOpacity>
              }>
              {GENDERS.map((gender, index) => (
                <Menu.Item
                  key={index}
                  onPress={() => {
                    handleMenuSelection('gender', gender);
                  }}
                  // onDismiss={() => {
                  //   handleDeleteMenuSelection(gender);
                  // }}
                  title={gender}
                />
              ))}
            </Menu>
            {/* *************************************************************************************** */}
            {/* *************************************DIABETES TYPE************************************* */}
            {/* *************************************************************************************** */}
            <Menu
              visible={formValues.diabetesTypeMenuVisible}
              anchorPosition={('center', 'bottom')}
              anchor={
                <TouchableOpacity
                  onPress={() => openMenu('diabetesTypeMenuVisible')}>
                  <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label={
                      formValues.diabetesType === ''
                        ? 'Press for select diabetesType'
                        : formValues.diabetesType
                    }
                    outlineStyle={styles.outline}
                    editable={false}
                  />
                </TouchableOpacity>
              }>
              {DIABETESTYPES.map((type, index) => {
                return (
                  <Menu.Item
                    key={index}
                    onPress={() => handleMenuSelection('diabetesType', type)}
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
                  visible={formValues.rapidInsulinMenuVisible}
                  anchorPosition={'bottom'}
                  anchor={
                    <TouchableOpacity
                      onPress={() => openMenu('rapidInsulinMenuVisible')}>
                      <TextInput
                        style={styles.textInput}
                        mode="outlined"
                        label={
                          formValues.rapidInsulin === ''
                            ? 'Rapid Action Insulin'
                            : formValues.rapidInsulin
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
                          handleMenuSelection('rapidInsulin', insulin);
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
                  onChangeText={dose => {
                    handleInputChange('doseRapidInsulin', dose);
                  }}
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
                  visible={formValues.slowInsulinMenuVisible}
                  anchorPosition={'bottom'}
                  anchor={
                    <TouchableOpacity
                      onPress={() => openMenu('slowInsulinMenuVisible')}>
                      <TextInput
                        style={styles.textInput}
                        mode="outlined"
                        label={
                          formValues.slowInsulin === ''
                            ? 'Slow Action Insulin'
                            : formValues.slowInsulin
                        }
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
                          handleMenuSelection('slowInsulin', insulin);
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
                  onChangeText={dose => {
                    handleInputChange('doseSlowInsulin', dose);
                  }}
                  placeholder="Type something"
                  outlineStyle={styles.outline}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <Button
              title="press"
              onPress={() => {
                console.log(formValues);
              }}
            />
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
    // </TouchableWithoutFeedback>
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
