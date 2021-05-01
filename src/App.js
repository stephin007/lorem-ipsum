import {useState} from "react"

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("hello world")
}

function App() {
    const [count, setCount] = useState(0)
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
    </section>
  );
}

export default App
