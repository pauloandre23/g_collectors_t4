import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar/Navbar';
import { TextInput } from 'react-native-gesture-handler';

import styles from './RegisterStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/logo.png';
import Arrow from '../../assets/back-arrow.png';
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Name from '../../assets/Name.png'
import Gender from '../../assets/Gender.png'
import Message from '../../assets/Message.png'
import Date from '../../assets/Date.png'

export default class Register extends Component {

    render() {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.upbarContainer}>
                        <Image source={Logo} style={styles.logoIcon} />
                    </View>

                    <View style={styles.arrowContainer}>
                        <TouchableOpacity 
                        onPress={() => {this.props.navigation.navigate('Login')}}
                        >
                            <Image source={Arrow} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.enterButton} >
                        <View style={styles.enterBoth}>
                        <Image source={Frame1}  />
                        </View>
                    </View>

                    <View style={styles.squareContainer}>
                        <View style={styles.squareForm}>

                            <View style={styles.textName}>
                               <Image source={Name} />
                                <TextInput
                                    style={styles.inputDistanceName}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Nome completo"
                                    placeholderTextColor="#5B0A2D"
                                    selectionColor="#fff"
                                     />
                            </View>

                            <View style={styles.textDate}>
                            <Image source={Date} />
                                <TextInput
                                    style={styles.inputDistanceDate}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Data de nascimento"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D" />
                            </View>

                            <View style={styles.textGender}>
                            <Image source={Gender} />
                                <TextInput
                                    style={styles.inputDistanceGender}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Gênero"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D" />
                            </View>

                            <View style={styles.textMessage}>
                            <Image source={Message} style={styles.messageIcon}/>
                                <TextInput
                                    style={styles.inputDistanceMessage}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Email"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D"
                                    keyboardType="email-address" />
                            </View>

                            <View style={styles.enterBox}>
                                <TouchableOpacity 
                                onPress={()=>{this.props.navigation.navigate('Register2')}}
                                >
                                    <Image source={Frame2} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>

            </>
        )
    }
}


