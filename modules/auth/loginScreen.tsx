import React, {useState}from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button,CheckBox, Dimensions , Link} from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';


export default function loginScreen() {
  const [isOpenSuccess, SetIsOpenSuccess] = useState(false);
  const [isOpenFail, SetIsOpenFail] = useState(false);
  const [color, SetColor] = useState('black');

  return (
    <SafeAreaView style = {styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/icon.png')}
      />
      <Formik 
        initialValues={{url:'', userId:'', pass:''}}  
        onSubmit={values => {
          if (values.url != '' && values.userId != '' && values.pass != '') {
            SetColor('black');
            SetIsOpenSuccess(true);
          } else {
            SetColor('red');
            SetIsOpenFail(true);
          }
        }}
      >
        {({handleChange, handleSubmit, values}) => (
          <View >
            <View style={{marginBottom:2, backgroundColor: '#fff',width: Dimensions.get('window').width}}>
              <TextInput 
                style={{color:color, height: 50}}
                onChangeText={handleChange('url')}
                value={values.url}
                placeholder='URL'
              ></TextInput>
            </View>
            <View style={{marginBottom:2, backgroundColor: '#fff',width: Dimensions.get('window').width}}>
              <TextInput 
                style={{color:color, height: 50}}
                onChangeText={handleChange('userId')}
                value={values.userId}
                placeholder='ユーザーID'
              ></TextInput>
            </View>
            <View style={{marginBottom:2, backgroundColor: '#fff',width: Dimensions.get('window').width}}>
              <TextInput 
                style={{color:color, height: 50}}
                onChangeText={handleChange('pass')}
                value={values.pass}
                placeholder='パスワード'
              >
              </TextInput>
            </View>
            
            <View style = {styles.link}>
              <a >パスワード忘れた方はこちら</a>
            </View>
            <Button 
              title = "Login"
              onPress = {handleSubmit}
              style = {styles.button}
            ></Button>
            <View style={styles.check}>
              <CheckBox ></CheckBox>
              <span >ログイン状態を保存する</span>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3FCFF',
      alignItems: 'center',
    },
    button: {
      marginTop: 200,
    },
    logo: {
      width: 100,
      height: 100,
      marginTop:50,
      marginBottom:10,
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      marginBottom:20,
      marginTop:20
    },
    check: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop:50
    }
});
