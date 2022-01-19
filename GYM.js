function validateForm()
{
    var name=document.Gymform.fname.value;
    if(name=="")
    {
        document.getElementById('username').innerHTML="Please enter name";
        return false;
    }
    if(name.length<3)
    {
        document.getElementById('username').innerHTML="Please enter valid name";
        return false;
    }
    if(!(isNaN(name)))
    {
        if(name.length<3)
        {
            document.getElementById('username').innerHTML="Please enter characters only";
            return false;
        }
    }
    var mbno=document.Gymform.phnum.value;
    
    if(mbno=="")
    {
        document.getElementById('phnum').innerHTML="Please enter mobile number";
        return false;
    }
    if((isNaN(mbno)))
    {
        document.getElementById('phnum').innerHTML="Please enter digits only"+mbno;
    }
    if(mbno.length!=10)
    {
        document.getElementById('phnum').innerHTML="Please enter 10 digit mobile number";
    }
     var dob=document.Gymform.dt.value;
    if(dob=="")
    { 
        document.getElementById('dt').innerHTML="Please enter dob";
        return false;
    }
   
    var dt=document.Gymform.dtt.value;
    if(dt=="")
    {
        document.getElementById('dtt').innerHTML="Please registration date";
        return false;
    }
    
    var wt=document.Gymform.wt.value;
    if(wt=="")
    {
        document.getElementById('wt').innerHTML="Please enter weight";
        return false;
    }
    var ht=document.Gymform.ht.value;
    if(ht=="")
    {
        document.getElementById('ht').innerHTML="Please enter height";
        return false;
    }
    var goal=document.Gymform.hgl.value;
    if(goal=="")
    {
        document.getElementById('hgl').innerHTML="Please enter goal";
        return false;
    }

var birthdate=new Date(document.getElementById('dt').value);

var month_diff = Date.now() - birthdate.getTime();


var age_dt = new Date(month_diff);


var year = age_dt.getUTCFullYear();


var age = Math.abs(year - 1970);
document.getElementById("age").innerHTML=age;
if(age<18)
{
    document.write(" sorry you will not get membership");
    return false;
}
if(age>18)
{
    var date1 = new Date(document.getElementById('dt').value);
    var date2 = new Date(document.getElementById('dt').value);


    var Difference_In_Time = date2.getTime() - date1.getTime();


    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    document.getElementById("days").innerHTML=Difference_In_Days;


    document.write("Total number of days between dates <br>" + date1 + "<br> and <br>" + date2 + " is: <br> " + Difference_In_Days);

}
createTable();
}
function createTable()
{
    var name=document.Gymform.fname.value;
    var mbno=document.Gymform.phnum.value;
    var dob=document.Gymform.dt.value;
    var age=document.Gymform.age.value;
    var days=document.Gymform.days.value;
    var arr=[name,mbno,dob,age,days];
    document.getElementById('reg').hidden=false;
    rn=1;
    cn=5;
    for(var r=0;r<parseInt(rn);r++)
    {
        var x=document.getElementById('myTable').insertRow(r);
        for(var c=0;c<parseInt(cn);c++)
        {
            var y=x.insertCell(c);
            y.innerHTML=arr[c];
        }
    }
}