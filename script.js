function toggleMode(){
  const html = document.documentElement

  /*if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {

    html.classList.add('light')
  }*/

    html.classList.toggle("light");

    //pegar a tag img
    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
    alt.setAttribute(
      "alt",
      "Imagem Mayk brito sorrindo, usando óculos escuro e camiseta preta.",
    )
    } else {
    img.setAttribute('src', './assets/avatar.png')
    alt.setAttribute(
      "alt",
      "Imagem Mayk Brito sorrindo, usando óculos e camiseta preta.",
    )}

}