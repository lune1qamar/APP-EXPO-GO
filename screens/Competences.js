import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Competences() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Compétences</Text></View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <ImageBackground source= {require('../assets/moi.png')} style={styles.background} imageStyle={styles.image}>
      <Text style={{ color: 'white' }}>Mes Compétences</Text>
      </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        justifyContent: 'center',
        height: 120,
        paddingLeft: 30,
    },
    headerText: {
        color: '#b30202',
        fontSize: 25,
        fontWeight: 'bold',
    },

    container: {
        flex: 1, 
        backgroundColor: '#000',
    },
    image: {
       opacity: 0.30,
       resizeMode: 'cover',
    },
     background: {
       flex: 1,
       width: '100%',
       height: '100%',
       alignItems: 'center',
       justifyContent: 'center',
    },

    text: {
        color: 'white',
        fontSize: 18,
    },
});