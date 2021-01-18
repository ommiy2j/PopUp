const hidden = document.querySelector('.hidden');
const close = document.querySelector('.close');
const click = document.querySelector('.click');


document.addEventListener('DOMContentLoaded', () => {
    click.addEventListener('click', () => {
        hidden.classList.add('show');
        hidden.classList.remove('hide');
        click.classList.add('shrink');
    })
    close.addEventListener('click', () => {
        hidden.classList.add('hide');
        hidden.classList.remove('show');
        click.classList.remove('shrink');
    })
})