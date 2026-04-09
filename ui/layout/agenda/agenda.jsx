'use client'

import { useState } from "react"

import { Session } from '@/ui/layout/agenda/session'

import CSS from './agenda.module.css'


export const Agenda = ({ sessions }) => {

	const [ search, setSearch ] = useState ('')

    const searchAgenda = ( sessionsData ) => {
        if ( !search ) return sessionsData

        let results = sessionsData.filter( session => {
            if ( session.titleTranslations[0].value.toLowerCase().includes(search.toLocaleLowerCase()) ) return session
        })

        return results
    }

    return (
        <>
				
            <input 
                type="text" 
                placeholder="Search" 
                onChange={ e => {
                    e.preventDefault()
                    setSearch(e.target.value) 
                }}
                value={search}
                
            />
            
            <button
                onClick={ () => {
                    setSearch('')
                }}
            >&times;</button>


            <div className={CSS.layout}>
                { searchAgenda(sessions)?.map( session => <Session key={session.id} session={session} />) }
            </div>
        </>
    )
}


