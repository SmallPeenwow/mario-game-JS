import { hideControlsDialog } from '../dialog/ControlsDialog.js';
import { makeDisplayNone } from '../dialog/DialogFunctions.js';

const controlKey = document.querySelector('#controlButton');
const controlDesc = document.querySelector('#controlDesc');

let keyArrayValues = ['W', 'D', 'A', 'S'];

function controlInformation(value) {
	switch (value) {
		case 'W':
			controlKey.innerText = 'D';
			controlDesc.innerText = 'to move right';
			break;

		case 'D':
			controlKey.innerText = 'A';
			controlDesc.innerText = 'to move left';
			break;

		case 'A':
			controlKey.innerText = 'S';
			controlDesc.innerText = 'to move down';
			break;

		case 'S':
			makeDisplayNone();
			hideControlsDialog();
			break;
	}
}

export function checkKeysEntered(key) {
	if (keyArrayValues[0] === key) {
		controlInformation(key);
		keyArrayValues.splice(0, 1);
	}
}
