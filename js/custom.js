
$(document).ready(function () {
    var input;
    $(".lang").click(function () {
        var selectItem = $(this).children()[2];
        if($(selectItem).css('display') == 'none') {
            $(selectItem).slideToggle('slow');
        } else {
            $(selectItem).toggle();
        }

        if($('.target').css('display') == 'block' || $('.source').css('display') == 'block' ||$('.general').css('display') == 'block' == 1){
            $("section.service,section.trans,section.choose,footer").addClass('mar');

        } else {
            $("section.service,section.trans,section.choose,footer,.copyright").removeClass('mar');

        }
        $(selectItem).children().click(function (e) {
            e.stopPropagation();
        })
        var label = $(selectItem).children()[1];
        $(".brow .option label").click(function (e) {
            var target = e.target.innerHTML;
            input = $(selectItem).children()[0];
            if ($(this).attr('class') == 'sId') {
                $('#sId').val(target);
            } else if ($(this).attr('class') == 'tId') {
                $('#tId').val(target);
            } else {
                $('#gId').val(target);
            }
        })
    })
    $('#container img').hover(
        function(){
            var $this = $(this);
            $this.stop().animate({
                'opacity':'1.0',
                'height':'200px',
                'top':'0px',
                'left':'0px'
            });
        },
        function(){
            var $this = $(this);
            $this.stop().animate({
                'opacity':'0.5',
                'height':'500px',
                'top':'-66.5px',
                'left':'-150px'
            });
        }
    );
    // index_form
    $("input").keyup(function (e) {
        var inputVal = e.target.value;
        var capitalizm = inputVal.charAt(0).toUpperCase()
        if ($(this).attr('id') == 'sId') {
            $(".sId").each(function (index, el) {
                if (el.innerText.startsWith(capitalizm)) {
                    el.style.display = "block"
                } else {
                    el.style.display = "none";
                }
            })
        } else if ($(this).attr('id') == 'tId') {
            $(".tId").each(function (index, el) {
                if (el.innerText.startsWith(capitalizm)) {
                    el.style.display = "block"
                } else {
                    el.style.display = "none";
                }
            })
        } else {
            $(".gId").each(function (index, el) {
                if (el.innerText.startsWith(capitalizm)) {
                    el.style.display = "block"
                } else {
                    el.style.display = "none";
                }
            })
        }

    });
    // navbar
    $(".navbar-toggler").click(function() {
        $("#navbarSupportedContent").toggle();
        $("form.lang-item").toggleClass('margin-navbar')
    })
        // aos
        AOS.init({
            duration:700
        });

    //order.Twig
    // Effect of header text
    //file input
    $('span.btn').bind("click", function () {
        $('#inp').click();
    })

    // multiple select
    $('.js-example-basic-multiple').select2();

    $('.text-entry label').click(function (e) {
        var labelText = e.target;
        var labelAtt = $(labelText).attr('file');
        $(labelText).addClass("label-active").siblings().removeClass('label-active');

        if($(this).attr('file') == 'photo' ){
            $('#text').css('display','none');
            $('#photo').css('display','block');
        } else {
            $('#text').css('display','block');
            $('#photo').css('display','none');
        }
    })
    $('#text').css('display','none');
    $(".form-check").click( function () {
           let checked =  $(this).parent().parent();
        $(this).addClass('gray').siblings().removeClass('gray');
    })
    // reading value og textEntry box
    let wordCount;
    $(".countWord").keyup(function() {
        let words = $(this).val().split(' ');
         wordCount = words.length - 1;
         $(".total").html(wordCount);
       
    })
    //value of source language
    let sourceValue;
    $("#select_lang").change(function() {
        sourceValue = $(this).val();
        // console.log(sourceValue);
    })

    // values of Target Language 
    let selectedValues = [];
    $("#select_target").change(function() {
        selectedValues = $(this).val();
        // console.log(selectedValues);
        $(".tarLang").html(selectedValues + " ");
    })
    // values of service type
    let radioValue
    $("input[name=service]").change(function () {
         radioValue = $(this).val();
        $(".serType").text(radioValue);
    })
    // value of FIELD OF EXPERTISE
    let radValue 
    $("input[name=expertise]").change(function () {
        radValue = $(this).val();
        $(".radVal").html(radValue);
    })
    //value of category
    let catRadio
    $("input[name=cat_name]").change(function () {
        catRadio = $(this).val();
    })
    
    //value of transDuration
    let durRadio
    $("input[name=RadiosLan]").change(function () {
        durRadio = $(this).val();
        // console.log(durRadio);
    })
  // lightBox
    $(".lightbox-coupon").change(function () {
        $(".basic-lightbox").css("display","block");
       $("html").css("overflow","hidden");
    })
    $(".basic-lightbox").children().click(function (e) {
        e.stopPropagation();
    })
  
    $(".basic-lightbox").click(function (e) {
        $(this).css("display","none");
        $("html").css("overflow","scroll");
        $(".lightbox-coupon").prop('checked',false);
    })
    $(".light-sub").click(function (e) {
        e.preventDefault();
        $(".basic-lightbox").css("display","none");
        $(".lightbox-coupon").prop('checked',false);
        $("html").css("overflow","scroll");
    })


    // carousel slider duration
    $('.carousel').carousel({
        interval: 2000 * 10
      });
      $('#carouselExampleControls').carousel({
        interval: 2000 * 10
      });
     var proof = $(".proofreading");
     $(document).scroll(function(e) {
         // console.log($(this).scrollTop())
         var order_img = $('.order-img').offset().top - $('.order-img').height() ;
         var resOrder = order_img 
        if($(this).scrollTop() >= 200  ) {
            proof.addClass('proof_cont');
            $('#loader').addClass('spinner-loader');
            $('#loader').removeClass('spinner');
            if ($(this).scrollTop() >= resOrder) {
                proof.addClass('proof_abs');

            } else{
                proof.removeClass('proof_abs');
            }
         }    else {
            proof.removeClass('proof_cont');
            $('#loader').removeClass('spinner-loader');
            $('#loader').addClass('spinner');
        }
     });




    
    // counter
    (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};

            return $(this).each(function () {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from:            $(this).data('from'),
                    to:              $(this).data('to'),
                    speed:           $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals:        $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof(settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof(settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0,               // the number the element should start at
            to: 0,                 // the number the element should end at
            speed: 1000,           // how long it should take to count between the target numbers
            refreshInterval: 100,  // how often the element should be updated
            decimals: 0,           // the number of decimal places to show
            formatter: formatter,  // handler for formatting the value before rendering
            onUpdate: null,        // callback method for every time the element is updated
            onComplete: null       // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));

    jQuery(function ($) {
        // custom formatting example
        $('.count-number').data('countToOptions', {
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });

        // start all the timers
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });
    // AJAX
    $(".langVal").change(function() {
        $(".spinner").css("display","flex");
        $(".spinner-loader").css("display","flex");

        setTimeout(function () {
           $("#loader").css("display","none")
       },500)
        $.ajax({
            type: 'post',
            url: 'order.php',
            data: $('#wizard-form').serialize(),
            dataType: "json",
            success: function (data) {
                $('#total').text(data);
            }
        });
  
    })

    // select2 
    $("#cmbIdioma").select2({
        templateResult: function (idioma) {
          var $span = $("<span><img src='https://www.free-country-flags.com/countries/"+idioma.id+"/1/tiny/" + idioma.id + ".png'/> " + idioma.text + "</span>");
          return $span;
      },
        templateSelection: function (idioma) {
            var code = idioma.text.split('(')[1].slice(0,-1)
            var $span = $("<span>" + code + "</span>");
            return $span;
          
      }
    });

    $("#country").select2({
        templateResult: function (idioma) {
          var $span = $("<span><img src='https://www.free-country-flags.com/countries/"+idioma.id+"/1/tiny/" + idioma.id + ".png'/> " + idioma.text + "</span>");
          return $span;
      },
        templateSelection: function (idioma) {
          var $span = $("<span><img src='https://www.free-country-flags.com/countries/"+idioma.id+"/1/tiny/" + idioma.id + ".png'/> " + idioma.text + "</span>");
          return $span;
      }
    });
    $(".native-lang").select2({
        tags: true
      });

    //   radio btn
    $('#radioBtn a').on('click', function(){
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#'+tog).prop('value', sel);
        
        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
    })
    // pair language 
    // var xxxx = $('.pair-langs .langs-plus')
    // $(xxxx).on('click',function(e) {
    //   var parents =  $(this).parent().siblings().children();
    //   console.log('aya');
    //     // $('.langs-pair').appendTo($('.pair-langs').children('div'))
    //     $( parents ).clone().appendTo(  );
    // })
    $('.js-register').bind('click',function() {
        $('.js-register select').click();
    })
        let reIndex = 0;
        $('.remove').hide()
        $('.js-register').select2();
        $('.register-wrapper').on('click', '.clone', function(e) {
        $('.js-register').select2("destroy");

        $('.clone').closest('.register-wrapper').find('.reg-element').first().clone().appendTo('.reg-results');
        $('.js-register').select2();
        e.preventDefault()
        $('.remove').show()
        reIndex++

      });

      $('.register-wrapper').on('click', '.remove', function(e) {
        $('.remove').closest('.register-wrapper').find('.reg-element').not(':first').last().remove();
        reIndex--
        if(reIndex == 0 ){
            $('.remove').hide()
        }
        e.preventDefault()
      });
})



















