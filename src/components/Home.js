import React from 'react';
import {Button, Tabs} from 'antd';


const TabPane = Tabs.TabPane;
export class Home extends React.Component{



    render(){
        const operations = <Button type = "primary">Create New Post</Button>;
        return(

            <Tabs tabBarExtraContent = {operations} className = "main-tabs">
                <TabPane tab = "Posts" key = "1"></TabPane>
                <TabPane tab = "Map" key = "2"></TabPane>
            </Tabs>
        );
    }
}