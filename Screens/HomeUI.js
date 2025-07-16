import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


export default function HomeUI() {
        const navigation = useNavigation();

    return (
    <View style={styles.container}>
    <View>
      <Image
       source={require('../assets/logo.png')}
       style={styles.logo}
       />
    </View >
    <View style={styles.cont2}>
    <Text style={styles.mheading}>Getting things done</Text>
    <Text style={styles.p}>Just a click away from planning your tasks.</Text> 
    </View>

    <View style={styles.btnContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
      >
    <FontAwesome style={styles.arrow} name="long-arrow-right" size={120} />
     </TouchableOpacity>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cont2:{
    flex: 1,
    backgroundColor: '#fff',

  },
  mheading:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginLeft: 30,
    marginTop: 100,
    fontWeight: '800',
  },
  p: {
    fontSize: 16,
    color: '#000',
    marginLeft: 30,
    // textAlign: 'center',
    lineHeight: 25,
    fontFamily: 'Arial',
    fontWeight: '600',
    letterSpacing: 0.3,
    textAlignVertical: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 4 },
  },
  logo:{
    width: 200,
    height: 200,
    marginLeft: 50,
    marginTop: 150,
    borderRadius: 100,
    borderWidth: 0,
    borderColor: '#000',
  },
  btnContainer: {
    backgroundColor: '#148c7c',
    width: 500,
    height: 250,
    marginBottom: 0,
    borderTopLeftRadius: 250, 
  borderTopRightRadius: 250,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
    marginLeft: 170,
    justifyContent: 'center',

  },
  arrow:{
  marginLeft: 80,
  color: '#fff',
  marginTop: 50, 
},
});
