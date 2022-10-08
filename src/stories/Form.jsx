import { useState } from "react"

export default function Form() {
    const [input, setInput] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    return (
        <form>
            <input data-testid="new-todo-input" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button type="button" onClick={() => setButtonClicked(true)}>Click me</button>
            {buttonClicked && <p>You wrote: {input}</p>}
        </form>
    )
}
