
/*操作符
     算数操作符，赋值操作符，比较操作符，三元操作符，逻辑操作符，*/

/*
     1、算数操作符，
         最终的返回值为number，当参数不是数值的话就结果是NaN

         1.1       ①递增
                    a++  反回原值a，再返回递增之后的数值a        相当于a，a+1
                    ++a  返回递增之后的数值a                     相当于a+1
                ② 递减
                    a--  反回原值a，再返回递减之后的数值a        相当于a，a-1
                    --a  返回递增之后的数值a                     相当于a-1
                ③ 加+减-乘*除/求余取模%

               下面是两种递增写法的比较
           var number1 = 10;
            var number2 = 3;
            console.log(number1);//10
            number3 = ++number1+ number2;    //++写在前面，返回number1+1值   来跟number2   相加   得到11+3=14
            console.log(number1);//11       //  上面的语句中number1  递增了，所以是10+1，
            console.log(number3);//14

            var num1 = 10;
            var num2 = 3;
            console.log(num1);//10
            num3 = num1++ + num2;         //++写在后面，先返回num1值，  来跟num2   相加   得到10+3=13    这里没有二次返回所以并没有用到num1+1 值
            console.log(num1);//11        //  上面的语句中num1  递增了，所以是10+1，     不管它返回什么是给别人计算，它自己是已经被改变了！！！！
            console.log(num3);//13

       1.2 隐式转换：
                var a = 10;
                var b = "3";
                var c = "xiaomi";
                console.log(a * b);  //30         在这里 数字 * 数字字符 ，它把 数字字符 换成 数字，来跟数字相乘！！！！！！！！！！ 问题:为啥？？？
                console.log(a * c);  //NaN

                console.log(a);//10
                d = ++a + b;                      //返回a+1的值来跟b相加    ，赋值给d,  这里b是"3"
                console.log(a);//11
                console.log(d);//113              在这里 数字+ 数字字符  ，它把 数字 换成 数字字符，来跟字符相连接！！！！！ 问题？？、为啥在这是连接
                                             // 因为算数运算符中+ 还可以表示链接的作用，只要有匀运算中的其中一个是字符，那么就会被当做是字符之间的连接。
                console.log(a-b);// 11-3=8        在这里 数字- 数字字符  ，它把 数字字符 换成 数字，来跟数字相减！！！！！！！！！！ 问题:为啥？？？
                算数操作符，最终的返回值为number，当参数不是数值的话，它先尝试转换改为数值计算，无法转换就出示结果为NaN,
                在上面语句中，b作为字符但是先是被计算符尝试改为number成功了所以结果是6    。
                这其实是隐式类型转换，在编写js的时候就很方便，不需要我们额外花时间精力去转换类型！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

 */

/*
    2、赋值操作符
        简单赋值：=
        复杂赋值：+=    -=     *=   /=    %=     用来简化赋值操作
*/


/*
    3、比较操作符
        >   <    <=    >=    ==   ===    !=    !==

       ==    只比较两个变量的值是否  相等，                           返回的是布尔值
       ===   比较值是否 相等 的同时，还比较两个变量的类型是否 相等    返回的是布尔值
       ！=   只比较两个变量的值是否  不相等，返回的是布尔值           返回的是布尔值
       ！==   比较值是否 不相等 的同时，还比较两个变量的类型是否 不相等，返回的是布尔值

        var x=5, y="5",z=10;
        console.log(x==y);// true     只比较x y的值是否相等，            所以相等为真
        console.log(x===y);// false    比较x y 的值相等，但是类型不一样，所以相等为假
        console.log(x!=y);//  false    比较x y的值是相等的，             所不等为假
        console.log(x!==y);// true     比较值相等，类型不等，            所以不等为  真
        console.log(y!=z);// true
        console.log(y!==z);// true

        onsole.log(null==undefined);// true     他们都是没有值的，
        console.log(null===undefined);// false  他们都是没有值的，但是类型不同
*/

/*
    4、三元操作符：就是三个元素操作符
       语法：条件？执行代码1：执行代码2
       说明：可以代替简单的if语句。如果条件成立，执行代码1，否则执行代码2
             简单的代码，用三元操作符要比if语句效果来的更高。

        var soce=100;
        var result=soce>60?"及格":"不及格";
        console.log(result);// 及格

        还可以这样
        var soce=65;
        var result=soce>80?"优秀":soce>60?"良好":"不及格";        这是自己研究出来的，可不可以这样用，会不会有什么问题？？？？？？
        console.log(result);// 良好

*/


