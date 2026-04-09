import { format } from 'date-fns'
import parse from 'html-react-parser'
import convertSeconds from '@/lib/utils/convertSeconds'

import { StopwatchIcon, LocationIcon } from '@/ui/icons/icons'

import CSS from './session.module.css'

export const Session = ({ session }) => {

    // console.log(session)

    const title = session.titleTranslations[0].value
    const description = session.descriptionTranslations[0]?.value
    const locationField = session.fields?.filter((field) => field.definition?.name === 'Location')
    const location = locationField[0]?.translations[0].value

    return (
        <div className={CSS.wrapper}>
			<header className={CSS.header}>
				<Duration startTime={session.beginsAt} endTime={session.endsAt} />
                <Location location={location} />
			</header>

			<div className={CSS.content} >
				<p className={CSS.title}>{title}</p>

				{
                    session.descriptionTranslations.length
                        ? <div>{parse( description )}</div>
                        : null
				}
				
                {
                    session.speakers.length
                        ? <Speakers speakers={session.speakers} />
                        : null
                }
			</div>
		</div>
    )
}







const Duration = ({ startTime, endTime }) => {
    if ( !startTime ) return

	return (
		<p>
			{ format( new Date(startTime), "HH:mm" ) } - { endTime && format( new Date(endTime), "HH:mm" ) }
			{
				endTime &&
				<span>&ensp;<StopwatchIcon fill={'var(--bg)'}/> { convertSeconds(parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())/1000) }</span>
			}
		</p>
	)
}

const Location = ({ location }) => {
    if ( !location ) return
	
    return (
		<p className={CSS.tag}><LocationIcon fill={'var(--bg)'} />{ location }</p>
	)
}

const Speakers = ({ speakers }) => {
    if ( !speakers ) return
    
    // console.log('speakers:', speakers)

    return (
        <div className={CSS.speakerGrid}>
            { speakers.map( (speaker, index) => <SpeakerCard key={index} speaker={speaker} />) }
        </div>
    )
}

const SpeakerCard = ({ speaker }) => {
    if ( !speaker ) return 
    
    return (
        <div className={CSS.speakerCard}>
            <p>{speaker.firstName} {speaker.lastName}</p>
        </div>
    )
}