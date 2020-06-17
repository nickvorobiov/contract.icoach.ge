$(document).ready(function(){

  // load contract template
  var contracttemplate;
  var checkboxestemplate;
  var package;

  $.get('/contract.ejs?' + Date.now(), function( data ) {
    contracttemplate = ejs.compile(data);

    $.get('/checkboxes.ejs?' + Date.now(), function( data ) {
      checkboxestemplate = ejs.compile(data);
      prerender();
      $('#input-package').val('start').change();
    });
  });

  $('#input-package').change(function(){
    package = $('#input-package').val();
    var items = packages[package];
    options.map(function(option) {
      option.enabled = (items.indexOf(option.id) >= 0);
    });
    prerender();
  });
  $('#input-form').change(function(){
    prerender();
  });
  $('#input-firststep').change(function(){
    prerender();
  });
  $('#input-payterms').change(function(){
    prerender();
  });


  function prerender() {
    $('#contract').html('');
    $('#checkboxes').html(checkboxestemplate({
      options: options
    }));
    calcprice();
  }

  $('#checkboxes').on('change', 'input', function(e) {
    var thisoption = $(this).data('option');
    var thischecked = $(this).prop('checked');

    options.map(function(option, i) {
      if (option.id == thisoption) {
        options[i].enabled = thischecked;
      }
    });

    package = false;
    $('#input-package').val(0);

    calcprice();
  })

  var price, half, third = 0;
  function calcprice() {
    price = 0;
    var ispartner = $('#input-form').val() == 'partner';
    options.map(function(option){
      if (option.enabled) {
        if (ispartner) {
          price += option.partnerprice;
        } else {
          price += option.fullprice;
        }
      }
    })
    if (ispartner) {
      $('#price').text(price + ' USD и 30% от маркетинговой прибыли')
    } else {
      $('#price').text(price + ' USD')
    }

    render();
  }

  function render() {
    var str = moment().format('X');
    var re = /(\d{3})(\d{3})(\d{2})(\d{2})/g; 
    var subst = '$1-$2-$3-$4'; 
    var number = str.replace(re, subst); 

    var date = moment().format('DD.MM.YYYY');

    if (!package) { 
      package = 'custom';
    }

    $('#contract').html(contracttemplate({
      package: $('#input-package').val(),
      form: $('#input-form').val(),
      firststep: $('#input-firststep').val(),
      payterms: $('#input-payterms').val(),
      number: number,
      date: date,
      options: options,
      price: price,
      package: package
    }));

    document.title = 'iCoach contract ' + number + ' at ' + date;
  }
})