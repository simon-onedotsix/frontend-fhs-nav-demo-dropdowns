import CSS from './eventsbar.module.css'

export const EventsBar = () => {
    return (
        <div
            className={CSS.layout}
            style={{
                padding: 10,
                backgroundColor: `hsl(from var(--bg) h s calc(l - 4) / 1)`,
                fontSize: 14
            }}
        >
            Our Events: &emsp;

            <a href="/">FHS</a>&emsp;<a href="/world">FHS World</a>&emsp;<a href="/sa">FHS Saudi Arabia</a>&emsp;<a href="/africa">FHS Africa</a>&emsp;<a href="/egypt">FHS Egypt</a>

            &emsp;<a href="#">Branded Residences Forum</a>&emsp;<a href="/world/brf">BRF @FHS World</a>&emsp;<a href="/sa/brf">BRF @FHS Saudi Arabia</a>&emsp;<a href="/egypt/brf">BRF @FHS Egypt</a>

            &emsp;<a href="#">AviaDev</a>&emsp;<a href="#">SAHIC</a>
        </div>
    )
}