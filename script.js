document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.snowflake-container');
    const inputDoa = document.getElementById('doa-input');
    const submitButton = document.getElementById('submit-doa');

    // 1. Fungsi Salju Otomatis
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❅'; 

        const startX = Math.random() * 100;
        snowflake.style.left = `${startX}vw`;
        
        const size = Math.random() * 1.5 + 0.8; 
        snowflake.style.fontSize = `${size}em`;
        
        const duration = Math.random() * 15 + 8; 
        snowflake.style.animationDuration = `${duration}s`;
        
        const delay = Math.random() * 8; 
        snowflake.style.animationDelay = `${delay}s`;

        container.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }

    setInterval(createSnowflake, 150); 
    
    // 2. Fungsi Tombol Kirim Doa
    submitButton.addEventListener('click', () => {
        const doaText = inputDoa.value.trim();

        if (doaText.length > 5) {
            alert(`telah terkirim: "${doaText.substring(0, 50)}..."\n\nSelamat Natal dan Tahun Baru!`);
            inputDoa.value = ''; 
            inputDoa.placeholder = 'sudah terkirim. Tulis yang lain jika mau!';
        } else {
            alert('Mohon tulis harapan yang lebih panjang sebelum mengirim.');
        }
    });
});