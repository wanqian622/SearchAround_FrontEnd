import React from 'react';
import {withScriptjs,withGoogleMap,GoogleMap,Marker, InfoWindow} from 'react-google-maps';
import {AroundMarker} from "./AroundMarker"
import {POS_KEY} from "../constant"


class AroundMap extends React.Component{


    render(){
        const pos=JSON.parse(localStorage.getItem(POS_KEY));
        return(
            <GoogleMap
                defaultZoom={11}
                defaultCenter={{ lat: pos.lat, lng: pos.lon }}
            >
                {this.props.posts.map((post)=>{
                return <AroundMarker key={`${post.url}`} post={post}/>
            })}
            </GoogleMap>
        )
    }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));