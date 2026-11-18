// Product data - 10 categories with 6 items each
        const products = [
            {
                id: 1,
                name: "Iron Handicrafts",
                description: "Exquisite iron handicrafts featuring intricate designs and durable craftsmanship.",
                image: "./iron handicraft img.png",
                category: "iron",
                items: [
                    { id: 101, name: "Iron Wall Art", price: 200, image: "./iron wall art img.png", details: ["Hand-forged iron", "Intricate floral design", "24x18 inches", "Wall mounted"] },
                    { id: 102, name: "Iron Sculpture", price: 240, image: "./iron sculpture img.png", details: ["Abstract design", "Weather-resistant finish", "Height: 14 inches", "Base included"] },
                    { id: 103, name: "Iron Lantern", price: 199, image: "./iron lantern img.png", details: ["Traditional design", "Candle holder", "Height: 10 inches", "Handcrafted"] },
                    { id: 104, name: "Iron Table", price: 150, image: "./iron table img.png", details: ["Wrought iron base", "Glass top", "Height: 22 inches", "Indoor use"] },
                    { id: 105, name: "Iron Candle Holder", price: 55, image: "./iron candle holder img.jpg", details: ["Set of 3", "Scroll design", "Height: 6 inches", "For pillar candles"] },
                    { id: 106, name: "Iron Wall Hook", price: 45, image: "./iron wall hook img.jpg", details: ["Decorative design", "Rustic finish", "Set of 4", "Wall mounted"] }
                ]
            },
            {
                id: 2,
                name: "Glass Handicrafts",
                description: "Beautiful glass handicrafts with vibrant colors and delicate craftsmanship.",
                image:"./glass handicraft img.png",
                category: "glass",
                items: [
                    { id: 201, name: "Stained Glass Panel", price: 100, image: "./Stained Glass Panel img.png", details: ["Colorful design", "Lead came technique", "18x24 inches", "Sun catcher"] },
                    { id: 202, name: "Glass Vase", price: 56, image: "./glass vase img.jpg", details: ["Hand-blown glass", "Swirl pattern", "Height: 12 inches", "Holds flowers"] },
                    { id: 203, name: "Glass Figurine", price: 60, image: "./glass figurine img.jpg", details: ["Crystal clear glass", "Animal design", "Height: 6 inches", "Decorative piece"] },
                    { id: 204, name: "Glass Bowl", price: 45, image: "./glass bowl img.jpg", details: ["Handcrafted", "Fruit bowl", "Diameter: 10 inches", "Multi-purpose"] },
                    { id: 205, name: "Glass Ornament", price: 66, image: "./Glass Ornament img.jpg", details: ["Set of 6", "Christmas decorations", "Various shapes", "Hand-painted"] },
                    { id: 206, name: "Glass Jewelry Box", price: 85, image: "./glass jewelery box img.jpg", details: ["Lid with design", "Velvet lining", "6x4 inches", "Storage for jewelry"] }
                ]
            },
            {
                id: 3,
                name: "Brass Handicrafts",
                description: "Elegant brass handicrafts with intricate designs and polished finishes.",
                image: "./brass img.png",
                category: "brass",
                items: [
                    { id: 301, name: "Brass Statue", price: 88, image: "./brass statue img.jpg", details: ["Deity figurine", "Antique finish", "Height: 14 inches", "Traditional design"] },
                    { id: 302, name: "Brass Lamp", price: 67, image: "./brass lamp img.jpg", details: ["Oil lamp", "Intricate carvings", "Height: 10 inches", "Traditional use"] },
                    { id: 303, name: "Brass Tray", price: 25, image: "./brass tray img.jpg", details: ["Serving tray", "Engraved border", "Diameter: 12 inches", "Multi-purpose"] },
                    { id: 304, name: "Brass Wind Chime", price: 30, image: "./Brass Wind Chime img.jpg", details: ["Melodious sound", "7 rods", "Height: 18 inches", "Outdoor/indoor"] },
                    { id: 305, name: "Brass Box", price: 20, image: "./brass box img.jpg", details: ["Decorative box", "Lock and key", "5x5 inches", "Storage for valuables"] },
                    { id: 306, name: "Brass Wall Decor", price: 30, image: "./brass wall decor img.jpg", details: ["Sun design", "Wall mounted", "Diameter: 16 inches", "Polished finish"] }
                ]
            },
            {
                id: 4,
                name: "Wood Handicrafts",
                description: "Natural wood handicrafts showcasing the beauty of organic materials.",
                image: "./wood handicraft img.png",
                category: "wood",
                items: [
                    { id: 401, name: "Wooden Sculpture", price: 150, image: "./wooden sculpture img.jpg", details: ["Teak wood", "Abstract design", "Height: 16 inches", "Natural finish"] },
                    { id: 402, name: "Wooden Bowl", price: 18, image: "./wooden bowl img.jpg", details: ["Hand-carved", "Sal wood", "Diameter: 10 inches", "Fruit/salad bowl"] },
                    { id: 403, name: "Wooden Jewelry Box", price: 35, image: "./wooden jewelery box img.jpg", details: ["Rosewood", "Multiple compartments", "8x6 inches", "Velvet lining"] },
                    { id: 404, name: "Wooden Wall Art", price: 45, image: "./wooden wall art img.jpg", details: ["Carved panel", "Traditional motif", "24x18 inches", "Wall mounted"] },
                    { id: 405, name: "Wooden Mirror Frame", price: 25, image: "./wooden mirror frame img.jpg", details: ["Intricate carving", "Round mirror", "Diameter: 18 inches", "Wall mounted"] },
                    { id: 406, name: "Wooden Candle Holder", price: 37, image: "./wooden candle holder img.webp", details: ["Set of 2", "Modern design", "Height: 5 inches", "For pillar candles"] }
                ]
            },
            {
                id: 5,
                name: "Aluminium Handicrafts",
                description: "Modern aluminium handicrafts with sleek designs and contemporary appeal.",
                image: "./aluminium handicraft img.png",
                category: "aluminium",
                items: [
                    { id: 501, name: "Aluminium Sculpture", price: 199, image: "./aluminium sculpture img.jpg", details: ["Modern design", "Polished finish", "Height: 12 inches", "Abstract form"] },
                    { id: 502, name: "Aluminium Wall Art", price: 156, image: "./aluminium wall art img.jpg", details: ["Geometric design", "Brushed finish", "20x16 inches", "Wall mounted"] },
                    { id: 503, name: "Aluminium Bowl", price: 50, image: "./aluminium bowl img.jpg", details: ["Hand-hammered", "Modern design", "Diameter: 12 inches", "Fruit/salad bowl"] },
                    { id: 504, name: "Aluminium Lantern", price: 39, image: "./aluminium lantern img.jpg", details: ["Contemporary design", "LED candle compatible", "Height: 10 inches", "Indoor/outdoor"] },
                    { id: 505, name: "Aluminium Vase", price: 159, image: "./aluminium vase img.jpg", details: ["Sleek design", "Brushed finish", "Height: 14 inches", "Holds flowers"] },
                    { id: 506, name: "Aluminium Coaster Set", price: 125, image: "./aluminium coaster set img.jpg", details: ["Set of 6", "Geometric patterns", "Protects surfaces", "Easy to clean"] }
                ]
            },
            {
                id: 6,
                name: "Handicraft Decorative",
                description: "Versatile decorative handicrafts to enhance any interior space.",
                image: "./handicraft decorative img.png",
                category: "decorative",
                items: [
                    { id: 601, name: "Decorative Plate", price: 15, image: "./decorative plate img.jpg", details: ["Wall decoration", "Hand-painted", "Diameter: 14 inches", "Traditional motifs"] },
                    { id: 602, name: "Decorative Mask", price: 99, image: "./decorative mask img.jpg", details: ["Cultural design", "Hand-carved", "Wall mounted", "12x8 inches"] },
                    { id: 603, name: "Decorative Clock", price: 110, image: "./decorative clock img.jpg", details: ["Quartz movement", "Unique design", "Diameter: 16 inches", "Wall mounted"] },
                    { id: 604, name: "Decorative Screen", price: 69, image: "./decorative screen img.jpg", details: ["Room divider", "Hand-painted", "Height: 60 inches", "3 panels"] },
                    { id: 605, name: "Decorative Pot", price: 24, image: "./decorative pot img.jpg", details: ["Terracotta", "Hand-painted", "Height: 10 inches", "For plants/decoration"] },
                    { id: 606, name: "Decorative Figurine Set", price: 60, image: "./Decorative Figurine Set img.jpg", details: ["Set of 3", "Animal figures", "Various sizes", "Shelf decor"] }
                ]
            },
            {
                id: 7,
                name: "Table Wares",
                description: "Elegant table wares to enhance your dining experience.",
                image: "./table wares img.jpg",
                category: "tableware",
                items: [
                    { id: 701, name: "Handcrafted Cutlery Set", price: 69, image: "./handicrafted cutlery set img.jpg", details: ["Set of 24 pieces", "Brass handles", "Traditional design", "Gift box"] },
                    { id: 702, name: "Serving Platter", price: 30, image: "./serving platter img.jpg", details: ["Wooden base", "Brass inlay", "16x12 inches", "For serving food"] },
                    { id: 703, name: "Decorative Bowl Set", price: 50, image: "./decorative bowl set img.jpg", details: ["Set of 3", "Nested design", "Various sizes", "Fruit/snack bowls"] },
                    { id: 704, name: "Copper Coasters", price: 90, image: "./copper coaster set img.jpg", details: ["Set of 6", "Hand-engraved", "Protects surfaces", "Traditional motifs"] },
                    { id: 705, name: "Napkin Holder", price: 49, image: "./napkin holder img.jpg", details: ["Brass construction", "Scroll design", "Holds 12 napkins", "Table essential"] },
                    { id: 706, name: "Salt & Pepper Set", price: 26, image: "./salt and pepper img.jpg", details: ["Wooden base", "Ceramic shakers", "Height: 4 inches", "Table condiment set"] }
                ]
            },
            {
                id: 8,
                name: "Home Décor",
                description: "Beautiful home décor items to personalize your living space.",
                image: "./home decor img.jpg",
                category: "homedecor",
                items: [
                    { id: 801, name: "Wall Hanging", price: 15, image: "./wall hanging img.jpg", details: ["Macramé design", "Natural fibers", "24x36 inches", "Bohemian style"] },
                    { id: 802, name: "Decorative Pillow", price: 15, image: "./pillow img.jpg", details: ["Hand-embroidered", "18x18 inches", "Cotton cover", "Decorative insert"] },
                    { id: 803, name: "Room Divider", price: 56, image: "./room divider img.jpg", details: ["Wood and fabric", "4 panels", "Height: 72 inches", "Creates privacy"] },
                    { id: 804, name: "Decorative Rug", price: 35, image: "./rugs img.jpg", details: ["Hand-woven", "Geometric pattern", "4x6 feet", "Natural fibers"] },
                    { id: 805, name: "Curtain Tiebacks", price: 25, image: "./curtains tiebacks image.jpg", details: ["Set of 2", "Brass construction", "Scroll design", "Holds curtains"] },
                    { id: 806, name: "Decorative Ladder", price: 78, image: "./ladder img.jpg", details: ["Wooden construction", "For blankets/towels", "Height: 60 inches", "Rustic design"] }
                ]
            },
            {
                id: 9,
                name: "Candle Accessories",
                description: "Beautiful accessories to enhance your candlelight experience.",
                image: "./candle accessories img.jpg",
                category: "candle",
                items: [
                    { id: 901, name: "Candle Holder Set", price: 60, image: "./candle holder set img.jpg", details: ["Set of 3", "Different heights", "Brass construction", "For taper candles"] },
                    { id: 902, name: "Hurricane Lantern", price: 45, image: "./Hurricane Lantern img.jpg", details: ["Glass cylinder", "Metal base", "Height: 10 inches", "Protects candle flame"] },
                    { id: 903, name: "Tealight Holder", price: 28, image: "./tealight holder img.jpg", details: ["Set of 6", "Glass construction", "Various colors", "For tea light candles"] },
                    { id: 904, name: "Candle Snuffer", price: 10, image: "./candle snuffer img.jpg", details: ["Brass construction", "Elegant design", "Length: 8 inches", "Extinguishes candles safely"] },
                    { id: 905, name: "Candle Tray", price: 20, image: "./candle holder img.jpg", details: ["Wooden tray", "Holds 3 candles", "14x8 inches", "Protects surfaces"] },
                    { id: 906, name: "Floating Candle Set", price: 25, image: "./floating candle set img.jpg", details: ["Set of 12 candles", "Various colors", "For water bowls", "Creates ambiance"] }
                ]
            },
        
        ];

        // Cart state
        let cart = [];
        let currentProductDetail = null;
        let currentSelectedItem = null;

        // Initialize the page
        $(document).ready(function() {
            // Render products on page load
            renderProducts();
            
            // Initialize cart from localStorage if available
            const savedCart = localStorage.getItem('venusHandicraftsCart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCartCount();
            }
            
            // Setup event listeners
            setupEventListeners();
            
            // Smooth scrolling for anchor links
            $('a[href^="#"]').on('click', function(e) {
                if (this.hash !== "") {
                    e.preventDefault();
                    const hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 80
                    }, 800);
                }
            });
            
            // Update active nav link on scroll
            $(window).on('scroll', function() {
                const scrollPos = $(document).scrollTop() + 100;
                $('nav a').each(function() {
                    const currLink = $(this);
                    const refElement = $(currLink.attr('href'));
                    if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                        $('nav ul li a').removeClass("active");
                        currLink.addClass("active");
                    }
                });
            });
        });

        // Render all products
        function renderProducts() {
            const container = $('#products-container');
            container.empty();
            
            products.forEach(product => {
                const productCard = `
                    <div class="col-lg-4 col-md-6 fade-in">
                        <div class="product-card">
                            <img src="${product.image}" class="product-img" alt="${product.name}">
                            <div class="product-card-body">
                                <h4 class="product-title">${product.name}</h4>
                                <p class="product-description">${product.description}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <button class="btn btn-outline-gold view-items-btn" data-product-id="${product.id}">
                                        View Items <i class="fas fa-arrow-right ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.append(productCard);
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // View items button click
            $(document).on('click', '.view-items-btn', function() {
                const productId = $(this).data('product-id');
                showProductDetails(productId);
            });
            
            // Product link click in site map
            $(document).on('click', '.product-link', function(e) {
                e.preventDefault();
                const category = $(this).data('category');
                const product = products.find(p => p.category === category);
                if (product) {
                    showProductDetails(product.id);
                }
            });
            
            // Product item click in detail modal
            $(document).on('click', '.product-item-btn', function() {
                const itemId = $(this).data('item-id');
                selectProductItem(itemId);
            });
            
            // Increase quantity button
            $('#increase-qty').on('click', function() {
                const currentVal = parseInt($('#detail-quantity').val());
                $('#detail-quantity').val(currentVal + 1);
            });
            
            // Decrease quantity button
            $('#decrease-qty').on('click', function() {
                const currentVal = parseInt($('#detail-quantity').val());
                if (currentVal > 1) {
                    $('#detail-quantity').val(currentVal - 1);
                }
            });
            
            // Add to cart button
            $('#add-to-cart-btn').on('click', function() {
                addToCart();
            });
            
            // Checkout button
            $('#checkout-btn').on('click', function() {
                openCheckoutModal();
            });
            
            // Checkout form submit
            $('#checkoutForm').on('submit', function(e) {
                e.preventDefault();
                placeOrder();
            });
            
            // Contact form submit
            $('#contactForm').on('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                $(this)[0].reset();
            });
            
            // Newsletter form submit
            $('#newsletterForm').on('submit', function(e) {
                e.preventDefault();
                alert('Thank you for subscribing to our newsletter!');
                $(this)[0].reset();
            });
            
            // FAQ toggle
            $('.faq-question').on('click', function() {
                const faqItem = $(this).closest('.faq-item');
                faqItem.toggleClass('active');
                $('.faq-item').not(faqItem).removeClass('active');
            });
        }

        // Show product details modal
        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            currentProductDetail = product;
            currentSelectedItem = product.items[0];
            
            // Set modal content
            $('#detail-product-title').text(product.name);
            $('#detail-product-name').text(product.items[0].name);
            $('#detail-product-description').text(product.description);
            $('#detail-product-price').text('$' + product.items[0].price);
            $('#detail-product-image').attr('src', product.items[0].image);
            
            // Render product items
            const itemsContainer = $('#product-items-container');
            itemsContainer.empty();
            
            product.items.forEach(item => {
                const isActive = item.id === product.items[0].id ? 'active' : '';
                const itemButton = `
                    <div class="col-6 mb-2">
                        <button class="btn btn-outline-gold w-100 product-item-btn ${isActive}" data-item-id="${item.id}">
                            ${item.name}
                        </button>
                    </div>
                `;
                itemsContainer.append(itemButton);
            });
            
            // Update product details list
            updateProductDetailsList(product.items[0].details);
            
            // Show modal
            const productDetailModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
            productDetailModal.show();
        }

        // Select a product item
        function selectProductItem(itemId) {
            if (!currentProductDetail) return;
            
            const item = currentProductDetail.items.find(i => i.id === itemId);
            if (!item) return;
            
            currentSelectedItem = item;
            
            // Update UI
            $('.product-item-btn').removeClass('active');
            $(`.product-item-btn[data-item-id="${itemId}"]`).addClass('active');
            
            $('#detail-product-name').text(item.name);
            $('#detail-product-price').text('$' + item.price);
            $('#detail-product-image').attr('src', item.image);
            updateProductDetailsList(item.details);
        }

        // Update product details list
        function updateProductDetailsList(details) {
            const detailsList = $('#product-details-list');
            detailsList.empty();
            
            details.forEach(detail => {
                detailsList.append(`<li>${detail}</li>`);
            });
        }

        // Add item to cart
        function addToCart() {
            if (!currentSelectedItem) return;
            
            const quantity = parseInt($('#detail-quantity').val());
            
            // Check if item already in cart
            const existingItemIndex = cart.findIndex(item => item.id === currentSelectedItem.id);
            
            if (existingItemIndex >= 0) {
                // Update quantity if already in cart
                cart[existingItemIndex].quantity += quantity;
            } else {
                // Add new item to cart
                cart.push({
                    id: currentSelectedItem.id,
                    name: currentSelectedItem.name,
                    price: currentSelectedItem.price,
                    image: currentSelectedItem.image,
                    quantity: quantity
                });
            }
            
            // Save cart to localStorage
            localStorage.setItem('venusHandicraftsCart', JSON.stringify(cart));
            
            // Update cart count
            updateCartCount();
            
            // Show success message
            alert(`${currentSelectedItem.name} added to cart!`);
            
            // Close modal
            bootstrap.Modal.getInstance(document.getElementById('productDetailModal')).hide();
        }

        // Update cart count in navbar
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            $('.cart-count').text(totalItems);
            
            // Update cart modal if it's open
            if ($('#cartModal').hasClass('show')) {
                renderCartItems();
            }
        }

        // Render cart items in cart modal
        function renderCartItems() {
            const container = $('#cart-items-container');
            const emptyCartMessage = $('#empty-cart-message');
            const cartTotalSection = $('#cart-total-section');
            
            if (cart.length === 0) {
                emptyCartMessage.show();
                cartTotalSection.hide();
                container.html('<div class="text-center py-5" id="empty-cart-message"><i class="fas fa-shopping-cart fa-3x mb-3" style="color: var(--primary-gold); opacity: 0.5;"></i><h5 class="gold-text">Your cart is empty</h5><p class="text-gray">Add some beautiful handicrafts to your cart!</p></div>');
                return;
            }
            
            emptyCartMessage.hide();
            cartTotalSection.show();
            
            container.empty();
            
            let total = 0;
            
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = `
                    <div class="cart-item">
                        <div class="row align-items-center">
                            <div class="col-3">
                                <img src="${item.image}" class="cart-item-img" alt="${item.name}">
                            </div>
                            <div class="col-5">
                                <h6 class="gold-text">${item.name}</h6>
                                <p class="mb-1">₹${item.price}</p>
                            </div>
                            <div class="col-3">
                                <div class="d-flex align-items-center">
                                    <button class="btn btn-sm btn-outline-gold me-2 decrease-cart-item" data-index="${index}">-</button>
                                    <span class="mx-2">${item.quantity}</span>
                                    <button class="btn btn-sm btn-outline-gold ms-2 increase-cart-item" data-index="${index}">+</button>
                                </div>
                            </div>
                            <div class="col-1 text-end">
                                <button class="btn btn-link text-danger delete-cart-item" data-index="${index}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-12 text-end">
                                <span class="text-light">Item Total: $${itemTotal}</span>
                            </div>
                        </div>
                    </div>
                `;
                container.append(cartItem);
            });
            
            // Update total
            $('#cart-total').text('$' + total);
            $('#checkout-total').text('$' + total);
            
            // Add event listeners for cart item buttons
            $('.increase-cart-item').on('click', function() {
                const index = $(this).data('index');
                cart[index].quantity += 1;
                saveAndUpdateCart();
            });
            
            $('.decrease-cart-item').on('click', function() {
                const index = $(this).data('index');
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                    saveAndUpdateCart();
                }
            });
            
            $('.delete-cart-item').on('click', function() {
                const index = $(this).data('index');
                cart.splice(index, 1);
                saveAndUpdateCart();
            });
        }

        // Save cart and update UI
        function saveAndUpdateCart() {
            localStorage.setItem('venusHandicraftsCart', JSON.stringify(cart));
            updateCartCount();
            renderCartItems();
        }

        // Open checkout modal
        function openCheckoutModal() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            // Close cart modal
            bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
            
            // Open checkout modal
            const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
            checkoutModal.show();
        }

        // Place order
        function placeOrder() {
            // In a real application, you would send this data to a server
            const orderData = {
                name: $('#checkout-name').val(),
                email: $('#checkout-email').val(),
                phone: $('#checkout-phone').val(),
                address: $('#checkout-address').val(),
                payment: $('#checkout-payment').val(),
                items: cart,
                total: cart.reduce((total, item) => total + (item.price * item.quantity), 0)
            };
            
            console.log('Order placed:', orderData);
            
            // Clear cart
            cart = [];
            localStorage.removeItem('venusHandicraftsCart');
            updateCartCount();
            
            // Close checkout modal
            bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
            
            // Show success modal
            const successModal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
            successModal.show();
            
            // Reset checkout form
            $('#checkoutForm')[0].reset();
        }

        // When cart modal is shown, render cart items
        $('#cartModal').on('shown.bs.modal', function() {
            renderCartItems();
        });