function messageBox(message, options) {
	if(document.getElementById("dialog")) return;  //如果已经有弹窗，返回
	options = options || {};

	var width = options["width"] || 500;
	var height = options["height"] || 300;

	var dialog = document.createElement("div");
	var title = document.createElement("div");
	var content = document.createElement("div");
	var close=document.createElement("i");
	var prevOnKeyUpHandler = document.onkeyup;
	
	if (message.childNodes) {
		content.appendChild(message);
	} else {
		content.innerHTML = message; 
	}
			
	dialog.style.position = "absolute";
	dialog.style.top = "10%";
	dialog.style.left = "50%";
	dialog.style.marginTop = height / -10 + "px";	
	dialog.style.marginLeft = width / -2 + "px";
	dialog.style.width = width + "px";
	dialog.style.height = height + "px";
	dialog.style.background = "#FAFAFA";
	dialog.style.border = "1px solid #DDD";
	dialog.style.borderTopWidth = "0";
	dialog.id="dialog";


	close.style.position="absolute";
	close.style.right=5+"px";
	close.style.top=0;
	close.style.fontStyle="normal";
	close.style.cursor="pointer";
	close.innerHTML="x";


	title.style.height = "25px";
	title.style.background = "#EEE";
	title.style.borderBottom = "1px solid #DDD";
	title.style.paddingLeft = "5px";
	title.style.fontFamily = "Helvetica, Arial, sans-serif";	
	title.style.fontSize = "18px";	
	title.style.verticalAlign = "text-bottom";
	title.style.color = "#757575";
	title.appendChild(document.createTextNode(options["title"] || "Alert"));
	
	content.style.height = (height - 42) + "px";
	content.style.background = "#FFF";
	content.style.border = "1px solid #DDD";
	content.style.borderTopWidth = "0";
	content.style.margin = "0 5px 5px 5px";
	content.style.padding = "5px 5px";
	//{ word-wrap: break-word; word-break: normal;}
	content.style.wordWrap="break-word";
	content.style.wordBreak="normal";
	content.style.overflow="hidden";


		
	dialog.appendChild(title);	
	dialog.appendChild(content);
	dialog.appendChild(close);

	close.onclick=function(){    //x  可以退出弹窗
		if(dialog.parentNode){
			document.documentElement.removeChild(dialog);
			document.onkeyup = prevOnKeyUpHandler;	
		}
	}

	document.onkeyup = function(e) {	
		
		if (e.keyCode == 27) {   //esc按键可以退出弹窗
			if(dialog.parentNode){
				document.documentElement.removeChild(dialog);
				document.onkeyup = prevOnKeyUpHandler;	
			}
			
		}		
	}
	
	document.documentElement.appendChild(dialog);
	
}




