//弹出层
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
	}
	
	//成功后弹出确认成功弹窗
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
	}
	
	//关闭层按钮
	function clear_layer(v){
		$('#id').attr('value','');
	    layui.use('layer', function(){
	        var layer = layui.layer;
	        layer.closeAll();
	    });
	    if(v==1){
	    	window.location.reload();
	    }
	}
	
	//ajax获取数据
	function get_more1(url,v,apType){
		var id=$("#id").attr("value");
    	 $.ajax({
            url:url,
            type: 'GET',
            cache: false,
            async: false,
            data: {pageNumber:p,pageSize:10,apType:apType,id:id},
            success:function(result) {
            	if(id){
            		clear_layer(v); 
            		layer_msg_success();
            		$('#'+id).remove();
            	}else{
            		console.log(result);
	            	var news_more_lists=result;
	            	if(news_more_lists.length>0){
	            		add(news_more_lists);
	            			 p++;
	            	}else{
	            			$("#moreClick").html("没有更多了")
	            	}
            	}
            	
            }
        }); 
	}
	
	//专项领域ajax获取数据
	function get_more_zhu_ti(url,id){
    	 $.ajax({
            url:url,
            type: 'GET',
            cache: false,
            async: false,
            data: {pageNumber:p,pageSize:10,id:id},
            success:function(result) {
            		console.log(result);
	            	var news_more_lists=result;
	            	if(news_more_lists.length>0){
	            		add(news_more_lists);
	            			 p++;
	            	}else{
	            			$("#moreClick").html("没有更多了")
	            	}
            	}
        }); 
	}
	
	//专项领域查询ajax获取数据方法
	function get_some_things(url,name,id){
    	 $.ajax({
            url:url,
            type: 'GET',
            cache: false,
            async: false,
            data: {pageNumber:p1,pageSize:10,name:name,id:id},
            success:function(result1) {
            		console.log(result1);
	            	var find_some_list=result1;
	            	if(find_some_list.length>0){
	            		add1(find_some_list);
	            			 p1++;
	            	}else{
	            			$("#moreClick").html("没有更多了")
	            	}
            	}
        }); 
	}
	
	//新闻详情
	function get_news_xiangQing(id){
    	 $.ajax({
            url:"../getApNewsParticular",
            type: 'GET',
            cache: false,
            async: false,
            data: {id:id},
            success:function(result) {
            		console.log(result);
            	}
        }); 
	}
	
	//弹出层
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
	}
	function getMeasures(id,btn){
		$.ajax({
			url:'../getApMeasuresByMemoId',
			type:'GET',
			cache:false,
			async:false,
			data:{id:id},
			success:function(result){
				addDetails(result,id);
				btn.onclick =null;
			},
			error:function(){
				alert("出错了");
			}
		});
	}
	function addDetails(list,id){
		var html = "";
		for(var i=0;i<list.length;i++){
			html += "<tr><th>"+list[i].apMeasure+"</th>"+
			"<th>"+list[i].orgNames+"</th>"+
			"<th>"+list[i].status+"</th></tr>";
		}
		$("#subject"+id+" tbody").append(html);
	}
	function getFiles(id,btn){
		$.ajax({
			url:'../getFeedBackFilesByMemoId',
			type:'GET',
			cache:false,
			async:false,
			data:{id:id},
			success:function(result){
				addFileDetails(result,id);
				btn.onclick =null;
			},
			error:function(){
				alert("出错了");
			}
		});
	}
	function addFileDetails(list,id){
		var html = "";
		for(var i=0;i<list.length;i++){
			html += "<tr><th>"+list[i].fileName+"</th>"+
			"<th>"+list[i].modifyDate+"</th>"+
			"<th><a href=\"../downloadFile?id="+list[i].id+"\">下载</a>&nbsp;&nbsp;"+
			    "<a style='cursor:pointer;text-decoration:none;' onclick=\"deleteFile("+list[i].id+",this)\">删除</a></th></tr>";
		}
		$("#feedBackfiles"+id+" tbody").append(html);
	}
	
$(function(){
	 $(document).on("click", ".workbench_normal dd span.launch i.look", function(){ 	
			$('.workbench_normal dd .workbench_item').hide();
	        $(this).parent().next().next().toggle();
		});
})