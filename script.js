document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk filter portofolio
    const filterPortfolio = (category) => {
        const items = document.querySelectorAll('.portfolio-item');
        items.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    };

    // Tambahkan event listener ke tombol tab
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Hapus kelas 'active' dari semua tombol
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas 'active' ke tombol yang diklik
            const currentButton = event.currentTarget;
            currentButton.classList.add('active');
            
            // Dapatkan kategori dan panggil fungsi filter
            const category = currentButton.getAttribute('onclick').match(/'([^']+)'/)[1];
            filterPortfolio(category);
        });
    });

    // Inisialisasi filter untuk menampilkan 'projects' secara default
    filterPortfolio('projects');
});
