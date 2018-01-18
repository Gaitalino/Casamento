
  $(document).ready(function () {
  $(".prlx").each(function(){
    var $obj = $(this);
    
    $obj.css("background-position", "50% 0");
    $obj.css("background-attachment", "fixed");
    $obj.css("background-size", "100%");
   
    $(window).scroll(function(){
      var offset = obj.offset();
      var ypos = -($(window).scrollTop() - offset.top)/1;
      var bgpos = "50%" + ypos + "px";
      $obj.css("background-position", bgpos);
    });
})
    });
