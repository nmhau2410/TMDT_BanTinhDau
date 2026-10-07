const CART_KEY = "essential_oil_cart";

export const getCart = () => {
    try {
        const cart = localStorage.getItem(CART_KEY);
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error("Không thể đọc giỏ hàng:", error);
        return [];
    }
};

export const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
};

export const addToCart = (product, quantity = 1, variant = null) => {
    const cart = getCart();

    const volume =
        variant?.volume ||
        product?.volume ||
        product?.variants?.[0]?.volume ||
        "10ml";

    const price =
        variant?.price ??
        product?.price ??
        product?.variants?.[0]?.price ??
        0;

    const originalPrice =
        variant?.originalPrice ??
        product?.oldPrice ??
        product?.variants?.[0]?.originalPrice ??
        null;

    const itemId = `${product.id}-${volume}`;

    const existingIndex = cart.findIndex(
        (item) => item.cartId === itemId
    );

    if (existingIndex !== -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            cartId: itemId,
            productId: product.id,
            name: product.name,
            image: product.image,
            price,
            originalPrice,
            quantity,
            volume,
            origin:
                product.origin ||
                product.originDetail ||
                "Pháp",
        });
    }

    saveCart(cart);

    return cart;
};

export const updateCartQuantity = (cartId, quantity) => {
    const cart = getCart();

    const updatedCart = cart.map((item) =>
        item.cartId === cartId
            ? {
                ...item,
                quantity: Math.max(1, quantity),
            }
            : item
    );

    saveCart(updatedCart);

    return updatedCart;
};

export const removeFromCart = (cartId) => {
    const cart = getCart();

    const updatedCart = cart.filter(
        (item) => item.cartId !== cartId
    );

    saveCart(updatedCart);

    return updatedCart;
};

export const clearCart = () => {
    localStorage.removeItem(CART_KEY);
    window.dispatchEvent(new Event("cartUpdated"));
};

export const formatPrice = (price) => {
    return `${Number(price || 0).toLocaleString("vi-VN")}đ`;
};