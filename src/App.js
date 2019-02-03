import React, { Component } from 'react';

import Client from './client';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { timestamp :'0' };
    this.set_timer = this.set_timer.bind(this);
  }

 
 
  set_timer(){

    this.setState({timestamp:445454});

     console.log(this.state);
  }

  componentDidMount()
  {
   var x =  Client((err,time)=>{

         this.setState({timestamp:time});   })
      console.log(x)
    this.set_timer();
  }

  
  render() {
   
    return (
      <div className="Apps">              
       {this.state.timestamp}
      </div>
    );
  }
}

export default App;
