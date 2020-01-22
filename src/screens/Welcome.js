import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import styles from './WelcomeStyles';
import Gow from '../../assets/LogoNav.png'
import WelcomeCollector from '../../assets/welcomeFrame.png'

import Enter from '../../assets/EnterIntro.png'
import Register from '../../assets/RegisterFrame.png'

export default class Welcome extends Component{
    render(){
        return(
        <>
        <View style={styles.nav}>
            <View style={styles.container}>           
            <View style={styles.logoContainer}>         
                    <Image style={styles.logoIcon} source={Gow} />
            </View>                
            </View>
        </View>

        <View style={styles.welcomeContainer}>
        <View style={styles.welcomeBox}>
            <Image source={WelcomeCollector} />            
        </View>
        </View>
        
        <View style={styles.lastContainer}>
            <TouchableOpacity>
            <Image source={Enter} style={styles.enterIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image source={Register} style={styles.registerIcon}/>
            </TouchableOpacity>
        </View>
        </>
        )
    }
}

