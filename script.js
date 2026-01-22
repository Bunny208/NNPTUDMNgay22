const result = document.getElementById("result");
const productList = document.getElementById("productList");

// Câu 1: Constructor

function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Data

const products = [
    new Product(1, "Laptop Dell", 28000000, 5, "Electronics", true),
    new Product(2, "iPhone 15", 32000000, 8, "Electronics", true),
    new Product(3, "Áo sơ mi", 450000, 0, "Fashion", false),
    new Product(4, "Tai nghe Bluetooth", 1200000, 12, "Accessories", true),
    new Product(5, "Chuột không dây", 800000, 6, "Accessories", true),
    new Product(6, "Giày thể thao", 1500000, 4, "Fashion", true)
];
// Hiển thị danh sách SP để thầy dễ check
function renderProducts() {
    productList.innerHTML = "";
    products.forEach(p => {
        productList.innerHTML += `
            <div style="border-bottom:1px solid #ddd; padding:6px 0">
                <b>${p.name}</b><br>
                Giá: ${p.price.toLocaleString()}<br>
                SL: ${p.quantity} | ${p.category}<br>
                Trạng thái: ${p.isAvailable ? "Đang bán" : "Ngừng bán"}
            </div>
        `;
    });
}
renderProducts();

function showQuestion(q) {
    result.innerHTML = "";

    switch (q) {
        case 1:
            result.innerHTML = `<h4>Câu 1</h4>
            Đã khai báo constructor <b>Product</b>.`;
            break;

        case 2:
            result.innerHTML = `<h4>Câu 2</h4>
            Mảng products có <b>${products.length}</b> sản phẩm, nhiều danh mục.`;
            break;

        case 3:
            const q3 = products.map(p => ({ name: p.name, price: p.price }));
            result.innerHTML = `<h4>Câu 3</h4><pre>${JSON.stringify(q3, null, 2)}</pre>`;
            break;

        case 4:
            const q4 = products.filter(p => p.quantity > 0);
            result.innerHTML = `<h4>Câu 4</h4><pre>${JSON.stringify(q4, null, 2)}</pre>`;
            break;

        case 5:
            const q5 = products.some(p => p.price > 30000000);
            result.innerHTML = `<h4>Câu 5</h4>
            Có sản phẩm giá trên 30.000.000: <b>${q5}</b>`;
            break;

        case 6:
            const accessories = products.filter(p => p.category === "Accessories");
            const q6 = accessories.every(p => p.isAvailable);
            result.innerHTML = `
                <h4>Câu 6</h4>
                Kết quả: <b>${q6}</b>
                <h5>Chi tiết Accessories:</h5>
                <pre>${JSON.stringify(accessories, null, 2)}</pre>
            `;
            break;

        case 7:
            const q7 = products.reduce((s, p) => s + p.price * p.quantity, 0);
            result.innerHTML = `<h4>Câu 7</h4>
            Tổng giá trị kho: <b>${q7.toLocaleString()} VNĐ</b>`;
            break;

        case 8:
            let text8 = "";
            for (const p of products) {
                text8 += `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}\n`;
            }
            result.innerHTML = `<h4>Câu 8</h4><pre>${text8}</pre>`;
            break;

        case 9:
            let text9 = "";
            for (const key in products[0]) {
                text9 += `${key}: ${products[0][key]}\n`;
            }
            result.innerHTML = `<h4>Câu 9</h4><pre>${text9}</pre>`;
            break;

        case 10:
            const q10 = products
                .filter(p => p.isAvailable && p.quantity > 0)
                .map(p => p.name);
            result.innerHTML = `<h4>Câu 10</h4><pre>${JSON.stringify(q10, null, 2)}</pre>`;
            break;
    }
}
