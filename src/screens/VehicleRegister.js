import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';


import Vehicle from '../components/Vehicle/Vehicle';
import Arrow from '../../assets/back-arrow.png'
import styles from './VehicleRegisterStyles';
import Logo from '../../assets/logo.png';
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import TextVehicle from '../../assets/TextVehicle.png';
import Car from '../../assets/Car.png';
import Bike from '../../assets/Bike.png';
import Moto from '../../assets/Moto.png';
import Other from '../../assets/Other.png';

export default class VehicleRegister extends Component {

    state={
        active: 0,
    }    

    render() {
        let {active} = this.state;
       
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.upbarContainer}>
                        <Image source={Logo} style={styles.logoIcon} />
                    </View>

                    <View style={styles.arrowContainer}>
                        <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate('Register3')}}>
                            <Image source={Arrow} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.enterButton} >
                        <View style={styles.enterBoth}>
                            <Image source={Frame1} />
                        </View>
                    </View>
 
                        <View style={styles.textContainer}>
                            <Image source={TextVehicle} />
                        </View>

                        <View style={styles.imagesList}>
                            <View style={styles.imagesOneContainer}>
                                <Vehicle 
                                    source={Car}
                                    onPress={()=>this.setState({active:1})}
                                    id={1}
                                    active={active}/>
                                <Vehicle
                                    source={Moto}
                                    onPress={()=>this.setState({active:2})}
                                    id={2}
                                    active={active}/>
                            </View>

                            <View style={styles.imagesTwoContainer}>
                                <Vehicle
                                    source={Bike}
                                    onPress={()=>this.setState({active:3})}
                                    id={3}
                                    active={active}/>
                                <Vehicle
                                    source={Other}
                                    onPress={()=>this.setState({active:4})}
                                    id={4}
                                    active={active}/>
                            </View>
                        </View>

                        <View style={styles.enterBox}>
                                <TouchableOpacity>
                                    <Image source={Frame2} />
                                </TouchableOpacity>
                            </View>

                </View>
            </>
        )
    }
}

