import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import '../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth();


const SignInScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

    const [value, setValue] = React.useState({
        email: '',
        password: '',
        error: ''
      })

      async function signIn() {
        if (value.email === '' || value.password === '') {
          setValue({
            ...value,
            error: 'Email e pass são obrigatórios.'
          })
          return;
        }
    
        try {
          await signInWithEmailAndPassword(auth, value.email, value.password);
        } catch (error) {
          setValue({
            ...value,
            error: error.message,
          })
        }
      }

return(
    <View style={styles.mainView}>  
        <View style={styles.TopView}>
            <Image style={styles.ImageStyle}source={require('../assets/logo.png')}  ></Image>
        </View>
        <View style={styles.BottomView}>
            <Text style={styles.Heading}>
                Bem vindo{'\n'}
                de novo🍾
                </Text>

                <View style={styles.FormView}>
                    <TextInput 
                        placeholder={"Mete aí o teu email🤫"} 
                        value={value.email}
                        placeholderTextColor={"#fff"} 
                        style={styles.TextInput}
                        onChangeText={(text) => setValue({ ...value, email: text })}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput 
                        placeholder={"Password JÁ😡"} 
                        value={value.password}
                        secureTextEntry={true} 
                        placeholderTextColor={"#fff"} 
                        style={styles.TextInput} 
                        onChangeText={(text) => setValue({ ...value, password: text })}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity style={styles.Button} onPress={signIn}>
                        <Text style={styles.ButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.TextButton} onPress={() => navigation.navigate('Sign Up')}>
                <Text style={styles.SignUpText}>
                    Registra-te
                </Text>
                </TouchableOpacity>
        </View>

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
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomView:{
        width: '100%',
        height: '70%',
        backgroundColor: '#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    ImageStyle:{
        width: '80%',
        resizeMode: 'contain',
    },
    Heading:{
        color: '#fff',
        fontSize:36,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 60,
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

export default SignInScreen;

