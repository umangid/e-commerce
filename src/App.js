import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import productReducer from './pages/redux/productReducer';
import { configureStore } from '@reduxjs/toolkit';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
function App() {
  const { localStorage } = window;
  const store = configureStore({
    reducer: productReducer
  })

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const PrivateRoute = ({
    component,
    ...rest
  }) => {
    if (isAuthenticated === true) {
      return <Route {...rest} render={(props) => component} />;
    } else {
      return (
        <Route
          {...rest}
          render={(props) =>
            window.location.href = "/"
          }
        />
      );
    }
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route
            exact
            path="/"
            component={<Login />} /> */}
          {/* <PrivateRoute
            exact
            path="/Dashboard"
            component={
              <Dashboard />
            } /> */}
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
