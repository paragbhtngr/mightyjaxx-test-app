import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { Button, Input } from 'native-base'

import Header from '../components/header'
class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: ''
    }
  }
  
  render() {
    return (
      <View style={styles.appContainer}>
        <Header navigate={this.props.navigation.navigate}/>
        <ScrollView>
          <KeyboardAvoidingView style={{ flex: 1}} behavior="position">
            <SafeAreaView style={styles.container}>
              <Text style={styles.pageTitle}>Register / Login</Text>
              <Text style={styles.title}>New customers</Text>
              <Text style={styles.bodyText}>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</Text>
              <Button style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
              </Button>
              <View style={styles.spacer}></View>
              <Text style={styles.title}>Registered customers</Text>
              <Text style={styles.bodyText}>If you have an account with us, please log in.</Text>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Email</Text>
                <Input 
                  value={this.state.email} 
                  style={styles.textInput}
                  onChangeText={(text) => {this.setState({ email: text })}}
                  />
                <Text style={styles.inputLabel}>Password</Text>
                <Input 
                  secureTextEntry={true}
                  password={true}
                  value={this.state.password} 
                  style={styles.textInput}
                  onChangeText={(text) => {this.setState({ password: text })}}
                />
                <Button style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </Button>
              </View>
              <View style={styles.spacer}></View>
            </SafeAreaView>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 0,
    backgroundColor: '#fff',
    margin: 10,
    alignItems: 'flex-start'
  },
  inputWrapper: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'lightgreen',
    alignItems: 'flex-start',
  },
  pageTitle: {
    fontFamily: 'barlow-medium',
    textTransform: 'uppercase',
    textAlign: 'left',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontFamily: 'barlow-medium',
    textTransform: 'uppercase',
    textAlign: 'left',
    fontSize: 28,
    marginBottom: 10,
    marginTop: 10,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
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
  spacer: {
    height: 25,
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
  }
})

export default LoginScreen