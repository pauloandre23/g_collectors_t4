import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './RegisterTwoStyles';
import Logo from '../../assets/logo.png';
import Arrow from '../../assets/back-arrow.png';
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Cpf from '../../assets/Cpf.png'
import Password from '../../assets/Password.png'
import Cellphone from '../../assets/Cellphone.png'

export default class RegisterTwo extends Component {

    render() {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.upbarContainer}>
                        <Image source={Logo} style={styles.logoIcon} />
                    </View>
                    <View style={styles.arrowContainer}>
                        <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate('Register')}}>
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
                            <View style={styles.textCpf}>
                                <Image source={Cpf} style={styles.CpfIcon}/>
                                <TextInput
                                    style={styles.inputDistanceCpf}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="CPF"
                                    placeholderTextColor="#5B0A2D"
                                    selectionColor="#fff"
                                    />
                            </View>

                            <View style={styles.textPassword}>
                            <Image source={Password} style={styles.passwordIcon}/>
                                <TextInput
                                    style={styles.inputDistancePassword}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Senha"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D" 
                                    />
                            </View>

                            <View style={styles.textConfirmPassword}>
                            <Image source={Password} style={styles.confirmPasswordIcon}/>
                                <TextInput
                                    style={styles.inputDistanceConfirm}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Confirmar senha"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D" 
                                    />
                            </View>

                            <View style={styles.textCellphone}>
                            <Image source={Cellphone} style={styles.cellphoneIcon}/>
                                <TextInput
                                    style={styles.inputDistanceCellphone}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Celular"
                                    secureTextEntry={true}
                                    placeholderTextColor="#5B0A2D" 
                                    />
                            </View>

                            <View style={styles.enterBox}>
                                <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('Register3')}}
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

