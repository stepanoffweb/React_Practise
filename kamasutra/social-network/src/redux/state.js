import {Rerender} from '../render'

let state = {
  profilePage: {
    posts: [
      {id: 0,message: "Hi, it's my first post!", likeCount: 0, onClick:(e) => this.handleClick, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
      {id: 1,message: "You'r welcome, my friend!!!!", likeCount: 0, onClick:(e) => this.handleClick, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
      {id: 2,message: "Ammmmm...", likeCount: 0, onClick: (e) => this.handleClick, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
    ],
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
}

let likeCount: 0
const handleClick = (e) => {
      likeCount++;
      e.target.innerHTML = `Like ${likeCount}`;
    }

export const addPost = (id, postMessage, likeCount) => {
  let newPost = {id: id, message: postMessage, likeCount: likeCount}
  state.profilePage.posts.push(newPost)
  Rerender()
}

export default state;
