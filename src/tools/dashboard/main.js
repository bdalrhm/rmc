var rows = document.getElementsByClassName("row");

var i;
var width = 2;
var q1 = [rows[1]];
var q2 = []
while (q1.length !== 0) {
    for (const row of q1) {
        console.log(row);
        row.children[0].style.width = width + "%";
        row.children[1].style.width = (40 - width) + "%";
        if (row.nextElementSibling && row.nextElementSibling.classList.contains("content")) {
            let crows = row.nextElementSibling.children;
            for (i = 0; i < crows.length; i += 2) {
                q2.push(crows[i]);
            }
        }
    }
    width += 2;
    q1 = q2;
    q2 = [];
}

var coll = document.getElementsByClassName("collapsible");

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (!this.classList.contains("active")) {
            this.children[0].textContent = "+";
            content.style.maxHeight = 0;
        } else {
            this.children[0].textContent = "- ";
            while (content.classList.contains("content")) {
                content.style.maxHeight = content.scrollHeight + "px";
                content = content.parentElement;
            }
        }
    });
}