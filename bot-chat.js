
var sys="ระบบ : ";
var data={
	"สวัสดี":"สวัสดีจ้า",
	"ทำอะไรอยู่":"กินข้าว"
};
function training(key,text){
	data[key]=text;
	console.log("คุณได้สอนคำว่า "+key+" ให้ตอบว่า "+text);
}
function processing(){
	let text=document.getElementById("input").value;
	if(data[text]!=undefined){
		document.getElementById("output").innerHTML=sys+data[text];
	}else{
		document.getElementById("output").innerHTML="ไม่รู้เรื่องเลย ช่วยสอนหน่อย";
	}
}

