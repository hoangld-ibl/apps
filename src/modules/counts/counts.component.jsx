import React, { Component } from 'react';
import './counts.styles.scss';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Counts from './counts.mobx';

const Count = new Counts();

const App = observer(class App extends Component {
    constructor() {
        super();
        console.log('constructor.')
    }

    componentDidMount() {
        console.log('componentDidMount.')
    }
    
    componentWillReceiveProps(next) {
        console.log('componentWillReceiveProps: ', next)
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount.')
    }

    render() {
        console.log('render.')
        return (
            <div className="AppCounts">
                <Button variant="contained" color="primary" onClick={Count.tick}>
                    {Count.counts}
                </Button>
            </div>
        )
    }
})

export default App;
