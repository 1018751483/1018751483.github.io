var d1 = new Date();  // 获取当前系统时间 我现在的时间是 2020年9月16日 星期三
d1.getFullYear();    // 获取年信息， 2016
d1.getMonth();      // 获取月信息（从0开始 范围：0-11） 3
d1.getDate();      // 获取天信息 此处结果：25
d1.getDay();      // 获取星期信息 （0-6） 此处结果： 1 


var center=document.getElementById("center");
var year=d1.getFullYear();
var my_day=d1.getDate();//获取当前是几号
var month=d1.getMonth()+1;//这种方法获取的month比实际少一月，需要加一吗？见下面（比如我们需要获取3月，这里获取的其实是2）
var table=document.getElementById("table");
center.innerHTML=year+"年"+month+"月";//为了初始化显示方便，上面month+1
var shangyiye=document.getElementById("shangyiye");
var xiayiye=document.getElementById("xiayiye");
var td=table.getElementsByTagName("td");
var nor_month=[31,28,31,30,31,30,31,31,30,31,30,31];
var month_olympic=[31,29,31,30,31,30,31,31,30,31,30,31];

//建立一个函数获取某月第一天星期几
function firstday(month,year)
{
  var dayone=new Date(year,month,1);
  return (dayone.getDay());//getDay()方法专门用来获取星期几
}

//建立一个函数获取最后一天是星期几
function lastDay(month,year)
{
  var last=new Date(year,month,totalDay(month,year));
  return (last.getDay());
}

 //建立一个函数来判断某月的总天数
 function totalDay(month,year)
 {
  if((year%4==0&&year%100!=0)||year%400==0)//判断年份是否为闰年
 {
   return (month_olympic[month-1]);//这边由于月份在数组中，相当于加了一，所有上面不用加一（2就刚好在数组中第三个，正好是3月）上面加了1，这里减1
 }
  else{
     return (nor_month[month-1]);
   }
 }




//创建一个函数来显示当月具体日期信息
function show()
{
  var str="";//空格
  for(var i=0;i<6;i++)
{
table.innerHTML+= "<tr>" +
            "<td></td>" +
            "<td></td>" +
            "<td></td>" +
            "<td></td>" +
            "<td></td>" +
            "<td></td>" +
            "<td></td>" +
          "</tr>";
}

var totalDays=totalDay(month,year);//获取当月的总天数
var week=firstday(month-1,year);//获取当月的1号星期几
//  var lastd=lastDay(month-1,year);//获取当月最后一天星期几
//alert(week)
for(var m=0;m<week;m++)
{
 td[m].innerHTML="";
}
var j=week;
for(var k=1;k<=totalDays;k++)
{

td[j].innerHTML =k;
if((k<my_day && year==d1.getFullYear() && month==d1.getMonth()+1) || year<d1.getFullYear() || ( year==d1.getFullYear() && month<d1.getMonth())){ 
<<<<<<< HEAD
   td[k+1].style.color="#a8a8a8"; //当该日期在今天之前时，以浅灰色字体显示
}else if (k==my_day && year==d1.getFullYear() && month==d1.getMonth()+1){
  // alert(my_day)
  td[k+3].style.color="#6ac13c"; //当天日期以绿色背景突出显示，当天日期显示有问题
  td[k+3].style.border="1px solid #6ac13c";
  td[k+3].style.backgroundColor="#e9f8df";
  }else{
    td[k+3].style.color="#565656"; //当该日期在今天之后时，以深灰字体显示
  }
j++;
if(j>=totalDays)
{
  td[j].innerHTML ="";
  td[j+1].innerHTML ="";
  td[j+2].innerHTML ="";
  td[j+3].innerHTML ="";
  td[j+4].innerHTML ="";
  td[j+5].innerHTML ="";
  td[j+6].innerHTML ="";
//这方法简直超级超级笨啊，求优化！！！！
}
=======
   td[k-1].style.color="#a8a8a8"; //当该日期在今天之前时，以浅灰色字体显示
}else if (k==my_day && year==d1.getFullYear() && month==d1.getMonth()+1){
  // alert(my_day)
  td[k-1].style.color="#6ac13c"; //当天日期以绿色背景突出显示，当天日期显示有问题
  td[k-1].style.border="1px solid #6ac13c";
  td[k-1].style.backgroundColor="#e9f8df";
  }else{
    td[k-1].style.color="#565656"; //当该日期在今天之后时，以深灰字体显示
  }
j++;

>>>>>>> update

}
}

show();




shangyiye.onclick=function()
{
  if(month>1)
  {
    month=month-1;
    center.innerHTML=year+"年"+month+"月";
    show();
   }
  else
  {
    month=12;
    year=year-1; 
    center.innerHTML=year+"年"+month+"月";
    show();
  
  }
 

}


xiayiye.onclick=function()
{

  if(month==12)
  {
    month=1;
    year=year+1;
    center.innerHTML=year+"年"+month+"月";
    show();
  }
  else
  {
   
    month=month+1;
    center.innerHTML=year+"年"+month+"月";
    show();
    
  }

}

