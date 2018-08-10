
import * as React from 'react';

import { AppRegistry, StyleSheet, Text, View, Image, Button } from 'react-native';

//import { Constants } from 'expo';

// or any pure javascript modules available in npm

export default class App extends React.Component {

render() {

return (

<View style={{backgroundColor:'#f2f2f2', flex: 1}}>

//<Image style={styles.logo} source={require("./logo.png")}/>

<Text style={styles.red}>

Fortydays

</Text>
 
<Text style={styles.bigblue}>مؤسسة سعودية تقدّم حلولاً سحابيّةً مستفيدةً من الحوسبة السحابيّة والحوسبة دون خادم، كما تشجّع ثقافة العمل عن بُعد. و كجزءٍ من مسؤوليّتنا الإجتماعيّة، يسرّنا أن تقدّم برامج تدريبية مكثفة و غير مكثفة لكلّ المُهتمين بمجالات التقنيّة والإنترنت. تمّ تصميم هذا البرنامج من قبل نخبةٍ من الموهوبين والذين يمتلكون خبرةً مهنيّةً وأكاديميّةً في مجالاتٍ تقنيّةٍ مختلفة

</Text>

<View style={{marginLeft: 55, flexDirection: 'row'}}>


<Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}}

title="البرامج التدريبية"

onPress={() => this._handlePress()}> تسجيل الدخول</Button>

 

<Button style={{width: 50, height: 50, buttonColor:"rgba(231,76,60,1)" }}

title="تسجيل الدخول"

onPress={() => {this.Home}}

> تسجيل الدخول</Button>

</View>

 
<Text style={{marginTop: 25, margin: 135, marginBottom:0, fontSize: 15}}>تسجيل جديد؟</Text>

</View>

);

}

}

const styles = StyleSheet.create({

bigblue: {

margin: 24,

marginTop: 0,

fontSize: 15,

fontWeight: 'bold',

textAlign: 'center',

color: '#34495e',

},

red: {

fontSize: 18,

margin: 24,

fontWeight: 'bold',

textAlign: 'center',

color: '#34495e'

},

logo: {

marginTop: 60,

margin: 127,

marginBottom:0,

height: 135,

width: 135,

Align: 'center'

},

 

});


/*import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is saying</Text>
      </View>
	  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator,} from 'react-navigation';
import Expo from 'expo';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});


export default class App extends React.Component {
  render() {
    <View style={styles.container}>
        <Text>This is saying</Text>
      </View>
  }
}*/
