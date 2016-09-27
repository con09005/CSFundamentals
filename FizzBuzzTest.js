<!DOCTYPE html>
<html>
<body>

<script>
	function printFizzBuzz(){

		var printArea = "";

		for(var i = 1; i <= 100; i++){
		//document.write(i);
			if(i % 3 == 0 && i % 5 == 0){
				printArea += "FizzBuzz, ";
			}else if(i % 3 ==0){
				printArea += "Fizz, ";
			}else if(i % 5 == 0){
				printArea += "Buzz, ";
			}else
				printArea += i +", ";
		}
			
		document.write(printArea);
	}

	
</script>

<div id="testArea">
      <h1>Count from 1 to 100, if divisible by 3, "Fizz", if divisible by 5, "Buzz".<br>
	  If divisible by both, "FizzBuzz", otherwise just print the number</h1>
</div>

<button onclick="printFizzBuzz()">Click me to Run!!</button>

</body>
</html>

