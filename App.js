import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,Text, Button ,Image,StyleSheet} from 'react-native';
import { useState } from 'react';

 const Stack = createNativeStackNavigator();



 const Home =(props) =>{
  const list = [
    {id: 1, name: 'Bún bò', mssv: 35000},
    {id: 2, name: 'Bún trộn', mssv: 35000}
];
  const nav = props.navigation;
    return(
      <View>
      <Text>Home</Text>
        <Image
        source={{uri:'https://picsum.photos/50'}}
        style={styles.productImage}
        />
      <Button 
      title='Quản lý'
      onPress={() => nav.navigate('Quản lý',
      {
        id: 1,
        name: "Sản phẩm 1",
        mssv: 30000
      })}/>
       <Button 
      title='About'
      onPress={() => nav.navigate('About',
        {
          id: 1,
          name: "Trần Minh Quân",
          mssv: 'Ph19466',
         
        }
        )}/>
      </View>
        
    )
 }
 
 const Qly = (props) =>{
  const {id} = props.route.params;
  const {name} = props.route.params;
  const {mssv} = props.route.params;
  // const {route} = props.route;

  // nếu params có chuyền sang name thì lấy 
  // khong thì sẽ gán mạc định 'Manager'
  
  return(
  <View>
      <Text>ID = {id}</Text>
      <Text>name = {name}</Text>
      <Text>price = {mssv}</Text>
      </View>
  )
  

 }
 const About = (props) => {
  const route = props.route;

  const nameTuHome = route.params.name || 'Manager';
  const mssvTuHome = route.params.mssv || 'Manager';
  return(
    <View>
        <Text>Name = {nameTuHome}</Text>
        <Text>MSSV = {mssvTuHome}</Text>
        </View>
    )

}
export default function App() {
  
  return (
  
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home' component={Home}/>
        <Stack.Screen 
        name='Quản lý' component={Qly}/>
        <Stack.Screen 
        name='About' component={About}/>
      
    </Stack.Navigator>
</NavigationContainer>
  
  );
}


const styles = StyleSheet.create({
  productImage: {width: 50, height: 50}
});