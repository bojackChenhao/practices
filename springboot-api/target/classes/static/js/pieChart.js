//饼状图—法人
function pie_chart_fa_ren(dataPie){
		var dataArr = new Array();
		var nameArr = new Array();
	    var moneyArr = new Array();
	    var ysmoneyArr = new Array();
		for(var i=0;i<dataPie.length;i++){
			var tmp={};
			dataArr[i] = dataPie[i]["subjectRoll"];
			tmp.value= dataPie[i]["zhuTiNum"];
	        tmp.name= dataPie[i]["subjectRoll"];
	        moneyArr.push(tmp);
			
		}
		var myChart = echarts.init(document.getElementById('fa_ren_subject'));
		fa_ren_subject = {
	    title : {
	        text: '数据资源:法人',
	        //subtext: '纯属虚构',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: dataArr,
	    },
	    series : [
	        {
	            name: '数据明细:',
	            type: 'pie',
	            radius : '55%',
	            center: ['65%', '60%'],
	            data: moneyArr,
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
		myChart.setOption(fa_ren_subject);
};

//饼状图—总量
function pie_chart_sum(dataPie){
	console.log(dataPie)
	var dataArr = new Array();
	var nameArr = new Array();
    var moneyArr = new Array();
    var ysmoneyArr = new Array();
	for(var i=0;i<dataPie.length;i++){
		var tmp={};
		dataArr[i] = dataPie[i]["subjectRoll"];
		tmp.value= dataPie[i]["zhuTiNum"];
        tmp.name= dataPie[i]["subjectRoll"];
        moneyArr.push(tmp);
		
	}
	var myChart = echarts.init(document.getElementById('sum_subject'));
	sum_subject = {
    title : {
        text: '数据资源:总量',
        //subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: dataArr,
    },
    series : [
        {
            name: '数据明细:',
            type: 'pie',
            radius : '55%',
            center: ['65%', '60%'],
            data: moneyArr,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
	myChart.setOption(sum_subject);
};
//饼状图—自然人
function pie_chart_zi_ran_ren(dataPie){
	console.log(dataPie)
	var dataArr = new Array();
	var nameArr = new Array();
    var moneyArr = new Array();
    var ysmoneyArr = new Array();
	for(var i=0;i<dataPie.length;i++){
		var tmp={};
		dataArr[i] = dataPie[i]["subjectRoll"];
		tmp.value= dataPie[i]["zhuTiNum"];
        tmp.name= dataPie[i]["subjectRoll"];
        moneyArr.push(tmp);
		
	}
	var myChart = echarts.init(document.getElementById('zi_ran_ren_subject'));
	zi_ran_ren_subject = {
    title : {
        text: '数据资源:自然人',
        //subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: dataArr,
    },
    series : [
        {
            name: '数据明细:',
            type: 'pie',
            radius : '55%',
            center: ['65%', '60%'],
            data: moneyArr,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
	myChart.setOption(zi_ran_ren_subject);
};