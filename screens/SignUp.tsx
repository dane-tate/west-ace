import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth();

const SignUpScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {


    const [value, setValue] = React.useState({
        email: '',
        password: '',
        error: ''
      })
    
      async function signUp() {
        if (value.email === '' || value.password === '') {
            setValue({
              ...value,
              error: 'Email e password são obrigatórios.'
            })
            return;
          }
        
          try {
            await createUserWithEmailAndPassword(auth, value.email, value.password);
            navigation.navigate('Sign In');
          } catch (error) {
            setValue({
              ...value,
              error: error.message,
            })
          }
      }

    return (
        <View style={styles.mainView}>  
            <View style={styles.TopView}>
                <Image style={styles.ImageStyle}source={require('../assets/logo.png')}  ></Image>
            </View>

            <ScrollView style={styles.BottomView}>
                <Text style={styles.Heading}>
                    Primeira vez{'\n'}
                    por aqui?👋
                </Text>

            <View style={styles.FormView}>

                <TextInput placeholder={"Username"} placeholderTextColor={"#fff"} style={styles.TextInput} />
                <TextInput onChangeText={(text) => setValue({ ...value, email: text })} value={value.email} placeholder={"Email"} placeholderTextColor={"#fff"} style={styles.TextInput} />
                <TextInput onChangeText={(text) => setValue({ ...value, password: text })}  value={value.password} placeholder={"Password"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput} />
                <TextInput  placeholder={"Confirma a Password"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput} />
                
                    <TouchableOpacity style={styles.Button} onPress={signUp}>
                            <Text style={styles.ButtonText}>Regista-te</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.TextButton} onPress={() => navigation.navigate('Sign In')}>
                <Text style={styles.SignUpText}>
                    Já tens uma conta?
                </Text>
                </TouchableOpacity>
            </ScrollView>

    </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopView:{
        width: '100%',
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomView:{
        width: '100%',
        height: '75%',
        backgroundColor: '#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    ImageStyle:{
        width: '70%',
        resizeMode: 'contain',
    },
    Heading:{
        color: '#fff',
        fontSize:36,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 50,
 
    },
    FormView:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
    },
    TextInput:{
        width: '90%',
        borderWidth:1,
        borderColor: '#fff',
        height: 52,
        borderRadius:10,
        paddingLeft: 10,
        marginTop: 20,
        color: '#fff',
    },
    Button:{
        width: '90%',
        color: '#000',
        height:52,
        backgroundColor: '#fff', 
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: 20,
        borderRadius:10,
    },
    ButtonText:{
        fontWeight: 'bold',
        fontSize:18,
    },
    SignUpText:{
        color: 'gray',

    },
    TextButton:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,

    }
})

export default SignUpScreen;