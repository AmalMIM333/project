
import * as React from 'react';

import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';

//import { Constants } from 'expo';






export default class App extends React.Component {

render() {

return (

<View style={{backgroundColor:'#f2f2f2', flex:1}}>

 

<Image style={styles.logo} source={require("logo.png")}/>

 

<Text style={{textAlign: 'right',fontSize: 18, margin: 19, marginBottom: 30}}>البرامج التدريبية </Text>

 

<ScrollView>

 

<Image style={styles.photo} source={require("cover.jpg")}/>

 

<Text style={{textAlign: 'right',fontSize: 16, marginRight:19, marginLeft: 19, marginBottom: 10}}>المستكشف</Text>

 

<Text style={{textAlign: 'right',fontSize: 14, marginRight: 19, marginLeft: 19, marginBottom: 30}}> يركّز هذا المسار على إعطاء المتدرّب فرصةً لاكتشافِ العديد من الأشياء، مثل لينكس و سطر الأوامر و وأساسيّات الشبكة، والمبادرة والمساهمة في مجتمع الإنترنت، وغير ذلك</Text>

 

<Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}}

title="الالتحاق بالبرنامج التدريبي"

onPress={() => this._handlePress()}>

 

</Button>




<Image style={styles.photo} source={require("Developer.jpg")}/>

<Text style={{textAlign: 'right',fontSize: 16, marginRight: 19, marginLeft: 19, marginBottom: 10}}>المطور</Text>

 

<Text style={{textAlign: 'right',fontSize: 14, marginRight: 19, marginLeft: 19, marginBottom: 30}}>تكمنُ الفكرة في هذا المسار إلى تمكين المتدرّب من بناء التطبيقات، سواءً كانت للويب أو للجوّال، وسواءً كانت صغيرةً أو كبيرةً، وإلى تعريف المتدرّب بمفاهيم الحوسبة دون خادم، وإلى فتح أبواب الإبتكار والتبنّي للتقنيّات والمنصّات</Text>

 

<Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}}

title="الالتحاق بالبرنامج التدريبي"

onPress={() => this._handlePress()}>

</Button>




<Image style={styles.photo} source={require("analyst.png")}/>

<Text style={{textAlign: 'right',fontSize: 16, marginRight: 19, marginLeft: 19, marginBottom: 10}}>المحلل</Text>

 

<Text style={{textAlign: 'right',fontSize: 14, marginRight: 19, marginLeft: 19, marginBottom: 30}}>يهدفُ المسار إلى تمكين المتدرّب من تحليل وتصميم الأنظمة من خلال تحليل حالةٍ معيّنة وحلّ المشاكل المعقّدة المرتبطة بها، ثمّ ترجمة الحلّ إلى مخطّط تحليل الأعمال، يسعى المسار أيضًا إلى أن يمتلك المتدرّب المهارات ذات العلاقة بتجربة المستخدم و واجهة المستخدم</Text>

 

<Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}}

title="الالتحاق بالبرنامج التدريبي"

onPress={() => this._handlePress()}>

</Button>

 

<Image style={styles.photo} source={require("Ethical-hacking-02-1.jpg")}/>

<Text style={{textAlign: 'right',fontSize: 16, marginRight: 19, marginLeft: 19, marginBottom: 10}}>المخترق</Text>

 

<Text style={{textAlign: 'right',fontSize: 14, marginRight: 19, marginLeft: 19, marginBottom: 30}}>يهدفُ المسار إلى تقديم أساسيّات الإختراق الأخلاقي للمتدرّب، إضافةً إلى تقنيّاتٍ في اختراق التطبيقات دون الخادم</Text>

 

<Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}}

title="الالتحاق بالبرنامج التدريبي"

onPress={() => this._handlePress()}>

</Button>

 

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

 

photo:{

marginTop: 30,

marginBottom: 30,

marginLeft: 50,

height: 150,

width: 280,

},

 

});

 

