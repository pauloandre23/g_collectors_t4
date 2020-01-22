import React, {Component} from 'react';
import { View,Image, Dimensions } from 'react-native';
 
import styles from './NavBarStyle'
import MenuNovo from '../../../MenuNovo';
import Box from '../../../assets/gowbox.png'


const { width } = Dimensions.get('window');

export default class Navbar extends Component {
  
  render(){
  return (
    <View style={styles.nav}>
            <View style={styles.container}>
            <MenuNovo navigation={this.props.navigation} />
                <View style={styles.boxContainer}>
                    
                    <Image style={styles.boxIcon} source={Box} />
                </View>
            </View>
        </View>
  );
}

}
