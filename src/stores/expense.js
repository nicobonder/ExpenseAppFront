import { create } from "zustand";
import { persist, devtools } from "zustand/middleware"
import { getAllExpenses } from "../serivices/expenses";

export const useExpensesStore = create(
 
    (set, get) => {
      return {
        expenses: [],
        expense: 0,
        showAllExpenses: false,
        showOneExpense: false, 
        
        fetchExpenses: async () => {
          try {
            const expenses = await getAllExpenses();
            set((state) => {
              return { ...state, expenses, showAllExpenses: true };
            });
            
          } catch (error) {
            console.error("Error fetching expenses:", error);
          }
        },
        fetchExpense: async (id) => {
          try {
            const expense = await getAllExpenses(id);
            set((state) => {
              return { ...state, expense, showOneExpense: true };
            });
          } catch (error) {
            console.error("Error fetching expense:", error);
          }
        },
      };
    }
);
