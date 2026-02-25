'use client'

import { useState, Fragment } from "react"

import Link from "next/link"

import { FhsLockup } from "./brand/fhs-brand"
import { SlideOut } from "@/ui/slideout"

export const Header = ({ site, handle = 'FHS', mainMenu }) => {

    const [navActive, setNavActive] = useState(false)
    const [accountActive, setAccountActive] = useState(false)

    // console.log(mainMenu)



    const handleMenuItem = ( item ) => {

        switch (item.__typename) {
            case "navigation_Entry":
                return <li key={item.id}><a href={item.navUrl}>{item.title}</a></li>
                break
            
            case "section_Entry":
                return <li key={item.id}><span>{item.title}<Chevron/></span></li>
                break
            
            case "heading_Entry":
                return <li key={item.id}><p>{item.title}</p></li>
                break
        
            default:
                break
        }
    }
    
    
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
                        <li className="deviceOnly"><a href={`${site && `${site}`}/`}>Home</a></li>

                        {
                            mainMenu?.map(item => {
                                if (item.children.length) {
                                    //level 1
                                    return (
                                        <li key={item.id}>
                                            <span>{item.title}<Chevron /></span>
                                            <ul>
                                                {
                                                    item.children.map(child => {
                                                        // level 2
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
                                return handleMenuItem(item)
                            })
                        }
                    </ul>

                    <section className="actions">
                        <button className="button">Register Here</button>
                        <button className="button">Become a Partner</button>
                        <button className="button inverse" onClick={setAccountActive}>Log-in</button>
                    </section>
                </section>

                <button className="toggle" onClick={() => setNavActive(!navActive)}> = </button>
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