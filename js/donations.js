$(function () {
    var $submitDonation = $('#submitDonation');
    var $successMessage = $('#successMessage');
    $successMessage.append(localStorage.getItem('successMessage'));

    $submitDonation.on('click', function () {
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var donationAmount = $('#donationAmount').val();
        var donation = parseInt(donationAmount);


        if (firstName === '' || lastName === '' || email === '' || donationAmount === '') {
            alert('Please make sure that all inputs have a value.');
        } else if (isNaN(donation)) {
            alert('Please enter a number for the donation.');
        } else {
            var message = '<div class="alert alert-success text-center col-lg-5">Thank you for the $' + donation + ' donation!</div>';
            localStorage.setItem('successMessage', message);

            $('#successMessage').append(message);
        }
    });
});
