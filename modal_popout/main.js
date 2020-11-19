$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
  });
  
  $(".close, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });

  $(".modal_close").click(function()
  {
      $(".modal").toggle();
  }
  )