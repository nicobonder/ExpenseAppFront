import { Button, Typography } from "@mui/material";
import '../../src/index.css'

export const AllExpenses = ({ onClickExpenses }) => {
  const AlegreyaText = {
    fontFamily: "Fira Sans",
    fontWeight: 500,
    fontSize: "1.4rem",
    textAlign: 'left',
    backgroundImage: `linear-gradient(135deg, #FFFF00 10%, #fff 5%`,
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <Button className="menuBtn">
        <Typography style={AlegreyaText} component='a' onClick={onClickExpenses}>
            Ver todos los gastos
        </Typography>
    </Button>
  )
}