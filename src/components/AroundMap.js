import React from 'react';
import {withScriptjs,withGoogleMap,GoogleMap,Marker, InfoWindow} from 'react-google-maps';
import {AroundMarker} from "./AroundMarker"

class AroundMap extends React.Component{


    render(){
        const arrPos = [
            { lat: -34.397, lng: 150.644 },
            { lat: -34.497, lng: 150.644 },
            { lat: -34.597, lng: 150.644 }
        ]
        return(
            <GoogleMap
                defaultZoom={11}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {arrPos.map((pos)=>{
                return <AroundMarker key={`${pos.lat}${pos.lng}`} pos={pos}/>
            })}
            </GoogleMap>
        )
    }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));