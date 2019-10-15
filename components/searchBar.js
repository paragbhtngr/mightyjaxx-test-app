import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      query: ''
    }
  }
  
  render() {
    return (
      <View style={styles.searchContainer}>
        <Item>
          <Icon name='search' />
          <Input 
            value={this.state.query}
            placeholder='Search here'
            onChangeText={(text) => {this.setState({ query: text })}}
          />
          <Button onPress={() => { this.props.handleSearch(this.state.query) }} style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </Button>
        </Item>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    height: 100,
    width: '100%',
    zIndex: 2,
    top: 80,
    padding: 10,
    paddingTop: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  textInput: {
    borderColor: 'lightgrey',
    borderWidth: 2,
    height: 40,
    width: '100%',
    marginBottom: 20,
    flex: 0,
  },
  inputLabel: {
    fontFamily: 'barlow-medium',
    fontSize: 18,
    color: 'grey',
    textTransform: 'uppercase',
    marginBottom: 5,
  }, 
  button: {
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {
    fontFamily: 'barlow-regular',
    fontSize: 18,
    color: 'white',
    textTransform: 'uppercase',
  },
})