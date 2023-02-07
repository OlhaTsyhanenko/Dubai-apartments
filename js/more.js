let btn = document.getElementsByClassName('btn-faq');
let p = document.getElementsByClassName('descr');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let content = p[i];
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            this.innerHTML = 'Less';
        } else {
            content.classList.add('hidden');
            this.innerHTML = 'Read more';
        }
    });
}

