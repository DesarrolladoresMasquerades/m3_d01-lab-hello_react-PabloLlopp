import Button from "./Button";
import "./message.css";

export default function Message() {
    return (
        <div className="message">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super ninja developer</p>
            <Button />
        </div>
    )
}