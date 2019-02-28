import React, { Component } from 'react'
import { Text, View,FlatList,StyleSheet,ToastAndroid,Picker } from 'react-native'
import {widthPercentageToDP as WP,heightPercentageToDP as HP} from 'react-native-responsive-screen';
import {Item,Icon,Input, Container, Toast} from 'native-base';
import Color from '../../../common/color';
import Style from '../../../common/style';
import Icons from 'react-native-vector-icons/FontAwesome5';
import PostItem from './component/postitem';
import { ScrollView } from 'react-native-gesture-handler';
export default class ProductScreen extends Component {

  render() {
    return (
      <Container>
          <View style={{backgroundColor:Color.colorCommon}}>
                <Picker style={{paddingHorizontal:WP(20)}}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Item>
                    <Icon name='search' />
                    <Input placeholder="Tìm kiếm sản phẩm..." />
                </Item>
          </View>
          <ScrollView>
            <View style={{flexDirection:'column'}}>
                    <FlatList data={[{},{},{},{},{},{},{},{},{},{},{},{}]}
                        renderItem={({item}) => <PostItem/>  }
                    />
            </View>
          </ScrollView>
      </Container>
    )
  }
}

const Styles = StyleSheet.create({

});