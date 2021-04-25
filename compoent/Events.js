import React from 'react'
import { View, Text } from 'react-native'
import { useGetEvents } from '../compoent/apollo/actions/index';
const Events = () => {

    const { data , error , loading } = useGetEvents();
    const events = data && data.events || [];
    console.log(events)
    return (
        <View>
            <Text>assa</Text>
        </View>
    )
}

export default Events
