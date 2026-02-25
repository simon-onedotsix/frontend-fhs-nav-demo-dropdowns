'use client'

import { useState } from "react"

import Link from "next/link"

import { BrfLockup } from "./brand/brf-brand"
import { SlideOut } from "@/ui/slideout"

export const HeaderBRF = ({ site, parentSite, handle = 'At FHS', parentHandle = 'FHS' }) => {

    const [navActive, setNavActive] = useState(false)
    const [accountActive, setAccountActive] = useState(false)

    
    return (
        <header>

            <nav className="header">
                <section>
                    <Link href={site ? `${site}` : `/`}>
                        <BrfLockup region={handle} />
                    </Link>
                </section>

                <section className={`mainMenu ${navActive && 'active'}`}>
                    <ul>
                        <li><a href={parentSite}>&larr; {parentHandle}</a></li>
                        <li><a href={`${site && `${site}`}/`}>About</a></li>
                        <li><a href={`${site && `${site}`}/page`}>Agenda</a></li>
                        <li><a href={`${site && `${site}`}/page`}>Partners</a></li>
                    </ul>
                </section>

                <section className="actions">
                    <button className="button">Register</button>
                    <button className="button inverse" onClick={setAccountActive}>LOG-IN</button>
                    <button className="toggle" onClick={() => setNavActive(!navActive)}> = </button>
                </section>
            </nav>


            {/* account */}
            
            <SlideOut active={accountActive} setActive={setAccountActive}>
                <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `space-between`, height: `100%` }}>

                    <div className="navSection formatted">
                        <a className="h4" href="/world">Account</a>
                        <br />
                        <form action="" className="form">
                            <div className='formRow'>
                                <label htmlFor="name">User Name</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            
                            <div className='formRow'>
                                <label htmlFor="email">Password</label>
                                <input type="email" id="email" name="email" />
                            </div>

                            <br />
                            
                            <div className='formRow'>
                                <br />
                                <button className="button" type="submit">Log-in</button>
                            </div>
                        </form>
                        <br />
                    </div>

                    <div className="navSection">
                        <a href="#">Forgot password</a>
                        <a href="#">About FHS Club membership</a>
                    </div>
                    
                </div>
            </SlideOut>


        </header>
    )
}

const Chevron = () => <img src="/dropdown-chevron.svg" alt="" style={{ display: `inline-block`, width: 16, height: 10 }} />