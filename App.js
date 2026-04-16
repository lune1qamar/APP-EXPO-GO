import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import Experiences from './screens/Experiences';
import Competences from './screens/Competences';
import Presentation from './screens/Presentation';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={({ route }) => ({
          headerShown: false,
          swipeEnabled: true,

          tabBarShowIcon: true,
          tabBarShowLabel: true,

          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
            height: 90,
            paddingBottom: 8,
          },

          tabBarLabelStyle: {
            fontSize: 10,
          },

          tabBarIndicatorStyle: {
            backgroundColor: 'red',
            height: 3,
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
        <Tab.Screen name="Experiences" component={Experiences} options={{tabBarLabel: "Expériences", }}/>
        <Tab.Screen name="Competences" component={Competences} options={{tabBarLabel: "Compétences", }}/>
        <Tab.Screen name="Presentation" component={Presentation} options={{tabBarLabel: "Présentation", }}/>
      </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#bd0505',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Nav" component={Tabs} options={{ title: 'home'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

