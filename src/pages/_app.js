// import '@/global.css';
import store from '../redux/store'
import { Provider } from 'react-redux';
import '../app/globals.css';
export default function App({ Component, pageProps }) {
        return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}