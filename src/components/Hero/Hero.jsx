import React from 'react'
import { HeroContainer, HeroImg } from './HeroStyles'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <>
        <HeroContainer>
            <h1>AKIKA</h1>
            {/* <Button radius='15'>
                Ver Mas
            </Button> */}
        </HeroContainer>
        <HeroImg>
            <img src="https://d28hi93gr697ol.cloudfront.net/d1f4550f-4906-4a3d/modulos/1400x600-bann1-6449784267521.webp" alt="ImgHero" />
        </HeroImg>
        </>
    )
}

export default Hero
