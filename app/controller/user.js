
'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
	//验证登录并生成Token
	async login() {
	    const { ctx, app } = this;
	    //获取用户端传递的参数
		const { data } = ctx.request.body;
        //验证data数据，判断是否登录成功
		//......
        const res = ctx.request.body;
        if(res.username!='wuyue'){   //如果用户名不是'wuyue',写死用户名
            ctx.body={
                status:403,
                message:"登陆失败，用户名错误"
            }
        }else if(res.username=='wuyue'&&res.password!='shitian'){  //如果用户名正确但密码不正确，写死密码
            ctx.body={
                status:403,
                message:"登陆失败，密码错误"
            }
        }else{  //用户名和密码正确
            //成功则生成Token
            //生成Token
            console.log(res)
            const token = app.jwt.sign({
                userID: res.username,	//需要存储的Token数据
            }, app.config.jwt.secret);
            //将生成的Token返回给前端
            ctx.body={
                status:200,
                message:"登录成功",
                token:token   //生成的token写死在代码里
            }
        }
	}

	//验证Token
	async list() {
		const { ctx, app } = this;
		console.log(ctx.state.user);
		//打印的内容为：{ userID:'2345613', iat: 1602390850 }
		//iat为过期时间
		//userID是生成Token时传入的 需要存储的Token数据
		ctx.body = '验证成功！';
	}
}
module.exports = UsersController;
