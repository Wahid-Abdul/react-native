/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Alert,Button,FlatList,Picker,Slider,Switch,AlertIOS} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Douad,\n' +
    'Sr dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.state = {language:'python', creditlimit:120000};

    // Toggle the state every second
    
  }
  
  _onPressButton(){
    // Alert.alert("alert is working")

    Alert.alert(
      'Sync Complete',
      'All your data are belong to us.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Install',
          onPress: () => console.log('Install Pressed'),
        },
      ]
     );
  }
  getvalue(){
    // return fetch('https://facebook.github.io/react-native/movies.json').then(alert())
    alert()
  }
  render() {
    return (
      <View>
        <ScrollView>

        <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />

      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{instructions}</Text> 
    
      </View>
        <View style = {styles.box}>
        <View style = {styles.insideBox}>
        
        </View>
       </View>

        <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item,index}) => 
              {
                if(index%2 == 0)
                  return  <Text style={styles.item}>{item.key} {index}</Text>
                else
                  return  <Text style={styles.itemOdd}>{item.key} {index}</Text>

              }
            
            }
            
          />
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text>        {this.state.creditlimit}</Text>
        <Slider  
            style={{ height: 50, width: '100%' }} 
            maximumValue={1200000} minimumValue={120} 
            thumbTintColor={'aqua'} 
            minimumTrackTintColor ={'green'}
            value={this.state.creditlimit}
            onValueChange = {(item,index) => this.setState({creditlimit:item})}
            step={-1}
            >

        </Slider>
        
        <Switch
          style={{ height: 50, width: '100%' }}
          disabled={true}  
        >

        </Switch>

       
       </ScrollView>

      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box:{
    height:300,
    width: 300,
    backgroundColor:'rgba(123,213,45,0.4)',
  }, 
  insideBox:{
    height:'10%',
    width: 20,
    backgroundColor:'rgba(0,0,0,0.8)',
  },
  itemOdd:{
    backgroundColor:'rgba(20,20,20,.1)'

  }
});
