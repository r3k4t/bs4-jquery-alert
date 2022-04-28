$(function () {
    $('#myAlert').click(function () {
        $('.close').alert('close')
    })

    $('#myAlert').on('closed.bs.alert', function () {
        alert('The alert message is now closed.')
    })

})