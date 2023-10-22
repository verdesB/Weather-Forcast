import ReactDom from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/App/App';

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(<StrictMode><App/></StrictMode>)