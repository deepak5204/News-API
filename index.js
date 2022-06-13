console.log("Welcome in news API project");

// 15586a58b69d47b4956f2d71c0090981


//grab the news container
let newsAccordian = document.getElementById('newsAccordion');

//Initialize the news api parameter
let apiKey = '15586a58b69d47b4956f2d71c0090981';

//create an AJAX get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true)

//What to do when response is ready
xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);

        let newsHtml = "";

        articles.forEach(function(element){
            // console.log(articles[element]);
            let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        ${element["title"]}
                    </button>
                </h2>
                <div id="collapseOne" class=" collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">${element["description"]}</div>
                </div>
            </div>`
            newsHtml += news;
        });

        newsAccordian.innerHTML = newsHtml;
    }
    else{
        console.log('Some error occured');
    }
}

xhr.send()

