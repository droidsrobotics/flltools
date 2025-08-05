// Score Calculator 3.3.1

allmission = 0

function checkbuttonconflict(mission1, mission2, priority) {
    if (document.getElementById('yes' + mission1).checked == true && document.getElementById('yes' + mission2).checked == true) {
        if (priority != mission1) {
            document.getElementById('yes' + mission1).checked = false
            $('#no' + mission1).trigger('click');
        }
        if (priority != mission2) {
            document.getElementById('yes' + mission2).checked = false
            $('#no' + mission2).trigger('click');
        }
        $("input[type='radio']").attr("checked", true).checkboxradio("refresh");
    }
}

conflicts = []

function createbuttonconflict(conflict, mission, priority) {
    if (getCompareIndex(conflicts,[conflict, mission, priority]) != -1) return
    conflicts = conflicts.concat([
        [conflict, mission, priority]
    ])
}

enables = []

function createbuttonenables(mission, enabled) {
    enables = enables.concat([
        [mission, enabled]
    ])
}

function getCompareIndex(array, search) {
    for (i=0;i<array.length;i++) {
        if (JSON.stringify(array[i]) == JSON.stringify(search)) return i;
    }
    return -1;
}

function deletebuttonconflict(conflict, mission, priority) {
    i = getCompareIndex(conflicts,[conflict, mission, priority]);
    if (i!=-1) conflicts.splice(i);
}


function checkbuttonenables(mission, enabled) {
    if (document.getElementById('yes' + mission).checked == true) {
        $('#no' + enabled).checkboxradio('enable');
        $('#yes' + enabled).checkboxradio('enable');
    } else {
        $('#no' + enabled).checkboxradio('disable');
        $('#yes' + enabled).checkboxradio('disable');
        document.getElementById('yes' + enabled).checked = false
        document.getElementById('no' + enabled).checked = true
        recalc(0, mission, 0)
    }
}

enables2 = []

function createsliderenables(mission, enabled, value) {
    enables2 = enables2.concat([
        [mission, enabled, value]
    ])
}
enables4=[]

function createsliderenables3(mission, enabled, value) {
    enables4 = enables4.concat([
        [mission, enabled, value]
    ])
}

function checksliderenables(mission, enabled, value) {
    if (document.getElementById(mission).value = value) { 
        $('#no' + enabled).checkboxradio('enable');
        $('#yes' + enabled).checkboxradio('enable');
    } else {
        $('#no' + enabled).checkboxradio('disable');
        $('#yes' + enabled).checkboxradio('disable');
        document.getElementById('yes' + enabled).checked = false
        document.getElementById('no' + enabled).checked = true
        recalc(0, mission, 0)
    }
}


function checksliderenables3(mission, enabled, value) {
    if (document.getElementById(mission).value >= value) { 
        $('#no' + enabled).checkboxradio('enable');
        $('#yes' + enabled).checkboxradio('enable');
    } else {
        $('#no' + enabled).checkboxradio('disable');
        $('#yes' + enabled).checkboxradio('disable');
        document.getElementById('yes' + enabled).checked = false
        document.getElementById('no' + enabled).checked = true
        recalc(0, enabled, 0)
    }
}

enables3 = []

function createsliderenables2(mission, enabled) {
    enables3 = enables3.concat([
        [mission, enabled]
    ])
}

function checksliderenables2(mission, enables) {
    if (document.getElementById('yes' + enables).checked == true) {
        $("#" + mission).slider('enable');
    } else {
        $("#" + mission).val(0).slider("refresh");
        $("#" + mission).slider('disable');
        recalc(0, mission, 0)
    }
}

