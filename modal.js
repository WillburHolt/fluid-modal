// Insert this in a <script> tag or in a seperate JS file.

$( document ).ready(function() {
$(".modal-container").hide();

// Change .btn-primary to the modal's CSS selector.

$("#modal-open-link").click(function() {
        $(".modal-container").show();
});

$("#close-modal").click(function() {
        $(".modal-container").hide();
});
    
