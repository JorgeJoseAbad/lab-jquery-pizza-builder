$(document).on('ready',function(){
  console.log('linked');
  var precio = $(".panel.price > strong").html("$21");
  console.log(precio);

  $('.btn-pepperonni').on('click', function(){
    precio = $(".panel.price > strong").html();
    precio = precio.substring(1);
    precio = parseInt(precio);
    console.log(precio);

    if ($(this).hasClass('active')){
      $('.pep').toggle();
      $(".panel.price > ul > li:nth-child(1)").hide();
      $(".panel.price > strong").html("$" + (precio - 1));
    } else {
      $('.pep').toggle();
      $(".panel.price > ul > li:nth-child(1)").show();
      $(".panel.price > strong").html("$" + (precio + 1));
    }
    $(this).toggleClass('active');
  });

  $('.btn-mushrooms').on('click', function(){
    precio = $(".panel.price > strong").html();
    precio = precio.substring(1);
    precio = parseInt(precio);
    console.log(precio);
    if ($(this).hasClass('active')){
      $('.mushroom').toggle();
      $('.panel.price > ul > li:nth-child(2)').hide();
      $('.panel.price > strong').html('$'+(precio-1));
    } else {
      $('.mushroom').toggle();
      $('.panel.price > ul > li:nth-child(2)').show();
      $('.panel.price > strong').html('$'+(precio+1));
    }
    $(this).toggleClass('active');
  });

  $('.btn-green-peppers').on('click', function(){
    precio = $(".panel.price > strong").html();
    precio = precio.substring(1);
    precio = parseInt(precio);
    console.log(precio);
    if ($(this).hasClass('active')){
      $('.green-pepper').toggle();
      $('.panel.price > ul > li:nth-child(3)').hide();
      $('.panel.price > strong').html('$'+(precio-1));
    } else {
      $('.green-pepper').toggle();
      $('.panel.price > ul > li:nth-child(3)').show();
      $('.panel.price > strong').html('$'+(precio+1));
    }
    $(this).toggleClass('active');
  });

  //$('.sauce').removeClass('sauce-white');

  $('.btn-sauce').on('click', function(){
    //$('.sauce').addClass('sauce-white');
    precio = $(".panel.price > strong").html();
    precio = precio.substring(1);
    precio = parseInt(precio);
    if ($(this).hasClass('active')){
      $('.sauce').toggleClass('sauce-white');
      $('.panel.price > ul > li:nth-child(4)').hide();
      $('.panel.price > strong').html('$'+(precio-3));
    } else {
      $(".sauce").toggleClass('sauce-white');
      $('.panel.price > ul > li:nth-child(4)').show();
      $('.panel.price > strong').html('$'+(precio+3));
    }
    $(".btn-sauce").toggleClass("active");
  });


  //$('.crust').removeClass('crust-gluten-free');

  $('.btn-crust').on('click',function(){
    //$('.crust').removeClass('crust-gluten-free');
    precio = $(".panel.price > strong").html();
    precio = precio.substring(1);
    precio = parseInt(precio);
    if ($(this).hasClass('active')){
      $('.crust').toggleClass('crust-gluten-free');
      $('.panel.price > ul > li:nth-child(5)').hide();
      $('.panel.price > strong').html('$'+(precio-5));
    } else {
      $('.crust').toggleClass('crust-gluten-free');
      $('.panel.price > ul > li:nth-child(5)').show();
      $('.panel.price > strong').html('$'+(precio+5));
    }

    $('.btn-crust').toggleClass('active');

  });
});// Write your Pizza Builder JavaScript in this file.
