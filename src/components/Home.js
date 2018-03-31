import React from 'react';
import {Button, Tabs} from 'antd';
import {GEO_OPTIONS} from "../constant";
import {POS_KEY} from "../constant";


const TabPane = Tabs.TabPane;
export class Home extends React.Component{
    // get geolocation
    getGeoLocation = ()=>{
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(this.onSuccessLoadGeoLocation, this.onFailedLoadGeolocation,GEO_OPTIONS);
        } else{

        }
    }

    onSuccessLoadGeoLocation = (position) =>{
        console.log(position);
        const {latitude, longitude} = position.coords;
        localStorage('POS_KEY',Json.stringify({latitude, longitude}));

    }

    onFailedLoadGeolocation = () =>{

    }

    // when we load whole page then we call getGeoLocation
    componentDidMount(){
        this.getGeoLocation();
    }

    render(){
        const operations = <Button type = "primary">Create New Post</Button>;
        return(

            <Tabs tabBarExtraContent = {operations} className = "main-tabs">
                <TabPane tab = "Posts" key = "1">
                </TabPane>
                <TabPane tab = "Map" key = "2"></TabPane>
            </Tabs>
        );
    }
}