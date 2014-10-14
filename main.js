$(document).on('ready', function() {
	$(document).on('click', '.generategroups', function (){
		var names = getNames();
		console.log(names);
		var numChunks = prompt('How many groups do you want?');
		
		console.log(doneChunks);
		names = randomizer(names);
		var doneChunks = chunk(names, numChunks);
		renderGroups(names);
	});
});

function chunk (arr, numChunks) {
	var myArray = arr;
	var chunks = numChunks;
	var totalNumValues = myArray.length;
	var tempArray = [];
	var finishedChunks = [];
	var leftovers = totalNumValues % chunks;
	var mainChunkNum = (totalNumValues - leftovers) / numChunks;
	console.log(mainChunkNum);
	for (var i = 0; i < totalNumValues; i+= newChunkNum){
		if (leftovers > 0){
			var newChunkNum = mainChunkNum + 1;
			tempArray = myArray.slice(i, i+newChunkNum);
			finishedChunks.push(tempArray);
			leftovers--;
		}
		else {
			var newChunkNum = mainChunkNum;
			tempArray = myArray.slice(i, i+newChunkNum);
			finishedChunks.push(tempArray);
		}
	}
	console.log(finishedChunks);
	return finishedChunks;
}

function getNames () {
	var nameString = $('#nameinput').val();
	console.log(nameString);
	var nameArray = nameString.split(',');
	$('.groupholder').empty();
	return nameArray;

}

function randomizer (names) {
	var namesTemp = names;
	var randomize = prompt('Do you want them to be random groups?  Y/N');
	if (randomize.toUpperCase() === 'Y'){
		namesTemp = _.shuffle(namesTemp);
		return namesTemp;
	}
	else {
		return namesTemp;
	}
}

function renderGroups (names) {
	var namesTemp = names;
	

}
























