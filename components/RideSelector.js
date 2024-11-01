import tw from 'tailwind-styled-components/dist/tailwind'
import React,{useEffect,useState} from 'react'
import { carList } from '../data/carList';
const RideSelector = ({pickupCords,dropoffCords}) => {

    const [rideDuration,setRideDuration] = useState(0);
    
    useEffect(()=>{
        fetch(`https:api.mapbox.com/directions/v5/mapbox/driving/${pickupCords[0]},${pickupCords[1]};${dropoffCords[0]},${dropoffCords[1]}?access_token=pk.eyJ1IjoicmlzaGkxODA1IiwiYSI6ImNrdnBocjd2ZjI5ZTMybnRrazNrMjc0Mm0ifQ.GA-llRh3dW8k25-TRXADMQ`)
           .then(res =>res.json())
           .then(data => {
               setRideDuration(data.routes[0].duration/100)
           })

    },[pickupCords,dropoffCords])
    return (
        <Wrapper>
            <Title>choose a ride, or swipe up for more</Title>
            <CarList>
                {carList.map((car, index)=>(
                    <Car key={index}>
                        <CarImg src={car.imgUrl} />
                            <CarDetails>
                                <Service>{car.service}</Service>
                                <Time>5 min away</Time>
                            </CarDetails>
                    <Price>{"₹"+(rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}
                
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex flex-col flex-1 overflow-y-scroll 
`

const CarList = tw.div`
    overflow-y-scroll
`
const CarImg = tw.img`
    h-14 mr-4
`

const CarDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium 

`

const Price = tw.div`
    text-sm
`

const Time = tw.div`
    text-xs text-blue-500
`
const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const Car = tw.div`
    flex p-4 items-center
`