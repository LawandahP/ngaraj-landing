import React from 'react'
import Service from './service'
import { 
    ServicesContainer,
    ServiceH1,
    ServicesWrapper
} from './ServiceElements'



const ServicesSection = () => {
    return (
            <>
                <ServicesContainer id="services">
                    <ServiceH1>Our Services</ServiceH1>

                    <ServicesWrapper>
                        <Service />
                    </ServicesWrapper>

                </ServicesContainer>
            </>
    )
}

export default ServicesSection