import { View, Text, ImageBackground, StyleSheet, ScrollView, Image } from 'react-native';

export default function Experiences() {
  return (
    <View style={styles.container}>
      <ImageBackground source= {require('../assets/profil.png')} style={styles.background} imageStyle={styles.image}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollContent}>
          <View style={styles.line}>{/* ligne verticale faut que je la mets en absolute */}</View>

          <View style={styles.row}>
            <View style={styles.textContainer}>
              <Text style={styles.text2}>Centre de formation Garage 404</Text>
              <Text style={styles.text}>Passage Titre Professionnel RNCP Niveau 5 — Année préparatoire en Développeur Web et Web Mobile (en cours).</Text>
            </View>

            <View style={styles.imageContainer}>
              <Text style={{fontWeight: 'bold', fontStyle: 'italic', color: '#fff'}}>2025 / 2026</Text>
              <Image source={require('../assets/garage.png')} style={{ width: 80, height: 80, borderRadius: 40 }}/>
            </View>
          </View>



          <View style={styles.row}>
            <View style={styles.imageContainer}>
              <Text style={{fontWeight: 'bold', fontStyle: 'italic', color: '#fff'}}>2023 / 2024</Text>
              <Image source={require('../assets/google.png')} style={{ width: 80, height: 80, borderRadius: 40 }}/>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text2}>Google Career Certificates</Text>
              <Text style={styles.text}>Certification professionnelle en UI/UX Design suivie et accompagnée par la mission locale de Paris 75011</Text>
            </View>
          </View>



          <View style={styles.row}>
            <View style={styles.textContainer}>
              <Text style={styles.text2}>Digital Campus Paris</Text>
              <Text style={styles.text}>Bachelor en Développeur Web & Applications Mobiles</Text>
            </View>

            <View style={styles.imageContainer}>
              <Text style={{fontWeight: 'bold', fontStyle: 'italic', color: '#fff'}}>2019 / 2022</Text>
              <Image source={require('../assets/dc.jpg')} style={{ width: 80, height: 80, borderRadius: 40 }}/>
            </View>
          </View>




          <View style={styles.row}>
            <View style={styles.imageContainer}>
              <Text style={{fontWeight: 'bold', fontStyle: 'italic', color: '#fff'}}>2018 / 2019</Text>
              <Image source={require('../assets/GJ.png')} style={{ width: 80, height: 80, borderRadius: 40 }}/>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text2}>Lycée Grand Jasmin </Text>
              <Text style={styles.text}>Baccalauréat Sciences Physiques / Chimie - Mention Bien </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground> 
    </View>
  );
}

{/* */}

const styles = StyleSheet.create({

    scrollContent: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingTop: 40,
    },


    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
    },

    row: {
      flexDirection: 'row',
      width: '100%',
      marginVertical: 30,
    },

    textContainer: {
      width: '50%',
      padding: 10,
    },

    imageContainer: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    line: {
      backgroundColor: '#ffffff9d',
      borderRadius: 30,
      width: 2,
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: 2,

    },

    image: {
       opacity: 0.60,
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
        fontSize: 15,
        letterSpacing: 1,
    },

    text2: {
      fontWeight: 'bold', 
      fontStyle: 'italic', 
      color: 'red',
      fontSize: 15,
      letterSpacing: 2
    }
});