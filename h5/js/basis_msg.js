$(function(){
    let event_uri_key = ''
    let data = window.location.search.substring(1).split("&")
    let infoData = []
    data.forEach(item => {
        infoData.push(item.split("="))
    })
    event_uri_key = infoData[0][1]
    
    if(!sessionStorage.getItem('cubeInfo')){
       window.location.href='http://www.cube.vip/h5/wxlogin.html?key=' + event_uri_key
    }
    if(Number(infoData[1][1])===1) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = './css/default_msg.css';
        document.getElementsByTagName("head")[0].appendChild(link);
    }else {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = './css/sports_msg.css';
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    layui.use(['layer','form'], function(){
        var form = layui.form;
        var layer = layui.layer;
        form.on('submit(msgSend)', function(data){
            $.ajax({
                url:'http://www.cube.vip/video/h5_user_video/',
                type:'POST',
                data:{
                     event_uri_key:event_uri_key,
                     survey_email:data.field.email,
                     survey_telphone:data.field.phone,
                     survey_describe:data.field.info
                },
                success:res=>{
                    if (res.msg === 'success') {
                        layer.msg('提交成功!');
                    } else {
                        layer.msg('提交失败,请重试!');
                    }
                }
            })
            return false;
        });
    })
})