'use client'

import { useState } from "react"

import Link from "next/link"

import { SlideOut } from "@/ui/slideout"
import { FhsLockup } from "./brand/fhs-brand"

export const GlobalHeader = () => {

    const [navActive, setNavActive] = useState(false)
    const [accountActive, setAccountActive] = useState(false)


    return (
        <>
            <header className="header">
                <section>
                    <Link href="/">
                        <FhsLockup
                            leftColor={`var(--fg)`}
                            topColor={`var(--brand-3)`}
                            bottomColor={`var(--brand-2)`}
                        />
                    </Link>
                </section>

                <section className={`mainMenu ${navActive && 'active'}`}>
                    <ul>
                        <li><span>About &darr;</span>
                            <ul>
                                <li><a href={`/page`}>About FHS</a></li>
                                <li><a href={`/page`}>ESG Impact</a></li>
                                <li><a href={`/page`}>Additional Marketing Opportunities</a></li>
                            </ul>
                        </li>
                        <li><a href={`/page`}>Content Library</a></li>
                        <li><a href={`/page`}>Award Winners</a></li>
                        <li><a href={`/page`}>FHS Club</a></li>
                        <li><a href={`/page`}>Contact Us</a></li>
                    </ul>
                </section>

                <section className="actions">
                    <button className="button inverse" onClick={setAccountActive}>LOG-IN</button>
                    <button className="toggle" onClick={() => setNavActive(!navActive)}> = </button>
                </section>
            </header>

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

        </>
    )
}
