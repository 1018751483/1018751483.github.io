a=0;
var arr=["image/bk1.jpg","image/bk2.jpg","image/bk3.jpg","image/bk4.jpg"];
var img=document.getElementById("imglunbo");
var circle1=document.getElementById("circle1");
var circle=document.getElementsByClassName("circle");
circle[0].style.backgroundColor="white";
// alert(getComputedStyle(circle[0],null).backgroundColor);
// var img=document.getElementById("img");


function huise(){
    for(var a=0;a<arr.length;a++)
    {
    circle[a].style.backgroundColor="rgba(105,101,101,.6)";
    }
}
//    把所有的小圈变成灰色的函数。

// 小圈的点击切换图片和本身颜色函数
circle1.onclick=function(){
    for(let b=0;b<arr.length;b++)
    {
        circle[b].onclick=function(){
            img.src=arr[b];
            huise();
            circle[b].style.backgroundColor="white";
            a=b;
        }
    }
}

// 这种方法也可以
// function onclick(){
//     for(let b=0;b<arr.length;b++)
//     {
//         circle[b].onclick=function(){
//             img.src=arr[b];
//             huise();
//             circle[b].style.backgroundColor="white";
//             a=b;
//         }
//     }
// }
// onclick();


var time;
    function start(){
        time=setInterval(function(){
            a++;
         
            if(a>=arr.length)
            {
                a=0;
                huise();
                circle[a].style.backgroundColor="white";
            }
            img.src=arr[a];
            huise();
            circle[a].style.backgroundColor="white";
          //  console.log("定时器"+a);
        },3000);
        img.onmouseover=function()
        {
            clearInterval(time);//鼠标移入图片就暂停轮播

        }
        img.onmouseout=function(){
            start();//鼠标移出图片又开始计时轮播
        }

        
           
    }
    start();

//发现个知识点，当点击了下一页图标时，a增加后，start函数读取的是a增加后的数值，
//也就是说下一页的点击事件触发后得到的变量还是全局变量（前提它本身原来就是定义成的全局变量）,可以利用这个点来解决右下角点击原点与定时器冲突问题



// var btn=document.getElementById("right").onclick=function()
// {

//     huise();
//     a++;
//     if(a<arr.length)
//         {
            
//             img.src=arr[a];
//             circle[a].style.backgroundColor="white";
          
//         }
//     else
//         {
//             a=0;
//             img.src=arr[a];
//             circle[a].style.backgroundColor="white";
            
//         }
//         console.log("按键"+a);
// }

// var btn=document.getElementById("left").onclick=function()
// {
//     huise();
//     a--;
//     if(a<0)
//     {
//         a=arr.length-1;
//         img.src=arr[a];
//         circle[a].style.backgroundColor="white";
//     }
    
//     else
//     {  
        
//         img.src=arr[a];
//         circle[a].style.backgroundColor="white";
//     }
// }

