import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export default function Competences() {
  return (
    <ScrollView style={styles.container}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ImageBackground source= {require('../assets/moi.png')} style={styles.background} imageStyle={styles.image}>
        <View style={styles.card}>
          <Text style={styles.title}>Frontend</Text>
          <Text style={styles.text}>HTML5/CSS3</Text> 
          <Text style={styles.text}>JavaScript ES6</Text> 
          <Text style={styles.text}>Tailwind CSS</Text> 
          <Text style={styles.text}>Figma UI/UX</Text>
        </View>

        <View style={styles.card}>          
          <Text style={styles.title}>Backend</Text>
          <Text style={styles.text}>PHP (POO)</Text> 
          <Text style={styles.text}>Symfony</Text> 
          <Text style={styles.text}>MySQL/PDO</Text> 
          <Text style={styles.text}>WordPress</Text>
        </View>

        <View style={styles.card}>          
          <Text style={styles.title}>Outils</Text>
          <Text style={styles.text}>Git / GitHub</Text> 
          <Text style={styles.text}>Intégration IA</Text> 
          <Text style={styles.text}>Laragon</Text> 
          <Text style={styles.text}>Agile</Text>
        </View>

        </ImageBackground>
      </View>
    </ScrollView>
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

    title: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 12,
    },

    card: {
      backgroundColor: 'rgba(173, 26, 26, 0.56)', //rouge transparent
      padding: 20,
      margin: 10,
      borderRadius: 15,
      width: '90%',
    },

    container: {
        flex: 1,
    },
    image: {
       opacity: 0.40,
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
        fontSize: 12,
        borderWidth: 2,
        padding: 10,
        borderColor: '#fff',
        borderRadius: 6,
        margin: 5,
    },
});