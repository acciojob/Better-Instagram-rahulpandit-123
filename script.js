//your code here
let dragged = null;
let images = document.querySelectorAll(".image")
for (let image of images) {

    image.addEventListener("dragstart", (e) => {
        dragged = e.target;
    });

    image.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    image.addEventListener("drop", (e) => {
        e.preventDefault();

        let target = e.target;

        let parent = target.parentNode;

        let temp = document.createElement("div");

        parent.replaceChild(temp, dragged);
        parent.replaceChild(dragged, target);
        parent.replaceChild(target, temp);
    });
}
