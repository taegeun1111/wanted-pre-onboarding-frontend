import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import NotFound from './pages/NotFound';
import TokenProvider from './store/TokenProvider';
import PrivateRoute from './pages/PrivateRoute';
import PublicRoute from './pages/PublicRoute';

function App() {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          {/* login */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Navigate to="/signin" replace />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Todo */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Navigate to="/todo" replace />} />
            <Route path="/todo" element={<Todo />} />
          </Route>
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
