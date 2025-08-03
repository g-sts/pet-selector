const dogButton = document.getElementById('btn-dog')
const catButton = document.getElementById('btn-cat')
const surpriseButton = document.getElementById('btn-surprise')
const img = document.querySelector('img')
const p = document.querySelector('p');

dogButton.addEventListener('click', ()=>{
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data =>{
      img.src = data.message;
      img.style.display = 'block';
      p.style.display = 'none';
    })
    .catch(error =>{
      console.error('Erro ao buscar imagem:', error)
    });
});

catButton.addEventListener('click', () =>{
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      img.src = data[0].url;
      img.style.display = 'block';
      p.style.display = 'none';
    })
    .catch(error =>{
      console.error('Erro ao buscar imagem de gato', error);
    });
});

function fetchDog(){
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => data.message)
}

function fetchCat(){
  return fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => data[0].url)
}

surpriseButton.addEventListener('click', () =>{
  Promise.any([fetchDog(), fetchCat()])
    .then(imageUrl => {
      img.src = imageUrl;
      img.style.display = 'block';
      p.style.display = 'none';
    })
    .catch(error =>{
      console.error('Erro ao buscar imagem surpresa', error);
    });
});

