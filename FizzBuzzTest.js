<!DOCTYPE html>
<html>
<body>

<script>	
	function printFizzBuzz(){
	var start = document.getElementById("startRange").value;
	var end = document.getElementById("endRange").value;
	var fizz = document.getElementById("fizzOn").value;
	var buzz = document.getElementById("buzzOn").value;
	
		for(i = start; i <= end; i++){
			if(i % fizz == 0 && i % buzz == 0){
				document.write("FizzBuzz<br>");
			}else if(i % fizz ==0){
				document.write("Fizz<br>");
			}else if(i % buzz == 0){
				document.write("Buzz<br>");
			}else
				document.write(i+"<br>");
		}
	}

</script>

<div id="testArea">
	This program will count from "Starting Number" to "Ending Number" by one, printing out each number as it progresses<br>
	If the number is divisible by "Print Fizz On" it will print "Fizz" to the screen<br>
	If the number is divisible by "Print Buzz On" it will print "Buzz" to the screen<br>
	If it is divisible by both "Print Fizz On" and "Print Buzz On" it will print "FizzBuzz" to the screen<br>
    Fill in the fields below<br>
	  <strong>Starting Number</strong> determines the number you start from<br>
	  <strong>Ending Number</strong> determines the number you count to<br>
	  <strong>Print Fizz On</strong> interval to print "Fizz"<br>
	  <strong>Print Buzz On</strong> interval to print "Buzz"<br>
</div>
<br>
<table>
	<tr>
		<td><label>Starting Number</label></td>
		<td><input type="number" id="startRange"></td>
	</tr>
	<tr>
		<td><label>Ending Number</label></td>
		<td><input type="number" id="endRange"></td>
	</tr>
	<tr>
		<td><label>Print Fizz On</label></td>
		<td><input type="number" id="fizzOn"></td>
	</tr>
	<tr>
		<td><label>Print Buzz On</label></td>
		<td><input type="number" id="buzzOn"></td>
	</tr>
</table>


<button onclick="printFizzBuzz()">Click me to Run!!</button>

</body>
</html>

