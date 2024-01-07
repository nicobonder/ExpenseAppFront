import { Button, Typography } from "@mui/material";
import { useExpensesStore } from "../stores/expense";

export const AllExpenses = ({ onClickExpenses }) => {
    const AlegreyaText = {
        fontFamily: "Alegreya",
        fontWeight: 500,
        fontSize: "1.4rem",
        textAlign: 'left',
        color: '#fff' 
      };

  return (
    <Button>
        <Typography style={AlegreyaText} component='a' onClick={onClickExpenses}>
            Ver todos los gastos
        </Typography>
    </Button>
  )
}