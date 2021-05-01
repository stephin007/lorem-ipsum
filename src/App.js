import {useState} from "react"
import data from './data';

function App() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit=(e)=>{
        e.preventDefault()
        setText(data)
    }
  return (
    <section className="section-center">
        <h3>tired of lorem ipsum</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
            <label htmlFor="amount">
                paragraphs:
            </label>
            <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
            <button className="btn">
                generate
            </button>
        </form>
        <article className="lorem-text">
            {text.map((item, index)=> {
                return (
                    <p key={index}>{item}</p>
                )
            })}
        </article>
    </section>
  );
}

export default App
