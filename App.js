import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import Contacts from './screens/Contacts';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      ialRouteName='Home'
      >
        <Stack.Screen name='HomeTabs' component={HomeTabs}  options={{title:'sistema de prueba'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20}}>Inicio de Sesion</Text>
    </View>
  );
}

function ProductScreen({navigation}) {
  let title='Clarines'
  let name='Contactalo'
  return (
    <View style={styles.container}>
      <Text>Estamos en Productos</Text>
      <Button
      title="Ir a Contacts"
      onPress={()=>{
        navigation.navigate('Contacts', {title:title, name:name})
      }}
      >
      </Button>
    </View>
  );
}

function HomeTabs(){
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',
        tabBarActiveBackgroundColor:'aqua',
        tabBarInactiveBackgroundColor:'powderblue'
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon:(tabInfo)=>(<MaterialIcons name="person"/>)
      }}></Tab.Screen>
      <Tab.Screen name='Products' component={ProductScreen}></Tab.Screen>
      <Tab.Screen name='Contacts' component={Contacts}></Tab.Screen>
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
