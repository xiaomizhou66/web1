package routers

import (
	"github.com/xiaomizhou66/web1/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/login", &controllers.LoginController{})
	beego.Router("/login1", &controllers.Login1Controller{})
	beego.Router("/home", &controllers.HomeController{})

}
