const card_Front = document.querySelector('.js-rating-front');
const card_Back = document.querySelector('.js-rating-back');
const form = document.querySelector('.js-rating-form');
const rating = document.getElementById('js-rating-val');


function getRating(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const chosenRating = formData.get('rating');
    

    if(chosenRating) {
        rating.innerHTML = chosenRating;

        card_Front.classList.toggle('hidden');
        card_Back.classList.remove('hidden');
    }
}

form.addEventListener('submit', getRating);







