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



        newsContainer.addEventListener('mouseover', function () {
            newsContainer.classList = 'overed';
        })

        newsContainer.addEventListener('mouseleave', function () {
            newsContainer.classList = 'article';
        })



        let articleTitle = document.createElement('h1');
        articleTitle.innerHTML = this.title;

        let resumeText = document.createElement('p');
        resumeText.innerHTML = this.resume;

        let articleImage = document.createElement('img');
        articleImage.src = this.imageSrc;

        let articleAuthor = document.createElement('p')
        articleAuthor.innerHTML = this.author;

        let articleDate = document.createElement('p');
        articleDate.innerHTML = this.date;

        newsContainer.addEventListener("click", function () {
            newsContainer.classList = "overed";
            let allNews = document.querySelectorAll('.article');
            allNews.forEach(function (element){
                element.style.display = "none";
            })

            newsContainer.append(resumeText);

        });

        newsContainer.append(articleTitle);
        newsContainer.append(articleAuthor);
        newsContainer.append(articleDate);
        newsContainer.append(articleImage);


        allNewsContainer.append(newsContainer);


    }

    this.printOneArticle = function (description) {

    }
}