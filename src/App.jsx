import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import './App.css'
function App() {

  return (
    <>
      <CssBaseline />
      <div className="Title">
        <img src="to-do-list.png" alt="" />
        <h1>Todos</h1>
      </div>
      <TodoList />
    </>
  )
}

export default App
