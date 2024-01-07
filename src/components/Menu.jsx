import { Button, Divider, Stack, Typography } from "@mui/material";
import { useExpensesStore } from "../stores/expense";
import { AllExpenses } from "./AllExpenses";
import { ShowExpense } from "./ShowExpense";
import { OneExpenseForm } from "./forms/OneExpenseForm";
import { useState } from "react";

export const Menu = () => {
  const AlegreyaTitle = {
    fontFamily: 'Fira Sans, sans-serif',
    fontWeight: 500,
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    backgroundImage: `linear-gradient(135deg, #FFFF00 43%, #fff 5%`,
    backgroundClip: 'text',
    color: 'transparent',
  };

  const AlegreyaText = {
    fontFamily: "Fira Sans, sans-serif",
    fontWeight: 500,
    fontSize: "1.4rem",
    textAlign: 'left',
    backgroundImage: `linear-gradient(135deg, #FFFF00 10%, #fff 5%`,
    backgroundClip: 'text',
    color: 'transparent',
  };

  const { fetchExpenses } = useExpensesStore.getState(); // Obtener fetchExpenses, showAllExpenses  del estado global
  const [showOneExpenseForm, setShowOneExpenseForm] = useState(false);

  const handleClickExpenses = async () => {
    await fetchExpenses();
    //showAllExpenses(true); // Cambiar showAllExpenses a true
  };

  const onClickShowExpense = () => {
    setShowOneExpenseForm(true);
  };


  return (
    <Stack style={{ paddingLeft: '1rem', width: '25%' }}>
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
       
        <ShowExpense onClickExpense={onClickShowExpense} />
        {showOneExpenseForm && <OneExpenseForm />}
       
        <AllExpenses onClickExpenses={handleClickExpenses} />

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