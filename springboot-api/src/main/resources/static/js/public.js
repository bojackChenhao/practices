//清除选择的单位展示结果，id是结果a的父极div的id，type类型，1表示清除某一个，0表示全部清除，在type为1的时候要清除的那个值用v传递。is_del表示是否需要删除单位列表中对应的active被选择样式
function clear_unit(id,type,v,is_del) {
    if(!type){type=0;}
    if(!v){v=null;}
    if(!is_del){is_del=0;}
    if(type){ //清除某一个值的情况
        $("#expand_box"+id+" a").each(function(){
            if($(this).attr('value')==v){
                $(this).remove();
            }
        });
    }else{  //删除所有节点
        $("#expand_box"+id).html('');
        $("#option"+id+" a").removeClass('active');
    }
    if(is_del){//清除对应的单位列表的active被选择样式
        $("#option"+id+" a").each(function(){
            if($(this).attr('value')==v){
                $(this).removeClass('active');
            }
        });
    }
}

/*//弹出层
function layer_msg(){
    layui.use('layer', function(){
        var layer = layui.layer;
        //捕获页
        var index=layer.open({
            type: 1,
            shade: [0.3],
            area:['510px','265px'],
            closeBtn: 0, //不显示关闭按钮
            title: false, //不显示标题
            content: $('#launch_layer'),
        });
    });
}*/

/*//成功后弹出确认成功弹窗
function layer_msg_success(){
    layui.use('layer', function(){
        var layer = layui.layer;
        //捕获页
        var index=layer.open({
            type: 1,
            shade: [0.3],
            area:['510px','265px'],
            closeBtn: 0, //不显示关闭按钮
            title: false, //不显示标题
            content: $('#launch_layer_success'),
        });
    });
}*/


////关闭层按钮
//function clear_layer(){
//    layui.use('layer', function(){
//        var layer = layui.layer;
//        layer.closeAll();
//    });
//}

//确认发起或者确认确认
function launch(url){
    //var id = $("#id").val();
    //var units = $("#units").val();
    // alert("{'id': "+id+", 'units': "+units+"}");
    //alert("[{ 'id' : "+id+"},{'units' : "+units+"}]");
    //clear_layer(); layer_msg_success();
    // $.ajax({
    //     url: url,
    //     type: 'POST',
    //     cache: false,
    //     dataType: "json",
    //     async: false,
    //     data: '',
    //     success:function(data) {
    //     }
    // });
}

//确认发布
function publish(url){
    //var id = $("#id").val();
    //clear_layer(); layer_msg_success();
    // $.ajax({
    //     url: url,
    //     type: 'POST',
    //     cache: false,
    //     dataType: "json",
    //     async: false,
    //     data: '',
    //     success:function(data) {
    //     }
    // });
}


