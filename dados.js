const caes = [
    {
        nome: "Rex",
        raca: "Labrador",
        sexo: "Macho",
        idade: "2 anos",
        descricao: "Cachorro brincalhão e energético, adora brincar de buscar a bolinha.",
        castrado: true,
        tempoAdicao: new Date("2023-11-01"),
        imagem: "imagens/labrador rex.jpg"
    },
    {
        nome: "Bella",
        raca: "Golden Retriever",
        sexo: "Fêmea",
        idade: "1 ano e meio",
        descricao: "Cachorra dócil e amorosa, adora longas caminhadas e brincar de esconde-esconde.",
        castrado: true,
        tempoAdicao: new Date("2023-09-15"),
        imagem: "imagens/golden bella.weebb"
        },
    {
        nome: "Max",
        raca: "Vira-lata",
        sexo: "Macho",
        idade: "5 anos",
        descricao: "Cachorro inteligente e independente, já treinado para fazer suas necessidades no jornal.",
        castrado: true,
        tempoAdicao: new Date("2023-08-01"),
        imagem: "imagens/vira lata max.webp"
    },
    {
        nome: "Luna",
        raca: "Poodle",
        sexo: "Fêmea",
        idade: "3 anos",
        descricao: "Cachorra elegante e brincalhona, adora se vestir com roupinhas e posar para fotos.",
        castrado: true,
        tempoAdicao: new Date("2023-12-25"),
        imagem: "imagens/poddle luna"
    }
];

const gatos = [
    {
        nome: "Mia",
        raca: "Siamês",
        sexo: "Fêmea",
        idade: "1 ano",
        descricao: "Gata curiosa e independente, gosta de brincar com bolinhas de lã.",
        castrado: true,
        tempoAdicao: new Date("2023-12-15"),
        imagem: "caminho/para/mia.jpg"
    },
    {
        nome: "Luna",
        raca: "Persa",
        sexo: "Fêmea",
        idade: "3 anos",
        descricao: "Gata dócil e elegante, adora um bom carinho e dormir em lugares quentinhos.",
        castrado: true,
        tempoAdicao: new Date("2023-12-25"),
        imagem: "caminho/para/luna_gato.jpg"
    },
    {
        nome: "Tom",
        raca: "Siamês",
        sexo: "Macho",
        idade: "2 anos",
        descricao: "Gato curioso e falante, adora brincar com brinquedos de penas e explorar novos lugares.",
        castrado: true,
        tempoAdicao: new Date("2023-11-01"),
        imagem: "caminho/para/tom.jpg"
    },
    {
        nome: "Maru",
        raca: "Vira-lata",
        sexo: "Macho",
        idade: "1 ano",
        descricao: "Gato brincalhão e energético, adora caçar insetos e escalar móveis.",
        castrado: true,
        tempoAdicao: new Date("2023-09-15"),
        imagem: "caminho/para/maru.jpg"
    }
];

// Combinando os arrays de cães e gatos em um único array
const animais = [...caes, ...gatos];
