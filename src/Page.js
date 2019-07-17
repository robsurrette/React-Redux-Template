import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { incrementAction, decreaseAction, updateAccountID } from "./actions";
import Page2 from "./Page2";

class Page extends PureComponent {

  render() {

    const { value, accountID, incrementAction, decreaseAction, updateAccountID } = this.props;
    
    return (
      <div>

        <h1>{value}</h1>
        <h1> *{accountID}* </h1>
        <button onClick={incrementAction}>increment</button>
        <button onClick={decreaseAction}>decrease</button>
        <br />
        <button onClick={updateAccountID}> Account ID </button>
        
        <Page2 />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value,
  accountID: state.accountID
});

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction()),
  updateAccountID: () => dispatch(updateAccountID())
});

export default connect( mapStateToProps, mapDispatchToProps )(Page);
