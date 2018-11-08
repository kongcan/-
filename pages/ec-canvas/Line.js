const LineChart = {
    lineCreate: function(canvasId,xValue,yValue,canvasHeight) {
        let windowWidth = 0
        wx.getSystemInfo({ 
          success: function(res) {
            windowWidth = res.windowWidth    //获取系统的宽度
          }
        })
         //x间隔 
        let interval = (windowWidth - 25) / (xValue.length - 1) 
        //y间隔
        var yMax = 0
        yValue.forEach((item) => {
            yMax = yMax > item ? yMax : item
        })
        yMax = parseInt(yMax * (1 + 0.15))

        var inter = yMax / 3;
        var yInterval = (canvasHeight - 25 - 25) / yMax
        var yPoint  = []
        yPoint.push(0)
        yPoint.push(inter)
        yPoint.push(inter * 2)
        yPoint.push(inter * 3)

        let data = []
        yValue.forEach((item,i) => {
            data.push([i * interval + 25,canvasHeight - yValue[i] * yInterval - 25])
        })
        const ctx = wx.createCanvasContext(canvasId)
        ctx.beginPath()
        //画x轴
        this.x_line(ctx,canvasHeight,xValue,interval)
        //画y轴
        this.y_line(ctx,canvasHeight,yPoint,yInterval)

        data.forEach((item,i) => {
            if(i == 0) {
                ctx.moveTo(item[0],item[1])
            } else {
                ctx.lineTo(item[0],item[1])
            }
        })
        ctx.setLineWidth(2)
        ctx.setStrokeStyle('#7cb5ec')
        ctx.stroke()
        
        //在每个折线点处添加标识图案
        ctx.beginPath()
        //设置描边颜色   不支持'fff'这种写法
        ctx.setStrokeStyle('#ffffff')    
        //设置填充颜色
        ctx.setFillStyle('#7cb5ec')
        data.forEach((item,i) => {
            ctx.moveTo(item[0] + 7,item[1])
            //绘制圆形区域
            ctx.arc(item[0],item[1],4,0,2 * Math.PI,false)   
        })
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.draw()
    },
    //画x轴
    x_line:function(ctx,height,xPoint,interval) {
        ctx.setFontSize(14)
        ctx.setFillStyle('black')
        xPoint.forEach((item,i) => {
            if(i == 0 || (i % 3 == 0)) {
                 ctx.fillText(item,interval * i + 25,200)
            }
        })
    },
    //画y轴
    y_line:function (ctx,height,yPotint,interval){
        ctx.setFontSize(14)
        ctx.setFillStyle('black')
        yPotint.forEach((item) => {
            ctx.fillText(parseInt(item),0,height - (item * interval) - 25 + 7)
        }) 
    }
}
module.exports = LineChart;
