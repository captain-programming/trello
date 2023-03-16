import { Flex } from '@chakra-ui/react';
import './App.css';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Flex width={"100%"} height={"calc(100% - 57px)"}>
        <Sidebar />
        <Dashboard />
      </Flex>
    </div>
  );
}

export default App;
