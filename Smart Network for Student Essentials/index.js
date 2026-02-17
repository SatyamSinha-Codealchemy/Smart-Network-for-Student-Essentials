$(document).ready(function(){

  
    $('#newsletterForm').on('submit', function(e){
        e.preventDefault();
        alert('Thank you for subscribing!');
    });

   
    $('#contactForm, #feedbackForm').on('submit', function(){
        alert('Your message has been sent successfully!');
    });

});
