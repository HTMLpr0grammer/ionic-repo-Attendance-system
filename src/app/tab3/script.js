document.getElementById('qr-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const className = document.getElementById('class').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    if (!date || !className || !startTime || !endTime) {
        alert('All fields are required!');
        return;
    }

    const qrData = `Date: ${date}\nClass: ${className}\nStart Time: ${startTime}\nEnd Time: ${endTime}`;
    
    const qrCodeElement = document.getElementById('qrcode');
    qrCodeElement.innerHTML = '';
    new QRCode(qrCodeElement, qrData);
    
    document.getElementById('qrPopup').style.display = 'flex';
});

function closePopup() {
    document.getElementById('qrPopup').style.display = 'none';
}

