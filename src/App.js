import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { MyProvider } from './MyProvider';

function App() {
   return (
      <MyProvider>
         <div className='App'>
            <Header />
            <hr />
            <Main />
         </div>
      </MyProvider>
   );
}

export default App;
