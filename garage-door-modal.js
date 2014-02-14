// Show the modal
$('.gd-show-modal').click(function(e) {
  e.preventDefault();

  var duration = 300;
  var modalId = $(this).attr('href');
  var modal = $(modalId);

  // Animate the modal's bottom property for the slide down effect
  modal.show().animate({ bottom: '0%' }, duration, function() {

    // Center the inner modal vertically
    var inner = modal.find(".gd-inner");
    var hDiff = modal.height() - inner.height();
    if (hDiff > 0) {
      inner.css("padding-top", (hDiff / 2));
    }

    // Fade in the inner content
    inner.fadeIn(duration, function() {
      // If the modal contains a video, call your 'play' function here
    });

  });
});

// Hide the modal
$('.gd-hide-modal').click(function(e) {
  e.preventDefault();

  // Assume the 'hide' link is inside the modal
  var clickedElement = $(this);
  var duration = 300;
  var modal = $(this).closest(".gd-modal");
  var inner = modal.find(".gd-inner");

  // If the modal contains a video, call your 'pause' function here
  
  // Fade out the inner content
  inner.fadeOut(duration, function() {

    // Animate the modal's bottom property for the slide up effect
    modal.animate({ bottom: '100%' }, duration, function() {
      modal.hide();
    });

  });
});