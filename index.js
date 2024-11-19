const url = " https://raw.githubusercontent.com/miqueiassousa/json/refs/heads/main/tecnologias.json";

const httpRequest = new XMLHttpRequest();
httpRequest.open("GET", url);
httpRequest.responseType = "json";
httpRequest.send();

const div = document.querySelector(".conteudoJson");

httpRequest.onload = () => {
    let render = httpRequest.response;
    let size = render.tecnologias.length;
    let html = '';
    for (let i = 0; i < size; i++) {
        html  += `<div><strong>Tecnologia:</strong> ${render.tecnologias[i].nome}</div>`;
        html +=  `<div><strong>Tipo:</strong> ${render.tecnologias[i].tipo}</div>`;
        html +=  `<div><strong>Categoria:</strong> ${render.tecnologias[i].categoria}</div>`;
        html +=  `<div><strong>Popularidade:</strong> ${render.tecnologias[i].popularidade}</div>`;
        html +=  `<div><strong>Ano lancamento:</strong> ${render.tecnologias[i].ano_lancamento}</div>`;
        html +=  `<div><strong>Criador:</strong> ${render.tecnologias[i].criador}</div>`;
        
        // for(let j = 0; j < render.tecnologias.bibliotecas_populares.length; j++){
        //     html +=  `<div><strong>Biblioteca populares:</strong> 
        //     ${render.tecnologias[i].bibliotecas_populares[i].nome}</div>`;
        // }
       
    }
      
    
    div.innerHTML += html
    //jsonconsole.log(render.tecnologias.bibliotecas_populares[0])
}