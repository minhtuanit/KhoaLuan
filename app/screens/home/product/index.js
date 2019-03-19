import React, { Component } from 'react'
import { Text, View,FlatList,StyleSheet,ToastAndroid,Picker,Button } from 'react-native'
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
          <View >
                <View style={{backgroundColor:Color.colorCommon,borderRadius:WP(10)}}>
                    <Picker style={{paddingHorizontal:WP(20)}}>
                        <Picker.Item label="---Chọn Địa Điểm---" value="java" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <Item style={{marginTop:HP(1),backgroundColor:Color.colorCommon,borderRadius:WP(10)}}>
                    <Icon name='search' />
                    <Input placeholder="Tìm kiếm sản phẩm..." />
                </Item>
          </View>
         
          <ScrollView>
            <View style={{flexDirection:'column'}}>
          
                    <FlatList data={[{},{},{},{},{},{},{},{},{},{},{},{}]}
                        renderItem={({item}) => <PostItem navigation={this.props.navigation} />  }
                    />
            </View>
          </ScrollView>
      </Container>
    )
  }
}

const Styles = StyleSheet.create({

});