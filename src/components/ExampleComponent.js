import React from 'react';
import { connect } from 'react-redux';
import { exampleAction } from '../actions/exampleActions';

const ExampleComponent = ({ exampleData, dispatchExampleAction }) => {
  return (
    <div>
      <p>{exampleData}</p>
      <button onClick={() => dispatchExampleAction('New Data')}>
        Dispatch Action
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  exampleData: state.example.exampleData, // Update with your state structure
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExampleAction: (data) => dispatch(exampleAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
