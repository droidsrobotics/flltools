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
   // Reset buffer arrays
  blanksave = "m00a|0,m01a|0,m01b|0,m02a|0,m03a|0,m03b|0,m04a|0,m04b|0,m05a|0,m06a|0,m07a|0,m07b|0,m08a|0,m09a|0,m09b|0,m09c|0,m10a|0,m10b|0,m11a|0,m12a|0,m12b|0,m13a|0,m14a|0,m14b|0,m15a|0,m15b|0,m15c|0,m15d|0,precision1|0,graciousProfessionalism|0";

    clearbuffer();

    starttable('A00', "EQUIPMENT INSPECTION", 'M00.png', ['m00a'], 0)
    createbutton("m00a", 20, "If your robot and all your equipment fit completely in one launch area and are under a height limit of 12 in. (305 mm) during the pre-match inspection")
    endtable()

    starttable('M01', "DRONE SURVEY", 'M01.png', ['m01a', 'm01b'], 1)
    createbutton("m01a", 20, "Drone is no longer touching the mat:")
    createbutton("m01b", 10, "Bonus: and the LiDAR map is completely flipped over, with the scan marker at least partly in the survey area:")
    //createbuttonenables("m01a", "m01b")
    createcomment("A mission model cannot earn points if it is touching equipment at the end of the match.")
    endtable()

    starttable('M02', "EXPLODING SEEDS", 'M02.png', ['m02a'], 1)
    createrange("m02a", 10, 0, 3, 0, "Seeds no longer touching the stalk:", '')
    createcomment("A mission model cannot earn points if it is touching equipment at the end of the match.")
    endtable()

    starttable('M03', "FLIP THE ROCK", 'M03.png', ['m03a', 'm03b'], 0)
    createbutton("m03a", 20, "The research flag is down:")
    createbutton("m03b", 10, "Bonus: and the rock has been returned to its original starting position:")
    //createbuttonenables("m03a", "m03b")
    endtable()

    starttable('M04', "LUCKY LEAVES", 'M04.png', ['m04a', 'm04b'], 1)
    createbutton("m04a", 10, "One leaf is completely removed, no longer touching the nest:")
    createbutton("m04b", 20, "Bonus: and the second leaf is completely removed, no longer touching the nest, with the katydid in its original starting position:")
    //createbuttonenables("m04a", "m04b")
    createcomment("If the katydid is outside the leaf habitat at the end of the match, even partly, the team scores zero points for this mission.")
    endtable()

    starttable('M05', "REACHING ROOTS", 'M05.png', ['m05a'], 0)
    createdropdown("m05a", ["No", "Partially extended:", "Completely extended:"], [0, 10, 20], "The plant root is...")
    endtable()

    starttable('M06', "LEAFCUTTER FRENZY", 'M06.png', ['m06a'], 0)
    createrange("m06a", 10, 0, 4, 0, "The ant is touching the nest, and the leaf fragments are contained within the nest:", '')
    endtable()

    starttable('M07', "HUMONGOUS FUNGUS", 'M07.png', ['m07a', 'm07b'], 1)
    createbutton("m07a", 20, "The mycelium is completely extended:")
    createrange("m07b", 10, 0, 2, 0, "Bonus: and a connection is formed between one team's extended mycelium and the opposing team's fully extended plant root (two bonuses possible):", '')
    //createbuttonenables("m07a", "m07b")
    createcomment("A mission model cannot earn points if it is touching equipment at the end of the match.")
    endtable()

    starttable('M08', "TANGLED", 'M08.png', ['m08a'], 0)
    createbutton("m08a", 30, "The vine is touching the mat:")
    endtable()

    starttable('M09', "RESEARCH PLATFORM", 'M09.png', ['m09a', 'm09b', 'm09c'], 1)
    createbutton("m09a", 10, "The research platform is raised:")
    createbutton("m09b", 10, "The camera trap is deployed:")
    createbutton("m09c", 10, "The seed is no longer touching the tree:")
    createcomment("A mission model cannot earn points if it is touching equipment at the end of the match.")
    endtable()

    starttable('M10', "FRAGILE MICROHABITATS", 'M10.png', ['m10a', 'm10b'], 0)
    createbutton("m10a", 10, "The spider habitat is in its original starting position:")
    createbutton("m10b", 10, "The snail habitat is in its original starting position:")
    endtable()

    starttable('M11', "WINDOW TO THE PAST", 'M11.png', ['m11a'], 0)
    createbutton("m11a", 20, "The root cover is down, touching the mat:")
    endtable()

    starttable('M12', "FOREST ELDER", 'M12.png', ['m12a', 'm12b'], 1)
    createbutton("m12a", 20, "The cane is completely raised, touching the tree:")
    createbutton("m12b", 10, "The support tie is around the post:")
    createcomment("A mission model cannot earn points if it is touching equipment at the end of the match.")
    endtable()

    starttable('M13', "KEYSTONE SPECIES", 'M13.png', ['m13a'], 0)
    createbutton("m13a", 30, "Your team's keystone species is on the restoration platform, and the young trees are raised:")
    endtable()

    starttable('M14', "SEEDS OF RENEWAL", 'M14.png', ['m14a', 'm14b'], 1)
    createrange("m14a", 5, 0, 4, 0, "Seeds are contained within the replantation station:", '')
    createrange("m14b", 5, 0, 4, 0, "Bonus: and are touching the mat:", '')
    createcomment("Seeds must be contained within the replantation station to be eligible for the bonus.")
    endtable()

    starttable('M15', "BIOCENTRIC ARCHITECTURE", 'M15.png', ['m15a', 'm15b', 'm15c', 'm15d'], 0)
    createbutton("m15a", 10, "a. Mine dock: nesting canopy - The nesting canopy is raised:")
    createbutton("m15b", 10, "OR b. City dock: garden skylight - The garden skylight is completely in:")
    createbutton("m15c", 10, "OR c. Farm dock: compost hatch - The compost hatch is completely opened, touching the mat:")
    createbutton("m15d", 10, "Environmental Bonus: If you have completed the greatest ecological need for the dock the model is located:", '')
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
    document.getElementById("title").innerHTML = "FLL BIOGLOW FOUNDERS Scorer"
} catch (error)  {
    
}