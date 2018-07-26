/* Created by jankoatwarpspeed.com */

(function($) {
    $.fn.formToWizard = function(options) {
        options = $.extend({  
            submitButton: "" 
        }, options); 
        
        var element = this;

        var steps = $(element).find("fieldset");
        var count = steps.size();



        var submmitButtonName = "#" + options.submitButton;
        $(submmitButtonName).hide();

        // 2
        $(element).before("<ul id='steps'></ul>");

        steps.each(function(i) {
            $(this).wrap("<div id='step" + i + "'></div>");
            $(this).append("<p id='step" + i + "commands'></p>");

            // 2
            var name = $(this).find("legend").html();

            if( (i+1)>1){
                $("#steps").append("<li class='not_first' id='stepDesc" + i + "'> <b>&nbsp;</b><i>" + (i + 1) + " </i><span>" + name + "</span></li>");
            }else{
                $("#steps").append("<li id='stepDesc" + i + "'> <i>" + (i + 1) + " </i><span>" + name + "</span></li>");
            }



            if (i == 0) {
                createNextButton(i);
                selectStep(i);
            }
            else if (i == count - 1) {
                $("#step" + i).hide();
                createPrevButton(i);
            }
            else {
                $("#step" + i).hide();
                createPrevButton(i);
                createNextButton(i);
            }
        });

        function createPrevButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='javascript:void(0)' id='" + stepName + "Prev' class='prev'>< 上一步</a>");

            $("#" + stepName + "Prev").bind("click", function(e) {
                $("#" + stepName).hide();
                $("#step" + (i - 1)).show();
                $(submmitButtonName).hide();
                selectStep(i - 1);
            });
        }

        function createNextButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='javascript:void(0)' id='" + stepName + "Next' class='next'>下一步 ></a>");



            $("#" + stepName + "Next").bind("click", function(e) {
                var next_step_result=next_step();       //增加点击下一步的事件，可在页面上做判断，返回1的话表示未通过，会中断不进行下一页的切换
                if(next_step_result){
                    return;
                }
                $("#" + stepName).hide();
                $("#step" + (i + 1)).show();
                if (i + 2 == count)
                    $(submmitButtonName).show();
                selectStep(i + 1);



            });
        }

        function selectStep(i) {
            $("#steps li").removeClass("current");
            $("#stepDesc" + i).addClass("current");
        }

    }
})(jQuery); 