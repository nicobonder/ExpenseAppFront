import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { useExpensesStore } from "../stores/expense";
import { useEffect } from "react";

export const Results = () => {

  const AlegreyaTitle = {
    fontFamily: "Alegreya, sans-serif",
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    backgroundImage: `linear-gradient(135deg, #FFFF00 39%, #fff 5%`,
    backgroundClip: 'text',
    color: 'transparent',
  };

  const AlegreyaText = {
    fontFamily: "Alegreya, sans-serif",
    fontWeight: 500,
    fontSize: "1.4rem",
    textAlign: "left",
    backgroundImage: `linear-gradient(135deg, #FFFF00 39%, #fff 5%)`,
    backgroundClip: 'text',
    color: 'transparent',
  };

  const AlegreyaListItem = {
    fontFamily: "Alegreya, sans-serif",
    fontWeight: 500,
    fontSize: "1.4rem",
    textAlign: "left",
    backgroundImage: `linear-gradient(135deg, #FFFF00 7%, #fff 5%)`,
    backgroundClip: 'text',
    color: 'transparent',
  };

  const { expenses, fetchExpenses, oneExpense, fetchExpense, selectedExpenseId, showOneExpense } = useExpensesStore();
  

  let showAllExpenses = useExpensesStore((state) => state.showAllExpenses);

  useEffect(() => {
    // Llamar a fetchExpenses cuando showAllExpenses cambie
    if (showAllExpenses) {
      fetchExpenses();
    }
  }, [showAllExpenses, fetchExpenses]);

  //Es el cuarto paso en el flow
  //Se ejecuta fetchExpense del store y se obtiene la info para renderizar con oneExpense
  useEffect(() => {
    // Llamar a fetchExpense cuando selectedExpenseId cambie
    if (selectedExpenseId) {
      fetchExpense(selectedExpenseId);
    }
  }, [selectedExpenseId, fetchExpense]);

  return (
    <>
    <Stack style={{ paddingRight: "1rem", width: "70%", overflowY: "auto", overflowX: 'hidden' }}>
       <Typography style={AlegreyaTitle} component='h2'>
        Todos tus gastos
      </Typography>
      {showAllExpenses && (
        <List style={{ width: "100%", paddingLeft:"4rem" }}>
          {expenses.map((expense) => (
             <ListItem key={expense.id} sx={{padding:"0rem"}}>
             <ListItemText
               primary={
                 <Typography style={AlegreyaListItem}>
                   {`${expense.date} - $${expense.amount} - ${expense.categoryName}`}
                 </Typography>
               }
             />
           </ListItem>
          ))}
        </List>
      )}
    </Stack>
    
    <Stack style={{ paddingRight: "1rem", width: "70%", overflowY: "auto", overflowX: 'hidden' }}>
      <Typography style={AlegreyaTitle} component='h2'>
        Tu gasto
      </Typography>
      {showOneExpense && (
        <Typography style={AlegreyaText} component="h4">
          {`${oneExpense.date} - $${oneExpense.amount} - ${oneExpense.categoryName}`}
        </Typography>
      )}
    </Stack>
     
    </>
   
  );
};
