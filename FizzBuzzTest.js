<!DOCTYPE html>
<html>
<body>

<script>
	function printFizzBuzz(startRange, endRange, fizzOn, buzzOn){

		var printArea = "";

		for(startRange; startRange <= endRange; startRange++){
		//document.write(i);
			if(startRange % fizzOn == 0 && startRange % buzzOn == 0){
				printArea += "FizzBuzz, ";
			}else if(startRange % fizzOn ==0){
				printArea += "Fizz, ";
			}else if(startRange % buzzOn == 0){
				printArea += "Buzz, ";
			}else
				printArea += startRange +", ";
		}
			
		document.write(printArea);
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

<button onclick="printFizzBuzz(startRange, endRange, fizzOn, buzzOn)">Click me to Run!!</button>

</body>
</html>
