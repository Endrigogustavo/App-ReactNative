import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeScreen({ navigation }) {
  return ( 
    <View style={styles.container}>
      <Text style={styles.logo}>Animes</Text>
      <Text style={styles.sub}>Melhor app de animes do Brasil</Text>
      <ImageBackground
      source={require('../assets/X.jpg')}
      style={{width: 410, height: 600, top: 130, zIndex: -1}}
      />

        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        style={{zIndex: 1, color: '#fff'}}
      />
      

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#011039',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  logo: {
    textAlign: 'center',
    zIndex:'1',
    fontSize: '70',
    color: '#fff',
    fontWeight: '800'
  },
  sub: {
    textAlign: 'center',
    zIndex:'1',
    fontSize: '25',
    color: '#fff',
    fontWeight: '400',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


});
