(function($) {
    "use strict";
    // var telephone = $(".intlTelInput").intlTelInput({
    //     formatOnDisplay: false,
    //     separateDialCode: true,
    //     hiddenInput: "phone"
    // });
    // telephone.on("countrychange", function () {
    //     var code = $(".intlTelInput").intlTelInput("getNumber");
    //     var countryData = $("#phone").intlTelInput("getSelectedCountryData");
    //     var countryCode = countryData.dialCode; // using updated doc, code has been replaced with dialCode
    //     countryCode = "+" + countryCode;
    // });

    // var telephone = $(".intlTelInput").intlTelInput({
    //     formatOnDisplay: false,
    //     separateDialCode: true,
    //     hiddenInput: "phone"
    // });
    // telephone.on("countrychange", function () {
    //     var code = $(".intlTelInput").intlTelInput("getNumber");
    //     // $("input[name='phone']").val(code);
    // });
    
    // $(".twilioLivePhone").intlTelInput({
    //     formatOnDisplay: false,
    //     separateDialCode: true,
    //     hiddenInput: "twilio_phone"
    // }).on("countrychange", function() {
    //     var code = $(".twilioLivePhone").intlTelInput("getNumber");
    //     $("input[name='twilio_phone']").val(code);
    // });
    

    if($('.data-table').length > 0) {
        $('.data-table').DataTable();
        $('.data-table').on('draw.dt', function () {
            $('input:checkbox').bootstrapToggle();
        });
    }
    $('.status').bootstrapToggle({
        height:35,
        width:70,
    });
    $('#smtp_mail').bootstrapToggle({
        height:35,
        width:70,
    });
    $('.toggle-set').bootstrapToggle({
        height:35,
        width:70,
    });
    $('form input[type=text]').on('keyup', function(){
        $(this).siblings(".error-message").hide();
    });
    $('form input[type=tel]').on('keyup', function(){
        $(this).siblings(".error-message").hide();
    });
    $('form input[type=email]').on('keyup', function(){
        $(this).siblings(".error-message").hide();
    });
    $("select[name='category_id']").on('change',function(){
        $(this).siblings(".error-message").hide();
    });
    $('form textarea').on('keyup', function(){
        $(this).siblings(".error-message").hide();
    });
    $('form input[type=password]').on('keyup', function(){
        $(this).siblings(".error-message").hide();
    });
    $('form input[type="time"]').on('change', function(){
        $(this).siblings(".error-message").hide();
    });

    $("#category-form").validate({
        rules: {
            name: "required"
        },
        messages: {
            name: {
                required: translate.please_enter_category_name
            }
        }
    });
    const CUSTOM_DATE_FORMAT = $(".custom-format").data('date-format');
    if(CUSTOM_DATE_FORMAT != undefined) {
        const config = {
        };
        $("#date").flatpickr(config);
        const config1 = {
            altInput: true,
            altFormat: CUSTOM_DATE_FORMAT,
            dateFormat: 'Y-m-d',
            disableMobile: "true"
        };
        $(".date").flatpickr(config1);
        $(".flicker").flatpickr(config1);
        const config2 = {
            altInput: true,
            altFormat: CUSTOM_DATE_FORMAT,
            dateFormat: 'Y-m-d',
            minDate: 'today',
            maxDate: new Date().fp_incr(60)
        };
        $("#adate").flatpickr(config2);
    }
    $("#customerDetail").validate({
        rules: {
            first_name: {required: true},
            last_name: {required: true},
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
                // minlength: 10,
                // maxlength: 13,
            }
        },
        messages: {
          first_name: {
              required: translate.please_enter_first_name
          },
          last_name: {
              required: translate.please_enter_last_name
          },
          email: {
            required: translate.please_enter_the_email,
            email: translate.please_enter_valid_email,
          },
          phone: {
            required: translate.please_enter_phone_number,
            // minlength: translate.please_enter_minimum_10_digits,
            // maxlength: translate.please_maximum_10_digits
          }
        },
        errorPlacement: function(error, element) {
            if(element[0].name == 'phone') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#serviceDetail").validate({
        rules: {
            name: "required",
            description: "required",
            duration: "required",
            cancel_before: "required"
        },
        messages: {
            name: translate.please_enter_service_name,
            description: translate.please_enter_description,
            duration: translate.please_enter_service_duration,
            cancel_before: translate.please_enter_cancel_appointment_time
        },
        errorPlacement: function(error, element) {
            if(element[0].name == 'duration' || element[0].name == 'cancel_before') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#employee-frm").validate({
        rules: {
            first_name: "required",
            last_name: "required",
            email: {"required": true, "email": true},
            password: {"required": true, minlength: 8, maxlength: 12},
            phone: {"required": true},
            start_time: "required",
            finish_time:"required",
            rest_time: "required",
            break_start_time:"required",
            break_end_time: "required",
            "days[]": "required",
            "category_id[]": "required",
            service_id: "required"
        },
        messages: {
            service_id: {
                required: translate.please_select_service
            },
            first_name: {
                "required": translate.please_enter_first_name,
            },
            last_name: translate.please_enter_last_name,
            email: {
                required: translate.please_enter_the_email,
                email: translate.please_enter_valid_email
            },
            password: {
                "required": translate.please_enter_password,
            },
            phone: {
                "required": translate.please_enter_phone_number,
            },
            start_time: {
                "required": translate.please_enter_start_time
            },
            finish_time:{
                "required": translate.please_enter_end_time
            },
            rest_time: {
                "required": translate.please_enter_rest_time
            },
            break_start_time:{
                "required": translate.please_enter_break_start_time
            },
            break_end_time: {
                "required": translate.please_enter_break_end_time
            },
            "days[]": {
                "required": translate.please_select_working_days
            },
            "category_id[]": {
                "required": translate.please_select_categories
            },
            // "service_id[]": {
            //     "required": translate.please_select_services
            // },
        },
        errorPlacement: function(error, element) {
            if(element[0].name == 'phone' || element[0].name == 'rest_time' || element[0].name == 'start_time' || element[0].name == 'finish_time' || element[0].name == 'break_start_time' || element[0].name == 'break_end_time') {
                error.appendTo(element.parent().parent());
            } else if(element[0].name == 'days[]' || element[0].name == 'category_id[]' || element[0].name == 'service_id') {
                error.appendTo(element.parent().parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#employeeForm").validate({
        rules: {
            first_name: "required",
            last_name: "required",
            email: {"required": true, "email": true},
            password: {"required": true, minlength: 8, maxlength: 12},
            phone: {"required": true},
            start_time: "required",
            finish_time:"required",
            rest_time: "required",
            break_start_time:"required",
            break_end_time: "required",
        },
        messages: {
            service_id: {
                required: translate.please_select_service
            },
            first_name: translate.please_enter_first_name,
            last_name: translate.please_enter_last_name,
            email: {
                required: translate.please_enter_the_email,
                email: translate.please_enter_valid_email
            },
            password: {
                "required": translate.please_enter_password,
            },
            phone: {
                "required": translate.please_enter_phone_number,
            },
            start_time: {
                "required": translate.please_select_start_time
            },
            finish_time:{
                "required": translate.please_select_end_time
            },
            rest_time: {
                "required": translate.please_enter_rest_time
            },
            break_start_time:{
                "required": translate.please_select_break_start_time
            },
            break_end_time: {
                "required": translate.please_select_break_end_time
            },
        },
        errorPlacement: function(error, element) {
            if(element[0].name == 'phone' || element[0].name == 'rest_time' || element[0].name == 'start_time' || element[0].name == 'finish_time' || element[0].name == 'break_start_time' || element[0].name == 'break_end_time') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    }); 
    $('#reset').on('click', function(){
        $('#service_id').prop('selectedIndex',0);
        $('#employee_id').prop('selectedIndex',0);
        $('#customer').prop('selectedIndex',0);
        $('#startdate').val("");
        $('#enddate').val("");
        $('#status').prop('selectedIndex',0);
        $('#payment_method').prop('selectedIndex',0);
        $('#filter-form').submit(); 
    });

    $("#formdata").validate({
        rules: {
            category_id: {
                required: true
            },
            service_id: {
                required: true
            },
            employee_id: {
                required: true
            },
            user_id: {
                required: true
            },
            date: {
                required: true
            },
            comments: {
                required: true
            }
        },
        messages: {
            category_id: {
                required: translate.please_select_category
            },
            service_id: {
                required: translate.please_select_service
            },
            employee_id: {
                required: translate.please_select_employee
            },
            user_id: {
                required: translate.please_select_customer
            },
            date: {
                required: translate.please_select_appointment_date
            },
            comments: {
                required: translate.please_enter_comment_appointment
            }
        }
    });

    $("#account-info").validate({
        rules: {
          account_no: "required",
          cheque_no: "required",
          account_holder_name: "required",
          bank_name: "required",
          ifsc_code:"required",
          payment_date:"required",
          amount:{
                  required: true,
                  digits: true,
              },
        },
        messages: {
            account_no: translate.please_enter_account_number,
            cheque_no: translate.please_enter_cheque,
            account_holder_name: translate.please_enter_holder_name,
            bank_name: translate.please_enter_bank_name,
            ifsc_code:translate.please_enter_ifsc_code,
            payment_date:translate.please_enter_payment_date,
            amount:{
                required: translate.please_enter_ifsc_code,
                digits: translate.please_enter_only_digits_numeric,
            },
        },
        errorPlacement: function(error, element) {
            if(element[0].name == 'amount') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
    $("#upi-frm").validate({
          rules: {
              upi_id: "required",
              payment_date:"required",
              amount:{
                  required: true,
                  digits: true,
              }
          },
          messages: {
              upi_id: translate.please_enter_upi_id,
              payment_date:translate.please_enter_payment_date,
              amount:{
                  required: translate.please_enter_amount,
                  digits: translate.please_enter_only_digits_numeric,
              }
          },
          errorPlacement: function(error, element) {
              if(element[0].name == 'amount') {
                  error.appendTo(element.parent().parent());
              } else {
                  error.insertAfter(element);
              }
          }
    });
    $("#cash-frm").validate({
          rules: {
              payment_date:"required",
              amount:{
                  required: true,
                  digits: true,
              }
          },
          messages: {
              payment_date: translate.please_enter_payment_date,
              amount:{
                  required: translate.please_enter_amount,
                  digits: translate.please_enter_only_digits_numeric,
              }
          },
          errorPlacement: function(error, element) {
              if(element[0].name == 'amount') {
                  error.appendTo(element.parent().parent());
              } else {
                  error.insertAfter(element);
              }
          }
    });

    $("#site-frm").validate({
        rules: {
          site_title: "required",
          about_company:"required",
          address:"required",
          email: {
              required: true,
              email: true,
          },
          phone: {
              required: true,
            //   maxlength: 13,
            //   minlength: 10,
          },
          facebook:"required",
          twitter: "required",
          linkedin: "required",
          instagram: "required",
        },
        messages: {
          site_title: translate.please_enter_site_title,
          about_company: translate.please_enter_about_company,
          address: translate.please_enter_address,
          email:  {
              required: translate.please_enter_the_email,
              email: translate.please_enter_valid_email,
          },
          phone: {
              required: translate.please_enter_phone_number,
            //   maxlength: translate.please_maximum_10_digits,
            //   minlength: translate.please_enter_minimum_10_digits,
          },
          facebook:translate.please_enter_facebook,
          twitter: translate.please_enter_twitter,
          linkedin: translate.please_enter_linkedin,
          instagram: translate.please_enter_instagram,
        },
        errorPlacement: function(error, element) {
            if(element[0].name == 'phone') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
    $("#smtp-frm").validate({
        rules: {
          smtp_email: {
              required: true,
              email: true,
          },
          smtp_password: "required",
          smtp_host: "required",
          smtp_port: "required",
        },
        messages: {
          smtp_email:  {
              required: translate.please_enter_smtp_email,
              email: translate.please_enter_valid_email,
          },
          smtp_password: translate.please_enter_smtp_password,
          smtp_host: translate.please_enter_smpt_host,
          smtp_port: translate.please_enter_smpt_port,
        }
    });
    $("#sms-frm").validate({
        rules: {
            twilio_account_sid: {
                required: function ( element ) {
                    return $("#sms-notification").is(':checked');
                }
            },
            twilio_auth_token: {
                required: function ( element ) {
                    return $("#sms-notification").is(':checked');
                }
            },
            twilio_country_code: {
                required: function ( element ) {
                    return $("#sms-notification").is(':checked');
                }
            },
            twilio_phone_number: {
                required: function ( element ) {
                    return $("#sms-notification").is(':checked');
                },
                // digits: true,
                // minlength: 10,
                // maxlength: 10,
            }
        },
        messages: {
            twilio_account_sid: "Please enter Twilio Account Sid",
            twilio_auth_token: "Please enter Twilio Auth Token",
            twilio_country_code: "Please enter country code",
            twilio_phone_number: {
                required: "Please enter twilio phone numbers",
                // digits: "Twlio phone number must be digits or numeric",
                // minlength: "Twilio phone number minimum 10 numbers",
                // maximum: "Twilio phone number maximum 10 numbers"
            }
        }
    });
    $("#custom-frm").validate({
        rules: {
          custom_field_text: "required",
          custom_field_category: "required",
          custom_field_service: "required",
        },
        messages: {
            custom_field_text: translate.please_enter_employee,
            custom_field_category: translate.please_enter_category,
            custom_field_service: translate.please_enter_service,
        }
    });
    $("#currency-frm").validate({
        rules: {
          currency: "required",
          currency_icon: "required",
          },
        messages: {
          currency: translate.please_enter_currency,
          currency_icon: translate.please_enter_currency_icon,
        }
    });

    $("#timezone-frm").validate({
        rules: { timezone: "required"},
        messages: { timezone: translate.please_enter_time_zone}
    });
    $("#account").validate({
        rules: {
          first_name: {
              required: true
          },
          last_name: {
              required: true
          },
          email: {
            required: true,
            email: true,
          },
          phone: {
            required: true,
            // minlength: 10,
            // maxlength: 13,
          }
        },
        messages: {
          first_name: {
              required: translate.please_enter_first_name
          },
          last_name: {
              required: translate.please_enter_last_name
          },
          email: {
            required: translate.please_enter_the_email,
            email: translate.please_enter_valid_email,
          },
          phone: {
            required: translate.please_enter_phone_number,
            // minlength: translate.please_enter_minimum_10_digits,
            // maxlength: translate.please_maximum_10_digits
          }
        },
        errorPlacement: function(error, element) {
            if(element[0].name == 'phone') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#change-password").validate({
        rules: {
          old_password: {
            required: true,
            minlength: 8,
          },
          new_password: {
            required: true,
            minlength: 8,
          },
          confirm_password: {
            required: true,
            minlength: 8,
            equalTo: "#new-password"
          }
        },
        messages: {
          old_password: {
            required: translate.please_enter_current_password,
            min: translate.please_enter_8_characters,
          },
          new_password: {
            required: translate.please_enter_new_password,
            min: translate.please_enter_8_characters,
          },
          confirm_password: {
            required: translate.please_enter_confirm_password,
            min: translate.please_enter_8_characters,
            equalTo: translate.password_does_not_match
          }
        }
    });

    $("#social").validate({
          rules: {
              facebook: {
                  required: true,
                  url: true
              },
              instagram: {
                  required: true,
                  url: true
              },
              twitter: {
                  required: true,
                  url: true
              },
              linkedin: {
                  required: true,
                  url: true
              }
          },
          messages: {
              facebook: {
                  required: translate.please_enter_facebook_link,
                  url: translate.please_enter_valid_facebook_link
              },
              instagram: {
                  required: translate.please_enter_instagram_link,
                  url: translate.please_enter_valid_instagram_link
              },
              twitter: {
                  required: translate.please_enter_twitter_link,
                  url: translate.please_enter_valid_twitter_link
              },
              linkedin: {
                  required: translate.please_enter_linkedin_link,
                  url: translate.please_enter_valid_linkedin_link
              }
          }
    });

    $('.account-settings-fileinput').on('change', function(){
          $('#profile-form').submit();
    });

    $(document).on("click",".toggle-password",function() {
        if($(this).hasClass('open')) {
            $(this).next().removeClass('d-none');
            $(this).addClass('d-none');
        } else {
          $(this).prev().removeClass('d-none');
          $(this).addClass('d-none');
        }
        var input = $('#'+$(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $(".stripeSubmit").on('click', function() {
        $(".error").remove();
        var flag = true;
        var stripeKey = $("input[name='stripe_key']").val();
        var stripeSecret = $("input[name='stripe_secret']").val();
        var stripeLiveKey = $("input[name='stripe_live_key']").val();
        var stripeLiveSecret = $("input[name='stripe_secret_live']").val();
        if(stripeKey.match("^pk_test_") == null) {
            $("input[name='stripe_key']").after('<span class="error">'+translate.please_enter_valid_key+'</span>');
            flag = false;
        }
        if(stripeSecret.match("^sk_test_") == null) {
            $("input[name='stripe_secret']").after('<span class="error">'+translate.please_enter_valid_secret+'</span>');
            flag = false;
        }

        if(stripeLiveKey.match("^pk_live_") == null) {
            $("input[name='stripe_live_key']").after('<span class="error">'+translate.please_enter_valid_live_key+'</span>');
            flag = false;
        }

        if(stripeLiveSecret.match("^sk_live_") == null) {
            $("input[name='stripe_secret_live']").after('<span class="error">'+translate.please_enter_valid_live_secret+'</span>');
            flag = false;
        }

        if(flag) {
            $("#StripeForm").submit();
        }
    });

    $(".paypalSubmit").on('click', function() {
        $(".error").remove();
        var flag = true;
        var paypalKey = $("input[name='paypal_client_id']").val();
        var paypalSecret = $("input[name='paypal_client_secret']").val();
        var paypalLocale = $("input[name='paypal_locale']").val();
        var paypalLiveKey = $("input[name='paypal_live_client_id']").val();
        var paypalLiveSecret = $("input[name='paypal_client_secret_live']").val();

        if(paypalKey == '') {
            $("input[name='paypal_client_id']").after('<span class="error">'+translate.please_enter_paypal_key+'</span>');
            flag = false;
        }
        if(paypalSecret == '') {
            $("input[name='paypal_client_secret']").after('<span class="error">'+translate.please_enter_paypal_secret+'</span>');
            flag = false;
        }
        if(paypalLocale == '') {
            $("input[name='paypal_locale']").after('<span class="error">'+translate.please_enter_paypal_locale+'</span>');
            flag = false;
        }
        if(paypalLiveKey == '') {
            $("input[name='paypal_live_client_id']").after('<span class="error">'+translate.please_enter_paypal_live_key+'</span>');
            flag = false;
        }
        if(paypalLiveSecret == '') {
            $("input[name='paypal_client_secret_live']").after('<span class="error">'+translate.please_enter_paypal_live_secret+'</span>');
            flag = false;
        }
        if(flag) {
            $("#paypalForm").submit();
        }
    });

    $(".razorPaySubmit").on("click", function() {
        $(".error").remove();
        var flag = true;
        var razorpayKey = $("input[name='razorpay_test_key']").val();
        var razorpaySecret = $("input[name='razorpay_test_secret']").val();
        var razorpayLive = $("input[name='razorpay_live_key']").val();
        var razorpayLiveSecret = $("input[name='razorpay_live_secret']").val();

        if(razorpayKey.match("^rzp_test_") == null) {
            $("input[name='razorpay_test_key']").after('<span class="error">'+translate.please_enter_valid_key+'</span>');
            flag = false;
        }
        if(razorpaySecret == '') {
            $("input[name='razorpay_test_secret']").after('<span class="error">'+translate.please_enter_valid_secret+'</span>');
            flag = false;
        }
        if(razorpayLive.match("^rzp_live_") == null) {
            $("input[name='razorpay_live_key']").after('<span class="error">'+translate.please_enter_valid_live_key+'</span>');
            flag = false;
        }
        if(razorpayLiveSecret == '') {
            $("input[name='razorpay_live_secret']").after('<span class="error">'+translate.please_enter_valid_live_secret+'</span>');
            flag = false;
        }

        if(flag) {
            $("#razorpayForm").submit();
        }
    });
    var inp = document.querySelector('#Ilogo');
    if(inp) {
        inp.addEventListener('change', function(e) {
            var file = this.files[0];
            var reader = new FileReader();
            reader.onload = function() {
                document.getElementById('logoimage').src = this.result;
            };
            reader.readAsDataURL(file);
        }, false);
    }
    
    var inp = document.querySelector('#favicon');
    if(inp) {
        inp.addEventListener('change', function(e) {
            var file = this.files[0];
            var reader = new FileReader();
            reader.onload = function() {
                document.getElementById('faviconimage').src = this.result;
            };
            reader.readAsDataURL(file);
        }, false);
    
    }
    $('.btn-print-click').on('click', function() {
        window.print();
    });

    $("#notification-frm").validate({
        onclick: function() {
            $("#notification-error").empty();
            return true;
        },
        errorClass:"text-danger",
        errorElement: "div",
        rules: {
            twilio_notify_customer: {
                required: {
                    depends: function(element) {
                        return (!$("input[name='twilio_notify_employee']").is(':checked') && !$("input[name='twilio_notify_admin']").is(':checked'));
                    }
                }
            },
            twilio_notify_employee: {
                required: {
                    depends: function (element) {
                        return (!$("input[name='twilio_notify_customer']").is(':checked') && !$("input[name='twilio_notify_admin']").is(':checked'));
                    }
                }
            },
            twilio_notify_admin: {
                required: {
                    depends: function (element) {
                        return (!$("input[name='twilio_notify_customer']").is(':checked') && !$("input[name='twilio_notify_employee']").is(':checked'));
                    }
                }
            },
            twilio_sandbox_key: {
                required: true
            },
            twilio_sandbox_secret: {
                required: true
            },
            twilio_service_id: {
                required: {
                    depends: function (element) {
                        return ($("input[name='use_twilio_service_id']").is(':checked'));
                    }
                }
            },
            twilio_live_key: {
                required: true
            },
            twilio_live_secret: {
                required: true
            },
            twilio_phone: {
                required: true,
                // digits: true
            }
        },
        messages: {
            twilio_notify_customer: {
                required: translate.please_select_any_one_notification
            },
            twilio_notify_employee: {
                required: translate.please_select_any_one_notification
            },
            twilio_notify_admin: {
                required: translate.please_select_any_one_notification
            },
            twilio_sandbox_key: {
                required: translate.please_enter_twilio_sandbox_key
            },
            twilio_sandbox_secret: {
                required: translate.please_enter_twilio_sandbox_secret
            },
            twilio_phone: {
                required: translate.please_enter_twilio_phone,
                // digits: translate.twilio_phone_number_digit_numeric
            },
            twilio_live_key: {
                required: translate.please_enter_twilio_live_key
            },
            twilio_live_secret: {
                required: translate.please_enter_twilio_live_secret
            },
            twilio_service_id: {
                required: translate.please_enter_twilio_messaging_service_id
            }
        },
        errorPlacement: function (error, element) {
            if(element[0].name == "twilio_phone") {
                error.appendTo(element.parent().parent());
            } else if(element[0].name == "twilio_notify_customer" || element[0].name == "twilio_notify_employee" || element[0].name == "twilio_notify_admin") {
                $("#notification-error").empty(); 
                error.appendTo($("#notification-error"));
            } else {
                error.insertAfter(element);
            }
        }
    });
    let checkEmailValidator = $("#checkEmail").validate({
        rules: {
            to: {
                required: true,
                email: true
            }
        },
        messages: {
            to: {
                required: translate.please_enter_the_email,
                email: translate.please_enter_valid_email
            }
        }
    });
    $("#testMailModel").on('hidden.bs.modal', function() {
        checkEmailValidator.resetForm();
        $(".alert").remove();
    });

    $(document).on("click", ".verifySmtp", function() {
        $('.loader').show();
        if($("#checkEmail").valid() == true) {
            $(".alert").remove();
            $.ajax({
                url: route('verifyMail'),
                type: "POST",
                data: $("#checkEmail").serialize(),
                dataType: "json",
                success: function (resp) {
                    $('.loader').hide();
                    if(resp.status) {
                        let html = '<div class="alert alert-success" role="alert"><h4 class="alert-heading">'+translate.success+'</h4><p>';
                        html += resp.messages;
                        html += '<p><hr><p>'+translate.email_success_config_correct;
                        html += '</p></div>';
                        $(".modal-body").prepend(html);
                    } else {
                        let html = '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">'+translate.oops_error+'</h4><p>';
                        html += resp.messages;
                        html += '<p><hr><p>'+translate.email_config_not_correct;
                        html += '</p></div>';
                        $(".modal-body").prepend(html);
                    }
                }, error: function(error) {
                    let html = '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">'+translate.oops_error+'</h4><p>';
                    html += translate.someting_goes_wrong;
                    html += '<p><hr><p>'+translate.email_config_not_correct;
                    html += '</p></div>';
                    $(".modal-body").prepend(html);
                    $('.loader').hide();        
                }
            });
        } else {
            $('.loader').hide();
        }
    });

    $("#location").on("change paste", function () {
        let maplocation = $(this).val();
        setTimeout(() => {
            $(".map").html(maplocation);
            $(".location").removeClass('d-none');
        }, 500);
    });
    var format = $(".date-format").data('value');
    $(".date-format option").each(function(key,val) {
        if(val.value == format) {
            $(this).attr('selected',true);
        }
    });

    // start test mail 
    let checkSmsValidator = $("#checkSms").validate({
        rules: {
            phone: {
                required: true,
            }
        },
        messages: {
            phone: {
                required: translate.please_enter_phone_number,
            }
        }
    });
    $("#testSmsModel").on('hidden.bs.modal', function() {
        checkSmsValidator.resetForm();
        $(".alert").remove();
    });
    $(document).on("click", ".verifySms", function() {
        $('.loader').show();
        if($("#checkSms").valid() == true) {
            $(".alert").remove();
            $.ajax({
                url: route('verifySms'),
                type: "POST",
                data: $("#checkSms").serialize(),
                dataType: "json",
                success: function (resp) {
                    $('.loader').hide();
                    console.log(resp);
                    if(resp.status) {
                        let html = '<div class="alert alert-success" role="alert"><h4 class="alert-heading">'+translate.success+'</h4><p>';
                        html += resp.messages;
                        html += '<p><hr><p>'+translate.sms_success_config_correct;
                        html += '</p></div>';
                        $(".modal-body").prepend(html);
                    } else {
                        let html = '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">'+translate.oops_error+'</h4><p>';
                        html += resp.messages;
                        html += '<p><hr><p>'+translate.sms_config_not_correct;
                        html += '</p></div>';
                        $(".modal-body").prepend(html);
                    }
                }, error: function(error) {
                    let html = '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">'+translate.oops_error+'</h4><p>';
                    html += translate.someting_goes_wrong;
                    html += '<p><hr><p>'+translate.sms_config_not_correct;
                    html += '</p></div>';
                    $(".modal-body").prepend(html);
                    $('.loader').hide();        
                }
            });
        } else {
            $('.loader').hide();
        }
    });
     // end test mail 

})(jQuery);