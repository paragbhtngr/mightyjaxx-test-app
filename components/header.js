import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Content, Icon } from 'native-base'

import SearchBar from './searchBar'

class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      showSearch: false,
    }
  }
  render() {
    return (
      <>
      <View style={styles.headerWrapper}>
        <Image 
          onPress={() => this.props.navigate('Home')}
          style={styles.headerLogo} 
          source={require('../assets/mighty_jaxx_logo.png')}
        />
        <View style={styles.navbarRight}>
            <Icon onPress={() => this.setState({ showSearch: true })} style={styles.icon} name='search'/>
            <Icon onPress={() => this.props.navigate('Login')} style={styles.icon} name='person'/>
            <Icon style={styles.icon} name='menu'/>
        </View>
      </View>
      { this.state.showSearch && 
        <SearchBar 
          handleSearch={(q) => { 
            this.setState({ showSearch: false })
            // ideally, connect to redux for app state management
            this.props.navigate('Home')
          }}
        /> 
      }
      </>
    )
  }
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
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    zIndex: 10,
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
})

export default Header
