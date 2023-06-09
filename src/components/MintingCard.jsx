import React from 'react';
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AppText from './common/AppText';

import { 
  useContract,
  useContractWrite,
  useMintNFT,
  useAddress
  } from "@thirdweb-dev/react-native";

const MintingCard = () => {
  const sdk = new ThirdwebSDK("binance-testnet");
  
  const address = useAddress();
  const { contract } = useContract("0xb58c0F745327A4939b5dB320F8Ff2b4bd1f88Bd8");
  const { mutateAsync: batchMint, isLoading } = useContractWrite(contract, "batchMint")

  

  const excuteMint = async () => {

    try {
      const data = await batchMint({ args: ["0xfe62d439Efbe001432c88576aEf893FF7Ccd604E", '1'] }); 
      Alert.alert('Mint', 'Success')
    } catch (err) {
      console.error("contract call failure", err);
      Alert.alert('Mint', 'failed')
    }
  }

  return (
    <View style={{display:'flex', alignItems:'center'}}>
      <View 
        style={styles.cardContainer} 
      >
        <View>
          <Image
            style={styles.cardInu}
            source={require('../assets/images/shiba-inu.png')}
          />
        </View>
        <View style={styles.buttonView}>
          <View style={styles.price}>
            <AppText style={{lineHeight:47, textAlign:'center'}}>0.14 ETH</AppText>
          </View>
          <TouchableOpacity 
          style={styles.buyButton}
          onPress={excuteMint}
          >
            <AppText style={{lineHeight:32, textAlign:'center'}}>Buy Now</AppText>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: '1%',
    marginHorizontal: '5%',
    padding: 5,
    borderRadius: 50,
    borderColor: '#E5E8EB',
    borderWidth: 5,
    width: 350,
  },
  cardInu: {
    width: 120,
    height: 200,
  },
  buttonView: {
    display: 'flex',
    flexDirection:'row',
    width: '52%',
    marginVertical: 10,
    backgroundColor: '#D9D9D9',
    height: 47,
    lineHeight: 47,
    borderRadius: 30,
  },
  price: {
    width: '50%',
    lineHeight: 47,
    textAlign: 'center',
    color: '#04B154',
    fontSize: 14,
  },
  buyButton: {
    width: '40%',
    marginRight: 20,
    color: 'white',
    backgroundColor: '#04B154',
    borderRadius: 30,
    alignSelf: 'center',
    fontSize: 18,
  },
});

export default MintingCard;
