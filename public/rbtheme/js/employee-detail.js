(function($) {
"use strict";
    $("#employeeServiceForm").validate({
        rules: {
            employee_id: "required",
            parent_user_id: "required",
            user_id: "required",
            start_time: {
                required: true,
            },
            finish_time: {
                required: true,
            },
            break_start_time: {
                required: true
            },
            break_end_time: {
                required: true
            },
            rest_time : {
                required: true
            },
            position: {
                required: true
            },
            facebook: {
                required: true,
                url: true,
            },
            instagram: {
                required: true,
                url: true,
            },
            twitter: {
                required: true,
                url: true,
            },
            linkedin: {
                required: true,
                url: true,
            },
            "days[]": {
                required: true
            },
            "category_id[]": {
                required: true
            },
            "service_id[]": {
                required: true
            }
        },
        messages: {
            start_time: {
                required: translate.please_select_start_time
            },
            finish_time: {
                required: translate.please_select_end_time,
            },
            break_start_time: {
                required: translate.please_select_break_start_time
            },
            break_end_time: {
                required: translate.please_select_break_end_time
            },
            rest_time : {
                required: translate.please_select_finish_rest_time
            },
            position: {
                required: translate.please_enter_job_title
            },
            facebook: {
                required: translate.please_enter_fackbook_link,
                url: translate.please_enter_valid_fackbook_link,
            },
            instagram: {
                required: translate.please_enter_instagram_link,
                url: translate.please_enter_valid_instagram_link,
            },
            twitter: {
                required: translate.please_enter_twitter_link,
                url: translate.please_enter_valid_twitter_link,
            },
            linkedin: {
                required: translate.please_enter_linkedin_link,
                url: translate.please_enter_valid_linkedin_link,
            },
            "days[]": {
                required: translate.please_select_working_days
            },
            "category_id[]": {
                required: translate.please_select_categories
            },
            "service_id[]": {
                required: translate.please_select_services
            }
        },
        errorPlacement: function(error, element) {
            if(element[0].name == 'rest_time') {
                error.appendTo(element.parent().parent());
            } else if(element[0].name == 'start_time') {
                error.appendTo(element.parent().parent());
            } else if(element[0].name == 'finish_time') {
                error.appendTo(element.parent().parent());
            } else if(element[0].name == 'break_start_time') {
                error.appendTo(element.parent().parent());
            } else if(element[0].name == 'break_end_time') {
                error.appendTo(element.parent().parent());
            } else if(element[0].type == 'checkbox') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        },
        errorElement: "div",
        errorLabelContainer: ".errorTxt",
    });
    $("input[name='category_id[]']:checkbox").on('change', function() {
        var category_id = new Array();
        $("input[name='category_id[]']:checked").each(function() {
            category_id.push($(this).val());
        });
        if (category_id != '') {
                $.ajax({
                    type:'POST',
                    url: route('service'),
                    headers: {'X-CSRF-TOKEN': _token },
                    data: { category_id : category_id },
                    success: function(response){
                        if(response.data){
                            var html = '';
                            jQuery.each(response.data, function(i, val) {
                                
                                html += '<div class="form-check form-check-inline">';
                                html += '<input class="form-check-input" type="checkbox" id="service-checkbox-'+val.id+'" value="'+val.id+'" name="service_id['+val.category_id+'][]"/>';
                                html+='<label class="form-label" for="service-checkbox-'+val.id+'">'+val.name+'</label></div></div>';
                            });
                            $("#service_id").html(html);
                        }
                    }
                });
        }else{
            $("#service_id").html('');
        }
    });
})(jQuery);