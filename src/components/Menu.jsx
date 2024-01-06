import { Button, Divider, Stack, Typography } from "@mui/material";
import { useExpensesStore } from "../stores/expense";

export const Menu = () => {
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

  const { fetchExpenses } = useExpensesStore.getState();
  const handleClickExpenses = () => {
    fetchExpenses()
    console.log("click en menu");
  }

  return (
    <Stack
        style={{ paddingLeft: '1rem' }}
    >
      <Typography style={AlegreyaTitle} component='h2'>
        Menú
      </Typography>
      
      <Stack
        direction='column'
        divider={<Divider orientation='horizontal'flexItem 
          style={{ backgroundColor: 'oklch(59.53% 0.274 327.6 / 85.04%)', width: '100%' }}
        />}
        spacing={2}
      >
        <Typography style={AlegreyaText} component='a'>
            Cargar un nuevo gasto
        </Typography>
        <Typography style={AlegreyaText} component='a'>
            Borrar un gasto
        </Typography>
        <Typography style={AlegreyaText} component='a'>
            Actualizar un gasto
        </Typography>
        <Typography style={AlegreyaText} component='a'>
            Ver un gasto
        </Typography>
       
        <Button>
        <Typography style={AlegreyaText} component='a' onClick={handleClickExpenses}>
            Ver todos los gastos
        </Typography>
        </Button>
        <Typography style={AlegreyaText} component='a'>
            Ver gastos por día
        </Typography>
        <Typography style={AlegreyaText} component='a'>
            Ver gastos por categoría
        </Typography>
        
      </Stack>
    
    </Stack>
  );
};
