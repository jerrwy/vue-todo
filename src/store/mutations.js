const uuid = require('uuid')

export const INIT_TODOLIST = (state, data) => {
  state.TodoList = data
}

export const ADD_TODO = (state, todo) => {
  state.TodoList.push({id: uuid.v1(), data: todo})
}

export const DELETE_TODO = (state, uuid) => {
  state.TodoList = state.TodoList.filter((o) => { return o.id !== uuid })
}

export const EDIT_TODO = (state, {id, data}) => {
  state.TodoList = state.TodoList.map((o) => {
    if (o.id === id) return {id, data}
    return o
  })
}

export const INIT_DONELIST = (state, data) => {
  state.DoneList = data
}

export const TODO_2_DONE = (state, uuid) => {
  const {id, data} = state.TodoList.find(t => { return t.id === uuid })
  state.TodoList = state.TodoList.filter((t) => { return t.id !== id })
  state.DoneList.push({id, data})
}

export const DELETE_DONE = (state, uuid) => {
  state.DoneList = state.DoneList.filter((t) => { return t.id !== uuid })
}
