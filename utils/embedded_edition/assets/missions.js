// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset

specialCasesComplete = 0

function specialCasesCheck(mission) {
    console.log("check",mission)
    if (specialCasesComplete != 1) {
        specialCasesComplete = 1
    } else { return }
    
    specialCasesComplete = 0

}

// Override function when calculating points for each mission
function specialCasesRecalc(mission) {
    if (specialCasesComplete != 1) {
        specialCasesComplete = 1
        if (document.getElementById("precision1").value == 1) {
            recalc(10, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 2) {
            recalc(15, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 3) {
            recalc(25, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 4) {
            recalc(35, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 5) {
            recalc(50, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 6) {
            recalc(50, 'precision1', document.getElementById("precision1").value);
        }
        specialCasesComplete = 0
    }
}

//    blanksave = "m00a|0,m01a|0,m01b|0,m01c|0,m02a|0,m02b|0,m03a|0,m03b|0,m04a|0,m04b|0,m05a|0,m06a|0,m07a|0,m08a|0,m09a|0,m09b|0,m10a|0,m10b|0,m11a|0,m11b|0,m12a|0,m13a|0,m14a|0,m14b|0,m14c|0,m14d|0,m14e|0,m15a|0,m15b|0,m15c|0,m15d|0,precision1|0,graciousProfessionalism|0"
function load2021() {
   blanksave = "m00a|0,m01a|0,m01b|0,m02a|0,m03a|0,m03b|0,m04a|0,m04b|0,m05a|0,m06a|0,m07a|0,m08a|0,m09a|0,m09b|0,m10a|0,m10b|0,m11a|0,m11b|0,m12a|0,m12b|0,m14a|0,m14a|0,m14b|0,m14c|0,m14d|0,m14e|0,m14f|0,m14g|0,m15a|0,precision1|0,graciousProfessionalism|0" ;

    clearbuffer();

    starttable('A00', "EQUIPMENT INSPECTION", 'M00.png', ['m00a'], 0)
    createbutton("m00a", 20, "If your robot and all your equipment fit completely in one launch area and are under a height limit of 12 in. (305 mm) during the pre-match inspection")
    endtable()

    starttable('M01', "SURFACE BRUSHING", 'M01.png', ['m01a', 'm01b'], 1)
    createrange("m01a", 10, 0, 2, 0, "Soil deposits are completely cleared, touching the mat", '')
    createbutton("m01b", 10, "Archaeologist’s brush is not touching the dig site")
    endtable()

    starttable('M02', "MAP REVEAL", 'M02.png', ['m02a'], 0)
    createrange("m02a", 10, 0, 2, 0, "Topsoil sections completely cleared", '')
    endtable()

    starttable('M03', "MINESHAFT EXPLORER", 'M03.png', ['m03a', 'm03b'], 1)
    createbutton("m03a", 30, "Your team’s minecart is on the opposing team’s field")
    createbutton("m03b", 10, "BONUS: Opposing team’s minecart is on your field")
    createcomment("Your team’s minecart must pass completely through the mineshaft entry to score points for this mission. It is not possible to earn the bonus if there is no opposing team or in remote competitions.")
    createbuttonenables("m03a", "m03b")
    endtable()



    starttable('M04', "CAREFUL RECOVERY", 'M04.png', ['m04a', 'm04b'], 0)
    createbutton("m04a", 30, "Precious artifact is not touching the mine")
    createbutton("m04b", 10, "Both support structures are standing.")
    endtable()



    starttable('M05', "WHO LIVED HERE?", 'M05.png', ['m05a'], 0)
    createbutton("m05a", 30, "Structure floor is completely upright")
    endtable()

    starttable('M06', "FORGE", 'M06.png', ['m06a'], 1)
    createrange("m06a", 10, 0, 3, 0, "Ore blocks are not touching the forge", '')
    createcomment("Technicians may open ore blocks by hand to reveal the fossilized artifact when completely in home (see Mission 14).")
    endtable()

    starttable('M07', "HEAVY LIFTING", 'M07.png', ['m07a'], 0)
    createbutton("m07a", 30, "Millstone is no longer touching its base")
    endtable()




    starttable('M08', "SILO", 'M08.png', ['m08a'], 0)
    createrange("m08a", 10, 0, 3, 0, "Preserved pieces are outside the silo", '')
    endtable()

    starttable('M09', "WHAT'S ON SALE?", 'M09.png', ['m09a', 'm09b'], 0)
    createbutton("m09a", 20, "Roof is completely raised")
    createbutton("m09b", 10, "Market wares are raised")
    endtable()


 

    starttable('M10', "TIP THE SCALES", 'M10.png', ['m10a', 'm10b'], 0)
    createbutton("m10a", 20, "Scale is tipped and touching the mat")
    createbutton("m10b", 10, "Scale pan is completely removed")
    endtable()




    starttable('M11', "ANGLER ARTIFACTS", 'M11.png', ['m11a', 'm11b'], 0)
    createbutton("m11a", 20, "Artifacts are raised above the ground layer")
    createbutton("m11b", 10, "BONUS: The crane flag is at least partly lowered")
    createbuttonenables("m11a", "m11b")
    endtable()

    starttable('M12', "SALVAGE OPERATION", 'M12.png', ['m12a', 'm12b'], 0)
    createbutton("m12a", 20, "Sand is completely cleared")
    createbutton("m12b", 10, "Ship is completely raised")
    endtable()

    starttable('M13', "STATUE REBUILD", 'M13.png', ['m14a'], 0)
    createbutton("m13a", 30, "Statue is completely raised")
    endtable()

    starttable('M14', "FORUM", 'M14.png', ['m14a','m14b','m14c','m14d','m14e','m14f','m14g'], 1)
    createbutton("m14a", 5, "Brush artifact touching the mat and at least partly in the forum")
    createbutton("m14b", 5, "Topsoil artifact touching the mat and at least partly in the forum")
    createbutton("m14c", 5, "Precious Artifact touching the mat and at least partly in the forum")
    createbutton("m14d", 5, "Opposing Team’s Minecart artifact touching the mat and at least partly in the forum")
    createbutton("m14e", 5, "Ore with Fossilized artifact touching the mat and at least partly in the forum")
    createbutton("m14f", 5, "Millstone artifact touching the mat and at least partly in the forum")
    createbutton("m14g", 5, "Scale Pan artifact touching the mat and at least partly in the forum")


    starttable('M15', "SITE MARKING", 'M15.png', ['m15a'], 1)
    createrange("m15a", 10, 0, 3, 0, "Sites with a flag at least partly inside and touching the mat", '')
    createcomment("Sites are outlined on the mat wireframe.")
    endtable()



    starttable('A01', "Precision", 'M17_h.png', ['precision1'], 0)
    createrange("precision1", 10, 0, 6, 0, "How many Precision Tokens are left on the field?", '')
    endtable()

    starttable('A02', "Gracious Professionalism", 'M18.png', ['graciousProfessionalism'], 0)
    createdropdown("graciousProfessionalism", ["", "Developing", "Accomplished", "Exceeds"], [0, 2, 3, 4], "Gracious Professionalism® displayed at the robot game table")
    endtable()

    writebuffer("missionlist")
    
}

load2021()

try {
    document.getElementById("title").innerHTML = "FLL UNEARTHED Scorer"
} catch (error)  {

}
