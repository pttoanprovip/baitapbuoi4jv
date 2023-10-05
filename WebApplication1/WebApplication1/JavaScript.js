document.addEventListener('DOMContentLoaded', function () {
    var orderForm = document.getElementById('order-form');
    var totalPrice = document.getElementById('total-price');

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn việc gửi form đi

        var quantity1 = parseFloat(document.getElementById('quantity1').value);
        var quantity2 = parseFloat(document.getElementById('quantity2').value);
        var quantity3 = parseFloat(document.getElementById('quantity3').value);

        var total = calculateTotal(quantity1, quantity2, quantity3);
        totalPrice.textContent = '$' + total.toFixed(2);
    });

    function calculateTotal(quantity1, quantity2, quantity3) {
        var price1 = 10.99;
        var price2 = 5.99;
        var price3 = 8.99;

        var total = quantity1 * price1 + quantity2 * price2 + quantity3 * price3;
        return total;
    }
});