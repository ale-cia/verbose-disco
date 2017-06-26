console.log('Working');
 $(document).ready(function(){

   $('button').on('click',function(){
     $('.container').append('<div></div>');
      $('div').append('<p>' + '</p>');
      $('div').append('<button>Swap</button> <button>Delete</button>');
        $('button').click(function(){
          $("Swap").css("color", "yellow");
        });
   });

 });
