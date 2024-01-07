import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { useExpensesStore } from "../stores/expense";
import { useEffect } from "react";

export const Results = () => {
  const AlegreyaTitle = {
    fontFamily: "Alegreya",
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    backgroundImage: `linear-gradient(135deg, #FFFF00 39%, #fff 5%`,
    backgroundClip: 'text',
    color: 'transparent',
  };

  const AlegreyaText = {
    fontFamily: "Alegreya",
    fontWeight: 500,
    fontSize: "1.4rem",
    textAlign: "left",
    backgroundImage: `linear-gradient(135deg, #FFFF00 39%, #fff 5%)`,
    backgroundClip: 'text',
    color: 'transparent',
  };

  const AlegreyaListItem = {
    fontFamily: "Alegreya",
    fontWeight: 500,
    fontSize: "1.4rem",
    textAlign: "left",
    backgroundImage: `linear-gradient(135deg, #FFFF00 7%, #fff 5%)`,
    backgroundClip: 'text',
    color: 'transparent',
  };


  const { expenses, fetchExpenses } = useExpensesStore.getState();
  let showResults = useExpensesStore((state) => state.showResults); // Obtener showResults del estado global

  useEffect(() => {
    // Llamar a fetchExpenses cuando showResults cambie
    if (showResults) {
      fetchExpenses();
    }
  }, [showResults, fetchExpenses]);

  return (
    <Stack style={{ paddingRight: "1rem", width: "70%", overflowY: "auto", overflowX: 'hidden' }}>
       <Typography style={AlegreyaTitle} component='h2'>
        Todos tus gastos
      </Typography>
      {showResults && (
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
  );
};
