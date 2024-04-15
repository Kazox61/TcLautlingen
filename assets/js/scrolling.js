const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-anim")
        }
        else {
            entry.target.classList.remove("show-anim")
        }
    })
});

const hiddenElements = document.querySelectorAll(".hidden-anim");
hiddenElements.forEach((el) => observer.observe(el))


