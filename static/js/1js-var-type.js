function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}

/*5、js的使用，用<script></script>标签包含，可以直接放在body里面，也可以放在head里面，这都是内部方式
外部使用方式，就像本文件一样创建一个js文件，然后像css那样引入html文件中。
              先在0-入门html文件中学习内部使用方式。*/

//    1、注释。单行注释
/*
多行注释*/


    /*  2、js 区分大小写，js中语句结束需要加上分号结束，可以不写分号，但是还是要养成习惯，谁知道有的时候就是因为分号的问题，语句就出错了呢

        3、js的标识符    变量，函数，函数的参数，属性的名字
            命名规则：
                    ①字母，数字，下划线_，美元符 $
                    ② 不能以数字开头
                    ③不能用关键字，预留字命名
                    ④变量是几个单词的时候要使用驼峰形式！！！！这是约定俗成

         4、变量学习：
                     4.1ECMAScript的变量是松散类型，松散类型：用来保存任何类型的数据，类型是有变量来决定的。
                         ① var name1;   //声明name1是一个变量     js中语句结束需要加上分号结束
                            name1="marry";//给变量赋值，
                         ②var age =18; //声明的同时赋值
                         ③var email = "liuxiaomi0724@163.com",qq="88888888",address;    //多条赋值，各个变量中以逗号间隔,有的变量声明的时候就有赋值，
                            有的就没有值，address就是声明了它是一个变量，但是 没有赋值
                         ④ name="xiaimi";  //全局变量，放在函数中，
                            不推荐使用这样省略var的形式，养成良好的习惯

                        4.2 为什么要使用变量，变量是用来存储值的

    *     5、js的数据类型，根据变量赋的值的类型来决定变量的类型，没有赋值就不知道变量的类型，就是 undefined，没有定义的类型
    *           ECMAJscript 基本数据类型：undefined、null、boolean、number、string    五种
    *                       复杂数据类型：object
    *           ECMAJscript6版本新增的类型：symbol
    *
            *   5.1   undefined，声明了一个变量，没有给他赋值
            *            根据变量赋的值的类型来决定变量的类型，没有赋值就不知道变量的类型，就是 undefined，没有定义的类型
            *   5.2   null，表示一个空对象指针
            *           如果定义的变量准备在将来用于保存对象，那么最好是将这个变量初始化为null而不是其他指定的值！！！！！！！！！！！！！！！！！！！！！！！！！
            *           settings=null   就像这样，settings后来是要用来存贮值的，先为null类型
            *
            *          undefined 是从null中派生出来的一个类型，因此undefined ==null这个句子得到的结构是true
            *
            *    5.3    number：
            *            整数
            *            浮点数
            *            NaN ：就是非数字的意思，not a number ，是一个特殊的数值
            *                   任何涉及NaN的操作返回值都是 NaN
            *                    NaN 与任何值都不相等等，包括 NaN本身
    *
            *           方法学习：
             *               方法一、isNaN(n)    注意大小写，js是区分大小写的
             *                      检测n是否是非数值，它会先尝试的把值改为数值，然后再返回boolean值，
            *                        所以这个不是弊端么？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
            *
                                  var age=18; //给变量赋值
                                 var name="xiaomi", nianji="9";
                                 var email = "liuxiaomi0724@163.com";
                                 console.log(age-3) //在浏览器页面程序中的console打印出来           这里是打印变量值计算值    15
                                 console.log(age-"3") //在浏览器页面程序中的console打印出来         这里是打印变量值计算值   NaN
                                 console.log(NaN/10) //在浏览器页面程序中的console打印出来          这里是打印变量值计算值   NaN
                                 console.log(NaN==NaN) //在浏览器页面程序中的console打印出来        这里是打印变量值计算值   false
                                 console.log(isNaN(age)) //在浏览器页面程序中的console打印出来      这里是打印变量值计算值  false
                                 console.log(isNaN(name)) //在浏览器页面程序中的console打印出来     这里是打印变量值计算值  true
                                 console.log(isNaN(nianji)) //在浏览器页面程序中的console打印出来   这里是打印变量值计算值  false    它把字符9转为数值number了

                          方法二、数值转换 ，把非数值转换为数值类型,注意大小写，js是区分大小写的
                                 ① Number(str)；   强制转换，可以用于任何类型的数据转换，但是并不是所有的类型都可以转成功，错误就是NaN值了
                                         niji=Number(nianji);
                                         name=Number(name);
                                         email=Number(email)
                                         console.log(email)//在浏览器页面程序中的console打印出来    NaN     这里没有转换成功
                                         console.log(name) //在浏览器页面程序中的console打印出来    NaN     这里没有转换成功
                                         console.log(nianji) //在浏览器页面程序中的console打印出来   9      这里转换成功了，
                                 ② parseInt(str);   把字符串转换为整型数，但是它能转换的是变量是：值必须以数字开头。
                                           var topval="20px"             经常用于获取一个盒子的值，然后去改变值
                                           topval=parseInt(topval)
                                           console.log(topval)//在浏览器页面程序中的console打印出来    20
                                           var username="liuxiaomi0724";
                                           username=parseInt(username)
                                           console.log(username)//在浏览器页面程序中的console打印出来    NaN

                                      说明： parseInt(),这个函数可以返回两个参数，
                                            1.转换控制符串，返回值NaN   （以值为非数字开头的变量，转换结果都是NaN）
                                            2.提供第二个参数，转换时使用的基数（多少进制），
                                                   var bottomval="20px";           // 经常用于获取一个盒子的值，然后去改变值
                                                   bottomval=parseInt(bottomval);  //
                                                   console.log(parseInt(bottomval));//      20      打印bottomval的值，
                                                   console.log(parseInt(bottomval,16));//    32       以16进制打印bottom值，
                                                   console.log(bottomval,16);//              20  32   打印bottomval的值， 以16进制打印bottom值，

                                 ③ parseFloat(str); 把字符串转换为浮点数
                                                 从第一个字符开始解析每个字符，直到遇见一个无效的浮点数字符为止
            *                         说明：parseFloat()与 parseInt()的区别
            *                               parseFloat() 中第一个小数点有效（第二个就无效了）。
            *                                            它会忽略前导的零。
            *
            *                               var a=parseFloat(12.34px);   //声明一个变量，并且赋值为一个函数 ,问题：我的软件写12.34px是错误的？？？？？？？？
            *                               var b=parseInt(12.34px);   //声明一个变量，并且赋值为一个函数
            *                               console.log(a);//      12.34
                                            console.log(b);//      12

                                            var c=parseFloat(0123);   //声明一个变量，并且赋值为一个函数
            *                               var d=parseInt(0123);   //声明一个变量，并且赋值为一个函数
            *                               console.log(c);//      123           float忽略0
                                            console.log(d);//      0123          int不会忽略0
    *
    *
            *   5.4   字符串：
            *          表示零个或者 多个16位Unicode字符组成的字符序列，即字符串。字符串可以放在内双引号，也可以放在单引号内。
            *          双引号与单引号有使用的局限么？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
            *
            *          字符串的转换方法：
            *          方法一、String(str)          强制转换，在不知道需要转换的值是不是null或者undefined的情况下就可以用String()，可以将任何类型的值转换为字符串。
            *          方法二、str.toString()    将str转换为字符串，返回值：str的一个副本
            *                  str是一个要进行转换的变量，可以是一个number，boolean，string，还有对象，    对象是什么？？？？？？？？？？？？？？？？？？？
            *
             *                 var age=20;
                               agestr=age.toString();
                               console.log(agestr);//        20           虽然这样显示，但是它现在是个字符串不能给数值进行计算的
                               console.log(String(age));//   20           虽然这样显示，但是它现在是个字符串不能给数值进行计算的


                  5.5   Boolean：
                            值： 真：true    假：false
                                   var a=ture;
                                   var b=false;
                                   console.log(String(a));//   ture           虽然这样显示，但是它现在是个字符串,不再表示真假

                             Boolean：转换方法：
                                 说明：除0之外的所有数字，转换为布尔值都为true
                                   除" "之外的所有字符串，转换为布尔值都为true
                                   null 、undefined转换为布尔市为false
                           方法一、Boolean(str)          强制转换，可以将任何类型的值转换为布尔型。
                               var age1=20;
                                console.log(Boolean(age1));//   true
    *
    *
    *
    *     6、typeof操作符使用：用来检测变量的类型，返回值是js的数据类型，还有函数function
    *           语法：type 变量              type空格变量
    *                 type(变量)             type括号变量
    *           var name1="marry"; //给变量赋值
    *           console.log(name1) //在浏览器页面程序中的console打印出来         这里是打印变量值             marry
                console.log(typeof(name1)) //在浏览器页面程序中的console打印出来 这里是打印变量的类型，      string
    *
    *
    *
    *
    *
    *
    *
    *
    *
    *
    *
    *
    *
    *
    * */