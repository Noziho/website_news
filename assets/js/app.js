import '../css/style.css'
import './Article';
import {Article} from "./Article";
import {NewsGetter} from "./NewsGetter";



let allNews = new NewsGetter();
allNews.getNews();
