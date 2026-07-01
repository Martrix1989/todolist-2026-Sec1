import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Importar todolist */
import TodoList from './components/TodoList'

/* Importar bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
/* Importar bs icons */
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  TodoList)

