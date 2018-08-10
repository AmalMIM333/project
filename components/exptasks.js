import * as React from 'react';

import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';







export default class App extends React.Component {

render() {

return (

<View style={{backgroundColor:'#f2f2f2', flex:1}}>

 

<Image style={styles.logo} source={require("logo.png")}/>

 

<Text style={{textAlign: 'right',fontSize: 18, margin: 19, marginBottom: 25}}>اسم البرنامج: المستكشف</Text>

<Text style={{textAlign: 'right',fontSize: 16, marginRight:19, marginBottom: 20}}>المهام التي يجب تسليمها</Text>

<Text style={{textAlign: 'right',fontSize: 16, marginLeft:1, marginBottom: 15}}>- StackOverflow </Text>


 

 <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}

title="تسليم المهمة"

onPress={() => this._handlePress()}

></Button>


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

 