import {useState} from "react"
import data from './data';

function App() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit=(e)=>{
        e.preventDefault()
        //if you console.log the count you will see that count is a string not a number, its not necessary but its a
        // good practice to convert string to number if you are working with number
        let amount = parseInt(count)

        //condition if count becomes zero or goes below zero, it will show atleast one paragraph
        if(count <= 0){
            amount = 1
        }

        //condition if count goes above the total length of the data, it will show all the paragraphs inside your
        // data array
        if(count > data.length){
            amount = data.length
        }

        setText(data.slice(0,amount))
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
