import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Content, Icon } from 'native-base'

const Header = (props) => {
  return (
    <View style={styles.headerWrapper}>
      <Image 
        onPress={() => props.navigate('Home')}
        style={styles.headerLogo} 
        source={require('../assets/mighty_jaxx_logo.png')}
      />
      <View style={styles.navbarRight}>
          <Icon style={styles.icon} name='search'/>
          <Icon onPress={() => props.navigate('Login')} style={styles.icon} name='person'/>
          <Icon style={styles.icon} name='menu'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerLogo: {
    position: 'absolute',
    left: 20,
    top: 20,
    height: 80,
    width: 80,
    zIndex: 10,
  },
  headerWrapper: {
    flex: 0,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    marginLeft: -10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  navbarRight: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    marginLeft: 110,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  icon: {
    marginRight: 20,
    fontSize: 24,
  }
});

export default Header
