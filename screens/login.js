import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Homepage"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen