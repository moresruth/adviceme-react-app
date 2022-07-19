import React from 'react';
import axios from 'axios';

import './App.css'

class App extends React.Component {
    state={ advice:''};

    componentDidMount(){
        this.fecthAdvice();

    }

    fecthAdvice=() => {
        axios.get('https://api.adviceslip.com/advice')
            .then ((response) =>{
               const{advice} =response.data.slip;

               this.setState({ advice});
            })

            .catch((error)=> {
                console.log(error)
            });
    }

    render(){
        
        const {advice} =this.state;
        return(
            
            <div className="app">
                <div className="card">
                    <h1 className="heading"> {advice}</h1>
                    
                </div>
                <button className="button" onClick={this.fecthAdvice}>
                        <span className='button-text'> GIVE ME ADVICE !</span>
                </button>


            </div>
        );
    }
}

export default App;