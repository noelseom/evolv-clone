import { keyframes } from '@emotion/react'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const slideLeft = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
`

export { fadeIn, slideLeft }
