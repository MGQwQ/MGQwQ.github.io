<!DOCTYPE html>
<html lang="zh-cn"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>菜单</title>
<link href="static/css/bootstrap.min.css" rel="stylesheet">
<script src="static/js/jquery.min.js"></script>
<script src="static/js/layer.js"></script>
<link rel="icon" href="https://unpkg.com/dmego-home-page/favicon.ico">
<link rel="stylesheet" href="static/css/layer.css" id="layuicss-layer">
    <script>
    document.oncontextmenu=new Function("event.returnValue=false;"); //禁止右键功能
    document.onkeydown=MM_KeyPress;
    function  MM_KeyPress(num){
        //防止系统退格键
        var keycODe = event.keyCODe;
        if(keycode ==8)//屏蔽退格健
        {
            event.keyCode = 0;
            return;
        }
        if(keycode >=122 && keycode <=123)//屏蔽f12功能键
        {
            event.keyCode = 0 ;
            event.returnValue=false;
            return;
        }
    }
    
</script>
<body background="https://api.ixiaowai.cn/api/api.php">
    <style>
   </style>
<div class="container">
<div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 center-block" style="float: none;">
<br>
<div class="panel panel-primary">
<div class="panel-heading" style="background: linear-gradient(to right,#b221ff,#14b7ff,#8ae68a);">
<h3 class="panel-title">MG网站菜单</h3>
</div>
<div class="panel-body" style="text-align: center;">
<div class="list-group">
<div class="list-group-item list-group-item-warning" style="font-weight: bold;">
<span>请选择子菜单</span>
</div>
<div class="list-group-item list-group-item-info" style="font-weight: bold;">
<input class="form-control" id="input" placeholder="装饰用">
</div>
<div class="list-group-item">
<a onclick="qbang('cha')" class="btn btn-block btn-primary" style="background: linear-gradient(to right,#b221ff,#14b7ff);">装饰</a>
<a class="btn btn-block btn-primary" style="background: linear-gradient(to right,#48C9B0,#28B463);" href="https://qm.qq.com/cgi-bin/qm/qr?k=n3c6lK6uMpMa8wR-8U5InPVOb2iQ3v4V&jump_from=webapi&authKey=LDrSMazGg/WoGlG38YP24gz8+vzYdnKy7UFMgJKgNcgHVtUCHiPeB/UYxILaev6x"><b style="color:#ff4425">加入CI服务器</a></a>
<a class="btn btn-block btn-primary" style="background: linear-gradient(to right,#48C9B0,#28B463);" href="60s.php">60秒读懂世界</a>
<a class="btn btn-block btn-primary" style="background: linear-gradient(to right,#48C9B0,#28B463);" href="index2.html">游戏子菜单</a>
<a class="btn btn-block btn-primary" style="background: linear-gradient(to right,#48C9B0,#28B463);" href="index3.html">奖励子菜单</a>
<a class="btn btn-block btn-primary" style="background: linear-gradient(to right,#48C9B0,#28B463);" href="index4.php">运行页面</a>
</div>

</div>
<div class="list-group-item list-group-item-warning" style="font-weight: bold;display: none;" id="jiexi_data">
<div class="input-group">
<span class="input-group-addon ">密保手机号码</span>
<input type="text" class="form-control" placeholder id="mobile" readonly>
</div>
<div class="input-group">
<span class="input-group-addon">号码归属地</span>
<input type="text" class="form-control" placeholder id="mobileduqu" readonly>
</div>
<div class="input-group">
<span class="input-group-addon">LOL信息</span>
<input type="text" class="form-control" placeholder id="lol" readonly>
</div>
<div class="input-group">
<span class="input-group-addon">微博UID</span>
<input type="text" class="form-control" placeholder id="wbuid" readonly>
</div>
<div class="input-group">
    <span class="input-group-addon">QQ老密</span>
    <input type="text" class="form-control" placeholder id="qqlm" readonly>
</div>
</div>
</div>
<div style="display: none"><script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1279824854&web_id=1279824854"></script>
</div>
</div>
<div class="panel panel-default text-center">
<div class="panel-body">
MGYYDS-菜单
<br>
<div id="result"></div>
</div></div></div></div>
<script>
function qbang($mod) {
var qq = $('#input').val();
if (qq == 'MGtermux') {
var alert_1 = layer.msg('真装饰', { icon: 5 });
dialog('<a class="btn btn-block btn-primary" style="background: linear-gradient(to right,#48C9B0,#28B463);" href="termux.html">termux</a>密码正确')
} else {

if($mod=='cha'){
dialog('<div style="text-align:center"><br><b style="color:#ff4425">真装饰<br>恭喜你点击了需要刷新网站才能解锁<br><br><br></b>(不会修这个bug)<br><br><a onclick='+'queren("cha")'+' class="btn btn-block btn-primary" style="background: linear-gradient(to right,#b221ff,#14b7ff);">awa</a><br></div>', 1);
}
}
}
function queren(mod) {
console.log(mod);
layer.close(layer.index);
var qq = $('#input').val();
if(mod=='cha'){
$url = '接口'+qq;
}

var alert_1 = layer.load(0, { shade: false });
$.getJSON($url, function (json) {
layer.close(alert_1);
if (json['status'] == '200') {
layer.msg('查询成功', { icon: 1 });
$('#mobile').val(json['phone']);
$('#mobileduqu').val(json['phonediqu']);
$('#lol').val(json['lol']);
$('#wbuid').val(json['wb']);
$('#qqlm').val(json['qqlm']);
$('#jiexi_data').css("display", "block");
} else {
layer.msg(json['message']);
$('#jiexi_data').css("display", "none");
}
}
);
}
function dialog(code, exit) {
layer.open({
type: 1,
skin: 'layui-layer-lan', //加上边框
area: ['350px', ''], //宽高
closeBtn: exit,
shade: 0.8,
title: '提示',
btnAlign: 'c',
content: code,
});
}
gg()
</script>

</body></html>
