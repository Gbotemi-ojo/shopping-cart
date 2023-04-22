import React from 'react'
import SuperCars from './supercars-component'
import aventador from './images/aventador.jpeg'
import aventadorFront from './images/aventador-front.jpeg'
import aventadorRear from './images/aventador-rear.jpg'
import aventadorSide from './images/aventador-side.jpeg'

import hurucan from './images/hurucan.jpeg'
import hurucanInterior from './images/hurucan-interior.jpeg'
import hurucanRear from './images/hurucan-rear.jpeg'
import hurucanSide from './images/hurucan-side.jpeg'

import urus from './images/urus.jpeg'
import urusFront from './images/urus-front.jpeg'
import urusInterior from './images/urus-interior.jpeg'
import urusSide from './images/urus-side.jpeg'

import veneno from './images/veneno.jpg'
import venenoAerial from './images/veneno-aerial.jpeg'
import venenoMontage from './images/veneno-montage.jpeg'
import venenoWing from './images/veneno-wing.jpeg'

import centenario from './images/centenario.jpeg'
import centenarioFront from './images/centenario-front.jpeg'
import centenarioRear from './images/centenario-rear.jpeg'
import centenarioSide from './images/centenario-side.jpeg'
// import data from './data'
function Lamborghini(props) {
  return (
    <div>
        <SuperCars
        company= 'Lamborghini'
        price = {250000}
        carName = 'Aventador SV'
        description= 'The Superveloce has been designed as the sportiest Lamborghini ever, thanks to a further improved naturally aspirated V12 engine, engineering solutions geared to extreme lightness, and a mix of innovative technological features, such as the magnetorheological push-rod suspension'
        addToCart = {props.addToCart}
        image1 = {aventador}
        image2 = {aventadorFront}
        image3 = {aventadorRear}
        image4 = {aventadorSide}
        />
        <hr />
      <SuperCars
        company='Lamborghini'
        price={200000}
        carName='Hurucan Perfomente'
        description='Sculptured and sensual, the Huracáns design is based on the spiky hexagonal forms of the carbon atom, while the seamless roof profile is an unmistakable mark.'
        addToCart={props.addToCart}
        image1 = {hurucan}
        image2 = {hurucanInterior}
        image3 = {hurucanRear}
        image4 = {hurucanSide}
      />
      <hr />
      <SuperCars
        company='Lamborghini'
        price={175000}
        carName='Urus'
        description= 'An unadorned Urus comes standard with a turbocharged 4.0-litre V8, an eight-speed ZF 8HP automatic transmission, all-wheel drive, 21-inch wheels, carbon-ceramic brakes, a rear-axle torque-vectoring system, and four-wheel steering.'
        addToCart={props.addToCart}
        image1={urus}
        image2={urusFront}
        image3={urusInterior}
        image4={urusSide}
      />
      <SuperCars
        company='Lamborghini'
        price={6000000}
        carName='Veneno'
        description= ' The design of the Veneno is bold, powerful and futuristic, consistently with its performance, with a 6.5 liter aspirated V12 engine and a top speed of 355 km/h, this Lamborghini concept car represents state-of-the-art design inspired by aeronautics, capable of giving you the indescribable feeling of flying on the road.'
        addToCart={props.addToCart}
        image1={veneno}
        image2={venenoAerial}
        image3={venenoMontage}
        image4={venenoWing}
      />
      <SuperCars
        company='Lamborghini'
        price={2500000}
        carName='Centenario'
        description= 'Designed for unbridled performance, the Centenario Roadster is based on a carbon-fiber monocoque and body. The V12 engine develops 770 hp and accelerates from 0-62 mph (0-100 km/h) in just 2.9 seconds, braking from 62-0 mph (100-0 km/h) in just 101 ft (31 m).'
        addToCart={props.addToCart}
        image1={centenario}
        image2={centenarioFront}
        image3={centenarioRear}
        image4={centenarioSide}
      />
    </div>
  )
}
export default Lamborghini


