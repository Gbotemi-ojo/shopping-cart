import React from 'react'
import SuperCars from './supercars-component'

import p1 from './images/p1.jpeg'
import p1Front from './images/p1-front.jpeg'
import p1Montage from './images/p1-montage.jpeg'
import p1Rear from './images/p1-rear.jpeg'

import senna from './images/senna.jpeg'
import sennaInterior from './images/senna-interior.jpeg'
import sennaMontage from './images/senna-montage.jpeg'
import sennaSide from './images/senna-side.jpeg'

import mc720s from './images/720s.jpeg'
import mc720sFront from './images/720s-front.jpg'
import mc720sRear from './images/720s-rear.jpeg'
import mc720sWing from './images/720s-wing.jpeg'
function Mclaren(props) {
    return (
        <div>
            <SuperCars
                company='Mclaren'
                price={2500000}
                carName='P1 Gtr'
                addToCart={props.addToCart}
                description= 'The P1™ features a 3.8L V8 twin-turbocharged engine with a 132 kW electric motor. This hybrid power plant generates 903 bhp and 664 lb-ft of torque. Those specs allow a McLaren P1™ for sale to go from 0-62 mph in just 2.8 seconds.'
                image1={p1}
                image2={p1Front}
                image3={p1Montage}
                image4={p1Rear}
            />
            <hr />
            <SuperCars
                company='Mclaren'
                price={2000000}
                carName='Senna'
                addToCart={props.addToCart}
                description='The McLAREN Senna is the personification of McLARENs DNA at its most extreme, creating the purest connection between car and driver. It is the fastest track-focused road hypercar we have ever built, and it will set the fastest lap times of any McLaren to date.'
                image1={senna}
                image2={sennaInterior}
                image3={sennaMontage}
                image4={sennaSide}
            />
            <hr />
            <SuperCars
                company='Mclaren'
                price={250}
                carName='720s'
                addToCart={props.addToCart}
                description= 'Its 4.0L twin-turbocharged V8 delivers 720PS and 770Nm of torque. 0-60mph takes just 2.8 seconds. And 124mph arrives in an astonishing 7.8 seconds. But the 720S is all about the way you can use power.'
                image1={mc720s}
                image2={mc720sFront}
                image3={mc720sRear}
                image4={mc720sWing}
            />
        </div>
    )
}
export default Mclaren
