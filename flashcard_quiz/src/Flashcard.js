import React, {useState} from 'react'


export default function Flashcard({flashcard}) {
const [flip, setFlip] = useState(false)
  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)} >
      <div className="front">
        {flashcard.question}
        <div class="flashcard-options">
          {flashcard.options.map(option => (
          <div class="flashcard-option">{option}</div>
          ))}
        </div>
      </div>
      <div class="back">{flashcard.answer} </div>
    </div>
  )
}
