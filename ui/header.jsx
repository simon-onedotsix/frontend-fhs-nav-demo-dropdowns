'use client'

import { useState } from "react"

import Link from "next/link"

import { FhsLockup } from "./brand/fhs-brand"
import { SlideOut } from "@/ui/slideout"

export const Header = ({ site, handle = 'FHS' }) => {

    const [navActive, setNavActive] = useState(false)
    const [accountActive, setAccountActive] = useState(false)

    
    return (
        <header>

            <nav className="header">
                <section>
                    <Link href={site ? `${site}` : `/`}>
                        <FhsLockup
                            region={handle}
                            leftColor={`var(--fg)`}
                            topColor={`var(--brand-3)`}
                            bottomColor={`var(--brand-2)`}
                        />
                    </Link>
                </section>

                <section className={`mainMenu ${navActive && 'active'}`}>
                    <ul>
                        <li><span>About<Chevron/></span>
                            <ul>
                                <li><a href={`${site && `${site}`}/page`}>About Us</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Investors</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Why Attend</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Networking</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Sustainability</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Travel Guide</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Contact Us</a></li>
                            </ul>
                        </li>
                        <li><span>Programme<Chevron/></span>
                            <ul>
                                <li><a href={`${site && `${site}`}/page`}>Agenda</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Themes</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Speakers</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Advisory Board</a></li>
                            </ul>
                        </li>
                        <li><span>Event Features<Chevron/></span>
                            <ul>
                                <li className="fw-600">FHS Pitch Sessions</li>
                                <li><a href={`${site && `${site}`}/page`}>Startup Den</a></li>
                                <li className="fw-600">Awards</li>
                                <li><a href={`${site && `${site}`}/page`}>Future Leader Award</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Impact Leader Award</a></li>
                                <li className="fw-600">Experiences</li>
                                <li><a href={`${site && `${site}`}/page`}>Curated Connections</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Networking Receptions</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Tour Experiences</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Sports &amp; Wellness</a></li>
                                <li><a href={`${site && `${site}`}/page`}>FHSWomenPower</a></li>
                            </ul>
                        </li>
                        <li><span>Sponsorship<Chevron/></span>
                            <ul>
                                <li><a href={`${site && `${site}`}/page`}>Sponsors &amp; Partners</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Why Sponsor?</a></li>
                                <li><a href={`${site && `${site}`}/page`}>Floor Plan</a></li>
                                <li><a href={`${site && `${site}`}/page`}>3D Virtual Tour</a></li>
                            </ul>
                        </li>
                        <li><a href={`${site && `${site}`}/page`}>Content Library</a></li>
                    </ul>
                </section>

                <section className="actions">
                    <button className="button">Register</button>
                    <button className="button">Become a Partner</button>
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