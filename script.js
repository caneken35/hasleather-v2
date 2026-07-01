const photos = [
"images/1.JPG",
"images/2.JPG",
"images/3.JPG",
"images/4.JPG",
"images/5.JPG",
"images/6.JPG",
"images/7.JPG",
"images/8.JPG",
"images/9.JPG",
"images/10.JPG",
"images/11.JPG",
"images/12.JPG",
"images/13.JPG",
"images/14.JPG"
];

let start = 0;

function rotateGallery(){

for(let i=0;i<4;i++){

document.getElementById("g"+(i+1)).src =
photos[(start+i)%photos.length];

}

start=(start+1)%photos.length;

}

setInterval(rotateGallery,4000);
