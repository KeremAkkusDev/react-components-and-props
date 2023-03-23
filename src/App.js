import './App.css';
import Products from './Products/Products'
import Components from './TodoApp/Components';
import TodoList from './TodoApp/TodoList';
function App() {
  const data =  {
    title : "Todo Application",
    description:"Bekleyen Görevler",
    items:['Görev 1', 'Görev 2', 'Görev 3', 'Görev 4']
  }
  return (
    <>
      <Products/>
      <TodoList data={data}/>
      <Components data={data}/>

    </>
  )
};
export default App;
