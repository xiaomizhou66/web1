package controllers

import (
	"github.com/astaxie/beego"
)

type LoginController struct {
	beego.Controller
}
func (c *LoginController) Get() {
	c.TplName = "login.html"
}


type Login1Controller struct {
	beego.Controller
}
func (c *Login1Controller) Get() {
	c.TplName = "login1.html"
}

type HomeController struct {
	beego.Controller
}
func (c *HomeController) Get() {
	c.TplName = "home.html"
}

type XuanzeqiController struct {
	beego.Controller
}
func (c *XuanzeqiController) Get() {
	c.TplName = "1css-text1-xuanzqi.html"
}