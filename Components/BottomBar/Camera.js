import React, {useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const Camera = ({navigation}) => {
  const handleCameraOpen= () =>{
    const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };
      launchCamera(options, response => {
        if (response.didCancel) {
          navigation.navigate('HOME');
        } else if (response.error) console.warn('Camera Error! ', response.error);
        else {
          let imageUri = response.uri || response.assets?.[0]?.uri;
          console.log(imageUri);
        }
      });
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // Call the function to open the camera when the screen gains focus
          handleCameraOpen();
        });
    
        // Cleanup the listener when the component is unmounted
        return unsubscribe;
      }, [navigation]);
    
  
};

export default Camera;
