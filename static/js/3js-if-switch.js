/*
语句学习
分支语句：if语句，switch语句
循环语句：for语句
*/

/*1、if语句 */
/*
            语法：if（condition）{
                        statement1；
                   }

                  也就是if（条件）{
                             执行代码1；
                        }

               说明： condition不一定是布尔型，不是布尔型的可以隐式转换。

               例子：
               var age=12;
               if(age<18){
                   alert("您还没有成年");     //用浏览器打开页面会跳出这个对话框
               }
               //   alert()语句：功能：弹出警告对话框,()中填写弹出对话框内的内容
                 条件一定要用（）括起来！！！！！！！！！！！！！！！！！！！！！！！！！！



                 var age1 = prompt("请输入您的年龄");
                console.log(age1);// null /用户输入的值
                if (age1 < 18) {
                    alert("您还没有成年");
                }else{
                    alert("您以成年，请。。。。");
                }

                / / prompt()语句：功能：弹出输入框，
                            返回值：点击确认，返回输入内容
                                    点击取消，返回null




                假设下面是对网吧上网年龄的限制
                var age2 = prompt("请输入您的年龄");
                if (age2 < 8) {
                    alert("您还没有成年");
                } else if (age2 >= 18 && age <= 59) {
                    alert("您已成年");
                } else {
                    alert("您已超过年龄限制");
                }
                //   怎么上面的句子不对？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
                //之前写成age了，没有写成age2，所以不对了，一定要输入正确！！！
                //age2 >= 18 && age <= 59   为什么第二句一定要这样写？？？不能直接写age2<=59?????????   可以的！！！！

*/

/*

                if语句样例
                做一个用户密码设置过程的提示,输入一个大于等于6位，小于等于13位的数字密码，

                var password=prompt("请输入您的密码，长度为6~13位");
                if(password.length<6 || password.length>13){
                    alert("请设置密码长度为6~13位");
                }else if(isNaN(password) ){
                    alert("请设置数字密码");
                }else {
                    alert("密码设置成功");
                }
                //str.length()  语句用来获取字符串的长度。str表示需要获取长度的值。返回值number。
                //isNaN(password)   等价于isNaN(password)==true
                //怎么做字母开头，数字字母结合的密码限制？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？



                var str="liuxiaomi0724";
                num=parseInt(str);
                console.log(num);//  NaN ,因为原来的str第一个字符不是数字返回的就是NaN
                if (num==NaN){  // 即使num得到的值是NaN，但是前面我们知道NaN是不等于任何值的，这里是不相等的。因此不会执行这条弹窗
                    alert("NaN");
                }else if(num==0724){  //parseInt（）语句遇到的第一个不熟数字就不会返回数字
                    alert("0724");
                }else if(typeof(num)=="number"){  //NaN，是一个特殊的非数字 的 数值number类型， 类型要加上 引号 区别于其他变量。
                                                   //这里要记得typeof的语法，带空格就没有括号，有括号就没有空格
                    alert("number");
                }else {
                    alert("str");
                }
                //上面的最终输出是number，

*/

//2、 switch语句
/*
     应用场景：多条件判断的时候使用
     例如：输出星期几、
    语句. new Date().getDay()
    功能：获取日期。
    返回值number：0~6

       switch ()语法：
       switch (expression){                //expression,需要判断的对象，可以是一个变量，可以是一个表达式？？
           case value1:statement1;         //当expression==value1的时候， 执行代码statement1
           break;                          //选择完要知道需要用break来退出switch语句。
           case value2:statement2;         //当expression==value2的时候， 执行代码statement2
           .....
           ......
           default:statement               //当expression！=value的时候， 也就是default的时候执行这里的代码statement
       }

        var week = new Date().getDay();
        switch (week) {
            case 0:
                console.log("星期天");
                break;
            case 1:
                console.log("星期一");
                break;
            case 2:
                console.log("星期二");
                break;
            case 3:
                console.log("星期三");
                break;
            case 4:
                console.log("星期四");
                break;
            case 5:
                console.log("星期五");
                break;
            case 6:
                console.log("星期六");
        }


/!*    上面的 console.log是在控制台里面输出，现在学习在浏览器页面输出信息。
    语法：document.write("");
    *!/
var week = new Date().getDay();
switch (week) {
    case 0:
        document.write("星期天");
        break;
    case 1:
        document.write("星期一");
        break;
    case 2:
        document.write("星期二");
        break;
    case 3:
        document.write("星期三");
        break;
    case 4:
        document.write("星期四");
        break;
    case 5:
        document.write("星期五");
        break;
    case 6:
        document.write("星期六");
}


            /!*  上面的语句可以简化，上面每个句子都写了 document.write，我们可以不用这样写。*!/
            var week = new Date().getDay();
            var weekstr="";  //定义一个空字符串，值为"" ,"  ",null  都行
            switch (week) {
                case 0:
                    weekstr="天";
                    break;
                case 1:
                    weekstr="一";
                    break;
                case 2:
                    weekstr="二";
                    break;
                case 3:
                    weekstr="三";
                    break;
                case 4:
                    weekstr="四";
                    break;
                case 5:
                    weekstr="五";
                    break;
                case 6:
                    weekstr="六";
            }
                            document.write("今天是星期"+weekstr);    // +表示将字符串连接

*/