function check_missions(mission) {
    specialCasesCheck(mission)
        // checkDarkTheme()

    conflictcount = 0
    while (conflictcount < conflicts.length) {
        if (conflicts[conflictcount][2] == '') {
            checkbuttonconflict(conflicts[conflictcount][0], conflicts[conflictcount][1], mission)
        } else {
            checkbuttonconflict(conflicts[conflictcount][0], conflicts[conflictcount][1], conflicts[conflictcount][2])
        }
        conflictcount = conflictcount + 1
    }

    // enablecount = 0
    // while (enablecount < enables.length){
    //   thismission = enables[enablecount][1]
    //     $('#no'+thismission).checkboxradio('disable');
    //     $('#yes'+thismission).checkboxradio('disable');
    //   enablecount = enablecount + 1
    // }

    // enablecount = 0
    // while (enablecount < enables2.length){
    //   thismission = enables2[enablecount][1]
    //   $('#no'+thismission).checkboxradio('disable');
    //   $('#yes'+thismission).checkboxradio('disable');
    //   enablecount = enablecount + 1
    // }

    enablecount = 0
    while (enablecount < enables.length) {
        checkbuttonenables(enables[enablecount][0], enables[enablecount][1])
        enablecount = enablecount + 1
    }

    enablecount = 0
    while (enablecount < enables2.length) {
        checksliderenables(enables2[enablecount][0], enables2[enablecount][1], enables2[enablecount][2])
        enablecount = enablecount + 1
    }

    enablecount = 0
    while (enablecount < enables3.length) {
        checksliderenables2(enables3[enablecount][0], enables3[enablecount][1])
        enablecount = enablecount + 1
    }

    enablecount = 0
    while (enablecount < enables4.length) {
        checksliderenables3(enables4[enablecount][0], enables4[enablecount][1], enables4[enablecount][2])
        enablecount = enablecount + 1
    }

    enablecount = 0
    while (enablecount < enables.length) {
        thismission = enables[enablecount][1]
        if ($('#no' + thismission).is(':disabled')) {
            document.getElementById('yes' + thismission).checked = false
            document.getElementById('no' + thismission).checked = true
            recalc(0, thismission, 0)
                // $('yes'+thismission).checkboxradio("refresh");
                // $('no'+thismission).checkboxradio("refresh");
        }
        enablecount = enablecount + 1
    }
    enablecount = 0
    while (enablecount < enables2.length) {
        thismission = enables2[enablecount][1]
        if ($('#no' + thismission).is(':disabled')) {
            document.getElementById('yes' + thismission).checked = false
            document.getElementById('no' + thismission).checked = true
            recalc(0, thismission, 0)
                // $('yes'+thismission).checkboxradio("refresh");
                // $('no'+thismission).checkboxradio("refresh");
        }
        enablecount = enablecount + 1
    }
    $("input[type='radio']").attr("checked", true).checkboxradio("refresh");
}


function recalc(points, mission, saveValue) {

    // if (alt == 1 && points == 0) {
    //   savepts = 1
    // } else if (alt == 1 && points != 0) {
    //   savepts = points
    // } else if (alt > 1 && points != 0) {
    //   savepts = alt
    // } else {
    //   savepts = 0
    // }
    //var mission = 'hi'
    window[mission] = points
    window[mission + 'save'] = saveValue
    specialCasesRecalc(mission)

    counter = 0
    allmission = -graciousProfessionalism
    while (counter < all_mission.length) {
        counter1 = 0
        thismission = 0
        while (counter1 < all_mission[counter][1].length) {
            thismission = window[all_mission[counter][1][counter1]] + thismission
                //alert(thismission)
            counter1 = counter1 + 1
                //		alert(allmission)
        }
        allmission = allmission + thismission 
        document.getElementById(all_mission[counter][0] + "pts").innerHTML = thismission
        counter = counter + 1
    }

    document.getElementById('allpoints').innerHTML = allmission
    document.getElementById('allpoints2').innerHTML = allmission

    specialCasesRecalc(mission)

    var ranges = $("input[data-type='range']");
    var radios = $("input[type='radio']");

    ranges.slider("refresh");
    radios.checkboxradio("refresh");

    checkDarkTheme()

}
