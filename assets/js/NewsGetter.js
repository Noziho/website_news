import {Article} from "./Article";

export function NewsGetter() {

    this.getNews = function () {
        let allNews = [];
        let requestUrl = 'https://newsapi.org/v2/top-headlines?' +
            'country=fr&' +
            'pageSize=20&' +
            'apiKey=3b8d515c1eb2482f95c571dc86e9b2de';


        fetch(requestUrl)
            .then(response => response.json())
            .then(response => {
                allNews.push(response.articles);
                console.log(allNews);
                for (let articles of allNews) {
                    for (let article of articles) {
                        let title = article.title;
                        let description = article.description;
                        let date = article.publishedAt
                        let author = article.author;
                        let urlImage = article.urlToImage;

                        let newArticle = new Article(title, description, date, author, urlImage);
                        newArticle.createNews();

                    }
                }
            })


    }

}