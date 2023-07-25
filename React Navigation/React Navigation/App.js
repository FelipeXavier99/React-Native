import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Drawers from './src/navegacao/Drawers'
import Tab from './src/navegacao/Tab'
import Stack from './src/navegacao/Stack'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            
<Drawers />
        </NavigationContainer>
    </SafeAreaView>
)