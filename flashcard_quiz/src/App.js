import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import FlashcardList from './FlashcardList'
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState();
  const [categories, setCategories] = useState([]);
  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() =>  {
      axios
        .get('https://opentdb.com/api_category.php')
        .then(res => {
          setCategories(res.data.trivia_categories)
        })
    }, [])

  useEffect(() => {

  }, [])

  function decodeHtml(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
        .get('https://opentdb.com/api.php', {
          params: {
            amount: amountEl.current.value,
            category: categoryEl.current.value
          }
        })
        .then(res => {
          setFlashcards(
            res.data.results.map((questionItem, index) => {
              const answer = questionItem.correct_answer
              const options = [...questionItem.incorrect_answers, answer].map(item => decodeHtml(item))

              return {
                id: `${index}-${Date.now()}` ,
                question: decodeHtml(questionItem.question),
                answer: answer,
                options: options.sort(() => Math.random() - .5)
              }
          }))
        })
  }

  return (
    <>
    <form  className="header" onSubmit={handleSubmit} >
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select ref={categoryEl} id="category">
          {categories.map(category =>
            <option value={category.id} key={category.id} >{category.name} </option>
            )}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Number of questions</label>
        <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
      </div>
      <div className="form-group">
        <button className="btn">Generate</button>
      </div>
    </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
    );
}

export default App;
