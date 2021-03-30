const explore = document.querySelector('h1');
const details = document.querySelector('.details');

function showMoreDetails() {
	explore.style.display = 'none';
	details.style.visibility = 'visible';
}

function showLessDetails() {
	explore.style.display = 'block';
	details.style.visibility = 'hidden';
}
