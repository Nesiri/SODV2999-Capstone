// routes/PatternInterruptRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import PatternInterruptPage from '../pages/PatternInteruptPages/PatternInterruptPage';

export default function PatternInterruptRoutes() {
  return (
    <Routes>
      <Route path=":path" element={<PatternInterruptPage />} />
    </Routes>
  );
}
