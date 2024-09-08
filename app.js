document.addEventListener("DOMContentLoaded", () => {
    const animalList = document.getElementById("animalList");
    const searchInput = document.getElementById("searchInput");
    const filterCaes = document.getElementById("filterCaes");
    const filterGatos = document.getElementById("filterGatos");

    // Função para renderizar a lista de animais
    function renderAnimais(animais) {
        animalList.innerHTML = "";  // Limpa a lista antes de renderizar
        animais.forEach(animal => {
            const animalDiv = document.createElement("div");
            animalDiv.classList.add("animal");
            animalDiv.innerHTML = `
                <h3>${animal.nome}</h3>
                <p><strong>Raça:</strong> ${animal.raca}</p>
                <p><strong>Sexo:</strong> ${animal.sexo}</p>
                <p><strong>Idade:</strong> ${animal.idade}</p>
                <p><strong>Descrição:</strong> ${animal.descricao}</p>
            `;
            animalList.appendChild(animalDiv);
        });
    }

    // Filtrar por tipo de animal (Cães ou Gatos)
    filterCaes.addEventListener("click", () => {
        renderAnimais(caes);
    });

    filterGatos.addEventListener("click", () => {
        renderAnimais(gatos);
    });

    // Filtrar pela barra de pesquisa
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredAnimals = animais.filter(animal => {
            return (
                animal.raca.toLowerCase().includes(query) ||
                animal.sexo.toLowerCase().includes(query) ||
                animal.idade.toLowerCase().includes(query) ||
                animal.descricao.toLowerCase().includes(query)
            );
        });
        renderAnimais(filteredAnimals);
    });

    // Renderiza todos os animais inicialmente
    renderAnimais(animais);
});

const containerDeAnimais = document.getElementById('container-de-animais');

animais.forEach(animal => {
    const cardHTML = `
        <div class="animal-card">
            <img src="${animal.imagem}" alt="Imagem do ${animal.nome}" class="animal-imagem">
            <h2>${animal.nome}</h2>
            <p>Raça: ${animal.raca}</p>
            <p>Sexo: ${animal.sexo}</p>
            <p>Idade: ${animal.idade}</p>
            <p>Descrição: ${animal.descricao}</p>
        </div>
    `;
    containerDeAnimais.innerHTML += cardHTML;
});

