import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar/Navbar';
import { CheckBox } from 'react-native-elements';
import Group from '../../assets/Group.png'

import styles from './LoginStyles';
import Logo from '../../assets/logo.png';
import Arrow from '../../assets/back-arrow.png';
import ForgotKey from '../../assets/ForgotKey.png';
import Enter1 from '../../assets/Frame13.png';
import Facebook from '../../assets/Facebook.png';
import Google from '../../assets/google-plus.png';
import { TextInput } from 'react-native-gesture-handler';
import Lock from '../../assets/Lock.png';
import Email from '../../assets/Email.png';

import LogIn from '../../assets/Frame14.png'
import Or from '../../assets/ou.png'

export default class Login extends Component {

    state = {

        checked: 'true',

    };
    render() {
        return (
            <>

                {/* <Navbar {...this.props}/> */}
                <View style={styles.container}>
                    <View style={styles.upbarContainer}>
                        <Image source={Logo} style={styles.logoIcon} />
                    </View>


                    <View style={styles.arrowContainer}>
                        <TouchableOpacity>
                            <Image source={Arrow} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.enterButton} >
                        <TouchableOpacity style={styles.enterBoth}>
                        <Image source={Enter1} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.squareContainer}>
                        <View style={styles.squareForm}>

                            <View style={styles.textLogin}>
                               <Image source={Email} style={styles.emailIcon}/>
                                <TextInput
                                    style={styles.inputDistanceEmail}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Email/CPF"
                                    placeholderTextColor="#5B0A2D"
                                    selectionColor="#fff"
                                    keyboardType="email-address" />
                            </View>

                            <View style={styles.textPassword}>
                            <Image source={Lock} style={styles.lockIcon}/>
                                <TextInput
                                    style={styles.inputDistancePass}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="•••••••••••"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D" />
                            </View>

                            <View style={styles.rememberMe}>
                                <CheckBox
                                    title='Lembrar'
                                    checked={this.state.checked}

                                />
                            </View>
                            <View style={styles.enterBox}>
                                <TouchableOpacity
                                onPress={() => {this.props.navigation.navigate('Pedidos')}}
                                >
                                    <Image source={LogIn} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View style={styles.squareTwo}>
                    <View style={styles.insideSquare}>
                            <Image source={ForgotKey} style={styles.forgotText}/>
                           <View style={styles.orContainer}>
                            <Image source={Or} style={styles.orText} />
                            </View>

                            <View style={styles.logosContainer}>
                            
                            <TouchableOpacity>
                            <Image source={Facebook} style={styles.faceIcon} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                            <Image source={Google} style={styles.googleIcon} />
                            </TouchableOpacity>

                            </View>
                    </View>

                    </View>

                </View>



            </>
        )
    }
}

