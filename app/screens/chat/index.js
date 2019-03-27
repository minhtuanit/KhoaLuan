import React, { Component } from 'react'
import { Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  
};

export default class ChatScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      path:'',

    }
  }
  openImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
     // console.log('Response = ', response);
     
     

      if (response.didCancel) {
        console.log('User cancelled image picker');

        alert('User cancelled image picker');

      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);

        alert('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
        alert('User tapped custom button: ', response.customButton);
      } else {
        alert(response.uri);
        this.setState({
          path:response.uri,
        })
      }
    });
  }

  render() {
    return (
      <View style={{
        flex:1,
        flexDirection:'column'
      }}>
       <Image style={{width:100,height:300}} source={{uri:"content://media/external/images/media/355296"}} >

       </Image>
       <TouchableOpacity onPress={ this.openImage.bind(this) }>
        <Text>Click me</Text>
       </TouchableOpacity>
      </View>
    )
  }
}