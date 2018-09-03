var error = document.getElementsByTagName('h1');
if (error && error.length == 1 && error[0].innerText == 'Access Denied') {
	console.log('ACM error page detected; redirecting...');
	var urlParts = window.location.href.split('/');
	var dlPage = 'https://dl.acm.org/citation.cfm?doid=' + urlParts[4] + '.' +  urlParts[5];
	var newSpan = document.createElement('span');
	newSpan.innerText = 'Redirecting to ';
	var newLink = document.createElement('a');
	newLink.href = dlPage;
	newLink.innerText = 'Digital Library page';
	newSpan.appendChild(newLink);
	document.body.appendChild(newSpan);
	window.location.href = dlPage;
}
