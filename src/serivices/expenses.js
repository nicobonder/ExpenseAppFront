//Obtener todos los gastos
export const getAllExpenses = async () => {
    const res = await fetch('http://localhost:8081/api/v1/expense'); //8081 puerto con el que trabaja el back
    const json = await res.json();
    console.log(json); //para ver lo que llega
    return json;
}

// Obtener un gasto por id
//Es el primer paso en el flow. Ontenemos la info del back
export const getExpenseById = async (id) => {
    const res = await fetch(`http://localhost:8081/api/v1/expense/${id}`);
    const json = await res.json();
    return json;
  };
  