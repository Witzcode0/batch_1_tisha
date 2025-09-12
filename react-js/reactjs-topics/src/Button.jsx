import './App.css'

function Button(props){
    let style_ = {
        color:"white",
        backgroundColor:"black"
    }
    return (
        <button className="btn" style={style_}>{props.value}</button>
    )
}

export default Button;