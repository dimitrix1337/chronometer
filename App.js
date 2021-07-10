import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableHighlight, Dimensions, TextInput, Switch } from 'react-native';
import { SetVisual, Color_set, wp, hp } from './styles';
import { Timer } from './packages/timer'
import { MyButton } from './packages/my_button'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default class Tabs extends Component {
  render(){
    return (

    <NavigationContainer>
      <Tab.Navigator
            initialRouteName="Timer"
            tabBarOptions={{
              activeTintColor: 'black',
              activeBackgroundColor:'gray'
            }}
          >
          <Tab.Screen
              name="Timer"
              component={Time}
              options={{
                tabBarLabel: 'Time',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="timer" color={Color_set[0]} size={30} />
                ),
              }}
          />
          <Tab.Screen
              name="Rounds"
              component={Limite}
              options={{
                tabBarLabel: 'Rounds',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={Color_set[0]} size={30} />
                ),
              }}
          />
          <Tab.Screen
              name="Records"
              component={Records}
              options={{
                tabBarLabel: 'Records',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={Color_set[0]} size={30} />
                ),
              }}
          />
      </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

class Records extends Component {
  render(){
    return(
      <View style={SetVisual.records_background}>
          <Text style={{marginHorizontal:wp('30'), marginTop:hp('2'), fontSize:(wp('3')+hp('3'))}}>RECORDS</Text>
              <View style={SetVisual.records_list}>
                  <View style={SetVisual.each_record}></View>
              </View>
      </View>
    )
  }
}


class Limite extends Component {
  render(){
    return(
      <View>
        <Text style={{color:'black', fontSize:32}}>Hola {Time.limite}</Text>
      </View>
    )
  }
}

class Time extends Component {

  constructor(){
    super()
    this.state = {
      segundos_acumulados:0,
      milesimas_unidades:0,
      milesimas_decenas:0,
      segundos_unidades:0,
      segundos_decenas:0,
      minutos_unidades:0,
      minutos_decenas:0,
      Online:true,
      color_now_play:Color_set[0],
      color_now_reset:Color_set[0],
      ButtonModePlay:true,
      limite:99,
      prelimite:0,
      isEnabled:false,
      LimitOn:false,
      color_font_time:'white',
      actual_height:250,
      actual_width:250,
      title:'EMPEZAR'

    }
  }

  onStart = () => {
    


    if (this.state.ButtonModePlay){
      this.setState({
        color_now_play:'red',
        title:'PAUSA'
      })
    }
    else{
      this.setState({
        color_now_play:'black'
      })
    }

    if (this.state.Online){
    this.setState({
      ButtonModePlay:false
    })
    this._interval = setInterval( () => {

        if ((this.state.segundos_acumulados/60)>=(this.state.limite))
          {
            clearInterval(this._interval)
            this.setState({
              color_font_time:'white',
              ButtonModePlay:true,
              Online:true,
              segundos_acumulados:0,
              milesimas_unidades:0,
              milesimas_decenas:0,
              segundos_unidades:0,
              segundos_decenas:0,
              minutos_unidades:0,
              minutos_decenas:0,
              title:'EMPEZAR',
              color_now_play:'black'
            })
            alert("HAS LLEGADO AL LIMITE ESTABLECIDO.")


            console.log(this.state.segundos_acumulados+" ||" +this.state.milesimas_unidades)
            
          }

          this.setState({
            color_font_time:'white',
            milesimas_unidades:this.state.milesimas_unidades+1
          })

          if (this.state.milesimas_unidades>9){
            this.setState({
              milesimas_unidades:0,
              milesimas_decenas:this.state.milesimas_decenas+1
            })
          }

          if (this.state.milesimas_decenas>9){
            this.setState({
              milesimas_decenas:0,
              segundos_unidades:this.state.segundos_unidades+1,
              segundos_acumulados:this.state.segundos_acumulados+1
              
            })
          }
            if (this.state.segundos_unidades>9){
              this.setState({
                segundos_unidades:0,
                segundos_decenas:this.state.segundos_decenas+1
                
              })
            }
            if (this.state.segundos_decenas>5){
              this.setState({
                segundos_decenas:0,
                minutos_unidades:this.state.minutos_unidades+1
                
              })
            }
            if (this.state.minutos_unidades>9){
              this.setState({
                minutos_unidades:0,
                minutos_decenas:this.state.minutos_decenas+1
              })
            }

    }, 10);
    this.setState({Online:false})
 }
    else{
      clearInterval(this._interval)
      this.setState({
        Online:true,
        ButtonModePlay:true,
        color_font_time:'gray',
        title:'EMPEZAR'
      })
    }
}

