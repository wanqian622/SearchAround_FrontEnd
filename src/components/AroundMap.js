import React from 'react';
import {withScriptjs,withGoogleMap,GoogleMap,Marker, InfoWindow} from 'react-google-maps';

class AroundMap extends React.Component{
    render(){
        return(
            <GoogleMap
                defaultZoom={11}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
            </GoogleMap>
        )
    }
}

export const wrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));