/*
    5、逻辑操作符 ：或与非  ，返回值，Boolean类型
    ||    &&    ！
*/
/*
      5.1  &&  逻辑与
        【 只要一个为假就为假，都为真才为真，但是这个假不一定是false值，真也不一定是true】
         说明：在前后两个操作数中，如果存在不是布尔值的情况（可以隐式转换为布尔类型来做逻辑与）， 不一定会有返回值。这种情况，遵循下列规定
                var xi =20;
                var a1=20,a2=30,a3=40;
                var mi="hello";
                console.log(a1<a2  &&  a2<a3); //true   两个都是布尔类型的，最终返回布尔类型
                console.log(mi   &&  a1<a2); //true   第一个不是布尔类型，第二个是布尔类型，  返回第二个的 布尔值 true
                console.log(mi   && a1>a2); //false  第一个不是布尔类型，第二个是布尔类型，  返回第二个的 布尔值 false
                console.log(a1>a2   && mi); //false  第一个不是布尔类型，第二个是布尔类型，  返回第二个的 布尔值 false
                console.log(a1<a2&& mi); //hello     第一个是布尔类型，  第二个不是布尔类型，返回第二个的 值
                console.log(xi   && mi); //hello     两个都不是布尔类型，返回第二个的 值
                console.log(a1<a2 &&a1<a3&& a2<a3); //true   三个都是布尔类型的，最终返回布尔类型
                console.log(mi &&a1<a3&& a2<a3); //true     三个都是布尔类型的，最终返回布尔类型
                console.log(a1<a2 &&a1<a3&& mi); //hello    第三个都是布尔类型的，返回第三个的值
                console.log(mi &&a1<a3&& xi); //20
                console.log( 0 &&a1<a3&& xi); //0
                console.log( null &&a1<a3&& xi); //null
                console.log( undefined &&a1<a3&& xi); //undefined
                console.log( undefined && null && " "); //undefined
                console.log(  null &&undefined && " "); //null
                console.log(  " " && null &&undefined); //null
                console.log(  " " && undefined); //undefined
                console.log(null && 0<a3&& xi); //null
                console.log( xi&& 0 &&null ); //0
                console.log( 0&&  " " ); //0
                console.log(  " " && 1); //1
                console.log(  "" && 1); //      这样就是什么都没有看到
                console.log( xi&& xi==mi &&null ); //false
                console.log( xi&& xi*mi &&null ); //NaN

               /* 上面总结就是  逻辑与  返回的值
                   " " ,空格字符串          为真值
                   "" , 空字符串            为假值
                   0，                      为假值
                   null，                   为假值
                   undefined，              为假值
                   NaN ，                   为假值
                   设计一个逻辑与操作有n个操作数
                   逻辑与就是从左往右看每个操作数，只要遇到为false的操作数，就根据它的类型来返回值，为布尔类型就返回false，不是布尔类型就返回它相应的假值。
                   如果前面的n-1个操作数都是真的，那么就看最后一个了，最后一个位布尔类型就返回 true或 false，如果不是布尔类型就返回它的值。
*/

/*
      5.2  ||  逻辑或
              【 只要一个为真就为真，都为假才为假，但是这个假不一定是false值，真也不一定是true】
                 var t1=10,t2=20,t3=30,num="10",name="mi";
            console.log( 1  || " "); //    1
            console.log( t1 ||  " "); //   10
            console.log( num ||  " "); //  10
            console.log( 0 ||  " "); //          这样就是什么都没有看到
            console.log( null ||  " "); //      这样就是什么都没有看到
            console.log( null ||  t3==num ); //   false
            console.log( null ||  t3 ); //  30
            console.log( null ||  t1==num ); //   false
            console.log( null ||  0 ); //   false
          /* 设计一个逻辑与操作有n个操作数
               逻辑或就是从左往右看每个操作数，只要遇到为true的操作数，就根据它的类型来返回值，为布尔类型就返回true，不是布尔类型就返回它相应的值。
               如果前面的n-1个操作数都是假的，那么就看最后一个了，最后一个位布尔类型就返回 true或 false，如果不是布尔类型就返回它的值。
*/

/*
      5.3  ！  逻辑非  ！！！！这个终于正常 ！！！！！！！！！！不管是判断什么类型的值，都是返回布尔值。
           逻辑非，就是判断这个数  是否 不是 真值！
            console.log( !1); //    false
            console.log( !" "); //  false
            console.log( !""); //   true
            console.log( !0); //    true
            console.log( !null); // true
            console.log( ! t1==num); // false
           console.log( !!1); //    true       !1 为false，再对false取反   ，！false为真    多个！！就一级级取反。
            在逻辑非中，就是判断这个数，如果的确不是真值就返回 真true，如果是真值就返回假false。
*/