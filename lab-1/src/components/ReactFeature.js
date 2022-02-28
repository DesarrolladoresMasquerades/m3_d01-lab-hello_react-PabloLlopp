import "./reactFeatures.css";

export default function ReactFeature(props) {
    return (
        <div className="flex-column">
            <img src={props.image} alt="pic"></img>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}