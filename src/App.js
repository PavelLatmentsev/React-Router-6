import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  const elements = useRoutes(routes);
  return (
    <div className="App">
      <h1>App Layout</h1>
      {elements}
    </div>
  );
}

export default App;
