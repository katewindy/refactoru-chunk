$(document).on('ready', function() {
  
});

function chunk (arr, numChunks) {
	var myArray = arr;
	var chunks = numChunks;
	var totalNumValues = myArray.length;
	var tempArray = [];
	var finishedChunks = [];
	if (totalNumValues % chunks === 0){
		for (var i = 0; i < totalNumValues; i += chunks){
			tempArray = myArray.slice(i, i + chunks);
			finishedChunks.push(tempArray);
		}
	}
	else {
		var leftovers = totalNumValues % chunks;
		
	}
	console.log(finishedChunks);
	return finishedChunks;

}