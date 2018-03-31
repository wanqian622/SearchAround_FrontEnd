import React from 'react';
import {Button, Tabs, Spin} from 'antd';
import {API_ROOT, GEO_OPTIONS, TOKEN_KEY, AUTH_PREFIX} from "../constant";
import {POS_KEY} from "../constant";
import $ from 'jquery';


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
            loadingGeoLocation:false,
            loadingPosts:false,
            error:''
        });
    }

    onFailedLoadGeolocation = () =>{
        this.setState({
            loadingGeoLocation:false,
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
        } else if(this.state.loadingPosts){
            return(
                <div>
                    <Spin tip = "Loading posts....."/>
                </div>
            );
        }else{
            <div>
                content
            </div>
        }
    }

    // get date from server
    loadNearbyPosts = () =>{
        const lat = 37.7915953;
        const lon = -122.3937977;
        this.setState({
            loadingPosts:true,
            error:''
        })
        $.ajax({
            url:`${API_ROOT}/search?lat=${lat}&lon=${lon}`,
            method:'GET',
            headers:`${AUTH_PREFIX} ${localStorage.getItem(TOKEN_KEY)}`
    }).then((response)=>{
                this.setState({
                    loadingPosts:false,
                    error:''
                })
                console.log(response);
            }
        , (error)=>{
                this.setState({ loadingPosts: false, error: error.responseText });
                console.log(error);
            }).catch((error)=>{
            console.log(error);
        })

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