let allNewsContainer = document.querySelector('.allNewsContainer');

export function Article (title, resume, date, author, imageSrc) {

    this.title = title;
    this.resume = resume;
    this.date = date;
    this.author = author;
    this.imageSrc = imageSrc;

    this.createNews = function () {

        let newsContainer = document.createElement("div");
        newsContainer.className = "article";
        newsContainer.style.position = "relative";

        let articleTitle = document.createElement('h1');
        articleTitle.innerHTML = this.title;

        let resumeText = document.createElement('p');
        resumeText.innerHTML = this.resume;

        let articleImage = document.createElement('img');
        articleImage.src = this.imageSrc;
        articleImage.alt = "Article Image";

        let articleAuthor = document.createElement('p')

        if (this.author === null) {
            articleAuthor.innerHTML = "Unknown"
        }else {
            articleAuthor.innerHTML = this.author;
        }


        let articleDate = document.createElement('p');
        articleDate.innerHTML = this.date;

        let showArticle = document.createElement('div');
        showArticle.classList = "ShowButton";


        let closeArticle = document.createElement('div');

        showArticle.addEventListener("click", function () {
            newsContainer.id = "showArticle";
            let news = document.querySelectorAll(".article");
            news.forEach(function (element) {
                element.classList = "article hidden";
                showArticle.remove();
            })

            closeArticle.addEventListener("click", () => {
                let news = document.querySelectorAll(".article");
                news.forEach(function (element) {
                    element.classList = "article show";
                    element.id = "";
                    resumeText.remove();
                    closeArticle.remove();
                    newsContainer.append(showArticle);
                })
            })

            newsContainer.append(resumeText);
            newsContainer.append(closeArticle);
        });


        newsContainer.append(articleTitle);
        newsContainer.append(articleAuthor);
        newsContainer.append(articleDate);
        newsContainer.append(articleImage);
        newsContainer.append(showArticle);


        allNewsContainer.append(newsContainer);


    }
}