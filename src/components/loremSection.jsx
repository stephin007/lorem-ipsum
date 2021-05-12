import React, {useState} from 'react';

function LoremSection()
{

    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);
    const [type, setType] = useState("hipster-latin");

    const handleSubmit= async (e)=>{

        const url = `https://hipsum.co/api/?type=${type}&paras=${count}`
        e.preventDefault()
        
        //if you console.log the count you will see that count is a string not a number, its not necessary but its a
        // good practice to convert string to number if you are working with number
        // let amount = parseInt(count)

        const response = await fetch(url)
        const newTexts = await response.json()

        // checking that if user kept the count 0, then send atleast first
        // index of the text content
        if(count < 0){
            setText([0,1]);
        }else{
            setText(newTexts);
        }

        //condition if count becomes zero or goes below zero, it will show atleast one paragraph
        // if(count <= 0){
        //     amount = 1
        // }
        // setText(newTexts.slice(0,amount))

        //condition if count goes above the total length of the data, it will show all the paragraphs inside your array
        // if(count > text.length){
        //     amount = text.length
        // }

    };


    return(
        <section id="lorem-section" className="section-center">
            <h3>tired of lorem ipsum</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amount" className="lorem-type">
                    paragraphs:
                </label>
                <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
                <label htmlFor="type" className="lorem-type">Choose a version:</label>
                <select name="types" id="types" onChange={(e)=> setType(e.target.value)}>
                    <option value="hipster-latin">Hipster Speak Only </option>
                    <option value="hipster-centric">Hipster Speak with Latin</option>
                </select>
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

export default LoremSection;