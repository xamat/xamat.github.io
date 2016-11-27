//	Javascript to tag file downloads and external links in Google Analytics
//	To use, place reference to this file should be placed at the bottom of all pages, 
//	just above the Google Analytics tracking code.
//	All outbound links and links to non-html files should now be automatically tracked.
//
//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//	Created by: 	Colm McBarron, colm.mcbarron@iqcontent.com
//	Last updated: 	12-Feb-2006
//
//	Updated by:		Niamh Phelan niamh.phelan@iqcontent.com
//	On:				22-Jul-2008
//	For:			Upgrade to ga.js	
//
//	Updated by:		Peter McKenna peter.mckenna@iqcontent.com
//	On:				07-Nov-2008
//	For:			Track mailto: links and restructure how virtual
//          		pageviews are structured
//
//	Updated by:		Peter McKenna peter.mckenna@iqcontent.com
//	On:				19-Feb-2009
//	For:			Fixed up some problems with how Internet 
//					Explorer 6 was tracking links, and some minor
//					Firefox issues.
//	+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
var hrefs = document.getElementsByTagName("a");
var link_path = "";

for (var l = 0; l < hrefs.length; l++) {
		try {
			// Add the hostname and link location into variables
			var link_path = hrefs[l].pathname;
			var link_location = String(hrefs[l]);

			// Check if it's a mail link
			if (link_location.match(/^mailto:/i)) 
			{
				addmailtotrackerlistener(hrefs[l]);
			}
			// Check to see if the link is an internal link
			else if (location.host == hrefs[l].hostname) 
			{
				if(link_path.match(/\.(doc|pdf|xls|ppt|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3)$/)) 
				{
					addtrackerlistener(hrefs[l]);
				}
			}
			else 
			{
				addtrackerlistener(hrefs[l]);
			}
		}
		catch(err) { }
}


// Add a listener to matching file links
function addtrackerlistener(obj) {
	if (obj.addEventListener) {
		obj.addEventListener('click', trackfiles, true);
	} else if (obj.attachEvent) {
		obj.attachEvent("on" + 'click', trackfiles);
	}
}


// Add a special listener to mailto: links
function addmailtotrackerlistener(obj) {
	if (obj.addEventListener) {
		obj.addEventListener('click', trackmailto, true);
	} else if (obj.attachEvent) {
		obj.attachEvent("on" + 'click', trackmailto);
	}
}


// Track file links
function trackfiles(array_element) {
	var file_path = "";
	// Track an external link
	var destination_host = (array_element.srcElement) ? array_element.srcElement.hostname : this.hostname;
	if (location.host != destination_host){
		file_path = "/virtual/exlink/" + cleanURL(window.location, true) + '/' + ((array_element.srcElement) ? array_element.srcElement.hostname : this.hostname);
		file_path = file_path + ((array_element.srcElement) ? "/" + cleanURL(array_element.srcElement.pathname, false) : this.pathname);
	}
	// Track an internal link
	else {
		file_path = ((array_element.srcElement) ? "/" + array_element.srcElement.pathname : this.pathname);	
		var file_details = file_path.split('/');
		file_path = cleanURL(window.location, true) + '/' + file_details[(file_details.length-1)];
		file_path =  (("/virtual/download/") + file_path);
	}
	pageTracker._trackPageview(file_path);
}

// Generate page view for a mailto: link
function trackmailto(array_element) {
	var email = ((array_element.srcElement) ? array_element.srcElement.href : this.href).substring(7);
	var url = cleanURL(window.location, true);
	var mail_path = '/virtual/mailto/'+url+'/'+email;
	pageTracker._trackPageview(mail_path);
}

// Clean leading & trailing slashes
function cleanURL (url, end) {
	var url = url.toString();
	var urlLen = url.length;
	
	if (end) {
		if (url.charAt((urlLen-1))=='/')
			url = url.substring(0,(urlLen-1));
	}
	else {
		if (url.charAt(0)=='/')
			url = url.substring(1,urlLen);
	}
	return url;
}