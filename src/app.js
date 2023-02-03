const rightobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('rightShowAni');
        } else {
            entry.target.classList.remove('rightShowAni');
        }
    });
});

const leftobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('leftShowAni');
        } else {
            entry.target.classList.remove('leftShowAni');
        }
    });
});

const leftHiddenElements = document.querySelectorAll('.leftHiddenAni')
const rightHiddenElements = document.querySelectorAll('.rightHiddenAni')

leftHiddenElements.forEach((element) => leftobserver.observe(element));
rightHiddenElements.forEach((element) => rightobserver.observe(element));