import React from 'react';
import Motto from './Motto'
import Pics from './Pictures'
import Spotlight from './Spotlight'
import './landing.css'


class Landing extends React.Component{
    constructor(){
        super();
        this.state = {
            light:'',
        }
    }

    traceMouse = (event) => {
        const {clientX, clientY} = event;   //event coordinates of only client area (excluding scroll bars etc)
        // console.log("mouse event", clientX, clientY);
        this.setState({
            light:`radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 20px, #000000dd 300px)`
        })
    }

    render(){
        return(
            <div className='land'>
                <Spotlight handleMouseMove={this.traceMouse} style={this.state.light} />
                <Motto handleMouseMove={this.traceMouse}/>
                <Pics/>
            </div>
        );

    }
}

export default Landing;