this.strSBGridPATH = '';
this.strSBGridTHEME = '';
try{
	if (SBpath){
		this.strSBGridPATH = SBpath + 'SBGrid/';
	}
	if(typeof(SBtheme) != 'undefined' ){
		if(SBtheme == 'gray' || SBtheme == 'navy'){
			this.strSBGridTHEME = '_' + SBtheme;
		}
	}
}
catch(e){
	this.strSBGridPATH = './';
}
this.strScript = '';
this.strScript +=

/* third-party */
'<script src="' + this.strSBGridPATH + 'js/lib/' 		+ 'json2.js' 											+ '" type="text/javascript"></script>' +
'<script src="' + this.strSBGridPATH + 'js/lib/' 		+ 'underscore-min.js'									+ '" type="text/javascript"></script>' +
'<script src="' + this.strSBGridPATH + 'js/lib/' 		+ 'jquery-sbgrid.min.js' 								+ '" type="text/javascript"></script>' +

/* data-structure */
'<script src="' + this.strSBGridPATH + 'js/lib/ds/' 	+ 'hashtable.js' 										+ '" type="text/javascript"></script>' +
'<script src="' + this.strSBGridPATH + 'js/lib/ds/' 	+ 'hashset.js'											+ '" type="text/javascript"></script>' +
'<script src="' + this.strSBGridPATH + 'js/lib/ds/' 	+ 'SBQueue.js' 											+ '" type="text/javascript"></script>' +
'<script src="' + this.strSBGridPATH + 'js/lib/ds/' 	+ 'SBStack.js' 											+ '" type="text/javascript"></script>' +

/* common */
'<link href="'  + this.strSBGridPATH + 'css/plugins/' 	+ 'poshytip-1.2/tip-darkgray/tip-darkgray.css' 			+ '" rel="stylesheet" type="text/css">' +
'<link href="'  + this.strSBGridPATH + 'css/plugins/' 	+ 'poshytip-1.2/tip-green/tip-green.css' 				+ '" rel="stylesheet" type="text/css">' +
'<link href="'  + this.strSBGridPATH + 'css/plugins/' 	+ 'poshytip-1.2/tip-skyblue/tip-skyblue.css' 			+ '" rel="stylesheet" type="text/css">' +
'<link href="'  + this.strSBGridPATH + 'css/plugins/' 	+ 'poshytip-1.2/tip-twitter/tip-twitter.css' 			+ '" rel="stylesheet" type="text/css">' +
'<link href="'  + this.strSBGridPATH + 'css/plugins/' 	+ 'poshytip-1.2/tip-violet/tip-violet.css'				+ '" rel="stylesheet" type="text/css">' +
'<link href="'  + this.strSBGridPATH + 'css/plugins/' 	+ 'poshytip-1.2/tip-yellow/tip-yellow.css'				+ '" rel="stylesheet" type="text/css">' +
'<link href="'  + this.strSBGridPATH + 'css/plugins/' 	+ 'poshytip-1.2/tip-yellowsimple/tip-yellowsimple.css'	+ '" rel="stylesheet" type="text/css">' +
'<link href="'  + this.strSBGridPATH + 'css/plugins/' 	+ 'jquery-ui' + this.strSBGridTHEME + '.css'										+ '" rel="stylesheet" type="text/css">' +
'<link href="'  + this.strSBGridPATH + 'css/plugins/' 	+ 'jquery.contextMenu' + this.strSBGridTHEME + '.css'					+ '" rel="stylesheet" type="text/css">' +

'<script src="' + this.strSBGridPATH + 'js/lib/' 		+ 'deps.js'												+ '" type="text/javascript"></script>';
document.write(this.strScript);