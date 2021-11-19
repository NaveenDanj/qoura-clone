import React from 'react'
import { StyleSheet , View , ScrollView , Text } from 'react-native';
import { TabView, Tab , Layout } from '@ui-kitten/components';




function AnswersTab() {

    const [selectedIndex, setSelectedIndex] = React.useState(0);


    return (
        <View>
            <TabView

                style={{ marginTop : 1 }}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>

                <Tab title='For you' >
                    <Layout>
                        <Text >USERS</Text>
                    </Layout>
                </Tab>
                
                <Tab title='Requests'>
                    <Layout>
                        <Text >USERS</Text>
                    </Layout>
                </Tab>
                
                <Tab title='Answer Drafts'>

                    <Layout>
                        <Text >USERS</Text>
                    </Layout>

                </Tab>
            
            </TabView>
        </View>
    )
}

export default AnswersTab
