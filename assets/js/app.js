import '../styles/style.scss'
import {NewsGetter} from "./NewsGetter";
import {ThemeMode} from "./ThemeMode";
import {ServiceWorker} from "./sw";


let allNews = new NewsGetter();
allNews.getNews();

let themeButton = new ThemeMode();
themeButton.createThemeButton();

//let service = new ServiceWorker();

