function Motto(props){
    return(
        <h1 className='motto head center tc'
            onMouseMove={props.handleMouseMove}>
            Ideas worth spreading
        </h1>
    )
}

export default Motto;