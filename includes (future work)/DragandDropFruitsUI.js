//***********************This code is used for the functionality part of drag and drop of the fruits learning process where the fruits are 
//fetched and they are dragged and droped as per their image and quiz scores are computed.

//function used to initiate where moving part is set and allowed.
var start = function(e) {
				e.dataTransfer.effectAllowed = 'move';
				e.dataTransfer.setData('iconId', e.target.id);
				e.dataTransfer.setDragImage(e.target, 0, 0);
				return true;
}
//function which initiates when the drop zone is enetered and returns value true.
var enter = function(e) {
				return true;
}
//function aids for the drop facility 
var over = function(e) {
				var iconId = e.dataTransfer.getData('iconId');
				var targetId = e.target.id;

				if (targetId.indexOf('icon') > -1) {
					return true;
				}

				return false;
}
//function used to drop the dragged object to the target
var drop = function(e) {
				var iconId = e.dataTransfer.getData('iconId');
				var icon = document.getElementById(iconId);
				e.target.appendChild(icon);
				e.stopPropagation();
				return false;
}
//function used to clear the data
var end = function(e) {
				e.dataTransfer.clearData('iconId');
				return true;
}
//function computes the result on basis of the right answer is dropped or not
var pollResults = function() {
				var score = document.getElementById('score');
				score.innerHTML = 0;
				var hitboxes = document.getElementById('dropzone-holder').children;
				for (var i = 0; i < hitboxes.length; ++i) {
					var hitbox = hitboxes[i];
					var dropzone = hitbox.lastElementChild;
					if (dropzone.children.length > 0) {
						dropzone.style.backgroundSize = '0';
						var dropzoneId = dropzone.id;
						var iconId = dropzone.firstElementChild.id;
						var dropzoneName = dropzoneId.substring(dropzoneId.indexOf('-') + 1);
						var iconName = iconId.substring(iconId.indexOf('-') + 1);
						dropzone.previousElementSibling.setAttribute('class', 'answer show');
						if (iconName == dropzoneName) {
							dropzone.previousElementSibling.src = '../images/raw/draganddrop/correct-green.png';
							score.innerHTML = parseInt(score.innerHTML) + 1;
						} else {
							dropzone.previousElementSibling.src = '../images/raw/draganddrop/wrong-red.png';
						}
					} else {
						dropzone.previousElementSibling.setAttribute('class', 'answer hide');
						dropzone.style.backgroundSize = '100% auto';
					}
				}
			//condition applied when all of the 10 results are true.
				if (parseInt(score.innerHTML) == 10) {
					alert('Congratulations! You won the game!\nClick OK to restart.');
					location.reload();
				}
}

setInterval(pollResults, 50);
//ShuffleIcons shuffules the dropzone container taking random images from the pool
var shuffleIcons = function() {
				var dropzoneContainer = document.getElementById('dropzone-container');
				var icons = dropzoneContainer.children;
				var fragment = document.createDocumentFragment();
				while (icons.length) {
					fragment.appendChild(icons[Math.floor(Math.random() * icons.length)]);
				}
				dropzoneContainer.appendChild(fragment);
}
//shuffledropzones function shuffles the drop zone holder
var shuffleDropzones = function() {
				var dropzoneHolder = document.getElementById('dropzone-holder');
				var dropzones = dropzoneHolder.children;
				var fragment = document.createDocumentFragment();
				while (dropzones.length) {
					fragment.appendChild(dropzones[Math.floor(Math.random() * dropzones.length)]);
				}
				dropzoneHolder.appendChild(fragment);
}

//when a JavaScript is loaded two of the functions are called namly shiffleIcons and ShuffleDropZones
window.onload = function() {
				shuffleIcons();
				shuffleDropzones();
}