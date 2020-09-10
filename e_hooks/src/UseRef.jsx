import React, {useState, useEffect, useRef} from 'react';

function UseRef() {

  const [text, setText] = useState('')
  const [submitText, setSubmit] = useState('')

  const oldText = useRef('')
  const myInput = useRef(null)

  function handleInput(e) {
      e.preventDefault()
      setText(myInput.current.value)
    }

    function handleSubmit(e) {
      e.preventDefault()
      setSubmit(document.form.input.value)
      myInput.current.value = ''
      setText('')
  }

  useEffect(() => {
    oldText.current = text
  })

  return (
    <div className="block">

        <h1>useRef</h1>
        <hr/>
        <form name="form" onSubmit={handleSubmit} >
            <input ref={myInput} type="text" name="input" autoFocus defaultValue={text} onChange={handleInput} />
        </form>
        <p>Old text: {oldText.current} </p>
        <p>New text: {text} </p>
        <p>Submit text: {submitText} </p>


    </div>
  );
}

export default UseRef
