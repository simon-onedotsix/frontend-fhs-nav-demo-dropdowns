'use client'

import { useState } from 'react'


import CSS from './eventsbar.module.css'

export const EventsBar = () => {

    const [active, setActive] = useState(false)
    

    return (
        <div className={`${CSS.layout} ${active && CSS.active}`}>
            <section className={CSS.header}>
                <p>Brought to you by <a href="#">The Bench</a></p>
                <button className={CSS.toggle} onClick={() => setActive(!active)}>x</button>
            </section>

            <section className={CSS.content}>
                Our Events: &emsp;

                <a href="/">FHS</a>&emsp;<a href="/world">FHS World</a>&emsp;<a href="/sa">FHS Saudi Arabia</a>&emsp;<a href="/africa">FHS Africa</a>&emsp;<a href="/egypt">FHS Egypt</a>

                &emsp;<a href="#">Branded Residences Forum</a>&emsp;<a href="/world/brf">BRF @FHS World</a>&emsp;<a href="/sa/brf">BRF @FHS Saudi Arabia</a>&emsp;<a href="/egypt/brf">BRF @FHS Egypt</a>

                &emsp;<a href="#">AviaDev</a>&emsp;<a href="#">SAHIC</a>
            </section>
        </div>
    )
}