const { response } = require("express");
const express = require("express");
const { request } = require("http");
const { resolve } = require("path");
const app = express();

app.get('/server',(request,response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO AJAX GET');
});

app.post('/server',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //这是相应体
    response.send('HELLO AJAX POST')
})

app.get('/json-server',(request,response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应一个数据
    const data ={
        name: "yuqing",
    };
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});
app.get('/ie',(request,response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('HELLO IE -1');
})
app.get('/delay',(request,response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        response.send('延时响应');
    },3000);
  
})

//jQuery服务
app.all('/jQuery-server',(request,response)=>{
    //设置响应头允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('Hello jquery ajax');
    const data = {name:'yuqingqing'};
    response.send(JSON.stringify(data));
})

//axios服务
app.all('/axios-server',(request,response)=>{
    //设置响应头允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('Hello jquery ajax');
    const data = {name:'yuqingqing'};
    response.send(JSON.stringify(data));
})

//fetch服务
app.all('/fetch-server',(request,response)=>{
    //设置响应头允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('Hello jquery ajax');
    const data = {name:'yuqingqing'};
    response.send(JSON.stringify(data));
})

// jsonp服务
app.all('/jsonp-server',(request,response)=>{
    const data = {
        name:'yuqingqing',
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
})

//jquery-jsonp服务
app.all('/jquery-jsonp-server',(request,response)=>{
    const data = {
        name:'阿里巴巴',
        city:['北京','上海','杭州','深圳']
    };
    let str = JSON.stringify(data);
    //接受callback参数
    let cb = request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`);
})
app.listen(8000,()=>{
    console.log("服务器启动成功");
})  