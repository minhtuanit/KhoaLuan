import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 320,
    }
  });

const slides = [
    {
      key: 'sl1',
      title: 'Tìm Kiếm Đồ Thất Lạc Nhanh Chóng',
      text: 'Với hệ thống hiện đại và nhiều người dùng bạn có thể tìm lại đồ thất lạc một cách nhanh chóng',
      textColor:'black',
      image:'http://saigonship.net/public/uploads/images/images/dich-vu-giao-hang-tai-sai-gon.png',
      imageStyle: styles.image,
      backgroundColor: '#22bcb5',
    },
    {
      key: 'sl2',
      title: 'Tiết Kiệm Tiền Bạc',
      text: 'Kết nối với nhiều người dùng nên bạn không cần tốn chi phí để đăng tin,tất cả là miễn phí',
      image:'https://znews-photo.zadn.vn/w660/Uploaded/neg_efjpyye/2018_08_23/httpsblueprintapiproductions3amazonawscomuploadscardimage461042785ab52210e94a89a4d3891e6089f5a4.jpg',
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'sl3',
      title: 'Giúp Đỡ 24/7',
      text: 'Với đội ngũ tư vấn viên luôn sẵn sàng giúp đỡ khi bạn có sự cố',
      image:'https://borealist.com/wp-content/uploads/2018/07/training-zone-hours-24-7-call-answering.jpg',
      imageStyle: styles.image,
      backgroundColor: '#59b2ab',
    }
  ];

  
  

export default class IntroScreen extends Component {
  constructor(props){
      super(props);
      this.state = {
        showRealApp: false
      }
  }

  render() {
    return (
        <AppIntroSlider slides={slides}
         onDone={() => this.props.navigation.navigate('LoginIn')}/>
    )
  }
}