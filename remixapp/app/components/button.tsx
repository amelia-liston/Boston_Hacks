export const Button=(props:any) => {
    return <button className="button" onClick={props.onClick}>{props.children}</button>
}