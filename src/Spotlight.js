
function Spotlight(props){
    return(
        <div className="spotlight" 
        onMouseMove={props.handleMouseMove} 
        style={{background: `${props.style}`}}
        ></div>
    )
}

export default Spotlight;