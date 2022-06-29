input = document.getElementById("input_txt");
input.focus();
var scroller = document.querySelector(".chat");
scroller.scrollTop = scroller.scrollHeight;
document.getElementsByTagName("body")[0].addEventListener("keypress",(e)=>{
  if(e.key == "Enter"){
      console.log(input.value);
    setTimeout(() => {
      location.reload();
    }, 2000);
      
  }
})

function openForm() {
    document.getElementById("chat_div").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("chat_div").style.display = "none";
    document.getElementsByTagName("html").style.background="url(/Banner_3.jpg)";
  }
document.querySelector("togle_button").addEventListener("click", closeForm());