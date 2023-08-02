import React from 'react';
import { Text, Platform, View, StyleSheet, Image } from 'react-native';
//import { useFonts, Roboto_100Thin } from '@expo-google-fonts/roboto';
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette';
import icon from '../../assets/imgs/icon.png';

function Cabecalho() {
    //executar a fonte
  const [fonteLoaded] = useFonts({
    //Roboto_100Thin,
    Courgette_400Regular,
  });

  if (!fonteLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'Courgette_400Regular',
    fontSize: 28,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 10,
    color: '#888',
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default Cabecalho;
