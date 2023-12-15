(function($){
"use strict";
var razorpaybutton = document.querySelector(".pay-razorpay");
let currency = document.querySelector(".custom-currency").dataset.customCurrency;
const rozarpay = document.querySelector(".razorpay").dataset.razorpay;
let logo = document.querySelector(".custom-logo").dataset.customLogo;
if(razorpaybutton) {
    var rzp1 = new Object();
    razorpaybutton.addEventListener("click", function() {
        var selectService = document.querySelector("[data-wizard-validate-service]");
        var amount = selectService.options[selectService.options.selectedIndex].getAttribute('data-price');
        var options = {
            "key": rozarpay,
            "amount": amount * 100,
            "currency": currency,
            "name": "Acme Corp",
            "description": "Razorpay Transaction",
            "image": logo,
            "handler": function(resp) {
                document.querySelector(".pay-razorpay").style.display = 'none';
                $('#preloader').delay(100).fadeOut('slow', function() {
                    $(this).show();
                });
                fetch('/proceeds/razorpay/success', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        _token: _token,
                        appointment_id: document.querySelector("#appointment_id").value,
                        amount: amount,
                        payment_id: resp.razorpay_payment_id,
                        currency: currency
                    })
                }).then((response) => response.json())
                .then((data) =>{
                    $('#preloader').delay(100).fadeOut('slow', function() {
                        $(this).hide();
                    });
                    if(data.error) {
                        document.querySelector('#confirm-msg').innerHTML = '<p class="msg" style="color:#dc3545">'+data.error+'</p>';
                        setTimeout(() => {
                            window.location.reload(true);
                        }, 3500);
                    } else {
                        document.querySelector('#confirm-msg').innerHTML = '<p class="msg" style="color:#00d27a">'+data.data+'</p>';
                        document.querySelector(".next-button").style.display = '';
                        setTimeout(() => {
                            window.location.href = data.redirect;
                        }, 1500);
                    }
                }).catch((error) => {

                });
            },
            "modal": {
                "ondismiss": function(){
                    $("#confirm-msg").html("<p style='color:red;'>"+translate.razorpay_pay_and_confirm+"</p>");
                    $(".pay-razorpay").show();
                }
            },
            "prefill": {
                "name": "Firstname Lastname",
                "email": "firstnamel@mail.com",
                "contact": "1234567890"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        
        rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function(failed) {

        });
        rzp1.open();
    });
}
})(jQuery);