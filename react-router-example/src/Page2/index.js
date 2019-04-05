import React, { Component } from 'react';

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = { id: null, isLoading: true }
      }

    componentDidMount() {
        console.log(this.props.match.params.id)
        this.setState({ 
            id: this.props.match.params.id, 
            isLoading: false 
        })
    }

    render() {
        return (
            <div>
                <h1>Page 2</h1>
                <p>id: {this.state.id}</p>
            </div>
        )
    }
}

export default Page2;