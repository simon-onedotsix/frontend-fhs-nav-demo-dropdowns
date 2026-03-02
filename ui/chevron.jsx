export const Chevron = ({ direction = 0 }) => {

    const handleDirection = (d) => {

        switch (d) {
            case "left":
                return 90
                break
            
            case "right":
                return -90
                break
            
            case 'up':
                return 180
                break
        
            default:
                return 0
                break
        }

    }

    return (
        <img
            src="/dropdown-chevron.svg"
            alt=""
            style={{
                display: `inline-block`,
                width: 16,
                height: 10,
                transform: `rotate(${handleDirection(direction)}deg)`
            }}
        />
    )
}