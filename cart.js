// cart.js

// TODO LIST:
// + borgor menu

// 1. Product data list (use product ID as key)
const productData = {
    // NAM
    product1: {
      name: "Áo khoác gió",
      price: "280.000đ",
      image: "Products/M1.webp"
    },
    product2: {
      name: "Set đồ nam",
      price: "920.000đ",
      image: "Products/M2.webp"
    },
    product3: {
      name: "Áo khoác denim",
      price: "280.000đ",
      image: "Products/M3.jpg"
    },
    product4: {
      name: "Áo hoodie",
      price: "230.000đ",
      image: "Products/M4.webp"
    },
    product5: {
      name: "Quần kaki",
      price: "267.000đ",
      image: "Products/M5.jpg"
    },
    product6: {
      name: "Quần tây",
      price: "330.000đ",
      image: "Products/M6.jpg"
    },
    product7: {
      name: "Quần đùi",
      price: "267.000đ",
      image: "Products/M7.jpg"
    },
    product8: {
      name: "Quần thun",
      price: "251.000đ",
      image: "Products/M8.jpg"
    },

    // NỮ
    product9: {
      name: "Áo sơ mi trắng thanh lịch",
      price: "310.000đ",
      image: "Products/W1.jpg"
    },
    product10: {
      name: "Áo thun đen",
      price: "290.000đ",
      image: "Products/W2.jpg"
    },
    product11: {
      name: "Áo blouse bèo nhún",
      price: "287.000đ",
      image: "Products/W3.jpg"
    },
    product12: {
      name: "Áo sơ mi thắt eo",
      price: "330.000đ",
      image: "Products/W4.jpg"
    },
    product13: {
      name: "Đầm trắng công chúa",
      price: "400.000đ",
      image: "Products/W5.jpg"
    },
    product14: {
      name: "Chân váy xòe đen",
      price: "330.000đ",
      image: "Products/W6.jpg"
    },
    product15: {
      name: "Chân váy xếp ly",
      price: "300.000đ",
      image: "Products/W7.jpg"
    },
    product16: {
      name: "Quần jogger nơ",
      price: "324.000đ",
      image: "Products/W8.jpg"
    },

    // PHỤ KIỆN
    product17: {
      name: "Túi xách",
      price: "430.000đ",
      image: "Products/A1.jpg"
    },
    product18: {
      name: "Bông tai",
      price: "343.000đ",
      image: "Products/A2.jpg"
    },
    product19: {
      name: "Nhẫn cặp",
      price: "760.000đ",
      image: "Products/A3.jpg"
    },
    product20: {
      name: "Ví nam",
      price: "230.000đ",
      image: "Products/A4.jpg"
    },
    product21: {
      name: "Mắt kính",
      price: "290.000đ",
      image: "Products/A5.jpg"
    },
    product22: {
      name: "Balo nữ",
      price: "320.000đ",
      image: "Products/A6.jpg"
    },
    product23: {
      name: "Vòng tay nữ",
      price: "343.000đ",
      image: "Products/A7.jpg"
    },
    product24: {
      name: "Dây nịt nam",
      price: "230.000đ",
      image: "Products/A8.jpg"
    }
  };



// 2. Add to cart
  document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id;
  
      // Cart data
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Avoid duplicates
      if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    });
  });



// 3. Render cart (only on cart.html)
  function renderCartPage() {
    const container = document.getElementById("cart-container");
    if (!container) return; // Exit if not on cart.html
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }
  
    // Create a table or divs for items
    cart.forEach(id => {
      const product = productData[id];
      if (!product) return; // Skip if ID not found
  
      // Create container div
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
  
      // Placeholder HTML elements
      itemDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="cart-image">
        <div class="cart-details">
          <h2 class="cart-title">${product.name}</h2>
          <p class="cart-price">${product.price}</p>
        </div>
      `;

  
      container.appendChild(itemDiv);
    });
  }
  
  renderCartPage();



// 4. Clear cart + Checkout
  const clearCartBtn = document.getElementById("clear-cart-btn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      localStorage.removeItem("cart"); // Clear cart data
      window.location.reload();        // Refresh to update the cart UI
    });
  }

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      alert("Các món hàng của bạn đang được giao đi. Cảm ơn bạn đã tin tưởng chọn mua sản phẩm của Shop 3R!");
      localStorage.removeItem("cart");
      window.location.reload();
    });
  }

  
