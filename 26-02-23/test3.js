/*function countWord(str) { 
    return str.split(" ").length;
  }
  var word="The quick brown fox jumps over the lazy dog."
  console.log(word)
  console.log(countWord(word))

function isTriplet(arr,n)
{
	for(var i=0;i<n;i++) {
		for(var j=i+1;j<n;j++) {
			for(var k=j+1;k<n;k++) {
				var x=arr[i]*arr[i] 
				var y=arr[j]*arr[j]
				var z=arr[k]*arr[k];
				if(x==y+z || y==x+z || z == x + y)
				return true;
			}
		}
	}
	return false;
}
	var arr=[3,1,4,6,5];
	var arr_size=arr.length;
	if(isTriplet(arr,arr_size) == true){
		console.log("True");
        console.log("There is a Pythagorean triplet (3, 4, 5)")
    }
	else{
		console.log("False");
		console.log("There is not a Pythagorean triplet (3, 4, 5)",(arr))
    }

	function occurrences(arr) {
		var counts={};
		for(var i=0;i<arr.length;i++) {
		  if(!counts[arr[i]]) {
			counts[arr[i]]=1;
		  } else {
			counts[arr[i]]++;
		  }
		}
		for (var key in counts) {
		  console.log(`${key}-${counts[key]}`);
		}
	  }
	  var arr=[2,4,4,5,2,6,6,5,7];
	  occurrences(arr);

	  function searchMatrix(matrix, target) {
		var numRows=matrix.length;
		var numCols=matrix[0].length;
		var row=0;
		var column=numCols-1;
		while(row<=numRows && column>=0) {
		  if(matrix[row][column]===target) {
			console.log(`Element ${target} is found at position (${row}, ${column})`);
			column--;
		  } else if(matrix[row][column]>target) {
			column--;
		  } else {
			row++;
		  }
		}
	  }
	  var matrix = [[-4,-3,-1,3,5],[-3,-2,2,4,6],[-1,1,3,5,8],[3,4,7,8,9]];
	  var target=3;
	  searchMatrix(matrix, target);*/
	  
	  function countWords(str) {
		var normalString=str.replace(/[\s\n\t]+/g, " ");
		var words=normalString.split(" ");
		return words.length;
	  }
	  const string = "One two         three\n four\tfive.";
	  console.log("No of words :",countWords(string)); 
			
	  