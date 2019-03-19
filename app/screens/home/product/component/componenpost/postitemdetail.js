import React, { Component } from 'react';
import { View, Text,ScrollView,Image,TouchableOpacity } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {Container,Content, Icon, Textarea} from 'native-base';
import {widthPercentageToDP as WP,heightPercentageToDP as HP} from 'react-native-responsive-screen';

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <View style={{
        flex:1
      }}>
        <View style={{
          flex:4,
          backgroundColor:'yellow'
        }}>
          <ImageSlider images={[
            'http://placeimg.com/640/480/any',
            'http://placeimg.com/640/480/any',
            'http://placeimg.com/640/480/any'
          ]}/>
         
        </View>
        <View style={{
          flex:6,
        }}>
          <ScrollView>
            <View style={{
             alignItems:'center'
             ,marginBottom: 10
            }}>
              <Text style={{
                fontWeight:'bold'
                ,fontSize: 20,
                color:'red'
              }}>Mất điện thoại Apple cần tìm gấp</Text>
            </View>
            <View style={{
              borderWidth:0.3,
              borderColor:'black',
            }}/>
            <View style={{
              flexDirection:'row',
              justifyContent:'center',
              marginVertical:20,
              
            }}>
              <TouchableOpacity style={{
                paddingHorizontal:WP(15)
                ,borderRadius:10
              }}>
                <Icon name='phone' type='AntDesign'/>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  paddingHorizontal:WP(15)
                }}
              >
              <Icon name='chat' type='Entypo'/>
              </TouchableOpacity>
            </View>
            <View style={{
                borderWidth:0.3,
                borderColor:'black'
              }} />
            <View style={{
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center'
            }}>
              <Text style={{
                fontSize:18
              }}>Hôm qua tôi đi từ đoạn đường xxx -> yyy thì đánh rơi chiếc iphone 6 như trên 
              Ai có thông tin thì liên hệ hoặc chát qua tôi,tôi xin chân thành cám ơn
              Hôm qua tôi đi từ đoạn đường xxx -> yyy thì đánh rơi chiếc iphone 6 như trên 
              Ai có thông tin thì liên hệ hoặc chát qua tôi,tôi xin chân thành cám ơn
              Hôm qua tôi đi từ đoạn đường xxx -> yyy thì đánh rơi chiếc iphone 6 như trên 
              Ai có thông tin thì liên hệ hoặc chát qua tôi,tôi xin chân thành cám ơn
              Hôm qua tôi đi từ đoạn đường xxx -> yyy thì đánh rơi chiếc iphone 6 như trên 
              Ai có thông tin thì liên hệ hoặc chát qua tôi,tôi xin chân thành cám ơn
              Hôm qua tôi đi từ đoạn đường xxx -> yyy thì đánh rơi chiếc iphone 6 như trên 
              Ai có thông tin thì liên hệ hoặc chát qua tôi,tôi xin chân thành cám ơn
              Hôm qua tôi đi từ đoạn đường xxx -> yyy thì đánh rơi chiếc iphone 6 như trên 
              Ai có thông tin thì liên hệ hoặc chát qua tôi,tôi xin chân thành cám ơn
              Hôm qua tôi đi từ đoạn đường xxx -> yyy thì đánh rơi chiếc iphone 6 như trên 
              Ai có thông tin thì liên hệ hoặc chát qua tôi,tôi xin chân thành cám ơn
              Hôm qua tôi đi từ đoạn đường xxx -> yyy thì đánh rơi chiếc iphone 6 như trên 
              Ai có thông tin thì liên hệ hoặc chát qua tôi,tôi xin chân thành cám ơn
              Hôm qua tôi đi từ đoạn đường xxx -> yyy thì đánh rơi chiếc iphone 6 như trên 
              Ai có thông tin thì liên hệ hoặc chát qua tôi,tôi xin chân thành cám ơn
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
