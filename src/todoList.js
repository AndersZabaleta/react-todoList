

const TodoList = ({todoList, deleteTask, completeTask}) => {
    const totalTasks = todoList.length
    let completedTasks = 0
    let remainingTaks = 0
    for(let i = 0; i < todoList.length; i++) {
        if(todoList[i].completed) {
            completedTasks = completedTasks +1
        }else{
            remainingTaks = remainingTaks + 1
        }
    }
    return (
        <table>
            <thead>
                <tr>
                <th>Task description</th>
                <th>Completed/Uncompleted</th>
                <th>Complete/Reset Task</th>
                <th>Delete Task</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map(todo => {
                    return(
                        <tr key={todo.id}>
                        <td>{todo.name}</td>
                        <td>{todo.completed ? "✔️" :  "❌"}</td>
                        <td><button onClick={() => completeTask(todo.id)}>{todo.completed ? "Reset" : "Complete"}</button></td>
                        <td> <button onClick={() => deleteTask(todo.id)}>Delete Task</button></td>
                        </tr>
                    )
                })}
                
            </tbody>
            <tfoot>
                  
                        {
                        remainingTaks === 0 ?
                        <tr>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>ALL TASKS COMPLETED!!</td>
                            <td>{" "}</td>
                            <td>{" "}</td> 
                        </tr>: 
                        <tr>
                            <td>{" "}</td>
                            <td>Total Tasks: {totalTasks}</td>
                            <td>Completed Tasks: {completedTasks}</td>
                            <td>Remaining Tasks: {remainingTaks}</td>
                            <td>{" "}</td>
                        </tr>
                        }
                  
                </tfoot>
        </table>
    )
}


export default TodoList