import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavLink } from './NavLink'
import { TableData } from '../Component3/TableData'
import { ToDoList1 } from '../Component3/ToDoLisl1'
import { TodoList } from '../Component3/TodoList'
import { Home } from '../component4/Home'
import { Todo } from "../component4/Todo"
import { First } from '../components2/First'
export const RouteComp = () => {
    return (
        <div>
            <BrowserRouter>
                <NavLink />
                <Routes>
                    <Route path='/' element={<TodoList />} />
                    <Route path='todosim' element={<ToDoList1 />} />
                    <Route path='tabledata' element={<TableData />} />
                    <Route path='comp4home' element={<Home />} />
                    <Route path='comp4todo' element={<Todo />} />
                    <Route path='comp2' element={<First />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
