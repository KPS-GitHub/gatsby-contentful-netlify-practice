import React from 'react';
import styled from 'styled-components';
import BudgetGraph from './BudgetGraph';
import BudgetStats from './BudgetStats';
import BudgetInputs from './BudgetInputs';
import axios from 'axios';



class Budget extends React.Component {
  state = {
    monthlyBudget: null,
    totalSpent: null,
    category: null,
    purchaseAmount: null,
  }

  componentDidMount () {
    axios.get('https://mydata-822b0.firebaseio.com/Money/Budget.json')
      .then( response => {
        console.log(response);
        this.setState({ 
          monthlyBudget: response.data.monthlyBudget,
          totalSpent: response.data.totalSpent,
          category: response.data.category,
          purchaseAmount: response.data.purchaseAmount
        });
      })
      .catch( error => {
        console.log(error);
      })
  }

  budgetUpdate = (newBudget) => {
    axios.put('https://mydata-822b0.firebaseio.com/Money/Budget/monthlyBudget.json', newBudget)
      .then(response => console.log("response from axios put for budget total", response))
      .then(this.setState({monthlyBudget: newBudget}))
      .catch (error => console.log(error));
  }

  spentUpdate = (newSpent) => {
    axios.put('https://mydata-822b0.firebaseio.com/Money/Budget/totalSpent.json', newSpent)
      .then(response => console.log("response from axios put for total spent", response))
      .then(this.setState({totalSpent: newSpent}))
      .catch (error => console.log(error));
  }

  categoryUpdate = (newCategory) => {
    axios.post('https://mydata-822b0.firebaseio.com/Money/Budget/categories.json', newCategory)
      .then(response => console.log("response from axios post for categories", response))
      .then(this.setState({category: newCategory}))
      .catch(error => console.log(error))
  }

  categoryAmountUpdate = (newPurchase) => {
    axios.put('https://mydata-822b0.firebaseio.com/Money/Budget/purchases.json', newPurchase)
      .then(response => console.log("response from axios post for new purchase", response))
      .then(this.setState({purchaseAmount: newPurchase}))
      .catch(error => console.log(error))
  }

  render() {
    return(
      <SectionWrap>
        Monthly Budget: ${this.state.monthlyBudget}
        <RowWrap>
          <BudgetGraph data={this.state} />
          <BudgetStats />
        </RowWrap>
        <RowWrap>
          <BudgetInputs budgetUpdate={this.budgetUpdate} spentUpdate={this.spentUpdate} categoryUpdate={this.categoryUpdate} categoryAmountUpdate={this.categoryAmountUpdate} />
        </RowWrap>
      </SectionWrap>
    )
  }
}

export default Budget;


const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`