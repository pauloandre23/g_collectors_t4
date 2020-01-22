import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar/Navbar';
import { TextInput } from 'react-native-gesture-handler';

import styles from './RegisterThreeStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/logo.png';
import Arrow from '../../assets/back-arrow.png';
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Cep from '../../assets/Cep.png'
import State from '../../assets/State.png'
import City from '../../assets/City.png'
import Address from '../../assets/Adress.png'
import Number from '../../assets/Number.png'
import RegisterTwo from '../screens/RegisterTwo';

export default class RegisterThree extends Component {

    render() {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.upbarContainer}>
                        <Image source={Logo} style={styles.logoIcon} />
                    </View>
                    <View style={styles.arrowContainer}>
                        <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate('Register2')}}
                        >
                            <Image source={Arrow} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.enterButton} >
                        <View style={styles.enterBoth}>
                        <Image source={Frame1} />
                        </View>
                    </View>

                    <View style={styles.squareContainer}>
                        <View style={styles.squareForm}>
                            <View style={styles.textCep}>
                               <Image source={Cep} style={styles.cepIcon} />
                                <TextInput
                                    style={styles.inputDistanceCep}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="CEP"
                                    placeholderTextColor="#5B0A2D"
                                    selectionColor="#fff"   />
                            </View>

                            <View style={styles.textAddress}>
                            <Image source={Address} style={styles.addressIcon} />
                                <TextInput
                                    style={styles.inputDistanceAddress}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Endereço"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D"  />
                            </View>

                            <View style={styles.closedInputOne}>
                            <View style={styles.textNumber}>
                            <Image source={Number} style={styles.numberIcon} />
                                <TextInput
                                    style={styles.inputDistanceNumber}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Número"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D"  />
                            </View>

                            <View style={styles.textMore}>
                            <Image source={Number} style={styles.moreIcon} />
                                <TextInput
                                    style={styles.inputDistanceMore}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Complemento"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D" />
                            </View>

                            </View>

                            <View style={styles.closedInputTwo}>
                            <View style={styles.textCity}>
                            <Image source={City} style={styles.cityIcon} />
                                <TextInput
                                    style={styles.inputDistanceCity}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Cidade"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D" />
                            </View>

                            <View style={styles.textState}>
                            <Image source={State} style={styles.stateIcon} />
                                <TextInput
                                    style={styles.inputDistanceState}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Estado"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D" />
                            </View>

                            </View>

                            <View style={styles.enterBox}>
                                <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('Vehicle')}}
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

