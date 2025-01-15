// Author : Uriti Sai Abhishek
// Author WebSite: www.chronopegasus.com
$(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide")
});
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
footer = document.querySelector("footer");
const foot_link = document.createElement("a");
foot_link.href = "www.chronopegasus.com";
footer.appendChild(foot_link);
console.log(footer);
const marqueeContent = document.querySelector("ul.marquee-content");
if (marqueeContent) {
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(!0))
    }
}
