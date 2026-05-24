// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./theme/common.scss";
import 'rsuite/dist/rsuite-no-reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'simplebar-react/dist/simplebar.min.css';
import { Toaster, type ToastPosition } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/index.ts';
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <Toaster
        toastOptions={{ position: 'top-right' as ToastPosition, className: "bg-primary-gradient text-white", style: { maxWidth: 500 } }} />
    </PersistGate>
  </Provider>
)
