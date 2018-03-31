import React from 'react';
import {Button, Tabs, Spin} from 'antd';
import {GEO_OPTIONS} from "../constant";
import {POS_KEY} from "../constant";


const TabPane = Tabs.TabPane;
export class Home extends React.Component{
    state = {
        loadingGeoLocation: false,
        error:''
    }
    // get geolocation
    getGeoLocation = ()=>{
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(this.onSuccessLoadGeoLocation, this.onFailedLoadGeolocation,GEO_OPTIONS);
        } else{
            this.setState({ error: 'Your browser does not support geolocation!' });
        }
    }

    onSuccessLoadGeoLocation = (position) =>{
        console.log(position);
        const {latitude, longitude} = position.coords;
        localStorage.setItem('POS_KEY',JSON.stringify({latitude, longitude}));
        this.setState({
            loadingGeoLocation:true,
            error:''
        });
    }

    onFailedLoadGeolocation = () =>{
        this.setState({
            loadingGeoLocation:true,
            error:'Failed to load geo location!'
        });
    }

    getGalleryPanelContent = () =>{
        if(this.state.error){
            <div>
                <Spin tip = {this.state.error}/>
            </div>
        } else if(this.state.loadingGeoLocation){
            return(
                <div>
                    <Spin tip = "Loading geo location....."/>
                </div>
            );
        } else{
            <div>
                content
            </div>
        }
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
                    {this.getGalleryPanelContent()}
                </TabPane>
                <TabPane tab = "Map" key = "2"></TabPane>
            </Tabs>
        );
    }
}