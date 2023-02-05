import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserPage from './component/UserPage';
import TodosPage from './component/TodosPage';
import { Link } from 'react-router-dom';
import UserItemPage from './component/UserItemPage';
import TodoItemPage from './component/TodoItemPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users">Пользователи</Link>
          <Link to="/todos">Список дел</Link>
        </div>
        <Routes>
          <Route path="/users" element={<UserPage />}/>
          <Route path="/todos" element={<TodosPage />}/>
          <Route path="/users/:id" element={<UserItemPage />}/>
          <Route path="/todos/:id" element={<TodoItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
