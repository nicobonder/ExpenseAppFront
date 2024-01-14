import { useState } from 'react'
import '../../../src/index.css'
import axios from 'axios';
import { Button, Container } from "@mui/material"
import { useExpensesStore } from '../../stores/expense';
import { getExpenseById } from '../../serivices/expenses';

//Es el segundo paso en el flow.
//Al hacer click en el boton "Ver gasto" ejecuta la func getExpenseById y se hace el fetch
//La info pasa al store y cambia el state
export const OneExpenseForm = () => {
    const [expenseId, setExpenseId] = useState();
    const { setExpenseId: setStoreExpenseId } = useExpensesStore();
  
    const submit = async (e) => {
        e.preventDefault();
        try {
          const expense = await getExpenseById(expenseId);
          console.log("Expense data: ", expense);
          console.log("id es ", expense.id);
          setStoreExpenseId(expense.id);
          console.log("Nuevo selectedExpenseId:", useExpensesStore.getState().selectedExpenseId);
        } catch (error) {
          console.log("Error fetching data: ", error);
        }
      };

    return (
        <Container>
            <form>
                <input
                    type="text"
                    name='expenseId'
                    placeholder="ID del gasto"
                    className="formInput"
                    onChange={(e) => setExpenseId(e.target.value)}
                />
            </form>
            <Button 
            sx={{ backgroundColor:'#B004B2', fontWeight: '700', marginTop:'0.5rem'}} 
            variant="contained"
            onClick={submit}
            >Ver gasto</Button>
        </Container>
    )
}
