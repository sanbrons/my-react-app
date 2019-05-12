import React, {Component} from 'react'

class Button extends Component {
    render() {
        let styles = {
            background: this.props.colour
        }
        return (
            <button onClick={this.props.onClick} className="my--btn" style={styles}>{this.props.text}</button>
        )
    }
  
}

export default Button