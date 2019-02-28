import React, { Component } from 'react'
import { Text,Button, View,StyleSheet,FlatList,ToastAndroid} from 'react-native' 
import ItemLoai from './component/itemloai';
import Style from '../../common/style';
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={[Style.layoutCommon]}> 
        
        <FlatList numColumns={2} data={[
        {
            image:'https://static.chotot.com.vn/storage/marketplace/home/category/cho-tot-nha.png',
            title:'Tìm Nhà'
        },{
            image:'https://static.chotot.com.vn/storage/marketplace/home/category/cho-tot-xe.png',
            title:'Tìm Xe'
        },{
            image:'https://static.chotot.com.vn/storage/marketplace/home/category/do-dien-tu.png',
            title:'Tìm Đồ Điện Tử'
        },{
            image:'https://static.chotot.com.vn/storage/marketplace/home/category/thu-cung.png',
            title:'Tìm Thú Cưng'
        }]}
            renderItem={({item}) => (<ItemLoai image={item.image} title={item.title}/>)}
        >

        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});
