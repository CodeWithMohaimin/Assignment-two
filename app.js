let description = document.getElementById('description');
let card = document.getElementById('card');

card.addEventListener('click', function () {
    description.innerHTML = 'This is a Description, It simple functionality. This Product from Neptune'
    description.style.fontSize = '12px'
    description.style.color = '#666'

   
})
card.addEventListener('dblclick', function () {
    description.innerHTML = ''
   
})

