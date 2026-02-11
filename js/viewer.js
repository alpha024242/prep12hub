function openPDF(path){
const f=document.getElementById('pdfFrame');
f.src=path;
f.scrollIntoView({behavior:'smooth'});
}
