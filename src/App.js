
import './App.css';
import Banner from './components/Banner/Banner';
import { Switch, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';
import { useTranslation } from "react-i18next"
import changeLanguage  from './utils/ChangeLang'
function App() {
    const { t, i18n } = useTranslation()
    const handleChange = () =>
    {
       changeLanguage(i18n.language ==='ar'?'en':'ar',i18n)
    }
  return (
    <div className="App" data-testid={"learn react"}  dir={i18n.language === "ar" ? "rtl" : "ltr"} >
    <button onClick={handleChange}>{t('language')}</button>
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage}/>
        <Route strict exact path="/followers" component={FollowersPage}/>
      </Switch>
    </div>
  );
}

export default App;
