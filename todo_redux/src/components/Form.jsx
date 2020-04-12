import React, {Component, Fragment} from 'react'

const POSITIONS = [
  {
    id: 'fd',
    value: 'frontender',
    title: 'Cool frontender'
  },
    {
    id: 'bd',
    value: 'backender',
    title: 'Cool backender'
  },
    {
    id: 'fsd',
    value: 'fullstack',
    title: 'Cool fullstack developer'
  },
]


class Form extends Component {

  state = {
    inputText: '',
    textareaText: '',
    selectText: '',
    showData: {
      name: "",
      text: "",
      position: ''
    }
  }

  handleChange = () => {
    this.setState({
      inputText: this.inputRef.current.value,
      textareaText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value,
    })
  }

  handleShow = (e) => {
    e.preventDefault();
    const {textareaText, inputText, selectText} = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText
      }
    })
  }

  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  componentWillMount() {console.log('cwm', this.inputRef);};
  componentDidMount() {console.log('cdm', this.inputRef);};

  render() {
    const {inputText, textareaText, selectText, showData: {name, text, position}} = this.state;
    return (
      <Fragment>
        <form>
          <label >
          Name:
            <input ref={this.inputRef} type="text" name="name" value={inputText}  onChange={this.handleChange}/>
          </label>
          <br />
          <label htmlFor="text">Text:</label>
          <textarea ref={this.textareaRef} id="text" cols="30" rows="10" value={textareaText} onChange={this.handleChange} />
          <br/>
          <select ref={this.selectRef} value={selectText} onChange={this.handleChange}>
            {POSITIONS.map(({id, value, title}) => (
              <option key={id} value={title}>{value}</option>
            ))}
          </select>
          <br />
          <button onClick={this.handleShow}>Show</button>
        </form>
        <h1>{name}</h1>
        <h2>{text}</h2>
        <h2>{position}</h2>
      </Fragment>
    )
  }
}

export default Form;
