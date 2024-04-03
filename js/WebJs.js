//外联js必须先等网页加载好才载入js
window.addEventListener("load", function () {


   //这是让数字加载的代码
   function ShuZiJiaZai() {

      //获取html里类名为shuzi的代码
      let shuzi = this.document.querySelector(".shuzi");
      let NeiRon = document.querySelector(".NeiRon");
      let NeiRon2 = document.querySelector(".NeiRon2");

      //设置一个num为0的变量
      let num = 0;

      //设置一个定时器，每100毫秒就调用一次定时器让num加1。
      let time = setInterval(() => {

         num++

         //用innerhtml写入HTML代码里
         shuzi.innerHTML = "loading" + num + "%";

         //如果到100秒就清除这个定时器
         if (num >= 100) {
            this.clearInterval(time);

            //让第一个内容执行css消失动画 随后第二个内容出现
            NeiRon.style.animation = "hide 1s forwards";
            setTimeout(function () {
               NeiRon.style.display = "none";
               NeiRon2.style.display = "block";
            }, 1100);

         }

      }, 100);
   }

   ShuZiJiaZai();
   //这是让数字加载的代码

   //一个平平无奇的动画代码   obj是物体位置  target是终点位置  overtime是多少毫秒调用一次定时器
   function animate(obj, target, overtime) {

      //每次调用时清除旧定时器
      clearInterval(obj.time);
      //定时器
      timer = setInterval(function () {

         //终点位置减去原本位置除10 就是每秒移动的一个渐变效果
         var step = (target - obj.offsetLeft) / 10;
         step = step >= 0 ? Math.ceil(step) : Math.floor(step);

         //如果到达终点就清除定时器
         if (obj.offsetLeft >= target) {
            clearInterval(timer)
         }

         //让物体每秒移动
         obj.style.left = obj.offsetLeft + step / 10 + "px";
      }, overtime);

   }
   //一个平平无奇的动画代码


   //使用动画代码让小狮子动起来
   let xsz = this.document.querySelector(".xsz");
   animate(xsz, 280, 75)
   //使用动画代码让小狮子动起来


   //这是让炮竹变大小的函数方法
   function pzdaxiao() {
      let pz = this.document.querySelector(".pz");
      let pz2 = document.querySelector(".pz2")

      let value = 0.7;

      let big = setInterval(function () {
         //每50毫秒就让value+0.01数值
         value += 0.01;
         //改变炮竹大小的值
         pz.style.transform = "scale(" + value + ")";
         pz2.style.transform = "scale(" + value + ")";
         //如果到了最大值就清除这个定时器在调用变小的函数方法
         if (value >= 0.8) {
            clearInterval(big);
            //这个就是调用变小函数代码
            small();
         }
      }, 50);

      //这个跟变大差不多
      function small() {
         let small = setInterval(function () {
            value -= 0.01;
            pz.style.transform = "scale(" + value + ")";
            pz2.style.transform = "scale(" + value + ")";
            if (value <= 0.7) {
               clearInterval(small);
               //这里又调用外面的让炮竹变大变小
               pzdaxiao();
            }
         }, 50);
      }

   }
   //调用炮竹变大变小
   pzdaxiao();
   //这是让炮竹变大小的函数方法



   //这是一坨屎山代码，不建议深入了解所以里面不注释了 ，作用是让烟花随机出现变大和不透明变透明
   function yanhua() {
      let yanhua = this.document.querySelector(".yanhua");
      let yanhua_img = yanhua.querySelectorAll("img");
      let val = 0;
      let val2 = 0;


      //随机数
      let ShuZiRandom = Math.floor(Math.random() * yanhua_img.length);
      let ShuZiRandom2 = Math.floor(Math.random() * yanhua_img.length);


      let show = setInterval(function () {
         val += 1;
         val2 += 0.1;
         yanhua_img[ShuZiRandom].style.opacity = val / 10;
         yanhua_img[ShuZiRandom2].style.opacity = val / 10;

         yanhua_img[ShuZiRandom].style.transform = "scale(" + val2 + ")";
         yanhua_img[ShuZiRandom2].style.transform = "scale(" + val2 + ")";
         if (val >= 10 && val2 >= 1) {
            clearInterval(show)
            hide()
         }
      }, 100)


      function hide() {
         let hide = setInterval(function () {
            val -= 1;
            val2 -= 0.1;
            yanhua_img[ShuZiRandom].style.opacity = val / 10;
            yanhua_img[ShuZiRandom2].style.opacity = val / 10;
            if (val <= 0 && val2 <= 0) {
               clearInterval(hide);

            }
         }, 100)

      }

   }



   yanhua();
   this.setInterval(function () {
      yanhua();
   }, 2000)

   //这是一坨屎山代码，不建议深入了解所以里面不注释了 ，作用是让烟花随机出现变大和不透明变透明



   //这是内容2加载下一个页面代码
   let nextbtn = this.document.querySelector(".nextbtn");
   let Neiron2 = this.document.querySelector(".NeiRon2")
   let Neiron3 = this.document.querySelector(".NeiRon3");
   nextbtn.addEventListener("click", function () {
      Neiron2.style.animation = "hide 1s forwards";
      setTimeout(function () {
         Neiron2.style.display = "none"
         Neiron3.style.display = "block";
      }, 1100)

   })

   //这是音乐控件
   let btnmusic = this.document.querySelector(".yinyue");
   let bgmusic = this.document.querySelector(".bgmusic");

   btnmusic.addEventListener("click", function () {
      // 如果音乐是暂停就播放，是播放就暂停
      if (bgmusic.paused) {
         bgmusic.play();
         btnmusic.style.animation = "musicrotate 3s linear infinite";
      } else {
         bgmusic.pause();
         btnmusic.style.animation = "null";
      }

   })

   //这是内容3加载下一个页面代码
   function Neiron3_next() {
      let NeiRon3 = document.querySelector(".NeiRon3");
      let next_btn = document.querySelector(".btn");
      let Neiron4 = document.querySelector(".NeiRon4");
      next_btn.children[1].addEventListener("click", function () {
         NeiRon3.style.animation = "hide 2s forwards";
         setTimeout(function () {
            NeiRon3.style.display = "none";
            Neiron4.style.display = "block";
         }, 2000)
      })
   }

   Neiron3_next();



   //这是内容4答题页面
   function Neriron4_dl() {
      //通过类名获取到内容四里面各种的控件
      let Neiron4 = document.querySelector(".NeiRon4");
      //获取答题灯笼
      let datidl = Neiron4.querySelector(".datidl");
      //获取问题页面
      let wenti = Neiron4.querySelector(".wenti");
      //获取问题页面下一个按钮
      let wenti_next_btn = document.querySelectorAll(".next_btn");
      //获取问题abcd的按钮
      let yes_daan = document.querySelectorAll(".yes");
      //获取点击错误答案出现的答错页面
      let error = document.querySelectorAll(".error");
      //定义一个number来看灯笼有几个选对如果超过5个就让祝福语按钮出现
      let number = 0;
      //这里是主要获取祝福语类名
      let zhufu = document.querySelector(".zhufu");
      //获取到最后页面的img图片页面
      let lastimg = document.querySelector(".lastimg");
      //获取最后重置页面的按钮
      let allreturn = document.querySelector(".return");

      //循环检测灯笼点击出现
      for (let i = 0; i <= datidl.children.length - 1; i++) {

         //通过循环看点击了哪一个灯笼
         datidl.children[i].addEventListener("click", function () {

            //被点击的那个灯笼出现答题页面
            wenti.children[i].style.display = "block";

            //判断答案模块，一点击下一步就就判断
            wenti_next_btn[i].addEventListener("click", function () {

               //如果答题input按钮class有“yes”而且被选中，那么就为true执行这一步
               if (yes_daan[i].checked == true) {

                  //答对的计数加1
                  number++;

                  //关闭这个元素的父亲，也就是答题页面
                  this.parentElement.style.display = "none";

                  //把这个灯笼的图片替换
                  datidl.children[i].src = "img/Neiron4/答对灯笼.png";

                  //把这个灯笼的动画关掉
                  datidl.children[i].style.animation = "null";

                  //如果答对的次数大于等余6就让祝福语按钮出现
                  if (number >= 6) {
                     zhufu.style.animation = "Move 2s forwards";
                  }
                  } else {
                     //让错误页面出现的动画执行
                     error[i].style.animation = "error_opacity 2s linear 1";

                     //俩秒后就把动画值设无才能再次触发
                     setTimeout(function () {
                        error[i].style.animation = "null";
                     }, 2000);

                  }

            });

         })
      }

      //祝福语页面操作
      zhufu.addEventListener("click", function () {
         //让图片出现
         lastimg.children[0].style.display = "block";
         lastimg.children[0].style.animation = "lastanimation 1s forwards";
         //让按钮出现
         lastimg.children[1].style.display = "block";
         lastimg.children[1].style.animation = "lastanimation 1s forwards";
      })

      //从头再来的重置按钮
      allreturn.addEventListener("click", function () {
         window.open("Myhtml2.html")
      })

   }

   Neriron4_dl();

});