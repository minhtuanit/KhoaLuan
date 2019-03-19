import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,Button } from 'react-native'
import {widthPercentageToDP as WP,heightPercentageToDP as HP} from 'react-native-responsive-screen';
export default class ProfileScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex:1,
          flexDirection:'column',
        }}
      >
        <View style={{
          flex:1,
          flexDirection:'column',
          alignItems: 'center',
          justifyContent:'center'
        }}>
            <Image
            style={{width: 100, height: 100,borderRadius:50}}

            source={{uri: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'}}
          />
            <Text style={{
              fontSize:20
            }}>Phạm Minh Tuấn</Text>
        </View>
        <View style={{
          borderWidth:0.3
        }}></View>
        <View style={{
          flex:1,
          flexDirection:'column',
          alignItems: 'center',
          justifyContent:'space-around'
        }}>
          <TouchableOpacity>
            <Text style={{
              fontSize:20
            }}>Thông Tin Cá Nhân</Text>
          </TouchableOpacity>
         
          <TouchableOpacity>
            <Text style={{
              fontSize:20
            }}>Các Bài Đã Đăng</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{
              fontSize:20
            }}>Đổi Mật Khẩu</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flex:1,
          flexDirection:'column',
          alignItems: 'center',
          justifyContent:'space-evenly'
        }}>
          <TouchableOpacity>
            <Text style={{
              fontSize:20
            }}>Đăng Xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}