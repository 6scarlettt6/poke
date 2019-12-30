$(document).ready(function() {
  $("form#pokemon").submit(function(event) {
    var starter = $("input:radio[name=starters]:checked").val();

  if (starter==="Charmander") {
    $('#Fire').fadeToggle();
    $('#Water').hide();
    $('#Grass').hide();
  } else if (starter==="Bulbasaur") {
    $('#Grass').fadeToggle();
    $('#Water').hide();
    $('#Fire').hide();
  }
    else if (starter==="Squirtle") {
      $('#Water').fadeToggle();
      $('#Grass').hide();
      $('#Fire').hide();
    }
    event.preventDefault();
  });



  
});
