import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,TextInput,ScrollView } from 'react-native'
import Style from '../../../common/style';
import Color from '../../../common/color';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import {Container,Input,Label} from 'native-base';
import {widthPercentageToDP as WP,heightPercentageToDP as HP} from 'react-native-responsive-screen';

export default class RegisterScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{flexDirection:'column',justifyContent: 'center',alignItems: 'center',flex:1}}>
          <Icon name='registered' style={{color:Color.colorCommon}} size={100} />
        </View>
        <View style={{
          flex:2,
          flexDirection:'column',
          justifyContent: 'space-between',
          marginLeft: WP(20),
          marginRight: WP(20),
        }}>
            <TextInput
              style={{
                  borderColor:Color.colorCommon,
                  borderWidth:WP(0.4),
                  marginVertical:HP(3),
                  fontSize:WP(4)
                  }}
              placeholder="Nhập Họ Tên"
            />   
            <TextInput
              style={{
                  borderColor:Color.colorCommon,
                  borderWidth:WP(0.4),
                  marginVertical:HP(3),
                  fontSize:WP(4)
                  }}
                  placeholder="Nhập Email"
            />   
            <TextInput
              style={{
                  borderColor:Color.colorCommon,
                  borderWidth:WP(0.4),
                  marginVertical:HP(3),
                  fontSize:WP(4)
                  }}
                  placeholder="Nhập Tài Khoản"
            />   
            <TextInput
              style={{
                  borderColor:Color.colorCommon,
                  borderWidth:WP(0.4),
                  marginVertical:HP(3),
                  fontSize:WP(4)
                  }}
                  secureTextEntry
                  placeholder="Nhập Mật Khẩu"
            />   
        </View>
        <View style={{
          flex:1,
          flexDirection:'column-reverse',
          alignItems: 'center',
          justifyContent:'flex-end'
          }}>
          <TouchableOpacity style={{
            width: WP(50),
            height: HP(8),
            borderRadius: 10,
            backgroundColor:Color.colorCommon,
            justifyContent:'center'
            }} >
            <Text style={{color: 'white',fontSize: WP(5),textAlign:'center'}}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

