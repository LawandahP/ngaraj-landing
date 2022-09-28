import React from 'react'
import { servicesOffered } from './servicedb'
import { 
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServiceElements'



const Service = () => {
    return (
    <>
     
        { servicesOffered.map(serviceOffered => (
            <ServicesCard key={serviceOffered.serviceName}>
                <ServicesIcon src={serviceOffered.serviceImage}></ServicesIcon>
                <ServicesH2>{serviceOffered.serviceName}</ServicesH2>
                <ServicesP>{serviceOffered.serviceDesc}</ServicesP>
            </ServicesCard>
        ))}

    </>

    )
}

export default Service