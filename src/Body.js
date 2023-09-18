import React from 'react'
import './Body.css'
import X from './assets/tedx-logo-hero.png'

class Body extends React.Component{
    render(){
        return(
            <>
                <img className='center mv6 X' src={X} alt='X' height='400px'></img>
                <div className='content'>
                    <div className='text mh6'>
                        <h2>What is TEDx?</h2>
                        <p>In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxKIET, where x = independently organized TED event.

                        At our TEDxKIET event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
                    </div>
                </div>
                <img className='center mv6 X' src={X} alt='X' height='400px'></img>
                <div className='content'>
                    <div className='text mh7'>
                        <h2>Our Theme: Living The Wonka World</h2>
                        <p>TEDxKIET 2023 event will be centered around the theme: Living The Wonka World Inspired by the imaginative and whimsical world of Willy Wonka in Roald Dahl's beloved children's book, "Charlie and the Chocolate Factory", we have chosen the theme TEDXKIET 2023 based on the notion that the real world can be viewed as one large Wonka world</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Body;