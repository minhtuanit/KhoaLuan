import firebase, { firestore, messaging } from 'react-native-firebase';
import {View,Button} from 'react-native';

const androidConfig = {
    clientId : '602002472706-mp4p158oh7hq9vblp0eroatqeoriusjr.apps.googleusercontent.com',
    appId:'1:602002472706:android:ad9f882b74f978bc',
    apiKey:'AIzaSyCrSrpuMKvKjCg2uuGMObRiccrw_rTj8CY',
    databaseURL:'https://khoaluanchatrealtime.firebaseio.com',
    storageBucket: "khoaluanchatrealtime.appspot.com",
    projectId: "khoaluanchatrealtime",
};

const khoaluanApp = firebase.initializeApp(
    androidConfig,
    'khoaluanApp'
);

const rootRef = firebase.database().ref();
const user = rootRef.child('user');

export default class ChatApp extends Component {

 sendMessage = (msg,username) => {
     user.push("tuandeptrai",(res) => {
        console.log(res);
     });
 }
    
  render() {
    return (
      <View>
            <Button title='CLick me' onPress={() => sendMessage('11','11')}>

            </Button>
      </View>
    )
  }
}
