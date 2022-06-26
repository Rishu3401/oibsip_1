
function insert1(num){
    document.form.textview.value=document.form.textview.value+num;
  }
  
  function equals2(){
    var txt=document.form.textview.value;
    if(txt)
    document.form.textview.value=eval(txt);
    else
      document.form.textview.value='ERROR'
      
  }
  
  function clean3(){
    document.form.textview.value="";
  }
  
  function back3(){
    var txt=document.form.textview.value;
    document.form.textview.value=txt.substring(0,txt.length-1);
  }