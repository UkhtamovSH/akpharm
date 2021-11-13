import { Route, Switch } from 'react-router-dom'
import Categories from '../pages/Categories'
import Home from '../pages/Home'
import Partner from '../pages/Partner'
import Partners from '../pages/Partners'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
      <Route path="/categories/:slug" exact component={Categories} />
      <Route path="/partners" exact component={Partners} />
      <Route path="/partners/:slug" exact component={Partner} />
    </Switch>
  )
}

export default Routes
