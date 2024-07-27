
import { AppProps } from 'next/app';
import { PreferencesProvider } from '../context/PreferencesContext';
import '../styles/globals.css'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PreferencesProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </PreferencesProvider>
  );
}

export default MyApp;
