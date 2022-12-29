import react from "react"
import "./button.css"

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

const button = props => (
    <div className={`button-wrapper ${
        isOperator(props.childeren) ? null : "operator"
    }`}>
        {props.childeren}
    </div>
)

export default button