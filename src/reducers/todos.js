export default function todos(state = [], action) {
  const {type, text} = action;

  switch (type) {
    case 'ADD_TODO':
      return [ ...state, { 
        id: Math.random(), 
        text, 
      }]

    default:
      return state;
  }
}