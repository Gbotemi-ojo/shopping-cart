import React from 'react'
import SuperCars from './supercars-component'

import italia from './images/italia.jpeg'
import italiaFront from './images/italia-front.jpeg'
import italiaMontage from './images/italia-montage.jpeg'
import italiaRear from './images/italia-rear.jpeg'

import laferarri from './images/laferarri.jpeg'
import laferarriAerial from './images/laferarri-aerial.jpg'
import laferarriFront from './images/laferarri-front.jpeg'
import laferarriInterior from './images/laferarri-interior.jpeg'

import carlifornia from './images/carlifornia.jpeg'
import carliforniaFront from './images/carlifornia-front.jpeg'
import carliforniaMontage from './images/carlifornia-montage.jpeg'
import carliforniaSide from './images/carlifornia-side.jpeg'
function Ferarri(props) {
    return (
        <div>
            <SuperCars
                company='Ferarri'
                price={350000}
                carName='Italia'
                description= 'The Italia is a work of art and aerodynamic efficiency, featuring a 4.5L naturally aspirated V8 engine that produces a stunning 562 hp at 9,000 RPM. The engine outputs 125 hp per liter, which is a record for the highest amount of power per naturally aspirated piston.'
                addToCart={props.addToCart}
                image1={italia}
                image2={italiaFront}
                image3={italiaMontage}
                image4={italiaRear}
            />
            <hr />
            <SuperCars
                company='Ferrari'
                price={200000}
                carName='Carlifornia'
                description= 'The Ferrari California (Type F149) is a grand touring, high performance sports car created by the Italian automobile manufacturer Ferrari. It is a two-door 2+2 hard top convertible. When originally unveiled in 2008, the California was powered by a front-mid mounted, rear wheel drive, naturally aspirated 4.3-litre V8.'
                addToCart={props.addToCart}
                image1={carlifornia}
                image2={carliforniaFront}
                image3={carliforniaMontage}
                image4={carliforniaSide}
            />
            <hr />
            <SuperCars
                company='Ferarri'
                price={3000000}
                carName='LaFerrari'
                description= 'The LaFerrari is the first production car to ever be equipped with an F1-derived hybrid solution and combines a powerful electric motor with the classic Ferrari V12 engine. It blends blistering performance and maximum efficiency to make it the most extreme performance ever seen in a Ferrari production car.'
                addToCart={props.addToCart}
                image1={laferarri}
                image2={laferarriAerial}
                image3={laferarriFront}
                image4={laferarriInterior}
            />

        </div>
    )
}
export default Ferarri