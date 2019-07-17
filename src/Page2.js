import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateAccountID } from './actions';

class Page2 extends PureComponent {
  render() {
    const { accountID, updateAccountID } = this.props;
    return (
      <div>
        <hr />
        <button onClick={updateAccountID}> Account ID </button>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accountID: state.accountID,
});

const mapDispatchToProps = (dispatch) => ({
  updateAccountID: () => dispatch(updateAccountID()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
