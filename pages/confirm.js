import React from 'react'
import Map from '../components/Map'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useEffect,useState } from 'react'
import RideSelector from '../components/RideSelector'
const Confirm = () => {

    const router = useRouter();
    const {pickup , dropoff} = router.query
    const [pickupCords,setPickupCords] = useState([0,0]);
    const [dropoffCords,setDropoffCords] = useState([0,0]);
    
    const getpickupCoordinates = (pickup)=>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
          new URLSearchParams({
              access_token: "pk.eyJ1IjoicmlzaGkxODA1IiwiYSI6ImNrdnBocjd2ZjI5ZTMybnRrazNrMjc0Mm0ifQ.GA-llRh3dW8k25-TRXADMQ",
              limit: 1
          })
        )
        .then(response => response.json())
        .then(data =>{
            console.log(data.features[0].center)
            setPickupCords(data.features[0].center)
        })
    }
    const getDropoffCoordinates = (dropoff)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
          new URLSearchParams({
              access_token: "pk.eyJ1IjoicmlzaGkxODA1IiwiYSI6ImNrdnBocjd2ZjI5ZTMybnRrazNrMjc0Mm0ifQ.GA-llRh3dW8k25-TRXADMQ",
              limit: 1
          })
        )
        .then(response => response.json())
        .then(data =>{
            console.log(data.features[0].center)
            setDropoffCords(data.features[0].center)
        })
    }
    
    useEffect(()=>{
        getpickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    },[pickup,dropoff])

    return (
        <Wrapper>
            <Link href="/search" passHref>
                <ButtonContainer>
                     <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </ButtonContainer>
             </Link>   

            <Map 
                pickupCords={pickupCords}
                dropoffCords={dropoffCords}
            /> 
            <RideContainer>
                <RideSelector 
                    pickupCords={pickupCords}
                    dropoffCords={dropoffCords}
                />
                <ConfirmButtonContainer>
                     <ConfirmButton>
                        Confirm Uber
                     </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm


const ConfirmButtonContainer = tw.div`
    border-t-2
`
const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 cursor-pointer py-4 text-center text-xl 
`

const Wrapper = tw.div`
    flex h-screen flex-col
`
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const BackButton = tw.img`
   p-2
`

const ButtonContainer = tw.div`
     rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`