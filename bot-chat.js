console.log("version 1.2.1 chatbot thk");
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
		let system=sys+data[text];
		responsiveVoice.speak(data[text],"Thai Female");
		console.log(data[text]);
		document.getElementById("output").innerHTML=system;
	}else{
		let run=true;
		for(i in data){
			if(text.search(i)>-1){
				run=false;
				let system=sys+data[i];
		       console.log(data[i]);
				responsiveVoice.speak(data[i],"Thai Female");
		       document.getElementById("output").innerHTML=system;
			}
		}
		if(run){
			console.log("ไม่รู้เรื่องเลย ช่วยสอนหน่อย");
		document.getElementById("output").innerHTML="ไม่รู้เรื่องเลย ช่วยสอนหน่อย";
			responsiveVoice.speak("ไม่รู้เรื่องเลย ช่วยสอนหน่อย","Thai Female");
		}
		
	}
}

