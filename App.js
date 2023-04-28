import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
// Importar componentes para la navegación y generación de la pila de screens
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons} from '@expo/vector-icons';
import Contacts from './screens/Contacts';
import { useState } from 'react';
let users = [
  {email:'hruiz@gmail.com',name:'Humberto Ruiz',password:'11', role:1},
  {email:'jdoe@gmail.com',name:'John Doe',password:'22', role:2}
]

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTabs'
      >
        <Stack.Screen name='HomeTabs' component={HomeTabs} options={{title:'Sistema Prueba'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errormess, setErrormess] = useState('')
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:20}}>Inicio de Sesión</Text>
      <TextInput 
      label='Correo Electronico'
      mode='outline'
      left={<TextInput.Icon icon='account'/>}
      onChangeText={email => setEmail(email)}
      value={email}
      />
      <TextInput 
      label='Contraseña'
      mode='outline'
      right={<TextInput.Icon icon='eye'/>}
      onChangeText={password => setPassword(password)}
      value={password}
      secureTextEntry
      />
      <Button
        icon='login'
        mode='contained'
        onPress={()=>{
          let findUser = users.find(usr => usr.email == email && usr.password == password);
          if (findUser != undefined) {
            const {name, email} = findUser
            setErrormess('')
            setEmail('')
            setPassword('')
            navigation.navigate('Contacts',{name:name, email:email})
          }else{
            setErrormess('Correo y/o contraseña incorrecto ')
          }
        }}
      >
        Inicio Sesión
      </Button>
      <Text>{errormess}</Text>
    </View>
  );
}

function ProductsScreen({navigation}){
  let title = 'Este es el titulo'
  let fullname = 'Pepito Perez'
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:10}}>Estamos en Productos</Text>
    </View>
  );
}

function HomeTabs(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',
        tabBarActiveBackgroundColor:'orange',
        tabBarInactiveBackgroundColor:'powderblue'
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarStyle:{display:'none'},
        tabBarIcon: (tabInfo) => (<MaterialIcons name='home' size={22}/>)
      }}/>
      <Tab.Screen name='Products' component={ProductsScreen} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name='apps' size={22}/>)
      }}/>
      <Tab.Screen name='Contacts' component={Contacts} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name='chat' size={22}/>)
      }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
