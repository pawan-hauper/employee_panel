import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeDetail from './components/EmployeeDetail';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
 <ToastContainer/>
<Header/>
<EmployeeDetail/>
<Footer/>
    </>
  );
}

export default App;
