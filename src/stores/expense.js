import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { getAllExpenses, getExpenseById } from "../serivices/expenses";

export const useExpensesStore = create((set, get) => {
  return {
    expenses: [],
    oneExpense: {},
    showAllExpenses: false,
    showOneExpense: false,
    selectedExpenseId: null,

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

   //Es el tercer paso en el flow
   //Se modifica el state con la info que viene del form y del back
    fetchExpense: async (id) => {
      try {
        const expense = await getExpenseById(id);
        set((state) => {
          return { ...state, oneExpense: expense, showOneExpense: true };
        });
      } catch (error) {
        console.error("Error fetching expense:", error);
      }
    },

    setExpenseId: (id) => {
      set((state) => {
        console.log("setExpenseId:", id);
        return { ...state, selectedExpenseId: id };
      });
    },
  };
});
