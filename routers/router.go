package routers

import (
	"github.com/xiaomizhou66/web1/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/login", &controllers.LoginController{})
}
