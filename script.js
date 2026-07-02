const photos = [
"1.JPG",
"2.JPG",
"3.JPG",
"4.JPG",
"5.JPG",
"6.JPG",
"7.JPG",
"8.JPG",
"9.JPG",
"10.JPG",
"11.JPG",
"12.JPG",
"13.JPG",
"14.JPG"
];

let start = 0;

function rotateGallery(){

for(let i=0;i<4;i++){

document.getElementById("g"+(i+1)).src =
photos[(start+i)%photos.length];

}

start=(start+1)%photos.length;

}
rotateGallery();
setInterval(rotateGallery,4000);
