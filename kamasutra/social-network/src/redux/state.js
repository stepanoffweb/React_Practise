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
    }
  },
  getState() {
    return this._state
  },

  addPost(id, likeCount) {
    console.log('addPost ', this);
    let newPost = {id: id, message: this._state.profilePage.newPostText, likeCount: likeCount}
    this._state.profilePage.posts.push(newPost)
    this.showLetters('')
    this._callSubscriber(this._state)
  },
  _callSubscriber() {
    console.log('State changed');
  },
  showLetters(text) {
    console.log('showLetters ',this);
    this._state.profilePage.newPostText = text
    this._callSubscriber(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  likeCount: 0,
  handleClick(e) {
        this.likeCount++;
        e.target.innerHTML = `Like ${this.likeCount}`;
      }
}

export default store;
