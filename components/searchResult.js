import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const SearchResult = (props) => {
  return (
    <View style={styles.container}>
      { props.shippingStatus === "ready_to_ship" ? <View style={styles.shipBadge}><Text style={styles.shipText}>READY TO SHIP</Text></View> : 
        props.shippingStatus === "preorder" ? <View style={styles.preorderBadge}><Text style={styles.preorderText}>PREORDER</Text></View> : null }
      <Image
          style={styles.image}
          source={{uri: props.img}}
      />
      <Text style={styles.category}>{props.category}</Text>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.status}>{props.status}</Text>
      <Text style={styles.price}>{props.available ? `${props.currency} ${props.price}` : 'Sold Out'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightgreen',
    padding: 10,
    width: '50%',
  },
  image: {
    width: '100%', 
    height: 120, 
    resizeMode: 'contain'
  },
  category: {
    fontFamily: 'barlow-regular',
    fontSize: 18,
    color: 'grey',
  },
  title: {
    fontFamily: 'barlow-medium',
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: -15,
  },
  price: {
    fontFamily: 'barlow-regular',
    fontSize: 18,
  },
  preorderBadge: {
    backgroundColor: 'black',
    borderRadius: 200,
    height: 30,
    width: 30,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  preorderText: {
    fontFamily: 'barlow-medium',
    color: 'white',
    fontSize: 6,
  },
  shipBadge: {
    backgroundColor: 'yellow',
    borderRadius: 200,
    height: 30,
    width: 30,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  shipText: {
    fontFamily: 'barlow-medium',
    color: 'black',
    fontSize: 8,
    textAlign: 'center',
  }
})

export default SearchResult
