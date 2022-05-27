import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }
  render() {
      if(this.state.hasError){
          return(
              <h1>Ooops... Something went wrong!</h1>
          )
      }else{
          return this.props.children
      }
  }
}
