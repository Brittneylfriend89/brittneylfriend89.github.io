(function($) {
    "use strict";
  
  const inputs = document.querySelectorAll(".country-phone-validation");
    inputs.forEach(function(input) {
        // const errorMsg = document.querySelector("#error-msg");
        // const validMsg = document.querySelector("#valid-msg");
        const eerrorMsg = input.parentElement.querySelector("#error-msg");
        const errorMsg = input.parentElement.querySelector("#error-msg");
        const validMsg = input.parentElement.querySelector("#valid-msg");

        // here, the index maps to the error code returned from getValidationError - see readme
        const errorMap = [ translate.invalid_phone_number , translate.invalid_country_code , translate.phone_number_too_short , translate.phone_number_too_long ];
        if(errorMap){

        }
    
        let iti = window.intlTelInput(input, {
            initialCountry: input.dataset.name, //[input.dataset.name,input.dataset.code],
            utilsScript: "/intl-tel-input/js/utils.js?1683804567815",
            // hiddenInput: "phone",
        });

        const reset = () => {
            input.classList.remove("error");
            errorMsg.innerHTML = "";
            errorMsg.classList.add("d-none");
            validMsg.classList.add("d-none");
            $('.btn-valid').removeAttr("disabled");

            var countryData = iti.getSelectedCountryData();
            $("#dialcode").val('+'+countryData.dialCode).attr('data-country', countryData.iso2);
            $('#iso2').val(countryData.iso2);
           
        };
    
    // on blur: validate
        input.addEventListener('blur', () => {
            reset();
            if (input.value.trim()) {
            if (iti.isValidNumber()) {
                validMsg.classList.remove("d-none");
            } else {
                input.classList.add("error");
                const errorCode = iti.getValidationError();
                errorMsg.innerHTML = errorMap[errorCode];
                errorMsg.classList.remove("d-none");
                $('.btn-valid').attr('disabled','disabled');
            }
            }
        });
        if ($('#dialcode').length) {
            input.value = $('#dialcode').data('number');
        }
        input.addEventListener('change', reset);
        input.addEventListener('keyup', reset);
    });
}(jQuery));