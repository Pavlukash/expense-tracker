import './ExpenseItem.css';
import ExpenseProps from "../../interfaces/ExpenseProps";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css"

const ExpenseItem = (props: ExpenseProps) => {
    return (
        <Card className="expense-item">
            <ExpenseDate
                date={props.date} amount={props.amount} title={props.title}
            />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}$</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;