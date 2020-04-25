const ADD_POST = 'ADD_POST'
const ADD_MESSAGE = 'ADD_MESSAGE'
const SHOW_LETTERS = 'SHOW_LETTERS'
const SHOW_MASSAGE = 'SHOW_MASSAGE'

export let createActionAddPost = (id, likeCount) => ({type: ADD_POST, id, likeCount })
export let createActionShowLetters = (text) => ({type: SHOW_LETTERS, text })
export let createActionAddMessage = (id, text) => ({type: ADD_MESSAGE, id, text})
export let createActionShowMessage = (text) => ({type: SHOW_MASSAGE, text })

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 0,message: "Hi, it's my first post!", likeCount: 0, onClick:(e) => this.handleClick, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
        {id: 1,message: "You'r welcome, my friend!!!!", likeCount: 0, onClick:(e) => this.handleClick, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
        {id: 2,message: "Ammmmm...", likeCount: 0, onClick: (e) => this.handleClick, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
      ],
      newPostText: 'XZ'
    },
    messagePage: {
      dialogItems: [
        {name: "Name-1", id: 0},
        {name: "Name-2", id: 2},
        {name: "Name-3", id: 3},
        {name: "Name-4", id: 4},
        {name: "Name-5", id: 5},
        {name: "Name-6", id: 6},
      ],
      messages: [
        {text: "What's up?", id: 0},
        {text: "Yo!!!" , id: 1},
        {text: "How is Your webDev?", id: 2},
        {text: "Who are you??", id: 3},
      ],
      newMessageText: 'Hi'
    }
  },
  getState() {
    return this._state
  },

  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if(action.type === 'ADD_POST') {
      let newPost = {id: action.id, message: this._state.profilePage.newPostText, likeCount: action.likeCount}
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
      } else if (action.type === 'SHOW_LETTERS') {
      this._state.profilePage.newPostText = action.text
      this._callSubscriber(this._state)
      } else if (action.type === 'ADD_MESSAGE') {
        let newMessage = {id: action.id, text: action.text}
        this._state.messagePage.messages.push(newMessage)
        this._state.messagePage.newMessageText = newMessage
        this._state.messagePage.newMessageText = ''
        this._callSubscriber(this._state)
      }

  },


  likeCount: 0,
  handleClick(e) {
        this.likeCount++;
        e.target.innerHTML = `Like ${this.likeCount}`;
      }
}

export default store;
