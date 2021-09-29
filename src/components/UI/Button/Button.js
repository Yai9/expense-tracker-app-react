const Button = props => {
    return (
        <div>
            <button onClick={props.clicked}>{props.children}</button>
        </div>
    )
}

export default Button
