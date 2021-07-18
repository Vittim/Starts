var trocafoto = 't';
function troca() {
    var foto = document.getElementById('ft');
    if (trocafoto == 't') {
        foto.src = './Img/eu1.jpg';
        trocafoto = 'f'; 
    }else { 
        foto.src = './Img/eu2.jpg';
        trocafoto = 't';
    }  
} 

function menujs() {
    if (document.getElementById('kk').style.maxWidth = "200px") {
        document.getElementById('kk').style.visibility= "hidden"
    }
}

