window.onload = function () {
    var obj = document.getElementById('picture')
    var timer
    var isTop = true
    var height = document.documentElement.clientHeight//可视区高度
    //点击时触发，每隔30ms点击一次
    obj.onclick = function () {
        timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop
            var ispeed = Math.floor(-osTop/5)
            document.documentElement.scrollTop = osTop+ispeed
            isTop = true
            if(osTop==0){
                clearInterval(timer)
            }
        },30)
    }
    //滚动条滚动时触发
    window.onscroll = function () {
        var osTop = document.documentElement.scrollTop//获取滚动条距离顶部的高度
        if(osTop>=height){
            obj.style.display = 'block'
        }else{
            obj.style.display = 'none'
        }
        if(!isTop){
            clearInterval(timer)
        }
        isTop = false
    }
}
