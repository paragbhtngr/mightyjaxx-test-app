import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import SearchResult from '../components/searchResult'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      results: [{
        img: '',
        category: 'XXRay',
        shippingStatus: 'ready_to_ship',
        title: 'XXRay Adventure Time Jake',
        price: 150.00,
        currency: '$',
        available: true,
      }, {
        img: '',
        category: 'XXRay',
        shippingStatus: 'ready_to_ship',
        title: 'XXRay Adventure Time Jake',
        price: 150.00,
        currency: '$',
        available: true,
      }, {
        img: '',
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
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <View style={styles.searchResultsContainer}>
          { this.state.results.map((result, index) => {
            return (
              <SearchResult key={index}
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
  searchResultsContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }
});

export default HomeScreen