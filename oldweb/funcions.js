
//canvia el color de fons d'un element del document
function setBackgroundColor(id, bgcolor) {
    if (document.getElementById) {
        document.getElementById(id).style.backgroundColor = bgcolor;
    }
}

function getWinNm() {
// Genera un nom de finestra per a poder-ne obrir més d'una
///////////////////////////////////////////////////////////
  var now = new Date();
  var hr = new String(now.getHours());
  var mn = new String(now.getMinutes());
  var sc = new String(now.getSeconds());
  var ms = new String(now.getMilliseconds());
  var winNm = hr + mn + sc + ms;
  return winNm;
}

//canvia l'adreça a la mateixa finestra
function canvi(w) {
	location.href=w;
	}

function oWin(adr, x, y, z) {
// Obre una finestra nova amb els paràmetres passats o per defecte.
// El paràmetre 'z' obre una finestra sense barres d'estat ni botons
////////////////////////////////////////////////////////////////////
/* Exemples de crida
adr             oWin('blanc.htm')
adr,x,y         oWin('blanc.htm', '100', '100')
*/

  var nargs = new Number(arguments.length);
  var xdef = new String('750');
  var ydef = new String('450');
	var zdef = new String('0');
	var propietats = new String('');

	if(nargs<4) z = zdef;
  if((nargs<3)||(x=='')) {
    x = new String(xdef);
    y = new String(ydef);
  }
/*	if(z==0) {
		propietats = ',menubar=yes,resizable=yes,scrollbars=yes,status=yes';
	}
	if(z==1) {
		propietats = ',menubar=no,resizable=no,scrollbars=no,status=no';
	}
	if(z>1) {
		propietats = ',menubar=yes,resizable=yes,scrollbars=yes,status=yes';
	}
*/  var messWin = window.open(adr,getWinNm(),'width='+ x + ',height=' + y + propietats);
}



function oWinBotons(adr, x, y) {
// Obre una finestra nova amb els paràmetres passats o per defecte.
//////////////////////////////////////////////////////////////////
/* Exemples de crida
adr             oWin('blanc.htm')
adr,x,y         oWin('blanc.htm', '100', '100')
*/

  var nargs = new Number(arguments.length);
  var xdef = new String('750');
  var ydef = new String('450');

  if(nargs<3) {
    x = new String(xdef);
    y = new String(ydef);
  }

  var messWin = window.open(adr,getWinNm(),'width='+ x + ',height=' + y + ',menubar=yes,resizable=yes,scrollbars=yes,statusbar=yes,toolbar=yes,status=yes');
}

function avisEspera(msg, x, y) {
  var inici_html = "<html>\n<head>\n<title></title>\n</head>\n<body bgcolor=\"#fff5e0\">\n\n<font face=\"Arial\" size=\"-1\">\n";
  var final_html = "\n</font>\n<p align=\"center\"><a HREF=\"javascript:self.close()\"><img src=\"/UOC/a/mc-icons/sortir.gif\" border=0></a></p>\n\n</body>\n</html>";
  var s = inici_html + msg + final_html;

  var nargs = new Number(arguments.length);
  var xdef = new String('400');
  var ydef = new String('200');

  if(nargs<3) {
    x = new String(xdef);
    y = new String(ydef);
  }
  var messWin = window.open('',getWinNm(),'width='+ x + ',height=' + y + ',menubar=yes,resizable=yes,scrollbars=yes,status=yes');

  d = messWin.document;
  d.open();  d.write(s);  d.close();
}

function detectaVis() {
// Funció genèrica que retorna nom de codi del visualitzador
// Retorna 'ne' o 'ie'
////////////////////////////////////////////////////////////
  var s = new String();
  switch(navigator.appName) {
    case 'Netscape':  s = 'ne';
          break;
    case 'Microsoft Internet Explorer': s = 'ie';
          break;
    default: s = 'ie';
          break;
  }
  return s;
}



function recarrega(init) {  //fa un reload de la finestra si es redimensiona la finestra del net4
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.x_pgW=innerWidth; document.x_pgH=innerHeight; onresize=recarrega; }}
  else if (innerWidth!=document.x_pgW || innerHeight!=document.x_pgH) location.reload();
}


function precarregaImatges() { 
  var d=document; if(d.images){ if(!d.x_p) d.x_p=new Array();
    var i,j=d.x_p.length,a=precarregaImatges.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.x_p[j]=new Image; d.x_p[j++].src=a[i];}}
}

function tornaImatgeOriginal() { 
  var i,x,a=document.x_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function trobaObjecte(n, d) { 
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=trobaObjecte(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function canviImatge() { 
  var i,j=0,x,a=canviImatge.arguments; document.x_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=trobaObjecte(a[i]))!=null){document.x_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function cridaJavascript(jsStr) { 
  return eval(jsStr)
}



