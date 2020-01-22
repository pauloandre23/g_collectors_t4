import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({

container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    borderRightColor:'#D8D8D8',
    borderRightWidth:1,
    paddingRight:10,
    paddingLeft:19
},
nav: {  
    height: 53,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2
},
logoContainer:{
    alignItems:'center',
    justifyContent: 'center',
},
logoIcon:{
    left: 137,
},
welcomeContainer:{
    alignItems: 'center',
    justifyContent: 'center',
},
welcomeBox:{
    top: 357,
},
lastContainer:{
    position: 'absolute',
    top: 521,
    flexDirection: 'row',
    alignItems: 'center',
},
enterIcon:{
    left: 60,
},
registerIcon:{
    left: 90,
},

});