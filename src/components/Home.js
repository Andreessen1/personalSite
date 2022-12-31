import React, {useState} from 'react';
import './Home.css';

const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
  ];


const Home = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const getAnswer = (e) => {
      e.preventDefault();
      if (!question) {
        return;
      }
      const index = Math.floor(Math.random() * answers.length);
      setAnswer(answers[index]);
    };
    return (
        <div className="home" >
        <h1  className="home">Welcome to My personal Portfolio</h1>
        <h2>David Andreessen :</h2>
        <h3> Front End Developer | davidandreessen@yahoo.com | Daytona Beach FL </h3>
        <h4>Magic Eight Ball</h4>
       
    
<style>
  {`
    .circle {
      border: 1px solid black;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    `}
</style>
<form onSubmit={getAnswer}>
  <div>
    <label>question</label>
    <input
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
    />
  </div>
  <button type="submit">get answer</button>
</form>
<div className="circle">
  <p>{answer}</p>
</div>
</div>
)

}

export default Home;