const HUMAN = "you";
const COMPUTER = "ai";

function Square(props) {
    let squareIsFilled = "";
    if (props.value === HUMAN) {
        squareIsFilled = "square-human-filled";
    } else  if (props.value === COMPUTER) {
        squareIsFilled = "square-ai-filled";
    }
    return (
        <td className={`square ${squareIsFilled} `} onClick={props.onClick}>
            {/* {props.value} */}
        </td>
    );
}

export default Square;