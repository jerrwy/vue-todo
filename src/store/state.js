import {ST_GET} from '../service/storage'

export default {
  TodoList: JSON.parse(ST_GET('TODOLIST')) || [],
  DoneList: JSON.parse(ST_GET('DONELIST')) || []
}
// [
//   {id:'uuid', data: data}
// ]
