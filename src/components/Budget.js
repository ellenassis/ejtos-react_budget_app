import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const inputValue = event.target.value;
        if(inputValue <= 20000 && inputValue >= totalExpenses) {
            setNewBudget(inputValue);
        } else if(inputValue >= 20000) {
            alert(`The value cannot exceed remaining funds £${remaining}`)
        } else {
            alert('You cannot reduce the budget value lower than the spending')
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

