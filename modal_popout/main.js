$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
  });
  



  $(".modal_close").click(function()
  {
      $(".modal").toggle();
  }
  )

  $('.modal_message').click(function(){
    $('#modal').show()
    $('#box-hide').hide();
    $('#box-toggle').toggle();
  })


