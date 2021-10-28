document.getElementById("check").onclick = function() {
	//入力された値を受け取るための変数num
	let num = document.getElementById("input");
	
	//numが素数かどうかを判断するためのboolean
	let pNum = true;
  
	//受け付けられない数値を検出した際に判定するためのboolean
	let err = true;
  
	//もし素数でなかった場合に約数を受け取るための配列
	let outNum = new Array();
	
	//値の範囲を設定
	if(num.value > 10000000 || num.value < 0 || isNaN(num.value) || num.value==''){
	alert("入力した値が範囲外か認識できない値です");
	err = false;
	} else {
		//入力された値が素数かどうかを判定、ついでにどの数が約数になっているか上の配列に抽出
		for(let i=2; i<num.value; i++){
			if(num.value%i == 0){
				pNum = false;
				outNum.push(i);
			}
		}
	}
	//素数かどうかを判定
	if(err == true && pNum == true) {
		alert(num.value + " は素数です");
	} else if(pNum == false){
	 	alert(num.value + " は " + num.value +" と１以外は "+ outNum +" が約数になっているので素数ではないです");
	 }
};
