import React from 'react';

import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {Banner} from '../components';
import PuppyCard from '../components/PuppyCard';
import Header from '../components/layout/Header';

const upperBanner = require('../assets/images/upper-banner.png');
const lowerBanner = require('../assets/images/lower-banner.png');

const Main = ({navigation}) => {

  return (
    <>
    <Header />
    <ScrollView>
      <Banner image={upperBanner} />
      <PuppyCard navigation={navigation} />
      <Banner image={lowerBanner} />
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Main;