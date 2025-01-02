import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
                borderBlockStart: bodyPart === item ? '4px solid #ff2625' : '',
                background: "#fff",
                borderBottomLeftRadius: '20px',
                inlineSize: '270px',
                blockSize: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
            }}
    >
        <img src={Icon} alt='dumbell'  style={{ inlineSize: '40px', blockSize: '40px' }} />
        <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart