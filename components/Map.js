import React from 'react'
import mapboxgl from '!mapbox-gl';
import { useEffect } from 'react';
import tw from 'tailwind-styled-components';


mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGkxODA1IiwiYSI6ImNrdnBocjd2ZjI5ZTMybnRrazNrMjc0Mm0ifQ.GA-llRh3dW8k25-TRXADMQ';

const Map = (props) => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [78.476681027237,22.1991660760527],
          zoom: 4,
          });
        if(props.pickupCords){
          addToMap(map,props.pickupCords)
        }
        if(props.dropoffCords){
          addToMap(map,props.dropoffCords)
        }

        if(props.pickupCords,props.dropoffCords){
          map.fitBounds([
            props.dropoffCords,
            props.pickupCords
          ],{
            padding:60
          })
        }
          
      },[props.pickupCords,props.dropoffCords]);

      const addToMap = (map,cords) => {
        const marker1 = new mapboxgl.Marker()
          .setLngLat(cords)
          .addTo(map);
      }

  

    return (
        <Wrapper id="map"></Wrapper>
        
    )
}

export default Map

const Wrapper = tw.div`
  flex-1 h-1/2

`

