'use strict';
const Controller = require('egg').Controller;

class HttpClientController extends Controller{
    //发请求获取凭证
    async sendCard() {
        const { ctx } = this;
        const url1 = 'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal';   //外部请求1的路径
        const url2 = 'https://open.feishu.cn/open-apis/im/v1/messages?receive_id_type=chat_id';   //外部请求2的路径加上query参数
        const userContent = ctx.request.body   //把用户输入的内容JSON化
        const result1 = await ctx.curl(url1,{    //第一个外部接口
            method: 'POST',      //POST请求
            dataType: 'json',
            contentType: 'json',    //使用json格式
            data: {
                app_id: "cli_a4cccad22aa2500d",    //机器人Id
                app_secret: "QB4ndre2kmBLlW5haOI6OcPbqq3wa5Rq",
            },
            headers: {
                'content-Type':'application/json; charset=utf-8',  //5
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJ3dXl1ZSIsImlhdCI6MTY4MjMzNzY0OH0._zXWemYvP7AztvlDbMX3JR1hoMPp_LkisbptA3aJ8T0'  //这里把token写死
            }
        });
        let content = {
            config: {
                update_multi: true,
              wide_screen_mode: true
            },
            header: {
              title: {
                  tag: "plain_text",
                  content: "Love God of war"
              },
              template:"carmine"//卡片标题的主题色
             },
            elements: [
                //card content
              {   
                  tag: "div",
                  text: {
                      tag: "plain_text",
                      content: "Content module"
                  },
              }
            ]
        }
        content.elements[0].text.content = userContent.text  //把用户输入的内容放进卡片里
        const result2 = await ctx.curl(url2,{    //第二个外部接口
            method: 'POST',       //POST请求
            dataType: 'json',
            contentType: 'json',    //使用json格式
            data: {
                receive_id: "oc_3d1ba27d507fdcf11dbe9ad80ee648b9",    // 群组Id  receive_id
                msg_type: "interactive",                           //消息类型interactive
                content:JSON.stringify(content)                  //把卡片JSON化
            },
            headers: {
                'content-Type':'application/json; charset=utf-8',  //固定格式
                'Authorization':`Bearer ${result1.data.tenant_access_token}`  //请求头中加入外部请求1返回的凭证
            },
            
        });
        ctx.body = {
            data: result2.data
        }
    };
    
}

module.exports = HttpClientController;