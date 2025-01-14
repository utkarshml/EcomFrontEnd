import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { Provider } from 'react-redux'
import '../src/styles/app.scss'
import store from './App/store.ts'






ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark'   storageKey="vite-ui-theme" >
     <Provider store={store}>
    <App />
  </Provider>
  </ThemeProvider>

)
