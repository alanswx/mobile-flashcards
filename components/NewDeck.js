import React, { Component } from 'react'
import { View , Text, TextInput, TouchableHighlight,TouchableOpacity, Platform, StyleSheet, FlatList, StatusBar} from 'react-native'
import {blue,white} from '../utils/colors'
import {Constants} from 'expo'
import {saveDeckTitle} from '../utils/storage'
import { NavigationActions } from 'react-navigation'



export class NewDeck extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'New Deck'
    }
  }

  state = {
    text:''
  }

  toDeck = (deck) => {
    //this.props.navigation.dispatch(NavigationActions.back())
    //this.props.navigation.navigate('DeckView',{entryId: deck})

      this.props.navigation.dispatch({
        key: 'DeckView',
        type: 'ReplaceCurrentScreen',
        routeName: 'DeckView',
        params: { entryId: deck },
      });


   }


  saveTitle(){
    saveDeckTitle(this.state.text)
    this.toDeck(this.state.text)
  }
  render() {
    return (
      <View>
      <Text>What is the title of your new deck?</Text>
      <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             onChangeText={(text) => this.setState({text})}
             value={this.state.text}
           />
           <TouchableHighlight
           onPress={() => {
           this.saveTitle(true);
           }}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>Create Deck</Text>
           </View>
           </TouchableHighlight>
      </View>
    )
  }

}


const styles = StyleSheet.create({

  button: {
    padding: 10,
    backgroundColor: blue,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  buttonText :{
    color: white,
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },



});
