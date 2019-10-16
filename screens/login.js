import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { Button, Input } from 'native-base'
import { AuthSession } from 'expo'
import * as Google from 'expo-google-app-auth'
import * as Facebook from 'expo-facebook'

import Header from '../components/header'

const FB_APP_ID = '2594099860674175'
const GOOGLE_AND_CLIENT_ID = '916867098436-cfveterm3j6aqtvrupql83566q7cm2u2.apps.googleusercontent.com'
const GOOGLE_IOS_CLIENT_ID = '916867098436-ig4rkgqjsep7bvgg89m41teab1cb037q.apps.googleusercontent.com'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      signedIn: false,
      email: '',
      password: '',
      result: '',
    }
  }

  handleSignInFacebook = async () => {
    try {
      const { type, token, permissions} = await Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
        permissions: ['public_profile', 'email'],
      })

      if(type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        console.log("user: ", (await response.json()))
        await this.setState({
          signedIn: true,
        })
        this.props.navigation.navigate('Home')

      } else {
        console.log("cancelled")
      }
      
    } catch (e) {
      console.log("error", e)
    }
  }

  handleSignInGoogle = async () => {
    try {
      const {type, accessToken, user } = await Google.logInAsync({
        androidClientId: GOOGLE_AND_CLIENT_ID,
        androidStandaloneAppClientId: GOOGLE_AND_CLIENT_ID,
        iosClientId: GOOGLE_IOS_CLIENT_ID,
        iosStandaloneAppClientId: GOOGLE_IOS_CLIENT_ID,
        scopes: ['profile', 'email'],
      })

      if(type === 'success') {
        console.log("user: ", user)
        await this.setState({
          signedIn: true,
        })
        this.props.navigation.navigate('Home')

      } else {
        console.log("cancelled")
      }
    } catch(e) {
      console.log("error", e)
    }
  }
  
  render() {

    return (
      <View style={styles.appContainer}>
        <Header nav={this.props.navigation}/>
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
                <View style={styles.spacer}></View>
                <Text style={styles.bodyText}> - OR - </Text>
                <View style={styles.socialButtonWrapper}>
                  <Button style={styles.buttonFacebook} onPress={() => this.handleSignInFacebook()}>
                    <Text style={styles.buttonText}>Login with Facebook</Text>
                  </Button>
                  <Button style={styles.buttonGoogle} onPress={() => this.handleSignInGoogle()}>
                    <Text style={styles.buttonText}>Login with Google</Text>
                  </Button>
                </View>
                {this.state.result ? (
                  <Text>{JSON.stringify(this.state.result)}</Text>
                ) : null}
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
  socialButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonFacebook: {
    backgroundColor: 'darkblue',
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 20,
  },
  buttonGoogle: {
    backgroundColor: 'dodgerblue',
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