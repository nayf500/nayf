// المنتجات الافتراضية الأولية في المتجر
const defaultProducts = [
    {
        id: 1,
        name: "شنطة ليلى الكلاسيكية الفاخرة",
        price: 290,
        qty: 5,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80",
        desc: "شنطة نسائية بتصميم عصري وأنيق، مناسبة للاستخدام اليومي والمناسبات."
    },
    {
        id: 2,
        name: "شنطة سهرة راقية (موف مدرج)",
        price: 350,
        qty: 3,
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=80",
        desc: "أناقة لا تقاوم، مصنوعة بأعلى معايير الجودة لتلائم إطلالتك الساحرة."
    }
];

let products = JSON.parse(localStorage.getItem('layla_products')) || defaultProducts;
let cart = [];
let orders = JSON.parse(localStorage.getItem('layla_orders')) || [];

// كلمة مرور لوحة التاجر المخفية
const ADMIN_PASSWORD = "123";

// تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});

// عرض المنتجات في الواجهة
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    products.forEach(product => {
        grid.innerHTML += `
