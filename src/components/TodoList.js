import { TodoTitle } from "./TodoTitle"
import { TodoItem } from "./TodoItem"

export const TodoList = ({ 
    todoList, 
    toggleTodoListItemStatus, 
    deleteTodoListItem,
    title,
    as
}) => {
    return (
        <>
            {TodoTitle.length !== 0 && (
                <>
                    <TodoTitle title={title} as={as} />                
                    <ul>
                        {todoList.map((todo) => (
                        <TodoItem 
                            todo={todo} 
                            key={todo.id}
                            toggleTodoListItemStatus={toggleTodoListItemStatus}
                            deleteTodoListItem={deleteTodoListItem} 
                        />
                        ))}
                    </ul>
                </>
            )}
        </>
    )
  }
  