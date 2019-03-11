import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,TextInput,ToastAndroid } from 'react-native'
import Style from '../../../common/style';
import Color from '../../../common/color';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import {Container,Input,Label} from 'native-base';
import {widthPercentageToDP as WP,heightPercentageToDP as HP} from 'react-native-responsive-screen';
import {SetKey,GetKey} from '../../../utils/Storage';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    };
  }

  checklogin = (username,password) => {
    fetch('http://192.168.1.3:3000/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
         SetKey("name",responseJson.name);
         console.log(GetKey("name").data);
      }).catch((error) => {
        ToastAndroid.show("Tài khoản hoặc mật khẩu sai vui lòng nhập lại",ToastAndroid.SHORT);
      });
  }

  render() {

   
    return (
      <Container>
        <View style={{
          flex:2,
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Icon name='user' style={{color:Color.colorCommon}} size={100}  />
        </View>
        <View style={{
          flex:2,
         
          marginLeft: WP(20),
          marginRight: WP(20),
        }}>
            <View style={{
              flexDirection:'column',
              justifyContent: 'center'
            }}>
              <TextInput style={{
                  borderColor:Color.colorCommon,
                  borderWidth:WP(0.5),
                  marginVertical:HP(1.5),
                  fontSize:WP(4)
                  }} placeholder="Tên Đăng Nhập" 
                  value={this.state.username}
                  onChangeText={(value) => this.setState({
                    username:value
                  })}
                  />
                  <TextInput style={{
                  borderColor:Color.colorCommon,
                  borderWidth:WP(0.5),
                  marginVertical:HP(1.5),
                  fontSize:WP(4)
                  }}
                  value={this.state.password}
                  onChangeText={(value) => this.setState({
                    password:value
                  })}
                   secureTextEntry placeholder="Mật Khẩu" />
            </View>
        </View>
        <View style={{
          flex:1,
          flexDirection:'column-reverse',
          alignItems: 'center',
          justifyContent:'flex-end'
          }}>
          <TouchableOpacity style={{
            width: WP(60),
            height: HP(8),
            borderRadius: 10,
            backgroundColor:Color.colorCommon,
            justifyContent:'center'
            }}  onPress={() => this.props.navigation.navigate('Home')} >
            <Text style={{color: 'white',fontSize: WP(5),textAlign:'center'}}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
       </Container>
    )
  }
}
