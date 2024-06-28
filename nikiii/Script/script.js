fetch("https://newsapi.org/v2/everything?q=apple&from=2024-06-26&to=2024-06-26&sortBy=popularity&apiKey=f4bcfb47cc514cf09bb4e1ba198a14d8")
.then((Response)=>{

    return  Response.json()
})
.then((data)=>{
    console.log  (data)

    let   articles  = data.articles

    articles.forEach(( n , index , ele)=>{
        console.log(n)

       let  div  =   document.createElement("div")
       div.classList.add("articles")

       let   article  =  document.createElement("div")
       article.classList.add("article")

    let  image  =  document.createElement("div")
    image.classList.add("image")


    let imgUrl = n.urlToImage;

    console.log("hello")
    console.log(imgUrl)

    image.style.backgroundImage = `url(${imgUrl})`
    image.style.backgroundSize = "cover"

    console.log(image)
    
    div.appendChild(image)


    let  card =  document.createElement("div")
    card.classList.add("card")

    let  h3  =  document.createElement("h3")
    let p  =  document.createElement("p")
    
    let   a  =  document.createElement("a")
    a.setAttribute("href" , n.url)

    let  btn =   document.createElement("button")
    btn.classList.add("btn")

    let   author  =  document.createElement("p")
    p.classList.add("author")
    let name =  n.author
    author.innerText = `Author: ${name} ...`

    h3.innerText  = n.content;
    p.innerText  =  n.description
    btn.innerText =  "Read More"

    card.appendChild(h3)
    card.appendChild(p)
    card.appendChild(author)
    card.appendChild(btn)
   
    
    article.appendChild(image)
    article.appendChild(card)
    div.appendChild(article)


       console.log(div)
       let  parent =  document.getElementById("main")
       parent.appendChild(div)
    })
})