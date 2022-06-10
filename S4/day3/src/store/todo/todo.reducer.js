import {
  GET_TODOS_LOADING,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  ADD_TODOS_LOADING,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_ERROR
  // COMPLETE_TODO,
  // DELETE_TODO,
  // UPDATED_TODO,
} from "./todo.types";

const initState = {
  addTodos : {
    loading: false,
    error: false,
    data: [],
  },
  getTodos : {
    loading: false,
    error: false,
    data: [],
  }
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_LOADING: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: true,
          error: false
        }
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: false,
          todos: payload,
        }        
      };
    }
    case GET_TODOS_ERROR: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: true,
        }          
      };
    }

    case ADD_TODOS_LOADING: {
      return {
        ...state,
        addTodos: {
          ...state.addTodos,
          loading: true,
          error: false
        }
      };
    }
    case ADD_TODOS_SUCCESS: {
      return {
        ...state,
        addTodos: {
          ...state.addTodos,
          loading: false,
          error: false,
          todos: payload,
        }        
      };
    }
    case ADD_TODOS_ERROR: {
      return {
        ...state,
        addTodos: {
          ...state.addTodos,
          loading: false,
          error: true,
        }          
      };
    }
    // case ADD_TODO: {
    //   return {
    //     ...state,
    //     //todos: [...state.todos, payload],
    //   };
    // }
    // case DELETE_TODO: {
    //   return {
    //     ...state,
    //   };
    // }
    // case COMPLETE_TODO: {
    //   let newTodos = state.todos.map((todo) => {
    //     if (todo.id === payload.id) {
    //     }
    //   });
    //   return { ...state };
    // }
    // case UPDATED_TODO: {
    //   return { ...state };
    // }
    default: {
      return state;
      // we are not making any changes on the state
      // in the above case, so no necessity of destructuring
      // it into another new object
    }
  }
};
