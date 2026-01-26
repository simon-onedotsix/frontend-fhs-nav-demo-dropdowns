import CSS from './eventsbar.module.css'

export const EventsBar = () => {
    return (
        <div
            className={CSS.layout}
            style={{
                padding: 10,
                backgroundColor: `hsl(from var(--bg) h s calc(l + 10) / 1)`
            }}
        >
            <a href="/">FHS</a>&emsp;<a href="/world">FHS World</a>&emsp;<a href="/sa">FHS Saudi Arabia</a>&emsp;<a href="/africa">FHS Africa</a>
        </div>
    )
}