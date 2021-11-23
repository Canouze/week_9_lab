myArray=[];
gradeArray=[];

function submitOne(){
	b=(document.getElementsByName("cb"));
	for(let i=0; i<b.length; i++){
		if(b[i].checked==true){
			myArray.push(b[i].id);
		}
	}
	enterGrades();
}

function enterGrades(){
	for(let i=0; i<myArray.length; i++){
		gradeArray.push(prompt("Enter your grade in "+myArray[i]+" from 0-100"));
	}
	for(let i=0; i<gradeArray.length;i++){
		if(gradeArray[i]<0 || gradeArray[i]>100){
			alert("Sorry, you entered an invalid grade. Please try again.");
			gradeArray=[];
			enterGrades();
			return;
		}
		else{
			;
		}
	}
	(document.getElementById("First")).style.display="none";
	for(let i=0; i<myArray.length; i++){
		document.getElementById("para").innerHTML+=myArray[i]+": "+gradeArray[i]+"%<br>";
	}
	gradeCalc();
	(document.getElementById("Second")).style.display="block";
}

function gradeCalc(){
	add = 0;
	for(let i=0; i<gradeArray.length; i++){
		add+=parseInt(gradeArray[i]);
	}
	avg = add/gradeArray.length;
	if(avg>=85){
		document.getElementById("para").innerHTML+="<br><br>Overall your combined results (average of "+parseInt(avg)+"% from "+gradeArray.length+" subjects) equate to an A grade.";
	}
	else if(avg>=75){
		document.getElementById("para").innerHTML+="<br><br>Overall your combined results (average of "+parseInt(avg)+"% from "+gradeArray.length+" subjects) equate to a B grade.";
	}
	else if(avg>=65){
		document.getElementById("para").innerHTML+="<br><br>Overall your combined results (average of "+parseInt(avg)+"% from "+gradeArray.length+" subjects) equate to a C grade.";
	}
	else if(avg>=55){
		document.getElementById("para").innerHTML+="<br><br>Overall your combined results (average of "+parseInt(avg)+"% from "+gradeArray.length+" subjects) equate to a D grade.";
	}
	else if(avg>=45){
		document.getElementById("para").innerHTML+="<br><br>Overall your combined results (average of "+parseInt(avg)+"% from "+gradeArray.length+" subjects) equate to an E grade.";
	}
	else if(avg<45){
		document.getElementById("para").innerHTML+="<br><br>Overall your combined results (average of "+parseInt(avg)+"% from "+gradeArray.length+" subjects) equate to an F grade.";
	}
	else{
		;
	}
}
	