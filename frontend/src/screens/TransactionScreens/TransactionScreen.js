import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons'

const TransactionScreen = ({navigation}) => {

  const goToScreen = (transactionType) =>{
    if(transactionType){
      navigation.navigate('TransactionType',{type:transactionType})
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{marginTop:10}}>Select A Transaction Type</Text>
      <View style={styles.transactions_type}>
        <TouchableOpacity style={styles.padding} onPress={()=>goToScreen('Transfer')}>
          <View style={styles.transaction_type}>
            <View style={{flexDirection:'row'}}>
              <FontAwesome name="send" color={'white'} size={24} />
              <Text style={{marginLeft:5}}>Transfer</Text>
            </View>
            <FontAwesome name='caret-right' color={'white'} size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.padding} onPress={()=>goToScreen('Deposit')}>
          <View style={styles.transaction_type}>
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name="cash-plus" color={'white'} size={24} />
              <Text style={{marginLeft:5}}>Deposit</Text>
            </View>
            <FontAwesome name='caret-right' color={'white'} size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.padding} onPress={()=>goToScreen('Withdraw')}>
          <View style={styles.transaction_type}>
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name="cash-minus"  color={'white'} size={24}/>
              <Text style={{marginLeft:5}}>Withdraw</Text>
            </View>
            <FontAwesome name='caret-right' color={'white'} size={24} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TransactionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:8
  },
  title: {
    fontSize: 16,
    color: '#ddd'
  },
  transactions_type: {
    flex: 1,
    paddingVertical: 10,
  },
  padding: {
    marginVertical: 10,
    borderRadius: 5
  },
  transaction_type: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'grey',
    paddingVertical:15,
    paddingHorizontal:8,
    borderRadius:5
  }
})