import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native'
import React from 'react'

import { Formik } from "formik";

import CustomButton from '../../components/CustomButton'
import { Feather } from '@expo/vector-icons'

const TransactionAmountScreen = ({ navigation, route }) => {

    const { account,phoneNumber } = route.params;

    return (
        <Formik initialValues={{ amount: 0 }} onSubmit={(values) => console.log(values)}>
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
                dirty
            }) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Text style={{ fontSize: 18, color: 'ligthgrey' }}>Please enter the amount to transfer</Text>
                        <View>
                            <Text style={{textAlign:'center',marginVertical:9,fontWeight:'700'}}>Reciever Informations</Text>
                            <Text style={{fontSize:18,marginVertical:10,fontWeight:'500'}}>Name : {account.user.first_name + " " + account.user.last_name}</Text>
                            <Text style={{fontSize:18}}>Numero : {phoneNumber}</Text>
                        </View>
                        <View style={{marginVertical:10}}>
                            <View style={{marginVertical:10}}>
                                <Text style={{fontSize:18,marginVertical:8}}>Amount</Text>
                                <TextInput style={styles.input} name="amount" keyboardType='numeric'/>

                            </View>
                            <CustomButton onPress={handleSubmit}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </Formik>
    )
}

export default TransactionAmountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:8
    },
    input:{
        borderColor:'#ddd',
        paddingVertical:10,
        backgroundColor:'#ddd',
        paddingHorizontal:8,
        borderRadius:5,
        textAlign:'center',
        fontSize:18,
        fontWeight:'600'
    }
})