import React, {useState} from 'react';
import FlashcardList from './FlashcardList'
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return (
    <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "question 1",
    answer: "Answer 1",
    options: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ]
  },
    {
    id: 2,
    question: "question 2",
    answer: "Answer 2",
    options: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ]
  },
]

export default App;
