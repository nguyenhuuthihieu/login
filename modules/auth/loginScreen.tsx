import React, {useState}from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, CheckBox, Modal, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

function alert (message) {
  Alert.alert(message);
}
export default function loginScreen() {
  const [isOpenSuccess, SetIsOpenSuccess] = useState(false);
  const [isOpenFail, SetIsOpenFail] = useState(false);
  const [styleInput, SetStyleInput] = useState(styles.input);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/icon.png')}
      />
      <Formik 
        initialValues={{url:'', userId:'', pass:''}}  
        onSubmit={values => {
          if (values.url != '' && values.userId != '' && values.pass != '') {
            SetStyleInput(styles.success);
            alert('thanh cong');
          } else {
            SetStyleInput(styles.failed);
            alert('that bai');
          }
        }}
      >
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.formGroup} >
            <View style={[styles.row, styleInput,  styles.centerHorizontal]}>
              <Ionicons name="ios-globe" style={styles.icon}></Ionicons>
              <TextInput 
                onChangeText={handleChange('url')}
                value={values.url}
                placeholder='URL'
                placeholderTextColor = {styleInput == styles.failed ? 'red' : 'black'}
              ></TextInput>
            </View>
            <View style={[styles.row, styleInput, styles.centerHorizontal]}>
              <Ionicons name="md-person" style={styles.icon}></Ionicons>
              <TextInput 
                onChangeText={handleChange('userId')}
                value={values.userId}
                placeholder='ユーザーID'
                placeholderTextColor = {styleInput == styles.failed ? 'red' : 'black'}
              ></TextInput>
            </View>
            <View style={[styles.row, styleInput, styles.centerHorizontal]}>
              <Ionicons name="ios-lock" style={styles.icon}></Ionicons>
              <TextInput 
                onChangeText={handleChange('pass')}
                value={values.pass}
                placeholder='パスワード'
                placeholderTextColor = {styleInput == styles.failed ? 'red' : 'black'}
              >
              </TextInput>
            </View>
            <View style={[styles.centerHorizontal, styles.link]} >
              <Text>パスワード忘れた方はこちら</Text>
            </View>
            <Button  
              title = "ログイン"
              onPress = {handleSubmit}
              buttonStyle={styles.btnLogin}
            ></Button>
            <View style={[styles.center,styles.row, styles.check]}>
              <CheckBox ></CheckBox>
              <Text>ログイン状態を保存する</Text>
            </View>
          </View>
        )}
      </Formik>  
      <View style={styles.footer}>
        <Text>©SOFTBRAIN Co.,Ltd.</Text>
      </View>
    </SafeAreaView>
  );
}
