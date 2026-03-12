const hamMenu = document.querySelector('.ham_menu');
const offMenu = document.querySelector('.off_menu');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('nav');


    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offMenu.classList.toggle('active');
        logo.classList.toggle('active');
        navbar.classList.toggle('active');
    })



document.addEventListener("DOMContentLoaded", () => {

const galleries = {
    coffe: 55,
    brand: 32,
    sketch: 12
};

/* GENERATE GALLERY */

for (const folder in galleries) {

    const total = galleries[folder];
    const container = document.getElementById(`image_list_${folder}`);

    if (!container) continue;

    const html = Array.from({ length: total }, (_, i) =>
        `<img src="assets/image/${folder} (${i+1}).webp" loading="lazy">`
    ).join("");

    container.innerHTML = html;
}


/* RANDOM IMAGE COLLECTION */

const imageCollections = {

    img_1: [
        "assets/image/coffe (12).webp",
        "assets/image/coffe (1).webp",
        "assets/image/coffe (4).webp",
        "assets/image/coffe (6).webp",
        "assets/image/coffe (8).webp"
    ],

    img_2: [
        "assets/image/coffe (22).webp",
        "assets/image/coffe (25).webp",
        "assets/image/coffe (30).webp",
        "assets/image/coffe (45).webp",
        "assets/image/coffe (13).webp"
    ],

    img_3: [
        "assets/image/coffe (18).webp",
        "assets/image/coffe (20).webp",
        "assets/image/coffe (40).webp",
        "assets/image/coffe (41).webp",
        "assets/image/coffe (44).webp"
    ],

    img_4: [
        "assets/image/sketch (1).webp",
        "assets/image/sketch (2).webp",
        "assets/image/sketch (3).webp"
    ],

    img_5: [
        "assets/image/sketch (7).webp",
        "assets/image/sketch (8).webp",
        "assets/image/sketch (9).webp"
    ],

    img_6: [
        "assets/image/brand (1).webp",
        "assets/image/brand (3).webp",
        "assets/image/brand (4).webp",
        "assets/image/brand (6).webp"
    ],

    img_7: [
        "assets/image/brand (9).webp",
        "assets/image/brand (11).webp",
        "assets/image/brand (8).webp"
    ],

    img_8: [
        "assets/image/brand (30).webp",
        "assets/image/brand (31).webp",
        "assets/image/brand (32).webp"
    ],

    img_9: [
        "assets/image/brand (25).webp",
        "assets/image/brand (26).webp",
        "assets/image/brand (27).webp"
    ]

};


/* RANDOM IMAGE SYSTEM */

// RANDOM IMAGE SYSTEM (diperbaiki)
function changeImage(img, collection) {

    // 1. Bersihkan timer lama jika ada
    if (img.dataset.timeoutId) {
        clearTimeout(Number(img.dataset.timeoutId));
    }

    const randomDelay = Math.floor(Math.random() * 5000) + 4000; // 4–9 detik

    const timeoutId = setTimeout(() => {

        const randomImage = collection[Math.floor(Math.random() * collection.length)];

        const preload = new Image();
        preload.src = randomImage;

        preload.onload = () => {

            img.style.opacity = 0;

            setTimeout(() => {
                img.src = randomImage;
                img.style.opacity = 1;

                // Panggil lagi (rekursif)
                changeImage(img, collection);

            }, 1000); // durasi fade

        };

        // Optional: tangani error (gambar gagal load)
        preload.onerror = () => {
            // bisa langsung lanjut tanpa nunggu lama
            changeImage(img, collection);
        };

    }, randomDelay);

    // Simpan ID timer ke dataset supaya bisa di-clear nanti
    img.dataset.timeoutId = timeoutId;
}


/* INIT RANDOM IMAGES */

const images = document.querySelectorAll(".randomImage");

images.forEach(img => {

    const collectionName = img.dataset.collection;
    const collection = imageCollections[collectionName];

    if (!collection || collection.length === 0) return;

    // Ambil gambar pertama secara random
    const firstImage = collection[Math.floor(Math.random() * collection.length)];
    img.src = firstImage;

    // Cegah start berkali-kali (meski sebenarnya forEach sudah aman)
    if (img.dataset.randomInitialized) return;
    img.dataset.randomInitialized = "true";

    // Mulai animasi setelah gambar pertama berhasil dimuat
    img.onload = () => {
        changeImage(img, collection);
    };

    // Jika gambar sudah cache → onload mungkin tidak ter-trigger
    // Jadi kita cek juga kondisi complete
    if (img.complete) {
        changeImage(img, collection);
    }

});

});