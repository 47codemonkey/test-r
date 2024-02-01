export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ];
    }

    case 'REMOVE_TODO': {
      return state.filter((element) => element.id !== action.id);
    }

    case 'TOGGLE_TODO': {
      return state.map((element) =>
        element.id === action.id ? { ...element, completed: !element.completed } : element,
      );
    }

    default: {
      return state;
    }
  }
};
