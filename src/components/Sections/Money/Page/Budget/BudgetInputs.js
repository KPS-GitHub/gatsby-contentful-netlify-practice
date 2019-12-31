import React from "react";
import styled from "styled-components";

const inputs = ["Budget Total", "Purchases Total", "Category", "Purchase Amount"];
// const inputs = ["Budget Total", "Purchases Total", "Individual Purchase"];

class BudgetInputs extends React.Component {
  state = {
    budgetInputVal: null,
    spentInputVal: null,
    category: "",
    categoryAmount: null,
  };

  // need to update local state with the input values so that when we call the prop functions, we can use the state variables as inputs rather than ripping the values straight from the inputs (I think that would require jQuery and would be a little wonky to code since the inputs are dynamically created)
  budgetUpdate = e => {
    this.setState({ budgetInputVal: parseInt(e.target.value) });
  };

  spentUpdate = e => {
    this.setState({ spentInputVal: parseInt(e.target.value) });
  };

  categoryUpdate = e => {
    this.setState({ category: toString(e.target.value) });
  };

  categoryAmountUpdate = e => {
    this.setState({ categoryAmount: parseInt(e.target.value) });
  };

  render() {
    return (
      <Wrap>
        {inputs.map(input => {
          return (
            <InputWrap key={input + ` Input`}>
              {input}: &nbsp;
              <input
                onChange={
                  input === "Budget Total"
                    ? this.budgetUpdate
                    : input === "Purchases Total" 
                      ? this.spentUpdate
                      : input === "Category"
                        ? this.categoryUpdate
                        : this.categoryAmountUpdate
                }
                type={input === "Category" ? "text" : "number"}
                name={input}
              />
              <button
                onClick={
                  input === "Budget Total"
                    ? () => this.props.budgetUpdate(this.state.budgetInputVal)
                    : input === "Purchases Total"
                      ? () => this.props.spentUpdate(this.state.spentInputVal)
                      : input === "Category"
                        ? () => this.props.categoryUpdate(this.state.category)
                        : () => this.props.categoryAmountUpdate(this.state.categoryAmount)
                }
              >
                update
              </button>
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
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
