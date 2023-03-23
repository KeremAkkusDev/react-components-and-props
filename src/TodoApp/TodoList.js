import TodoItem from "./TodoItem";

function TodoList({data}){
    return(
        <>
            <ul>
                {data.items.map((item,index)=> <TodoItem key={index} item={item}/> )}
            </ul>
        </>
    );
}

export default TodoList;