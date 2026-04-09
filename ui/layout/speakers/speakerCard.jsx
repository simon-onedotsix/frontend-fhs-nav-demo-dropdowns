import CSS from './speakerCard.module.css'

export const SpeakerCard = ({ speaker, sitePathSegment }) => {
    if ( !speaker ) return

    return (
        <div className={CSS.layout}>
            <section className={CSS.avatar}>
                <a href={`${sitePathSegment}/speakers/${speaker.id}`}>
                    <img src={speaker.photoUrl} alt=""  width="100%"/>
                </a>
            </section>

            <section className={CSS.content}>
                {/* <p style={{ fontSize: 10, color: 'lime'}}>{speaker.id}</p> */}
                <p>{speaker.firstName} {speaker.lastName}</p>
                <p>{speaker.jobTitle}</p>
                <p>{speaker.organization}</p>
            </section>
        </div>
    )
}