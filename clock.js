$(document).ready(function() {
  var ala = "asd"
  var timerID = 0;
  var seconds = 0;
  var czas = 0;

  $(".odejmijSecj").click(function() {
    var v = document.getElementById("ding");
    v.play();
    if (parseInt($(".sec").html()) - 1 < 0) {} else {

      if (parseInt($(".sec").html()) - 1 < 10) {
        $(".sec").html("0" + (parseInt($(".sec").html()) - 1))
      } else {
        $(".sec").html(parseInt($(".sec").html()) - 1);
      }
    };

  })

  $(".odejmijSecdz").click(function() {

    if (parseInt($(".sec").html()) - 10 < 0) {
      if (parseInt($(".min").html()) - 1 < 0) {} else {
        $(".min").html(parseInt($(".min").html()) - 1);
        $(".sec").html(parseInt($(".sec").html()) + 50);
      }
    } else {
      if (parseInt($(".sec").html()) - 10 < 10) {
        $(".sec").html("0" + (parseInt($(".sec").html()) - 10));
      } else {
        $(".sec").html(parseInt($(".sec").html()) - 10);
      }
    }

  });

  $(".odejmijMinj").click(function() {

    if (parseInt($(".min").html()) - 1 < 0) {} else {
      if (parseInt($(".min").html()) - 1 < 10) {
        $(".min").html("0" + (parseInt($(".min").html()) - 1));

      } else {

        $(".min").html(parseInt($(".min").html()) - 1);
      }

    }
  });

  $(".odejmijMindz").click(function() {

    if (parseInt($(".min").html()) - 10 < 0) {} else {
      if (parseInt($(".min").html()) - 10 < 10) {
        $(".min").html("0" + (parseInt($(".min").html()) - 10));
      } else {
        $(".min").html(parseInt($(".min").html()) - 10);
      }
    }
  });

  $(".dodajMindz").click(function() {

    $(".min").html(parseInt($(".min").html()) + 10);

  });

  $(".dodajMinj").click(function() {

    if (parseInt($(".min").html()) + 1 < 10) {
      $(".min").html("0" + (parseInt($(".min").html()) + 1));
    } else {
      $(".min").html(parseInt($(".min").html()) + 1);
    }

  });

  $(".dodajSecdz").click(function() {

    if (parseInt($(".sec").html()) + 10 >= 60) {
      $(".min").html(parseInt($(".min").html()) + 1);
      $(".sec").html("0" + (parseInt($(".sec").html()) - 50));

    } else {
      $(".sec").html(parseInt($(".sec").html()) + 10);
    }

  });

  $(".dodajSecj").click(function() {

    if (parseInt($(".sec").html()) + 1 == 60) {
      $(".min").html(parseInt($(".min").html()) + 1)

      $(".sec").html("00");
    } else {

      if (parseInt($(".sec").html()) + 1 < 10) {

        $(".sec").html("0" + (parseInt($(".sec").html()) + 1));
      } else {
        $(".sec").html(parseInt($(".sec").html()) + 1);
      }
    }

  });

  $("#start").click(function() {

    seconds = convertToSeconds();
    czas = seconds;
    if (czas !== 0){
    
  $('#clock').addClass("rotated");
      $('#clock1').addClass("rotated1");
    timerOn();
    }
  });
  
  $("#reset").click(function() {
    $('#clock').removeClass("rotated");
$('#clock1').removeClass("rotated1");
    clearInterval(timerID);
    convertToMinutes(czas);
  });

  function convertToSeconds() {

    var mi = parseInt($(".min").text());
    var s = parseInt($(".sec").text());

    return mi * 60 + s;

  };

  function timerOn() {

    timerID = setInterval(function() {
        seconds = seconds - 1;
        convertToMinutes(seconds);

      },
      1000);

    setTimeout(function() {
      clearInterval(timerID);
      $('#clock').removeClass("rotated");
$('#clock1').removeClass("rotated1");      
    }, czas * 1000 + 1000);

  };

  function convertToMinutes(seconds) {
    var m = Math.floor(seconds / 60);
    if (m < 10) {
      $(".min").html("0" + m);
    } else {
      $(".min").html(m);
    }
    var s = seconds - Math.floor(seconds / 60) * 60;
    if (s < 10) {
      $(".sec").html("0" + s);
    } else {
      $(".sec").html(s);
    };

  };

});
