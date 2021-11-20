import React from 'react'
import { StyleSheet , View , ScrollView , Text } from 'react-native';
import { TabView, Tab } from '@ui-kitten/components';

//components
import ForYouTab from '../components/Answer/ForYouTab';
import RequestTab from '../components/Answer/RequestTab';

function AnswersTab() {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <View>
            <TabView

                style={{ marginTop : 1 }}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>

                <Tab title='For you' >
                    <ForYouTab />
                </Tab>
                
                <Tab title='Requests'>
                    <RequestTab />
                </Tab>
            
            
            </TabView>
        </View>
    )
}

export default AnswersTab
