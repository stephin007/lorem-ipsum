import {useState} from "react"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const [type, setType] = useState("hipster-latin")
    const handleSubmit= async (e)=>{
    const url = `https://hipsum.co/api/?type=${type}&paras=50`
    e.preventDefault()
    // if you console.log the count you will see that count is a string not a
    // number, its not necessary but its a
    // good practice to convert string to number if you are working with number
    let amount = parseInt(count)

    const response = await fetch(url)
    const newTexts = await response.json()
    console.log(newTexts)

    // condition if count becomes zero or goes below zero, it will show atleast
    // one paragraph
    if (count <= 0) {
      amount = 1
    }
    setText(newTexts.slice(0, amount))

    // condition if count goes above the total length of the data, it will show
    // all the paragraphs inside your array
    if (count > text.length) {
      amount = text.length
    }
    }
    return (
        <section className="section-center">
            <h3>tired of lorem ipsum</h3>
                <form className="lorem-form" onSubmit={handleSubmit}>
                    <div className="cont">
                        <span className="grid-1">
                            <label htmlFor="amount" className="responsive-text lorem-type">
                                paragraphs:
                            </label>
                            <input className="responsive-text" type="number" name="amount" id="amount" value={count} onChange={
    (e) => setCount(e.target.value)}/>
                        </span>
                        <span className="grid-2">
                            <label htmlFor="type" className="responsive-text lorem-type">Choose a version:</label>
                            <select className="responsive-text" name="types" id="types" onChange={(e)=> setType(e.target.value)}>
                                <option value="hipster-latin">Hipster Speak Only </option>
                                <option value="hipster-centric">Hipster Speak with Latin</option>
                            </select>
                        </span>
                        <button className="grid-3 btn">
                            generate
                        </button>
                    </div>
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
