$(function () {
    $('#myAlert').click(function () {
        $('.close').alert('close')
    })

    $('#myAlert').on('close.bs.alert', function () {
        alert('The alert message is about to be closed.')
    })
})