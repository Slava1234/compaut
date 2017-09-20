$(function () {
    var windowWidth = window.innerWidth;
    var order_btn = ".btn-order";

    function order_top_offset_function(widthValue) {
        $('body').animate({
            scrollTop: widthValue + "px"
        });
    }

    $(order_btn).click(function () {
        if (windowWidth < 595) {
            order_top_offset_function(2100);
        }
        if (windowWidth >= 595 && windowWidth < 770) {
            order_top_offset_function(1850);
        }
        if (windowWidth >= 770 && windowWidth < 992) {
            order_top_offset_function(1650);
        }
        if (windowWidth >= 992 && windowWidth < 1130) {
            order_top_offset_function(1380);
        }
        if (windowWidth >= 1130) {
            order_top_offset_function(1250);
        }
    });

    function scrollWindowDown(className, widthValue) {
        $(className).on("click", function () {
            $('body').animate({
                scrollTop: widthValue + "px"
            });
        });
    }

    // äëÿ ìîáèëüíûõ 1
    if (windowWidth < 595) {
        // Î ÍÀÑ
        scrollWindowDown(".nav-a-about-us", 280);
        // ÓÑËÓÃÈ
        scrollWindowDown(".nav-a-service", 880);
        // ÊËÈÅÍÒÛ 
        scrollWindowDown(".nav-a-clients", 2600);
        // È ÊÎÍÒÀÊÒÛ
        scrollWindowDown(".nav-a-contacts", 2100);
    }

    // äëÿ ìîáèëüíûõ 2
    if (windowWidth >= 595 && windowWidth < 770) {
        // Î ÍÀÑ
        scrollWindowDown(".nav-a-about-us", 280);
        // ÓÑËÓÃÈ
        scrollWindowDown(".nav-a-service", 730);
        // ÊËÈÅÍÒÛ 
        scrollWindowDown(".nav-a-clients", 2350);
        // ÊÎÍÒÀÊÒÛ
        scrollWindowDown(".nav-a-contacts", 1850);
    }

    // äëÿ ïëàíøåòîâ 1
    if (windowWidth >= 770 && windowWidth < 992) {
        // Î ÍÀÑ
        scrollWindowDown(".nav-a-about-us", 130);
        // ÓÑËÓÃÈ
        scrollWindowDown(".nav-a-service", 600);
        // ÊËÈÅÍÒÛ
        scrollWindowDown(".nav-a-clients", 2050);
        // ÊÎÍÒÀÊÒÛ
        scrollWindowDown(".nav-a-contacts", 1650);
    }

    // äëÿ ïëàíøåòîâ 2
    if (windowWidth >= 992 && windowWidth < 1130) {
        // Î ÍÀÑ
        scrollWindowDown(".nav-a-about-us", 130);
        // ÓÑËÓÃÈ
        scrollWindowDown(".nav-a-service", 600);
        // ÊËÈÅÍÒÛ
        scrollWindowDown(".nav-a-clients", 1380);
        // ÊÎÍÒÀÊÒÛ
        scrollWindowDown(".nav-a-contacts", 1380);
    }

    // äëÿ äåñêòîï
    if (windowWidth >= 1130) {
        // Î ÍÀÑ
        scrollWindowDown(".nav-a-about-us", 80);
        // ÓÑËÓÃÈ
        scrollWindowDown(".nav-a-service", 530);
        // ÊËÈÅÍÒÛ
        scrollWindowDown(".nav-a-clients", 1250);
        // ÊÎÍÒÀÊÒÛ
        scrollWindowDown(".nav-a-contacts", 1250);
    }

    // Îòïðàâêà ôîðìû çàêàçà
    $(".form-btn-submit").click(function () {
        var name = $(".form #name").val();
        var email = $(".form #email").val();
        var subject = $(".form #subject").val();
        var message = $(".form #message").val();
        $.ajax({
		  type: "POST",
		  url: "./email.php",
		  data: {
			  "name": name,
              "email": email,
              "subject": subject,
              "message": message
		  },
		  cache: false,
		  success: function(data){
              if(data == 4) {
                $(".form p").css("margin-bottom", 5+"px");
                $(".form-error").css("display", "block");
                $(".form-success").css("display", "none");
                $(".form-error").text("Пожалуйста укажите Ваш имя");
              }
              if(data == 5) {
                $(".form p").css("margin-bottom", 5+"px");
                $(".form-error").css("display", "block");
                $(".form-success").css("display", "none");
                $(".form-error").text("Пожалуйста укажите тему заказа");
              }
              if(data == 6) {
                $(".form p").css("margin-bottom", 5+"px");
                $(".form-error").css("display", "block");
                $(".form-success").css("display", "none");
                $(".form-error").text("Пожалуйста укажите Ваш e-mail");
              }
			  if(data == 1) {
                $(".form p").css("margin-bottom", 5+"px");
                $(".form-error").css("display", "none");
                $(".form-success").css("display", "block");
                $(".form-success").text("Ваш заказ успешно отправлен!");
                $(".form #name").val("");
                $(".form #email").val("");
                $(".form #subject").val("");
                $(".form #message").val("");
                setTimeout(function(){
                    $(".form-success").text("");
                    $(".form-success").css("display", "none");
                    $(".form p").css("margin-bottom", 30+"px");
                }, 4000);
              }
              if(data == 2) {
                $(".form p").css("margin-bottom", 5+"px");
                $(".form-error").css("display", "block");
                $(".form-success").css("display", "none");
                $(".form-error").text("Ошибка! заказ не отправлен...");
              }
              if(data == 3) {
                $(".form p").css("margin-bottom", 5+"px");
                $(".form-error").css("display", "block");
                $(".form-success").css("display", "none");
                $(".form-error").text("Некорректный e-mail адрес");
              }
		  }
		});
    });



});
