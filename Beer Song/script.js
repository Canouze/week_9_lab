function song(){
	count=99;
	while(count>1){
		document.getElementById("para").innerHTML+=count+" bottles of beer on the wall, "+count+" bottles of beer<br>Take one down and pass it around, "+(count-1)+" bottles of beer on the wall<br><br>";
		count--;
	}
	document.getElementById("para").innerHTML+="1 bottle of beer on the wall, 1 bottle of beer<br>Take one down and pass it around, no more bottles of beer on the wall<br><br>No more bottles of beer on the wall, no more bottles of beer<br>Go to the store and buy some more, 99 bottles of beer on the wall<br><br>";
}
	