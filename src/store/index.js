//import the createStore object from Vuex
import { createStore } from 'vuex'
// Import axios to make HTTP requests
import axios from "axios"
export default createStore({
    state: {
      todos: []
    },
    getters: {
      getTodos(state) {
        console.log("Get to do is getting called" );
        return state.todos
    }
  },
    actions: {
      async fetchTodos({commit})
      {
        console.log("This is getting called");
        try{
          const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
          commit('SET_TODOS',data.data)
        }
        catch(error)
        {
          alert(error)
          console.log(error)
        }
      },
      async addTodo({ commit }, payload) {
        console.log("Before the axios call " + payload);
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          { title: payload, completed: false }
        )
        .then((res) => {
          //console.log("After the post call " + JSON.stringify(res));
          commit('NEW_TODOS',res.data)
        });
        
    }
  },
    mutations: {
      SET_TODOS(state,todos)
      {
        state.todos = todos
      },
      NEW_TODOS(state,todos)
      {
        console.log("New todos is being called" + JSON.stringify(todos)) ;
        console.log("Before shift " + JSON.stringify(state.todos));
        state.todos.push(todos);
        console.log("After shift " + JSON.stringify(state.todos));
      }
    }
})
/** we have just created a boiler plate for our vuex store module**/