//底部波浪
$(function () {
    function marqueeScroll(id1, id2, id3, timer) {
        var $parent = $("#" + id1);
        var $goal = $("#" + id2);
        var $closegoal = $("#" + id3);
        $closegoal.html($goal.html());
        function Marquee() {
            if (parseInt($parent.scrollLeft()) - $closegoal.width() >= 0) {
                $parent.scrollLeft(parseInt($parent.scrollLeft()) - $goal.width());
            }
            else {
                $parent.scrollLeft($parent.scrollLeft() + 1);
            }
        }
        setInterval(Marquee, timer);
    }
    var marqueeScroll1 = marqueeScroll("marquee-box", "wave-list-box1", "wave-list-box2", 20);
    var marqueeScroll2 = marqueeScroll("marquee-box3", "wave-list-box4", "wave-list-box5", 40);
    //点击出现选择区域
    $('.choose').click(function(){
        layui.use('layer', function(){
            var layer = layui.layer;
            //iframe层-父子操作
            layer.open({
                type: 2,
                title:false,
                area: ['750px', '482px'],
                fixed: false, //不固定
                shadeClose:false,
                maxmin: false,
                content: 'choose_list.html'
            });
        });
    });

    //选择点击赋值
    $('.choose_list button').click(function(){
        var value=$('.choose_list .choose_list_content span.active').html();
    });

    // $('.workbench_normal dd span').click(function(){
    //     $(this).parent().children('.workbench_item').toggle(300);
    // });

    //惩戒激励的待办事项点击详情的口风琴样式。查看详情
    /*$('.workbench_normal dd span.launch i.look').click(function(){
        $('.workbench_normal dd .workbench_item').hide();
        $(this).parent().next().next().toggle();
    });*/
    
    
    
    
    
    //点击单位进行选择和不选择
    $('.workbench_normal dd .workbench_item .option .text-option').click(function(){
        //找到外层的dd的标识符
        var id=$(this).parents('dd').attr("value");
        var html=$(this).html().replace('<i>&nbsp;</i>',"");
        var value=$(this).attr('value');
        if($(this).hasClass('active')){   //去掉选择
            //清除
            clear_unit(id,1,value);
        }else{     //选择
            $("#expand_box"+id).append("<a href='javascript:void(0)' class='text-option' value='"+value+"'>"+html+"<i onclick=\"clear_unit('"+id+"',1,'"+value+"',1)\">X</i></a>");
        }
        $(this).toggleClass('active');
    });

    /*//点击发起确认
    $('.workbench_normal dd span.launch i.pop').click(function(){
        var id=$(this).parents('dd').attr("value");
        var danwei='';
        $("#expand_box"+id+" a").each(function(){
            danwei+=$(this).attr('value')+',';
        });
        //赋值
        $('#id').attr('value',id);
        $('#units').attr('value',danwei.substring(0,danwei.length-1));
        //弹出弹层
        layer_msg();
    });
    */
    

   /*//点击发布
    $('.workbench_normal dd span.launch i.publish').click(function(){
        var id=$(this).parents('dd').attr("value");
        //赋值
        $('#id').attr('value',id);
        //弹出弹层
        layer_msg();
    });*/

});


function show_hint(msg,obj){
    window.clearTimeout(time);
    if(obj==2){
        $('.show_red').fadeIn("slow");
        $('.show_hint').removeClass('show_green').addClass("show_red").html(msg);
        var time=setTimeout("$('.show_red').removeClass('show_red').html('')",3000);
    }
    else{
        $('.show_green').fadeIn("slow");
        $('.show_hint').removeClass('show_red').addClass("show_green").html(msg);
        var time=setTimeout("$('.show_green').removeClass('show_green').html('')",3000);
    }
    return false;
}

//分页渲染
/*num总记录数
 * page_size每页显示的记录数
 * page当前页数
 * theme,数组,显示的主题['info','first','prev','now','next','last']表示显示总记录数、首页、上一页、当前页、下一页、尾页
 */
function page_html(num,page,page_size,theme){
    //设置默认值
    if(!page){page=1;}
    if(!page_size){page_size=10;}
    if(!theme){theme=['info','first','prev','now','next','last'];}

    var link='';
    var result=new Array();
    var pages=Math.ceil(num/page_size);  //页数

    //首页，上一页。当前是第一页的时候则不可点击span，其余则可点击a
    if(page==1){
        result['first']="<span class='first'>&nbsp;</span>";
        result['prev']="<span class='prev'>&nbsp;</span>";
    }else{
        result['first']="<a class='first' onclick='ajax_page(1)'>&nbsp;</a>";
        result['prev']="<a class='prev' onclick='ajax_page("+(page-1)+")'>&nbsp;</a>";
    }

    //下一页，尾页。当前是最后一页的时候则不可点击span，其余则可点击a
    if((page+1)>pages){
        result['next']="<span class='next'>&nbsp;</span>";
        result['last']="<span class='last'>&nbsp;</span>";
    }else{
        result['last']="<a class='last' onclick='ajax_page("+pages+")'>&nbsp;</a>";
        result['next']="<a class='next' onclick='ajax_page("+(page+1)+")'>&nbsp;</a>";
    }

    result['info']="每页显示"+page_size+"条信息";
    result['now']="<b class='num'>"+page+"/"+pages+"</b>页";

    for(var i=0;i<theme.length;i++){
        var index=theme[i];
        link+=result[index];
    }
    return link;
}





