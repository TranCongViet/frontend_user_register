import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, NotFound, Register } from './components';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/register" />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App; 
