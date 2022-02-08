import React from 'react';
import ReactDOM from 'react-dom';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    
    render() {
        return (
            <div>
                {this.state.date.toLocaleString()}
            </div>
        )
    }

    // This is an example of a componentDidUpdat with a if statement
    startInterval() {
        let delay;
        if (this.props.isPrecise) {
            delay = 100;
        } else {
            delay = 1000;
        }
    }

    // This will refresh and run your clock every second in real time.
    componentDidMount() {
        // componentDidUpdate
        this.startInterval();

        const oneSecond = 1000;
        this.intervalID = setInterval(() => {
            this.setState({ date: new Date() });
        }, oneSecond);
    }

    // This will stop the clock and clean up your code.
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    // The end and rapping up the componentDidUpdate method
    componentDidUpdate(prevProps) {
        if (this.props.isPrecise === prevProps.isPrecise) {
            return;
        }
        clearInterval(this.intervalID);
        this.startInterval();
    }
}

ReactDOM.render(<Clock />, document.getElementById('app'));