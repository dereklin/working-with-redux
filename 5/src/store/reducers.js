const initialState = {
  notes: [
    {
      id: '1543456',
      title: 'An example note',
      details: 'example of a note'
    },
    {
      id: '154662456',
      title: 'An example note 2',
      details: 'example of a note 2'
    }
  ],
  name: 'Test'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NOTE' : {
      return {
        ...state,
        notes: [...state.notes, action.note]
      }
    }
    case 'REMOVE_NOTE' : {
      return {
        ...state,
        notes: state.notes.filter((note) => {
          return note !== action.note;
        })
      }
    }
    case 'GET_NOTEs' : {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}