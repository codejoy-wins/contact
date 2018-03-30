

$(document).ready(function(){

    $('form').submit(function(){
        var firstname = $('input[name=firstname]').val()
        var lastname = $('input[name=lastname]').val()
        var description = $('#ta').val()
        console.log(lastname)
        console.log(description)
        return false;
    })




    $('#bt').click(function(){
        alert('Codejoy')
    })

})