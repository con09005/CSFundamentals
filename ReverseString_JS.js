<!DOCTYPE html>
<html>
<body>

<script>	
	function Reverse(){
	var forwardString = document.getElementById("startWord").value;
	
	var splitForwardString = forwardString.split("");
	var splitReverseString = new Array();
	var count = 0;
		for (i = splitForwardString.length -1; i >= 0; i--){
			splitReverseString[count] = splitForwardString[i];
			count++;			
		}
	var finalString = splitReverseString.join("");
		
	document.getElementById("reverseWord").value = finalString;
	}

</script>

<div id="testArea">
	Enter a word or sentence and it will be reversed!
</div>
<br>
<table>
	<tr>
		<td><label>Starting Word</label></td>
		<td><input type="text" id="startWord"></td>
	</tr>
	<tr>
		<td><label>Word Reversed</label></td>
		<td><input type="text" id="reverseWord"></td>
	</tr>
</table>


<button onclick="Reverse()">Click me to Run!!</button>

</body>
</html>

