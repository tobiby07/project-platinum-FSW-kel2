import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

const root = createRoot(document.getElementById('root'));
root.render(<App />);