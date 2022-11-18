let allNewsContainer = document.querySelector('.allNewsContainer');

export function Article (title, resume, date, author, imageSrc) {

    this.title = title;
    this.resume= resume;
    this.date = date;
    this.author = author;
    this.imageSrc = imageSrc;

    this.createNews = function () {


        let newsContainer = document.createElement("div");
        newsContainer.className = "article";

        let articleTitle = document.createElement('h1');
        articleTitle.innerHTML = this.title;

        let articleImage = document.createElement('img');
        articleImage.src = this.imageSrc;

        let articleAuthor = document.createElement('p')
        articleAuthor.innerHTML = this.author;

        let articleDate = document.createElement('p');
        articleDate.innerHTML = this.date;

        newsContainer.append(articleTitle);
        newsContainer.append(articleAuthor);
        newsContainer.append(articleDate);
        newsContainer.append(articleImage);


        allNewsContainer.append(newsContainer);



    }

}