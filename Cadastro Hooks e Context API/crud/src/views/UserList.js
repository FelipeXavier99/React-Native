import React, { useContext } from 'react'
import { View, FlatList, Text } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import users from '../data/users9'

export default props => {


    function getUserItem({ item: user }) {
        return (
            <ListItem
           
                title={user.name}
        />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}