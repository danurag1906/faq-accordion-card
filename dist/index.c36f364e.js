const acc = document.getElementsByClassName("accordion");
let i;
const image = document.getElementsByClassName("arrow");
let y;
for(i = 0; i < acc.length; i++)acc[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        //when we are changing from display:block to display:none we need to remove the active state of the accordion
        this.classList.remove("accordionactive");
        let image = this.firstElementChild;
        image.classList.remove("arrowactive");
        panel.style.display = "none";
    } else {
        //if we are opening a particular accordion we need to close the rest of the accordions
        for(let j = 0; j < acc.length; j++){
            acc[j].classList.remove("accordionactive");
            let image1 = acc[j].firstElementChild;
            image1.classList.remove("arrowactive");
            let panel1 = acc[j].nextElementSibling;
            panel1.style.display = "none";
        }
        //and after closing all the accordions we need to switch "this" particular accordion to active state
        this.classList.add("accordionactive");
        let image2 = this.firstElementChild;
        image2.classList.add("arrowactive");
        panel.style.display = "block";
    }
// if (panel.style.maxHeight) {
//   panel.style.maxHeight = null;
// } else {
//   panel.style.maxHeight = panel.scrollHeight + "px";
// }
});

//# sourceMappingURL=index.c36f364e.js.map
