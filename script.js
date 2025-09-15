document.addEventListener('DOMContentLoaded', () => {

    // 1. Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Durasi animasi dalam milidetik
        once: true,     // Animasi hanya terjadi sekali
        offset: 100,    // Memicu animasi sedikit sebelum elemen masuk layar
    });

    // 2. Logika untuk Kursor Kustom
    const cursor = document.querySelector('.cursor');
    const interactiveElements = document.querySelectorAll('a, button, .tab-btn');

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('grow');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
        });
    });

    // 3. Logika untuk Filter Portofolio
    const tabButtons = document.querySelectorAll('.tab-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const categories = ['projects', 'certificates', 'tech'];

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Atur status tombol aktif
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter item
            const category = categories[index];
            portfolioItems.forEach(item => {
                if (item.getAttribute('data-category') === category) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
    });
});
