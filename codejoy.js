
function attachHandlers(){
    $('.front').click(function(){
        $(this).hide()
        $('.back').show()
    })
}

$(document).ready(function(){

    $('form').submit(function(){
        var firstname = $('input[name=firstname]').val()
        var lastname = $('input[name=lastname]').val()
        var description = $('#ta').val()
        $('#sect-2').append("<div class = 'front'>"+firstname+" "+lastname+"</div>")
        $('#sect-2').append("<div class = 'back'>"+description+"</div>")
        $('.back').hide();

        
        attachHandlers()
        return false;
    })




    $('#bt').click(function(){
        alert('Codejoy')
    })

})