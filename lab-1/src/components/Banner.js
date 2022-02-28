import Navbar from "./Navbar";
import Message from "./Message";
import "./banner.css"

export default function Banner() {
    return (
        <div className="banner">
            <Navbar />
            <Message />
        </div>
    )
}