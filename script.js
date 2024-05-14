"use strict"
const images = [
    { src: "https://cdn.pixabay.com/photo/2023/01/08/16/30/castle-7705682_1280.jpg", alt: "Peniscola", },
    { src: "https://cdn.pixabay.com/photo/2016/03/27/19/47/water-1283963_1280.jpg", alt: "Valladolid", },
    { src: "https://cdn.pixabay.com/photo/2023/09/15/04/05/sea-8254024_1280.jpg", alt: "Ribeira", },
    { src: "https://cdn.pixabay.com/photo/2015/11/18/16/03/valencia-1049389_1280.jpg", alt: "Valencia", },
    { src: "https://cdn.pixabay.com/photo/2022/04/17/11/38/city-7137958_1280.jpg", alt: "Alicante", },
    { src: "https://cdn.pixabay.com/photo/2019/07/19/03/30/landscape-4347888_1280.jpg", alt: "Natura Park Near Morella", },
    { src: "https://cdn.pixabay.com/photo/2018/10/14/07/19/dusk-3745864_1280.jpg", alt: "Malaga", },
    { src: "https://cdn.pixabay.com/photo/2019/06/16/15/41/girona-4278090_1280.jpg", alt: "Girona", },
    { src: "https://cdn.pixabay.com/photo/2019/07/24/11/59/gran-canaria-4360002_1280.jpg", alt: "Gran Canaria", },
    { src: "https://cdn.pixabay.com/photo/2023/04/22/18/15/beach-7944181_1280.jpg", alt: "Altea", },
    { src: "https://cdn.pixabay.com/photo/2023/08/18/17/10/bilbao-8198986_1280.jpg", alt: "Bilbao", },
    { src: "https://cdn.pixabay.com/photo/2022/08/03/12/47/castle-7362606_1280.jpg", alt: "Castell de Parallada", },
    { src: "https://cdn.pixabay.com/photo/2016/10/18/21/16/plaza-espana-1751442_1280.jpg", alt: "Sevilla", },
    { src: "https://cdn.pixabay.com/photo/2017/12/16/01/42/madrid-3021998_1280.jpg", alt: "Madrid", },
    { src: "https://cdn.pixabay.com/photo/2018/12/29/14/11/barcelona-3901449_1280.jpg", alt: "Barcelona", },
    { src: "https://cdn.pixabay.com/photo/2023/11/08/19/28/sea-8375657_1280.jpg", alt: "Gaztelugatxeko San Juan", }
]
const heading = document.querySelector('h1')
heading.innerText = "Most beautiful places of Spain"
const divGallery = document.createElement('div')
document.body.append(divGallery)
images.forEach(image => {
    const imgGallery = document.createElement('img')
    imgGallery.src = image.src
    imgGallery.alt = image.alt
    imgGallery.dataset.dayOfPublication = "10 of May 2024"
    imgGallery.style.cssText = 'width: 380px; height: 250px; border: 6px solid transparent; border-radius: 30px'
    divGallery.append(imgGallery)

    function showModal(altOfImg, dayOfPublication, imgSrc) {
        const modal = document.createElement('div')
        document.body.append(modal)

        modal.classList.add('modal')
        modal.innerHTML = `
        <div class = "modalWrapper">
            <div class = "headingWrapper">
                <h2> ${altOfImg} </h2>
                <span class = "closeModal"> X </span>
            </div>
            <div class = "contentWrapper">
                <p> Added on ${dayOfPublication}</p>
                <img src="${imgSrc}" alt="${altOfImg}">
            </div>
        </div>`
        modal.querySelector('.closeModal').addEventListener('click', () => {
            modal.style.display = 'none'
        })

    }

    imgGallery.addEventListener('click', () => {
        showModal(imgGallery.alt, imgGallery.dataset.dayOfPublication, imgGallery.src)
    })
})

const styleElement = document.createElement('style');
document.head.appendChild(styleElement);
styleElement.innerHTML = `
    .modal {
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    .modalWrapper {
        background-color: white;
        margin: 5vw auto;
        padding: 20px;
        border: 2px solid black;
        width: 70%;
        border-radius: 10px;
        position: relative;
        display:flex;
        flex-direction: column;
    }

    .headingWrapper{
        display: flex;
        justify-content: space-between ;
        font-size: 26px;
    }

    .contentWrapper{
        display: flex;
        flex-direction : column;
        justify-content : center;
        font-size: 22px;
    }

    .closeModal {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .closeModal:hover,
    .closeModal:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    `


divGallery.classList.add('wrapper')
const imagesWrapper = document.querySelector('.wrapper')
imagesWrapper.style.cssText = 'display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 1600px; border: 3px solid gray; border-radius: 50px; overflow: hidden;'

// imagesWrapper.addEventListener ('click', () => {
//     const imagesArray = Array.from(imagesWrapper.querySelectorAll('img'));
//     imagesArray.sort(() => Math.random() - 0.5)
//     imagesWrapper.innerHTML = ""
//     imagesArray.forEach(image => {
//         imagesWrapper.append(image)
//     })
// })

