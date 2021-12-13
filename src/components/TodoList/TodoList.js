import React from 'react'
import TodoFooter from '../TodoFooter/TodoFooter'
import "./TodoList.css"
import { useTranslation } from "react-i18next"
// import changeLanguage  from '../../utils/ChangeLang'
function TodoList({
    todos, setTodos
}) {
  
     const { t } = useTranslation()
    // const handleChange = () =>
    // {
    //    changeLanguage(i18n.language ==='ar'?'en':'ar',i18n)
    // }
    const updateTask = (id) => {
        let updatedTasks = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks)
    }

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    return (
        <div className="todolist-container">
            <div className="todos-container"  >
                <div  >
                       {/* <button onClick={handleChange}>{t('language')}</button> */}
                    {
                      
                       todos.map((todo) => (
                            <div key = {todo.id} 
                                className={`todo-item ${todo.completed && "todo-item-active"}`} 
                               onClick={() => updateTask(todo.id)}
                               dir = "auto"
                               
                            >
                             
                                {t(`${todo.task}`)}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>

                <TodoFooter 
                    numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
                />
            </div>
        </div>
    )
}

export default TodoList
