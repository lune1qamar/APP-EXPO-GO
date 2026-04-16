import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Experiences from './screens/Experiences';
import Competences from './screens/Competences';
import Presentation from './screens/Presentation';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
            height: 65,
            paddingBottom: 8,
          },

          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'white',

          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Experiences') iconName = 'briefcase';
            else if (route.name === 'Competences') iconName = 'code-slash';
            else if (route.name === 'Presentation') iconName = 'person';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Experiences" component={Experiences} />
        <Tab.Screen name="Competences" component={Competences} />
        <Tab.Screen name="Presentation" component={Presentation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}