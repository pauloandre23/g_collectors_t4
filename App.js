import React, {Component} from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import SwitchNavigator from './src/navigation/DrawerNavigator';

export default class App extends Component {
    render(){
    return(
        <SwitchNavigator />
  )
}
}