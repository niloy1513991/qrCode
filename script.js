const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrTextInput = document.getElementById("qrTextInput");

function generateQR () {
    if(qrTextInput.value.length > 0){
        qrImg.src = apiUrl + qrTextInput.value;
        imgBox.classList.add("show-img");
    } else{
        qrTextInput.classList.add('error');
        qrTextInput.placeholder = "You must put a value!";
        setTimeout(() => {
            qrTextInput.classList.remove('error');
            qrTextInput.placeholder = "Enter Text or URL";
        }, 1000);
    }
}

function saveImage() {
    const qrImg = document.getElementById('qrImg');
    const imgSrc = qrImg.src;
  
    if (imgSrc) {
      const link = document.createElement('a');
      link.href = imgSrc;
      link.download = 'qr-code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Please generate a QR code first.');
    }
  }