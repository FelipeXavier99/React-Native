//tarefas

//como é uma acao de filho para pai vai ter q ser DIRETA (TouchableWithoutFeedback)


import React from 'react'
import { View, Text,StyleSheet,TouchableWithoutFeedback } from 'react-native'
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome'


//data
import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {

//pra riscar o text
const doneOrNotStyle = props.doneAt !=null ?
{ textDecorationLine: 'line-through' } : {}



//data
const date = props.doneAt ? props.doneAt : props.estimateAt
const formatteDate = moment(date).locale('pt-br')
.format('ddd, D [de] MMM')

return (
    <View style={styles.container}>

<TouchableWithoutFeedback
onPress={() => props.toggleTask(props.id)}>


        <View  style={styles.checkContainer}>
{getCheckView(props.doneAt)}
        </View>

        </TouchableWithoutFeedback>
<View>
        
<Text style={[styles.desc,doneOrNotStyle]}>{props.desc}</Text>
<Text style={styles.date} >{formatteDate}</Text>

</View>
</View>
   )
}


function getCheckView(doneAt){

if(doneAt != null){

return(

<View style={styles.done}>
<Icon name='check' size={20} color={'#FFF'}></Icon>

</View>

)

}else{

    return(

        <View style={styles.pending}></View>
           )}}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1, //borda
        borderColor: '#AAA',
    },
    checkContainer: {
       
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    //bola do check list
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555',
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center',
    },
    desc: {
fontFamily: commonStyles.fontFamily,
color: commonStyles.colors.mainText,
fontSize:15

    },
    description: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,
    },
    exclude: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10,
    }
})