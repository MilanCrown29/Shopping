import {StyleSheet} from 'react-native'
import colors from '_styles/index'

const gridStyles=StyleSheet.create({
    grid:{
        paddingHorizontal:30,
    },
    image:{
        width:'100%',
        height:'70%',
        resizeMode:'cover'
    },
    card:{
        flex:1,
        height:219,
        marginHorizontal:15,
        backgroundColor:colors.white,
        borderRadius:35,
        overflow:'hidden',
        marginBottom:30
    },
    cardDesc:{
        alignItems:'center',
        marginTop:15
    },
    cardTitle:{
        textAlign:'center'
    }
})
export default gridStyles;