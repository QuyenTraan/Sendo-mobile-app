import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
} from "react-native";
import { SearchBar } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import CategoryGrid from './category'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <SearchBar
          lightTheme
          round
          onChangeText={() => {}}
          onClearText={() => {
            <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
            <SearchBar
              lightTheme
              round
              onChangeText={() => {}}
              onClearText={() => {
                console.log('clear')
              }}
              onSubmitEditing={() => {
                alert('Submited')
              }}
              placeholder='Tìm kiếm...'
            />
            <FlatList
              style={style.listView}
              ListHeaderComponent={(
                <Fragment>
                  <CategoryGrid categories={categories} navigation={navigation} />
                </Fragment>
              )}
              data={products}
              renderItem={({ item }) => (
                <ProductItem
                  key={item.id}
                  onPressItem={this.handlePressItemProduct}
                  product={item}
                  dispatch={dispatch}
                />
              )}
              keyExtractor={item => item.id.toString()}
              // onEndReached={() => dispatch({ type: 'FETCH_PRODUCTS' })}
              // onEndReachedThreshold={0.5}
              // refreshControl={
              //   <RefreshControl
              //     refreshing={refreshing}
              //     onRefresh={this.onRefresh}
              //   />
              // }
            />
          </SafeAreaView>
          }}
          onSubmitEditing={() => {
            alert('Submited')
          }}
          placeholder='Tìm kiếm...'
        />
        <FlatList
          style={style.listView}
          ListHeaderComponent={(
            <Fragment>
              <CategoryGrid categories={categories} navigation={navigation} />
            </Fragment>
          )}
          data={products}
          renderItem={({ item }) => (
            <ProductItem
              key={item.id}
              onPressItem={this.handlePressItemProduct}
              product={item}
              dispatch={dispatch}
            />
          )}
          keyExtractor={item => item.id.toString()}
          // onEndReached={() => dispatch({ type: 'FETCH_PRODUCTS' })}
          // onEndReachedThreshold={0.5}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={refreshing}
          //     onRefresh={this.onRefresh}
          //   />
          // }
        />
      </SafeAreaView>
    );
  }
}

AllScreen.navigationOptions = {
  //title: "All todos"
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    backgroundColor: "black",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight
  }
});