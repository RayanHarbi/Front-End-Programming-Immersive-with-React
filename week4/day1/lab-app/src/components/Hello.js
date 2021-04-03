import React, { Component } from 'react'

class Hello extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello {this.props.name} !!</h1>
                <h2>you are {this.props.age} years old</h2>
            </div>
        )
    }
}

export default Hello