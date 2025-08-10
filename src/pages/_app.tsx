import { AuthProvider } from '@/context/AuthContext';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '@/styles/globals.css';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}
