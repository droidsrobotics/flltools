// Saving System 3.3.0

// JS code to save and load saves to/from localStorage or a variable
// Legacy opt-in code --> replaced with the Google Sheets API

// This file is still necessary for the getvar() and loadsave(save) functions, which are used throughout

// Kept for compatibility with IE and iOS/Android (WK)webView

// Update: Reverted to use Localstorage as primary saving system
// Update: Reverted to use Localstorage as only saving option


//Init vars
n = 0;

store = []

score = ""
datetime = ""

if (window.localStorage.DRCCS1scorer == undefined) {
  window.localStorage.DRCCS1scorer = ''
}

// Function to get status check of all missions and store in var store (also returned)
function getvar() {
  count = 0
  count1 = 0
  store = []
  while (count < all_mission.length) {
    count1 = 0
    while (count1 < all_mission[count][1].length) {
      store = store.concat([["" + all_mission[count][1][count1] + "|" + window[all_mission[count][1][count1] + 'save'] + ""]])
//      console.log(["" + all_mission[count][1][count1] + "|" + window[all_mission[count][1][count1] + 'save'] + ""] , platooningTrucks1, all_mission[count][1][count1] + 'save')
      count1 = count1 + 1
    }
    count = count + 1
  }
  return store
}
function detectAppleWebKit() {
  userAgent = window.navigator.userAgent.toLowerCase()
  return userAgent.indexOf("applewebkit") != -1 && userAgent.indexOf("chrome") == -1
}

applewebkit  = detectAppleWebKit()

//load a getvar() var store save
function loadsave(save) {
  newsave = String(save).split(',')
  count = 0
  count1 = 0
  while (count < newsave.length - 0) {
    save1 = newsave[count].split('|')
    if (document.getElementById('yes' + save1[0]) != null) {
      if (parseInt(save1[1]) != 0) {
        document.getElementById('yes' + save1[0]).click()
      } else {
        document.getElementById('no' + save1[0]).click()

      }
    } else if (document.getElementById('completely' + save1[0]) != null) {
      if (parseInt(save1[1]) == 2) {
        document.getElementById('completely' + save1[0]).click()
      } else if (parseInt(save1[1]) == 1) {
        document.getElementById('partly' + save1[0]).click()
      } else {
        document.getElementById('no' + save1[0]).click()
      }
    } else if (document.getElementById('select' + save1[0]) != null) {
        myselect = $("select#"+'select' +save1[0]);
        myselect[0].selectedIndex = save1[1];

       if (!applewebkit) {
            myselect.selectmenu("refresh");
        
        } else {
        }
          recalc(parseInt(document.getElementById('select' +save1[0]).value ),save1[0],$('select#select'+save1[0])[0].selectedIndex)
    } else {
      $("#" + save1[0]).val(parseInt(save1[1])).slider("refresh");
      recalc(window[save1[0] + 'inc'] * parseInt(save1[1]), save1[0], parseInt(save1[1]))
    }
    count = count + 1

  }
}

// Load a localStorage getvar() var store save by id
function loader(save) {
  data = window.localStorage.DRCCSscorer.split('/')[save];
  loadsave(String(data));
  loadsave(String(data));
  alert(loadedText);
}


// redraw Improvement graph
function drawBasic() {
  vv = 0;

  nn = 1;
  array = [];
  array[0] = parseInt(window.localStorage.DRCCS1scorer.split(' Points')[0].split(',')[0]);
  vvv = 1;
  lt = window.localStorage.DRCCS1scorer.split(',').length - 0;
  while (vvv < lt) {
    array[nn] = parseInt(window.localStorage.DRCCS1scorer.split(' Points')[vvv].split(',')[1]);
    vvv = vvv + 1;
    nn = nn + 1;
  }


  $(function () {
    $('#containerHC').highcharts({
      // colors: ['black', 'black', 'black', 'black', 'black',
      //    'black', 'black', 'black', 'black'],
      title: {
        text: improvement,
        x: -20
      },
      subtitle: {
        x: -20
      },
      xAxis: {
        tickInterval: 1,
        minRange: 1,
        allowDecimals: false,
      },
      yAxis: {
        title: {
          text: pointsText
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        //   valueSuffix: '°C'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: saveText,
        data: array,
      }]
    });
  });

  checkDarkTheme()

}

// Display saveDateTimeScore() data under graph
function displaysaves() {
  n = 0;
  a = window.localStorage.DRCCS1scorer.split(',').length;
  document.getElementById('saves').innerHTML = "";
  if (window.localStorage.DRCCS1scorer != undefined && window.localStorage.DRCCS1scorer != "") {
    while (n < a) {
      //alert(n)
      document.getElementById('saves').innerHTML = document.getElementById('saves').innerHTML + ' ' + saveText + ' ' + String(n + 1) + ': ' + window.localStorage.DRCCS1scorer.split(',')[n].split('Points')[0] + pointsText + window.localStorage.DRCCS1scorer.split(',')[n].split('Points')[1] + '<br>';
      n = n + 1;
    }
  }

}





// Save Date Time and Score to localStorage
function saveDateTimeScore() {
  var currentTime = new Date()
  var month = currentTime.getMonth() + 1
  var day = currentTime.getDate()
  var year = currentTime.getFullYear()
  var currentdate = ": " + day + " " + monthNames[month] + " " + year;
  //  var currentdate = month + "/" + day + "/" + year;


  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()

  score = document.getElementById('allpoints').innerHTML;

  if (minutes < 10) {
    minutes = "0" + minutes
  }

  /*
// Use 12hr clock
if(hours > 11){
   var ampm = "PM";
} else {
   var ampm = "AM";
}
if (hours > 12) {
   hours = hours - 12;
}
*/
  // Use 24hr clock for international usage
  ampm = ''
  var timex = hours + ":" + minutes + " ";

  var currenttime = timex + '' + ampm;
  //   var currenttime = timex;
  datetime = currenttime + ' ' + currentdate;
  // datetime = currentdate + ' ' + currenttime;
}


// save getvar() and saveDateTimeScore to localStorage
function saver() {
  // Save all missions
  store = getvar();
  window.localStorage.DRCCSscorer = window.localStorage.DRCCSscorer + '/' + store
  // Save time stamp and score
  saveDateTimeScore()
  if (window.localStorage.DRCCS1scorer != undefined && window.localStorage.DRCCS1scorer != '') {
    window.localStorage.DRCCS1scorer = String(window.localStorage.DRCCS1scorer) + ',' + String(score) + ' Points - ' + datetime;
  } else {
    window.localStorage.DRCCS1scorer = score + ' Points - ' + datetime;
  }

  alert(savedText);
}
