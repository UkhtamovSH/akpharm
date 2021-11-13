import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./router/Routes"
import './App.css'
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { applyMiddleware, createStore } from "redux"
import reducers from "./redux/reducers"

const App = () => {

  const store = createStore(reducers, applyMiddleware(thunk));

  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </>
  )
}

export default App

