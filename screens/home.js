import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import SearchResult from '../components/searchResult'
import Header from '../components/header'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      query: 'xxray',
      results: [{
        img: 'https://cdn.shopify.com/s/files/1/0701/0143/products/Mighty_Jaxx_Jason_Freeny_Adventure_Time_XXRAY_BMO_1s_dd76b025-ed10-4d07-a4b1-7190917c2eea_320x.png?v=1557496197',
        category: 'XXRay',
        shippingStatus: 'preorder',
        title: 'XXRay Adventure Time BMO',
        price: 150.00,
        currency: '$',
        available: false,
      }, {
        img: 'https://cdn.shopify.com/s/files/1/0701/0143/products/Mighty_Jaxx_Jason_Freeny_Adventure_Time_XXRAY_Finn_1s_d03c8117-f660-4a3f-ab8a-d9d4992dc7b6_320x.png?v=1557496231',
        category: 'XXRay',
        shippingStatus: 'ready_to_ship',
        title: 'XXRay Adventure Time Finn',
        price: 150.00,
        currency: '$',
        available: false,
      }, {
        img: 'https://cdn.shopify.com/s/files/1/0701/0143/products/Mighty_Jaxx_Jason_Freeny_Adventure_Time_XXRAY_Jake_1s_9077c9b7-85d7-4504-bf60-e5f05a50e11c_320x.png?v=1557496215',
        category: 'XXRay',
        shippingStatus: 'preorder',
        title: 'XXRay Adventure Time Jake',
        price: 150.00,
        currency: '$',
        available: false,
      }]
    }
  }
  
  render() {
    return (
      <View style={styles.appContainer}>
        <Header navigate={this.props.navigation.navigate}/>
        <View style={styles.container}>
          {/* <Text>Home Screen</Text>
          <Button
            title="Go to Login"
            onPress={() => this.props.navigation.navigate('Login')}
          /> */}

          <Text style={styles.searchTitle}>Search results for {this.state.query}</Text>
          <View style={styles.searchResultsContainer}>
            { this.state.results.map((result, index) => {
              return (
                <SearchResult key={index}
                  img={result.img}
                  shippingStatus={result.shippingStatus}
                  category={result.category}
                  title={result.title}
                  available={result.available}
                  price={result.price}
                  currency={result.currency}
                />
              )
            })}
          </View>
        </View>
      </View>
    );
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
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 20,
  },
  searchTitle: {
    fontFamily: 'barlow-medium',
    textTransform: 'uppercase',
    textAlign: 'left',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  searchResultsContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }
});

export default HomeScreen