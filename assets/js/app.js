import '../styles/style.scss'
import {NewsGetter} from "./NewsGetter";
import {ThemeMode} from "./ThemeMode";



let allNews = new NewsGetter();
allNews.getNews();

let themeButton = new ThemeMode();
themeButton.createThemeButton();