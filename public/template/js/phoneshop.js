$(document).ready(function () {
  $(document).on("click", ".btn", function (e) {
      var amountArr = document.getElementsByClassName('quantity-input');
    var priceIpx = $(".priceIpX").text();
    var priceIp11 = $(".priceIp11").text();
    var priceIp12 = $(".priceIp12").text();
    var amountIpx = amountArr[0].value;
    var amountIp11 = amountArr[1].value;
    var amountIp12 = amountArr[2].value;   
    var totalPrice =
      amountIpx * priceIpx + amountIp11 * priceIp11 + amountIp12 * priceIp12;
    $(".summary").find(".priceTotal").text("$" +totalPrice);
  });
});
