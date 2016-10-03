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
      <h1>Count from 1 to 100, if divisible by 3, "Fizz", if divisible by 5, "Buzz".<br>
	  If divisible by both, "FizzBuzz", otherwise just print the number</h1>
</div>

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

