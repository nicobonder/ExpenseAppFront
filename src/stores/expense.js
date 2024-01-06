import { create } from "zustand";
import { persist, devtools } from "zustand/middleware"
import { getAllExpenses } from "../serivices/expenses";

export const useExpensesStore = create(
    persist(
      (set, get) => {
        return {
          expenses: [],
          expense: 0,
          fetchExpenses: async () => {
            try {
              const expenses = await getAllExpenses();
              set({ expenses });
            } catch (error) {
              console.error("Error fetching expenses:", error);
            }
          },
        };
      },
      {
        name: 'expenses-store', // Middleware de persistencia.
        getStorage: () => localStorage, // O sessionStorage según tu preferencia
      }
    )
  );

/*export const useExpensesStore = create(
    devtools(
      persist((set, get) => {
        return {
          expenses: [],
          expense: 0,
  
          fetchExpenses: async () => {
            const expenses = await getAllQuestions
        },
        };
      })
    )
  );
*/
