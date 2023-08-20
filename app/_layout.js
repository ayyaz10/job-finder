import {Stack} from  "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    });

    const onLayoutRootView = useCallback( async() => {
        if(fontsLoaded) {
            await SplashScreen.hide.async();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView}/>
}

export default Layout;


// import {View, Text, TouchableOpacity, Image} from 'react-native'

// import styles from './popularjobcard.style'

// const PopularJobCard = ({ item, selectedJob, handleCardPress}) => {
//   return (
//     <TouchableOpacity 
//       style={styles.container(selectedJob, item)}
//       onPress={() => handleCardPress(item)}
//     >
//       <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
//         <Image 
//           source={{ uri: item.employer_logo}}
//           resizeMode='contain'
//           style={styles.logoImage}
//         />
//       </TouchableOpacity>
//       <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
//     </TouchableOpacity>
//   )
// }

// export default PopularJobCard;
