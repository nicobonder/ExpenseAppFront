import '../../../src/index.css'
import { Button, Container, FormControl, InputLabel } from "@mui/material"

export const OneExpenseForm = () => {

    return (
        <Container>
            <form>
                <input
                    type="text"
                    placeholder="ID del gasto"
                    className="formInput"
                />
            </form>
            <Button sx={{ backgroundColor:'#B004B2', fontWeight: '700', marginTop:'0.5rem'}} variant="contained">Ver gasto</Button>
        </Container>
    )
}
