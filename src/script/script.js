footer()
function openContent(event, nomeArtigo) {
    var i, article_content, linkToArticle;
    article_content = document.getElementsByClassName("article-content");
    for (i = 0; i < article_content.length; i++) {
      article_content[i].style.display = "none";
    }
    linkToArticle = document.getElementsByClassName("linkToArticle");
    for (i = 0; i < linkToArticle.length; i++) {
      linkToArticle[i].className = linkToArticle[i].className.replace(" active", "");
    }
    document.getElementById(nomeArtigo).style.display = "block";
    event.currentTarget.className += " active";
  }
  
  // buscando o elemento com ID aberto por padrão
  



  var urlp=window.location.href
  var index=urlp.indexOf("#")
  var art=""

for (var x=index+1;x<urlp.length;x++){
  art+=urlp[x]

}

document.getElementById(`${art}`).click();


function footer(){
footerElement.innerHTML=`
  <footer class="container content center fixed-bottom mt-4;">
                        <p class="center opacity wide">By Natan Emanuel Fernandes</p>
    </footer>
 `   
}
