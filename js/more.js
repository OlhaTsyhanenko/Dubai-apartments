let btn = document.getElementsByClassName('btn-faq');
let p = document.getElementsByClassName('descr');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        if (p[i]) {
            let content = p[i];
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        }
    });
}

let change = document.querySelectorAll('.change');
let imgChecked = document.querySelectorAll('.checked');
let imgNotChecked = document.querySelectorAll('.not-checked');

for (let i = 0; i < change.length; i++) {
    // if (p[i]) {
        const showCheckbox = () => {

            imgChecked[i].classList.toggle('visible');
            imgNotChecked[i].classList.toggle('visible');
            if (!change[i].checked) {
                change[i].checked = true;
            } else {
                change[i].checked = false;
            }
        }
        imgChecked[i].addEventListener('click', showCheckbox);
        imgNotChecked[i].addEventListener('click', showCheckbox)
    // }
}
