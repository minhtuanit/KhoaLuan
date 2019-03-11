import { AsyncStorage } from 'react-native';

const SetKey = (key, data) => {
  return AsyncStorage.setItem(key, data)
    .then(() => {
      console.log(`Lưu ${key} thành công`);
      return { error: false };
    })
    .catch(error => {
      console.log(`Lưu ${key} thất bại`, error);
      return { error: true };
    });
}

const GetKey = async (key) =>  {
  const value = await AsyncStorage.getItem(key);
  if( value != null ){
      return {error:false,data:value};
  }
  else{
      return {error:true,data:null};
  }
}

export {SetKey,GetKey}
