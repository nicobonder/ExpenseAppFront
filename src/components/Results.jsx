import { Stack, Typography } from "@mui/material"

export const Results = () => {
    const AlegreyaTitle = {
        fontFamily: "Alegreya",
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        color: '#fff'
      };
    
      const AlegreyaText = {
        fontFamily: "Alegreya",
        fontWeight: 500,
        fontSize: "1.4rem",
        textAlign: 'left',
        color: '#fff' 
      };

    return (
        <Stack
            style={{ paddingRight: '1rem' }}
        >
            <Typography style={AlegreyaTitle} component='h2'>
                Resultados
            </Typography>
        </Stack>
    )
}