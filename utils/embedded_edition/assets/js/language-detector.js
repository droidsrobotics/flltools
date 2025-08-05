// Language detection system for EV3Lessons.com - v3.5

// Note: this is mainly used for external links abd compatiblity. v4.0 scorer language system is built into the other files. This is still used to determine language from the cookie, however.
// Fully compatible with v2.0
// First looks if language cookie is avaliable
// Then looks for browser set language
// Gets language from URI component ?lang=<2 (4 for v3.0 compat) letter lang code>
// v2.0 compat --> <URL>#<2/4 letter lang code>
// Saves determinied language to cookie
// Determined langauge is in global variable "language"

// Update: Cookie has been replaced with localStorage due to more capabilities.
 

  function get_browser_version(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[1];
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }


  function deleteAllCookies() {
    if (navigator.cookieEnabled = true) {
      var c = document.cookie.split("; ");
      for (i in c)
      document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }


  function createCookie(lang){
    localStorage.lang = "ev3cookie"+lang
  }

  var browser = navigator.appName;
  var version = get_browser_version();

  if (browser=="Microsoft Internet Explorer") {
    if (version<="9.0")
    document.location.href="http://classic.ev3lessons.com/"
  }

  if (getParameterByName('lang') != null) {
    var language = getParameterByName('lang');
    //if (getParameterByName('langsave') != 'no') {
    localStorage.lang = "ev3cookie"+language;
    //}
  } else {
    var language = 'en-us'

    navlang=navigator.language.split('-')[0]
    //str =localStorage.lang
    var i;
    for (i = 0; i < langs.length; i++) {
      str=langs[i].split(':')[0]
      tmp =str.search(navlang)
      if (tmp != -1) {
        //window.location.hash = "#"+langs[i].split(':')[0]
        //  setTimeout(function(){location.reload(true);},100);
        var language = langs[i].split(':')[0];

      }
    }
  }

  document.cookie=""

  str =localStorage.lang
  if (localStorage.lang && window.location.hash == "") {
    var i;
    for (i = 0; i < langs.length; i++) {
      tmp =str.search('ev3cookie'+langs[i].split(':')[0])
      if (tmp != -1) {
        //window.location.hash = "#"+langs[i].split(':')[0]
        //  setTimeout(function(){location.reload(true);},100);
        var language = langs[i].split(':')[0];

      }
    }

  }
  //langs=['en-us:United States:English','es:Spain:Español','nl:Netherlands:Nederlands','ar:Saudi Arabia:العَرَبِيةُ‎‎','pt-br:Brazil:Portugues','el:Greece:Ελληνικά','fr:France:français','ct:../ct:català','he:Israel:עברית','de:Germany:Deutsche']

  //  langs=['en-us:United States:English (USA)']
  
  

  function get_browser_version(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[1];
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }


  function deleteAllCookies() {
    if (navigator.cookieEnabled = true) {
      var c = document.cookie.split("; ");
      for (i in c)
      document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }


  function createCookie(lang){
    localStorage.lang = "ev3cookie"+lang
  }

  var browser = navigator.appName;
  var version = get_browser_version();

  if (browser=="Microsoft Internet Explorer") {
    if (version<="9.0")
    document.location.href="http://classic.ev3lessons.com/"
  }

  if (getParameterByName('lang') != null) {
    var language = getParameterByName('lang');
    //if (getParameterByName('langsave') != 'no') {
    localStorage.lang = "ev3cookie"+language;
    //}
  } else {
    var language = 'en-us'

    navlang=navigator.language.split('-')[0]
    //str =localStorage.lang
    var i;
    for (i = 0; i < langs.length; i++) {
      str=langs[i].split(':')[0]
      tmp =str.search(navlang)
      if (tmp != -1) {
        //window.location.hash = "#"+langs[i].split(':')[0]
        //  setTimeout(function(){location.reload(true);},100);
        var language = langs[i].split(':')[0];

      }
    }
  }

  document.cookie=""

  str =localStorage.lang
  if (localStorage.lang && window.location.hash == "") {
    var i;
    for (i = 0; i < langs.length; i++) {
      tmp =str.search('ev3cookie'+langs[i].split(':')[0])
      if (tmp != -1) {
        //window.location.hash = "#"+langs[i].split(':')[0]
        //  setTimeout(function(){location.reload(true);},100);
        var language = langs[i].split(':')[0];

      }
    }

  }
