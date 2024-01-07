import { create } from "zustand";
import { persist, devtools } from "zustand/middleware"
import { getAllExpenses } from "../serivices/expenses";

export const useExpensesStore = create(
 
    (set, get) => {
      return {
        expenses: [],
        expense: 0,
        showResults: false, 
        fetchExpenses: async () => {
          try {
            const expenses = await getAllExpenses();
            set((state) => {
              return { ...state, expenses, showResults: true };
            });
            
          } catch (error) {
            console.error("Error fetching expenses:", error);
          }
        },
      };
    },
    
);
