import React, { Component } from 'react';
import { View, Text,ImageBackground,Image,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as WP,heightPercentageToDP as HP} from 'react-native-responsive-screen';

export default class ItemLoai extends Component {
  render() {
    const {title,image} = this.props;
    return (
      <TouchableOpacity style={{marginVertical:HP(0.5),marginHorizontal:WP(0.3),borderRadius:20,height:HP(20),width:WP(48)}}>
        <Image style={{position:'absolute',borderRadius:10,width:WP(48),height:HP(20)}} source={{uri:image}} />
        <Text style={{color: '#393939',fontSize: 20,fontWeight: 'bold',textAlign:'center'}}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
