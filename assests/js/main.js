


/*===============SKILLS TABS================*/
/*
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills_active")
            })
            target.classList.add('skills_active')

            tabs.forEach(tab => {
                tab.classList.remove("skills_active")
            })
            tab.classList.add('skills_active')

        });
    });*/



/*============Mixitup Filter==========================*/
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*==========Link Active Work==============================*/
const linkwork = document.querySelectorAll('.work_item')

function activeWork() {
    linkwork.forEach(L=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(L=> l.addEventListener("click", activeWork))

/*/!*==========Work popup==============================*!/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    // console.log(portfolioItem)
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}*/

/*==========Swiper Testimonial==============================*/

