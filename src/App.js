import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Layout from './components/Layout'

const customTheme = createMuiTheme({
  palette:{
    primary:{
      main: '#fefefe',
    },
    secondary:{
      main: '#9c27b0',
    }
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold:700,
  }
})

function App() {
  return (
    <ThemeProvider theme={customTheme}>
    <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