  onReset = () => {
    clearInterval(this._interval)
    this.setState({
      segundos_acumulados:0,
      Online:true,
      milesimas_unidades:0,
      milesimas_decenas:0,
      segundos_unidades:0,
      segundos_decenas:0,
      minutos_unidades:0,
      minutos_decenas:0,
      ButtonModePlay:true,
      color_font_time:'white',
      color_now_play:'black', 
      title:'EMPEZAR'     

    })
  }

  Verify = (value) => {

    this.setState({isEnabled: value})

    if (this.state.prelimite>0){
      if (this.state.isEnabled){
        this.setState({limite:99, LimitOn:false})
        console.log("limite DESACTIVADO = "+this.state.limite)

      }
      else{
        this.setState({limite:this.state.prelimite, LimitOn:true})
        console.log("limite ACTIVADO = "+this.state.prelimite)
      }
    }
    else{
      alert("EL limite tiene que ser mayor a 0")
      this.setState({
        isEnabled:false
      })
    }

  }


  render(){
  return (
    <ScrollView style={SetVisual.container}>

      <View style={SetVisual.box_1}>
        <View style={SetVisual.limit_mode_background}>
        <Text style={SetVisual.limit_mode}>Limite : {this.state.isEnabled? "SI" : "NO"}</Text>
        </View>
        <ImageBackground source={require('./assets/circle_back_timer.png')} style={{marginTop:0,width:this.state.actual_width, height:this.state.actual_height, justifyContent:'flex-start', alignItems:'center', padding:15}}>
        <Text style={{marginTop:50, fontWeight:'600', color:'white', marginBottom:-70, fontSize:19}}>TIEMPO</Text>
        <Timer segundos_unidades={this.state.segundos_unidades} segundos_decenas={this.state.segundos_decenas}
        minutos_unidades={this.state.minutos_unidades} minutos_decenas={this.state.minutos_decenas}
        color_font={this.state.color_font_time}
        milesimas_unidades={this.state.milesimas_unidades}
        milesimas_decenas={this.state.milesimas_decenas}

        />

        </ImageBackground>
      </View>
      <View style={SetVisual.box_3}>
      <View style={{marginHorizontal:wp('10'), marginTop:hp('10'), marginLeft:25}}>
            <View style={SetVisual.limit_input}>
                <TextInput
                style={{color:'white', textAlign:'center', fontSize:(wp('1.5')+hp('1.5'))}}
                placeholder='Límite de tiempo (min.)'
                onChangeText={limit => this.setState({prelimite:limit})}
                placeholderTextColor='white'
                />
              </View>
            <View style={{marginLeft:(wp('65')), marginTop:-50}}>
              <Switch
              style={{marginTop:15}}
              trackColor={{ false: "red", true: "red" }}
              thumbColor={this.state.isEnabled ? "white" : "black"}
              ios_backgroundColor="black"
              onValueChange={this.Verify}
              value={this.state.isEnabled}
            />
            </View>
            <Text style={{color:'black', fontWeight:'bold', marginTop:0, marginLeft:wp('67')}}>{this.state.isEnabled? "ON" : "OFF"}</Text>

      </View>
      </View>
      <View style={SetVisual.box_2}>


        <View style={{marginRight:wp('45'), marginTop:40}}>
            <MyButton 
            color={this.state.color_now_play}
            function_passed={this.onStart}
            OnPlay={this.state.ButtonModePlay}
            title={this.state.title}

      />
      </View>

          <View style={{marginLeft:wp('45'), marginTop:-hp('4')}}>
              <TouchableHighlight
                  underlayColor='red'
                  >
            <MyButton 
            color={this.state.color_now_reset}
            function_passed={this.onReset}
            OnPlay={this.state.ButtonModePlay}
            title='ELIMINAR'
            />

              </TouchableHighlight>
          </View>

      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
}
