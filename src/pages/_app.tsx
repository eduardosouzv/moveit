import NavBar from '../components/NavBar';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
