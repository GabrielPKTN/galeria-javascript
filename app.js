"use strict"

const imagens = [
    {
        nome: 'barcos',
        url: './img/barcos.jpg'
    },

    {
        nome: 'canoa',
        url: './img/canoa.jpg'
    },

    {
        nome: 'flores',
        url: './img/flores.jpg'
    },

    {
        nome: 'havai',
        url: './img/havai.jpg'
    },

    {
        nome: 'ilha',
        url: './img/ilha.jpg'
    },

    {
        nome: 'los_angeles',
        url: './img/los_angeles.jpg'
    },

    {
        nome: 'noite',
        url: './img/noite.jpg'
    },

    {
        nome: 'restaurante',
        url: './img/restaurante.jpg'
    },

    {
        nome: 'trabalho',
        url: './img/trabalho.jpg'
    }

]

function criarImagem(srcImagem) {
    const galeria = document.getElementById('galeria')
    const imagem = document.createElement('img')
    const label = document.createElement('div')
    const texto = document.createElement('p')

    imagem.src = srcImagem.url
    texto.textContent = srcImagem.nome

    galeria.appendChild(imagem)
    galeria.appendChild(label)
    label.appendChild(texto)

}

function carregarImagens() {
    
    // for (let qtd of imagens) {
    //     const imagem = document.createElement('img')
    //     imagem.src = imagens[imagens.indexOf(qtd)]

    //     galeria.appendChild(imagem)
    // }
    
    imagens.forEach(criarImagem)

}

carregarImagens()