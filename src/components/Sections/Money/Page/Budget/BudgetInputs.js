import React from 'react';
import styled from 'styled-components';

const inputs = ["Budget Total", "Purchases Total"];
// const inputs = ["Budget Total", "Purchases Total", "Individual Purchase"];

class BudgetInputs extends React.Component {
  state={
    budgetInputVal: null,
    spentInputVal: null
  }

  // need to update local state with the input values so that when we call the prop functions, we can use the state variables as inputs rather than ripping the values straight from the inputs (I think that would require jQuery and would be a little wonky to code since the inputs are dynamically created)
  budgetUpdate = e => {
    this.setState({budgetInputVal: parseInt(e.target.value)});
  }

  spentUpdate = e => {
    this.setState({spentInputVal: parseInt(e.target.value)})
  }

  render() {
    return (
      <Wrap>
        {inputs.map(input => {
          return(
            <InputWrap key={input + ` Input`}>
              {input}: &nbsp;
              <input onChange={input === "Budget Total" ? this.budgetUpdate : this.spentUpdate} type="number" name={input} />
              <button onClick={input === "Budget Total" ? () => this.props.budgetUpdate(this.state.budgetInputVal) : () => this.props.spentUpdate(this.state.spentInputVal) }>update</button>
            </InputWrap>
          );
        })}
      </Wrap>
    );
  }

}

export default BudgetInputs;


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`