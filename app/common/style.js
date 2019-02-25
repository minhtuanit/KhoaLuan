import {StyleSheet} from 'react-native';
import {widthPercentageToDP as WP,heightPercentageToDP as HP} from 'react-native-responsive-screen';


const Style = StyleSheet.create({
    layoutCommon:{
        paddingHorizontal: WP(1.5),
    }
});

export default Style;