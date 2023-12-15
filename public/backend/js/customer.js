(function($) {
    "use strict";
    $("input[type='checkbox']").on('change', function(){
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
    });
}(jQuery));