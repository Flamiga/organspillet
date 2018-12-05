$(document).ready(function() { // indlæser siden før javascriptet afspilles

  $('.boble').hide(); // gemmer boblen

  // wait five 0.2 sekunder then show
  setTimeout( // funktionsnavn
    function() {
      //do something special
      $('.boble').fadeToggle("fast", 200) // indsætter fast ind
    }, 2000);

  $("#knap").click(function() { // henter id og hvilke handling der ønskes af denne id
    $(".boble").hide();         // id hentets fra det ønsket indhold som skal skjules
  });
});                             //afslutningstag af indlæsning af siden
