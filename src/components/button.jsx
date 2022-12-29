import react from "react"
import "./button.css"

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

export const button = props => (
    <div className={`button-wrapper ${
        isOperator(props.childeren) ? null : "operator"
    }`} onClick={() => props.handleClick(props.children)}>
        {props.childeren}
    </div>
)

