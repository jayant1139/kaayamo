import React from 'react';
import Card from './Card'
import passout from '../Assets/passout-hat.png'
import kaaylive from '../Assets/kaay-live.png'
import kaayacademy from '../Assets/kaay-academy.png'
export default function Combinecards() {
    return (
        <>
        <div className="d-flex m-2 justify-content-evenly ">
<Card title="KAAY Online" src={passout} bg="#71AED7" />
<Card title="KAAY Live" src={kaaylive} bg="#AACFE7"/>
<Card title="KAAY Academy" src={kaayacademy} bg="#E2EFF7"/>
</div>

        </>
    )
}
