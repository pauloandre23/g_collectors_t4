import React, {Component} from 'react';
import { View,Image } from 'react-native';
import styles from './BarraLateralStyle'

import SmallBox from '../../assets/small-box.png'
import Menu from './Navbar/Menu'
import { SafeAreaView } from 'react-navigation';


export default class BarraLateral extends Component{
    
    render(){
    return(
        <SafeAreaView>
        <View style={styles.nav}>
            <View style={styles.container}>
                <Menu
                navigation={this.props.navigation}
                />
                <Image style={styles.box}source={SmallBox}/>
            </View>
        </View>
        </SafeAreaView>
    )
}
}