import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet,
    Animated
} from 'react-native';

import Logo from '../../assets/gowdock-logo.png';
import Arrow from '../../assets/back-arrow.png';
import Frame1 from '../../assets/Frame1.png';
import Icon from 'react-native-vector-icons';
import TextInput from 'react-native-gesture-handler'
import styles from './RegisterStyles';


const {width}  = Dimensions.get('window');

export default class Pedidos extends Component {

    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        xTabThree:0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateXTabThree: new Animated.Value(width),
    }

    handleSlide = type => {
        let { active,animated, xTabOne, xTabTwo, translateX, translateXTabOne, translateXTabTwo, translateXTabThree } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
        }).start();
        if(active===0){
            Animated.parallel([
                Animated.spring(translateXTabOne,{
                    toValue:0,
                    duration: 100,
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                }).start(),
                Animated.spring(translateXTabThree, {
                    toValue: width,
                    duration: 100,
                }).start()
            ])
        }
        if(active===1){
            Animated.parallel([
                Animated.spring(translateXTabOne,{
                    toValue:-width,
                    duration: 100,
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100,
                }).start(),
                Animated.spring(translateXTabThree, {
                    toValue: width,
                    duration: 100,
                }).start()
            ])
        }else{
            Animated.parallel([
                Animated.spring(translateXTabOne,{
                    toValue:-width,
                    duration: 100,
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                }).start(),
                Animated.spring(translateXTabThree, {
                    toValue: 0,
                    duration: 100,
                }).start()
            ])

        }

        }
    render() {
        let { active, xTabOne, xTabTwo, xTabThree, translateX, translateXTabTwo, translateXTabOne, translateXTabThree } = this.state;
        return (
            <>
                <Navbar {...this.props} />
                <View style={{ flex: 1 }}>
                    <View style={{
                        width: '90%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 40,
                            marginBottom: 20,
                            height: 36,
                            position: 'relative',
                        }}>
                            <Animated.View style={{
                                position: 'absolute',
                                width: '33.33%',
                                height: '100%',
                                top: 0,
                                left: 0,
                                backgroundColor: '#5C072D',
                                borderRadius: 4,
                                transform: [{
                                    translateX
                                }]
                            }} />

                            <TouchableOpacity style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItem: 'center',
                                borderWidth: 1,
                                borderColor: '#5C072D',
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0

                            }}
                                onLayout={event => this.setState({ xTabOne: event.nativeEvent.layout.x })}
                                onPress={event => this.setState({ active: 0 }, () => this.handleSlide(xTabOne))}
                            >

                                <Text style={{ color: active === 0 ? '#fff' : '#5C072D' }}>Ativos</Text>
                            </TouchableOpacity >

                            <TouchableOpacity style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItem: 'center',
                                borderWidth: 1,
                                borderColor: '#5C072D',
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0

                            }}
                                onLayout={event => this.setState({ xTabTwo: event.nativeEvent.layout.x })}
                                onPress={event => this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))}
                            >
                                <Text style={{ color: active === 1 ? '#fff' : '#5C072D' }}>Finalizados</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItem: 'center',
                                borderWidth: 1,
                                borderColor: '#5C072D',
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0

                            }}
                                onLayout={event => this.setState({ xTabThree: event.nativeEvent.layout.x })}
                                onPress={event => this.setState({ active: 2 }, () => this.handleSlide(xTabThree))}
                            >
                                <Text style={{ color: active === 2 ? '#fff' : '#5C072D' }}>Entrada</Text>
                            </TouchableOpacity>

                        </View>
                        <ScrollView>
                        <Animated.View style={{ justifyContent: 'center', alignItems: 'center',
                    transform: [{
                        translateX: translateXTabOne
                    }] }}>
                        
                        
                             
                               <Text> da nada</Text>
                
                            <View style={{ marginTop: 20 }}>
                                
                                <Image source={require('./cat.jpg')}
                                    style={{ width: 30, height: 30, borderRadius: 15 }} />
                            </View>
                        </Animated.View>
                        <Animated.View style={{
                            justifyContent: 'center', alignItems: 'center',
                            transform: [{
                                translateX: translateXTabTwo
                                   
                            }]
                        }}>
                            
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
                        <Image source={Frame1}  />
                        </TouchableOpacity>
                    </View>
                    </View>
                        </Animated.View>
                        <Animated.View style={{
                            justifyContent: 'center', alignItems: 'center',
                            transform: [{
                                translateX: translateXTabThree
                                   
                            }]
                        }}>
                            <Text >Dale, yo soy un meuchapa</Text>
                            <View style={{ marginTop: 20 }}>
                                <Image source={require('./dog.jpg')}
                                    style={{ width: 30, height: 30, borderRadius: 15 }} />
                            </View>
                        </Animated.View>

                    </ScrollView>
                    </View>
                </View>
            </>
        )
    }
}

 