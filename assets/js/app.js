import '../styles/style.scss'
import './Article';
import {Article} from "./Article";
import {NewsGetter} from "./NewsGetter";



let allNews = new NewsGetter();
allNews.getNews();
