import React, { Component } from 'react'
import { Text, View,Image ,TouchableOpacity} from 'react-native'
import { Container } from 'native-base';
import {widthPercentageToDP as WP,heightPercentageToDP as HP} from 'react-native-responsive-screen';
import Color from '../../../common/color';


export default class LoginInScreen extends Component {
  render() {
    return (
        <View style={{
            flex:1,
            backgroundColor: 'white',
            flexDirection:'column'
        }}>
            <View style={{
                flex:3,
                justifyContent:'center',
                alignItems: 'center'
            }}>
                <Image
                    style={{width:WP(80),height:HP(50)}}
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SrRdcMcwwlusaeyw6Kd7HnLIbciKX3i3E9cQ0aUfdyXVFpzW'}}
                ></Image>
            </View>
            <View
                style={{
                    flex:1,
                    justifyContent:'space-around',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity style={{
                    width: WP(60),
                    height: HP(8),
                    borderRadius: 10,
                    backgroundColor:Color.colorCommon,
                    justifyContent:'center'
                    }} 

                    onPress={() => this.props.navigation.navigate('Login')}
                    >
                    <Text style={{color: 'white',fontSize: WP(5),textAlign:'center'}}>Đăng Nhập</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: WP(60),
                    height: HP(8),  
                    borderRadius: 10,
                    backgroundColor:Color.colorCommon,
                    justifyContent:'center'
                    }} 
                    onPress={() => this.props.navigation.navigate('Register')}
                    >
                    <Text style={{color: 'white',fontSize: WP(5),textAlign:'center'}}>Đăng Ký</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
  }
}