import * as React from 'react';

import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';

//import { Constants } from 'expo';

export default class App extends React.Component {

render() {

return (

<View style={{backgroundColor:'#f2f2f2', flex:1 }}>

 

<Image style={styles.logo} source={require("logo.png")}/>

 

<Text style={{textAlign: 'right',fontSize: 18, margin: 19}}>تسجيل الدخول </Text>

 

<ScrollView>

 

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>اسم المستخدم أو البريد الالكتروني</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

 

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>كلمة المرور</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

 

<Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}

title="دخول"

onPress={() => this._handlePress()}>دخول</Button>

 

<Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize: 10, margin:20, font: 'unescape'}}

title="نسيت كلمة المرور؟"

onPress={() => this._handlePress()}>نسيت كلمة المرور؟</Button>

 

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

 

