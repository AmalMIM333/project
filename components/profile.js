import * as React from 'react';

import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';

import { CheckBox } from 'react-native-elements'







export default class App extends React.Component {

render() {

return (

<View style={{backgroundColor:'#f2f2f2', flex:1}}>

 

<Image style={styles.logo} source={require("logo.png")}/>

 

<Text style={{textAlign: 'right',fontSize: 18, margin: 19, marginBottom: 30}}> تعديل الملف الشخصي </Text>

 

<ScrollView>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>تعديل الاسم</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}> تعديل البريد الالكتروني </Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}> تعديل اسم المستخدم</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>تعديل كلمة المرور </Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>تأكيد كلمة المرور</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<CheckBox

center

title='انقر هنا لتصلك الرسائل على البريد الالكتروني'

 

/>

 

<Button center

style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}

title="تعديل"

onPress={() => this._handlePress()}>تعديل</Button>

 

</ScrollView>

 

</View>

 

);

}

}

 

const styles = StyleSheet.create({

logo:{

marginTop: 60,

margin: 10,

height: 128,

width: 128,

Align: 'center'

},

 

 

});

 