$(document).ready(function(){

    // Star AddACcount 
    $(".downarrow").click(function(){
        $(".toggle").toggle(500);


    });
    // End Account 


    // Start menu toggle 
   
   $('.modal').click(function(){
    $(this).toggle()
    $(this).attr("aria-hidden", "true").
    $(this).removeAttr("aria-modal","true");
    $(this).removeAttr("role","dialog");
    
    $('body').removeClass( "modal-open" );

   })
       


   function pageLoad() {
    $('[id*=btnSave]').click(function () {
        $("[class*='modal-backdrop in']").remove();
    });
}
    
    
    // end menu toggle 

});