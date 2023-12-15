function confirmGoogleCalendarAccess() {
    Swal.fire({
        title: translate.are_you_sure,
        text: "If you disconnect Google Calender access, We won't be able to track your other events for your service timeslots",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'No, Cancel',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Disconnect it'
        }).then((result) => {
        if(result.isConfirmed) {
        $("#removeItem").submit();
            Swal.fire(
                "Disconnected",
                'Your Google Calendar Successfully Disconnected.',
                'success'
            ).then((result) => {
                    $(".remove-google span").remove();
                    $(".remove-google span").removeClass("employee-badge");
            });
        }
    })
}

(function($) {
    "use strict";
    let serviceList = $(".servicesList").data('services');
    let customCategory = $(".customCategory").data('customcategory');
    let service_id = Array();
    $.each(serviceList, function (key, val) {
        service_id.push(val.service_id);
    });

    var category_id = new Array();
    $("input[name='category_id[]']:checked").each(function() {
        category_id.push($(this).val());
    });
    if (category_id != '') {
        $.ajax({
            type:'POST',
            url: route('categoryservice'),
            headers: {'X-CSRF-TOKEN': _token },
            data: { category_id : category_id },
            success: function(response){
                if(response.data){
                    var html = ' <label>'+translate.services+'</label>';
                    jQuery.each(response.data, function(i, val) {
                        html += '<li class="list-group-item">';
                        html += val.name;
                        html += '<div class="material-switch pull-right">';
                        var checked = "";
                        $.each(service_id,function(index,value) 
                        {
                            if(value == val.id){
                                checked = 'checked';
                            }
                        });
                        html += '<input value="'+val.id+'" name="service_id['+val.category_id+'][]" data-check="service" type="checkbox" '+checked+' /> <label for="'+val.id+'" class="label-success"></label></div></li>';

                    });
                    $("#service_id").html(html);
                }   
            }
        });
    }
    $("input[type='checkbox']").on('change', function(){
        var check = $(this).data('check');
        if(check === undefined) {
            if(!$(this).is(':checked')){
                var status = 0;
            }else{
                var status = 1;
            }
            var employee_id = $(this).data('employee_id');
            $.ajax({
                type:'POST',
                url: route('status'),
                headers: {'X-CSRF-TOKEN': _token },
                data: { id : employee_id,status : status },
                success: function(response){
                   
                }
            });
        }
    });

    $("#checkedAll").on('change',function() {
        if (this.checked) {
            $(".checkSingle").each(function() {
                this.checked=true;
            });
        } else {
            $(".checkSingle").each(function() {
                this.checked=false;
            });
        }
    });

    $("input[name='category_id[]']:checkbox").on('change', function() {
        var check = $(this).data('check');
        if(check == "edit-categories") {
            var category_id = new Array();
            $("input[name='category_id[]']:checked").each(function() {
                category_id.push($(this).val());
                
            });
            if (category_id != '') {
                $.ajax({
                    type:'POST',
                    url: route('categoryservice') ,
                    headers: {'X-CSRF-TOKEN': _token },
                    data: { category_id : category_id ,},
                    success: function(response){
                        if(response.data){
                            var html = ' <label>'+translate.services+'</label>';
                            jQuery.each(response.data, function(i, val) {
                                html += '<li class="list-group-item">';
                                html += val.name;
                                html += '<div class="material-switch pull-right">';
                                var checked = "";
                                $.each(service_id,function(index,value) 
                                {
                                    if(value == val.id){
                                        checked = 'checked';
                                    }
                                    else{
                                        checked = '';
                                    }
                                });
    
                                html += '<input value="'+val.id+'" name="service_id['+val.category_id+'][]" type="checkbox" data-check="service" '+checked+' /><label for="'+val.id+'" class="label-success"></label></div></li>';
                            });
                            $("#service_id").html(html);
                        }
                    }
                });
            }
        }
    });

    $('form input[type=checkbox]').on('click', function(){
        $(this).parent().parent().siblings(".error-message").hide();
    });
        
    $("input[name='category_id[]']:checkbox").on('change', function() {
        var check = $(this).data('check');
        if(check == "categories") {
            var category_id = new Array();
            $("input[name='category_id[]']:checked").each(function() {
                category_id.push($(this).val());
            });
            if (category_id != '') {
                    $.ajax({
                        type:'POST',
                        url: route('categoryservice'),
                        headers: {'X-CSRF-TOKEN': _token },
                        data: { category_id : category_id },
                        success: function(response){
                            if(response.data){
                                var html = ' <label>'+translate.services+'</label>';
                                jQuery.each(response.data, function(i, val) {
                                    
                                    html += '<li class="list-group-item">';
                                    html += val.name;
                                    html += '<div class="material-switch pull-right">';
                                    html += '<input value="'+val.id+'" name="service_id['+val.category_id+'][]" data-check="service" type="checkbox"/><label for="'+val.id+'" class="label-success"></label></div></li>';
                                });
                                $("#service_id").html(html);
                            }
                        }
                    });
            } else {
                $("#service_id").html('<label>'+translate.services+'</label>');
            }
        }
    });

    $('table tbody').on('click', '.remove-google', function(){
        confirmGoogleCalendarAccess();
    });
    
    $('.remove-google-access').on('click', function(){
        confirmGoogleCalendarAccess();
    });

    $(".next-button").on('click', function(){
        $("span.error").remove();
        if ($("label.error:visible").length) {
            return false;
        }
        var error = false;
        var first_name =  $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var password =  $('#password').val();
        var phone = $('#phone').val();	
        var start_time = $('#start_time').val();
        var finish_time = $('#finish_time').val();
        var rest_time = $('#rest_time').val();
        var break_start_time = $('#break_start_time').val();
        var break_end_time = $('#break_end_time').val();
        var days = $('.emp-working-days').find('input:checked').length;
        if(first_name == ''){
            $('#first_name').after("<span class='error'>"+translate.please_enter_first_name+"</span>");
            error = true;
        } 
        if(last_name == ''){
            $('#last_name').after("<span class='error'>"+translate.please_enter_last_name+"</span>");
            error = true;
        }
        if(email == ''){
            $('#email').after("<span class='error'>"+translate.please_enter_the_email+"</span>");
            error = true;
        } 
        if(password == ''){
            $('#password').after("<span class='error'>"+translate.please_enter_password+"</span>");
            error = true;
        }
        if(phone == ''){
            $('#phone').parent().after("<span class='error'>"+translate.please_enter_phone_number+"</span>");
            error = true;
        }
        if(start_time == ''){
            $('#start_time').parent().after("<span class='error'>"+translate.please_enter_start_time+"</span>");
            error = true;
        }
        if(finish_time == ''){
            $('#finish_time').parent().after("<span class='error'>"+translate.please_enter_end_time+"</span>");
            error = true;
        } 
        if(rest_time == ''){
            $('#rest_time').parent().after("<span class='error'>"+translate.please_enter_rest_time+"</span>");
            error = true;
        }
        if(break_start_time == ''){
            $('#break_start_time').parent().after("<span class='error'>"+translate.please_enter_break_start_time+"</span>");
            error = true;
        } 
        if(break_end_time == ''){
            $('#break_end_time').parent().after("<span class='error'>"+translate.please_enter_break_end_time+"</span>");
            error = true;
        }
        if(days <= 0){
            $('#checkedAll').parent().parent().parent().after("<span class='error'>"+translate.please_select_working_days+"</span>");
            error = true;
        }
        if(error == true){
            $('.next-page').hide();
            $('.current-page').show();
        } else {
            $('.next-page').show();
            $('.current-page').hide();
        }
    });
    $("input").on("keypress", function() {
        $(this).next("span").remove();
    });
    $('input.form-control:text').on('focus',function() {
        $(this).parent().next("span").hide();
    });
    $('input').on('click',function () {
        $(this).parent().parent().parent().next("span").hide();
    });
    $('.back-button-next').on('click', function(){
        $('.next-page').hide();
        $('.current-page').show();
    });

}(jQuery));