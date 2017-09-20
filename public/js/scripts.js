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

    // ��� ��������� 1
    if (windowWidth < 595) {
        // � ���
        scrollWindowDown(".nav-a-about-us", 280);
        // ������
        scrollWindowDown(".nav-a-service", 880);
        // ������� 
        scrollWindowDown(".nav-a-clients", 2600);
        // � ��������
        scrollWindowDown(".nav-a-contacts", 2100);
    }

    // ��� ��������� 2
    if (windowWidth >= 595 && windowWidth < 770) {
        // � ���
        scrollWindowDown(".nav-a-about-us", 280);
        // ������
        scrollWindowDown(".nav-a-service", 730);
        // ������� 
        scrollWindowDown(".nav-a-clients", 2350);
        // ��������
        scrollWindowDown(".nav-a-contacts", 1850);
    }

    // ��� ��������� 1
    if (windowWidth >= 770 && windowWidth < 992) {
        // � ���
        scrollWindowDown(".nav-a-about-us", 130);
        // ������
        scrollWindowDown(".nav-a-service", 600);
        // �������
        scrollWindowDown(".nav-a-clients", 2050);
        // ��������
        scrollWindowDown(".nav-a-contacts", 1650);
    }

    // ��� ��������� 2
    if (windowWidth >= 992 && windowWidth < 1130) {
        // � ���
        scrollWindowDown(".nav-a-about-us", 130);
        // ������
        scrollWindowDown(".nav-a-service", 600);
        // �������
        scrollWindowDown(".nav-a-clients", 1380);
        // ��������
        scrollWindowDown(".nav-a-contacts", 1380);
    }

    // ��� �������
    if (windowWidth >= 1130) {
        // � ���
        scrollWindowDown(".nav-a-about-us", 80);
        // ������
        scrollWindowDown(".nav-a-service", 530);
        // �������
        scrollWindowDown(".nav-a-clients", 1250);
        // ��������
        scrollWindowDown(".nav-a-contacts", 1250);
    }

    // �������� ����� ������
    $(".form-btn-submit").click(function () {
        var name = $(".form #name").val();
        var email = $(".form #email").val();
        var subject = $(".form #subject").val();
        var message = $(".form #message").val();
        $.ajax({
		  type: "POST",
		  url: "./email.php",
		  data: {
			  
		  },
		  cache: false,
		  success: function(data){
			  alert(data);
			 //$("#resultarea").text(data);
		  }
		});
    });



});
