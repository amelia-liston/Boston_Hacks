export const Button=(props:any) => {
    return <button className={`button same-line button-${props.color} button-${props.size}`} onClick={props.onClick}>{props.children}</button>
}

// export const ButtonLightPurple=(props:any) => {
//     return <button className="button-light-purple" onClick={props.onClick}>{props.children}</button>
// }