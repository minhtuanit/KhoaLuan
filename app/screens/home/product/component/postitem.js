import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Container,Item,Icon } from 'native-base';
import {widthPercentageToDP as WP,heightPercentageToDP as HP} from 'react-native-responsive-screen';
import Color from '../../../../common/color';
export default class PostItem extends Component {

  render() {
    return (
     <TouchableOpacity 
        style={{
         marginBottom: HP(0.5),
         marginTop: HP(1),
         paddingVertical:HP(2),
         borderWidth: WP(0.2),
         paddingHorizontal: WP(4),
         flexDirection:'row',
         elevation:2,
         borderRadius: 20,
         borderColor: Color.colorCommon
         }}>
        <View style={{
            flex:1
            }}>
            <Image style={{width:WP(20),height:HP(15)}} source={{uri:'https://static.chotot.com.vn/1/images/3QDrXECN27wBM4fWNd9iccH9ZiqrSVPxMbnzfh67mvxMsAN12vyUjFNncHqLqvmNaepKhMy.Hb3GTXmiV4mt85QdxMHB7M9kvx65AAqYu5CaCHkqh2Xt'}} />
        </View>
        <View style={{
            flexDirection:'column',
            flex: 3
            }}>
            <View style={{flex:2}}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize: 16,
                    color: 'red'
                }}>Mất điện thoại Apple cần tìm gấp</Text>
            </View>
            <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-between'
                }}>
                <Item>
                    <Icon name='time' />
                    <Text>12:30 Hôm Nay</Text>
                </Item>
                <Item>
                    <Text>Thừa Thiên Huế</Text>
                </Item>
            </View>
        </View>
     </TouchableOpacity>
    );
  }
}
