export const Button=(props:any) => {
    return <button className={`button ${props.mode}`} onClick={props.onClick}>{props.children}</button>
}

export const ButtonLightPurple=(props:any) => {
    return <button className="button-light-purple" onClick={props.onClick}>{props.children}</button>
}