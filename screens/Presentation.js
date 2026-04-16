import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Presentation() {
  return (
     <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>À Propos de moi</Text></View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <ImageBackground source= {require('../assets/moi.png')} style={styles.background} imageStyle={styles.image}>
    <View style={styles.card}>
      <Text style={styles.title}>Ma vision</Text>
      <Text style={styles.text}>Je débute en création de sites performants, j'allie la rigueur technique du développement Backend (Symfony/PHP) à l'élégance du Design UI/UX. Mon objectif est de transformer des idées en expériences numériques fluides et marquantes.</Text>
    </View>  
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
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    card: {
      backgroundColor: 'rgba(0, 0, 0, 0.69)', //blanc transparent
      padding: 20,
      borderRadius: 15,
      width: '90%',
    },
    title: {
      color: '#b30202',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
    }
});