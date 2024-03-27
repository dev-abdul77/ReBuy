import { View,Text,TouchableOpacity,Image } from "react-native";
import { StyleSheet } from "react-native";
const LoginCustomHeader= ({navigation}) =>{
    return(
      <View style={{ backgroundColor:'#f5f5f5', flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/images/back.png')} style={styles.backIcon} />
      </TouchableOpacity>
        <Text style={{fontSize:32, borderBottomWidth:0, textAlign:'right', fontFamily:'Dosis-Bold', paddingTop:55 , paddingRight:35, color:'#3c3c3c'}}>ReBuy</Text>
      </View>
    )
  }

export default LoginCustomHeader;

const styles = StyleSheet.create({
    backButton: {
      borderColor:'#555555',
      borderWidth:1,
      borderRadius: 12,
      width: 46,
      height: 46,
      color:'black',
      marginTop:55,
      marginLeft:35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent', // Set background color to transparent
    },
    backIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
  });