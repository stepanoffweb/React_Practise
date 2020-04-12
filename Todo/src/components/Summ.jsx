import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

export class Summ extends Component {
    static propTypes = {
        children: PropTypes.element,
    }

    static defaultProps = {
        children: null
    }

    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState(({count}) => ({
            count: ++count,
        }));
    }

    render() {
        const {count} = this.state;
        const {children, child} = this.props;
        return (
            <Fragment>
                {child}
                <div>{count}</div>
                {React.cloneElement(children, {count2: this.state.count})}
                <button className="btn" onClick={this.handleClick}>+1</button>

            </Fragment>
        )
    }
}

export const Button = () => (
    <button>Simple buttion</button>)

export const Display = ({count2=0}) => {
    return <div className="view">{`Counter value is: ${count2}`}</div>
}
//==========

                 /* // <Display count2={count}/>*/
