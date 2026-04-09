'use client'

import { useState, Fragment } from "react"

import Link from "next/link"

import { handleMenuItem } from "@/lib/utils/handleMenuItem"

import { MenuToggle } from "@/ui/components/menu-toggle"
import { FhsLockup } from "@/ui/brand/fhs-brand"
import { Chevron } from "@/ui/chevron"
import { SlideOut } from "@/ui/modules/slideout"
import { Button } from "@/ui/buttons/button"


import CSS from './header.module.css'

export const Header = ({ site, handle, mainMenu, ctas }) => {

    const [navActive, setNavActive] = useState(false)
    const [accountActive, setAccountActive] = useState(false)

    // console.log(mainMenu)
   
    
    return (
        <header>

            <nav className={CSS.header}>
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

                <section className={`${CSS.mainMenu} ${navActive && CSS.active}`}>
                    <ul>
                        <li className={CSS.deviceOnly}><Link href={`${site && `${site}`}/`}>Home</Link></li>

                        {
                            mainMenu?.map(item => {
                                if (item.children.length) {
                                    // level-1
                                    return (
                                        <li key={item.id}>
                                            <span className={CSS.title}>{item.title}<Chevron /></span>
                                            <ul>
                                                {
                                                    item.children.map(child => {
                                                        // level-2
                                                        if (child.children?.length) {
                                                            return (
                                                                <li key={child.id}><p>{child.title}</p>
                                                                    <ul>
                                                                        { child.children?.map(subItem => handleMenuItem(subItem)) }
                                                                    </ul>
                                                                </li>
                                                            )
                                                        }
                                                        return handleMenuItem(child)
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                }
                                // level-1
                                return handleMenuItem(item)
                            })
                        }
                    </ul>

                    <section className={CSS.actions}>
                        {
                            ctas?.map((cta, index) => (
                                <Button
                                    key={index}
                                    href={cta.hyperlink}
                                    label={cta.label}
                                    target={cta.openInNewWindow}
                                />
                            ))
                        }
                        <span onClick={setAccountActive}><Button fake outline label={`Log-in`} /></span>
                    </section>
                </section>

                {/* mobile toggle button */}
                <button className={CSS.toggle} onClick={() => setNavActive(!navActive)}><MenuToggle active={navActive}/></button>
            </nav>


            
            {/* account */}
            <SlideOut active={accountActive} setActive={setAccountActive}>
                <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `space-between`, height: `100%` }}>

                    <div className="navSection formatted">
                        <Link className="h4" href="/world">Account</Link>
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
                        <Link href="#">Forgot password</Link>
                        <Link href="#">About FHS Club membership</Link>
                    </div>
                    
                </div>
            </SlideOut>


        </header>
    )
}
