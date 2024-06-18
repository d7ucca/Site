let listaC = [
    {
        "nome": "Golf",
        "img": "img/golf.jpg",
        "descricao": "O Volkswagen Golf é um carro compacto de fabricação alemã, reconhecido por seu desempenho sólido, design elegante e alta qualidade de construção."
    },
    {
        "nome": "BMW 118i",
        "img": "img/118i.jpg",
        "descricao": "A BMW 118i é um hatchback compacto de luxo, conhecido por seu design elegante, interior refinado, motor eficiente e excelente dinâmica de condução."
    },
    {
        "nome": "I30",
        "img": "img/i30.webp",
        "descricao": "O Hyundai i30 é um hatchback compacto, apreciado por seu design moderno, interior confortável, boa relação custo-benefício e tecnologia avançada."
    },
    {
        "nome": "Urus",
        "img": "img/urus.webp",
        "descricao": "A Lamborghini Urus é um SUV de luxo, famoso por seu design agressivo, desempenho excepcional, interior sofisticado e tecnologia de ponta."
    },
    {
        "nome": "Velar",
        "img": "img/velar.webp",
        "descricao": "A Range Rover Velar é um SUV de luxo, destacando-se pelo design elegante, interior sofisticado, tecnologia avançada e excelente desempenho tanto on-road quanto off-road."
    },
    {
        "nome": "BMW X6",
        "img": "img/x6.jpeg",
        "descricao": "A BMW X6 é um SUV coupé de luxo, reconhecido por seu design esportivo, interior luxuoso, tecnologia avançada e desempenho potente."
    }
]

listaC.map((carro, posicao)=> {
     let cardCarro = document.getElementById("cards");
     cardCarro.innerHTML += `
     <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${carro.nome}</h5>
                      <a href="#" class="btn btn-primary" onclick="zoomImg('${posicao}')"><i class="bi bi-search-heart" ></i></a>
                    </div>
                  </div>
            </div>
     `
})
function zoomImg(posicao){
    let carroSele = listaC[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSele.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSele.descricao;
    document.getElementById("imgModal").src = carroSele.img;
    new bootstrap.Modal('#zoomImg').show();
}
function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light")
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-stars"></i>`
    } else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark")
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`

    }
}