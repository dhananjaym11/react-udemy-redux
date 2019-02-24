import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions/index';

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter} />

                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.results && this.props.results.map(r => (
                        <li key={r.id} onClick={() => this.props.onDeleteResult(r.id)}>{r.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctrReducer.counter,
        results: state.resReducer.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.increment()),
        onDecrementCounter: () => dispatch(actions.decrement()),
        onAddCounter: () => dispatch(actions.add(5)),
        onSubstractCounter: () => dispatch(actions.substract(5)),
        onStoreResult: (counter) => dispatch(actions.storeResult(counter)),
        onDeleteResult: (i) => dispatch(actions.deleteResult(i))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);