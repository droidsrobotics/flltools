// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset


var identifier = ""

function load2020CV() {
	identifier = "CV"

	// Override function in scoring system during the checking for button conflicts


	clearbuffer()

	// Draw the layout
	addToBuffer("<h1>Judging Session Feedback</h1>")

	
	addToBuffer("<p>If the team is a candidate for one of these awards, please tick the appropriate box. Check with your event organizer which optional awards your event uses.</p>")

	addStrengths(
		"Breakthrough Award - A team that made significant progress in their confidence and capability and who understand that what they discover is more important than what they win",
		"Rising All-Star - A team that the judges notice and expect great things from in the future",
		"Motivate - A team that embraces the culture of FIRST LEGO League through team building, team spirit, and displayed enthusiam"
	)

	addToBuffer("<h1>Core Values</h1>")
	addToBuffer("<p class='no-print'>The FIRST® Core Values are the lens through which judges watch the team's presentations and evaluate their progress.</p>")


	addToBuffer(' <div style="display:none!important;">')
	startRubric()


	startRow()
	addCVLevels("#FDEAE3","#FCCEBE","#F4AE94","#EF8C6D",
	"<b>Beginning</b><br>Minimally observed across the team.",
	"<b>Developing</b><br>Inconsistently observed across the team",
	"<b>Accomplished</b><br>Consistently observed across the team",
	"<b>Exceeds</b>",
	"Explain how team exceeds"
	)
	closeRow()

	startRow()
	addSubSection("Discovery - Team explored new skills and ideas.","#FCD8CA",["discovery",""])
	addCVFree("discovery","5")
	closeRow()

	startRow()
	addCVOption("discovery","","1")
	addCVOption("discovery","","2")
	addCVOption("discovery","","3")
	addCVOption("discovery","","4")
	closeRow()


	startRow()
	addSubSection("Innovation - Team used creativity and persistance to solve problems","#FCD8CA",["innovation",""])
	addCVFree("innovation","5")
	closeRow()

	startRow()
	addCVOption("innovation","","1")
	addCVOption("innovation","","2")
	addCVOption("innovation","","3")
	addCVOption("innovation","","4")
	closeRow()

	startRow()
	addSubSection("Impact - Team applied what they learned to improve their world","#FCD8CA",["impact",""])
	addCVFree("impact","5")
	closeRow()

	startRow()
	addCVOption("impact","","1")
	addCVOption("impact","","2")
	addCVOption("impact","","3")
	addCVOption("impact","","4")
	closeRow()



	startRow()
	addSubSection("Inclusion - Team demonstrated respect and embraced their differences","#FCD8CA",["inclusion",""])
	addCVFree("inclusion","5")
	closeRow()

	startRow()
	addCVOption("inclusion","","1")
	addCVOption("inclusion","","2")
	addCVOption("inclusion","","3")
	addCVOption("inclusion","","4")
	closeRow()


	startRow()
	addSubSection("Teamwork - Team clearly showed they had worked as a team throughout their journey","#FCD8CA",["teamwork",""])
	addCVFree("teamwork","5")
	closeRow()

	startRow()
	addCVOption("teamwork","","1")
	addCVOption("teamwork","","2")
	addCVOption("teamwork","","3")
	addCVOption("teamwork","","4")
	closeRow()


	startRow()
	addSubSection("Fun - Team clearly had fun and celebrated what they had achieved","#FCD8CA",["fun",""])
	addCVFree("fun","5")
	closeRow()

	startRow()
	addCVOption("fun","","1")
	addCVOption("fun","","2")
	addCVOption("fun","","3")
	addCVOption("fun","","4")
	closeRow()



	endRubric()	

	addToBuffer(' </div>')

    addToBuffer('<table>')
	addComments("coreValues","Core Values -- How did the team demonstrate teamwork, discovery, inclusion, innovation, impact, and fun in their work?","Great Job","Think About")
	
    addToBuffer('</table>')
    
    addToBuffer("<div style='display:none;'>")
	addToBuffer("Total Points:<text> </text><b style='color:red;' id='cvpts'></b>")
	addToBuffer("</div>")
	/*
	window.onload = function() {
	check_missions()
	recalc(0,"advantage1",0)
	}
	*/

	writebuffer("cvlist")
}

blankRBsave = "identify1|||false///identify2|||false///identify3|||false///textidentify|||///identify4|||false///identify21|||false///identify22|||false///identify23|||false///textidentify2|||///identify24|||false///design1|||false///design2|||false///design3|||false///textdesign|||///design4|||false///design21|||false///design22|||false///design23|||false///textdesign2|||///design24|||false///create1|||false///create2|||false///create3|||false///textcreate|||///create4|||false///create21|||false///create22|||false///create23|||false///textcreate2|||///create24|||false///iterate1|||false///iterate2|||false///iterate3|||false///textiterate|||///iterate4|||false///iterate21|||false///iterate22|||false///iterate23|||false///textiterate2|||///iterate24|||false///communicate1|||false///communicate2|||false///communicate3|||false///textcommunicate|||///communicate4|||false///communicate21|||false///communicate22|||false///communicate23|||false///textcommunicate2|||///communicate24|||false///textinnovationProject1|||///textinnovationProject2|||///identifyRD1|||false///identifyRD2|||false///identifyRD3|||false///textidentifyRD|||///identifyRD4|||false///identify2RD1|||false///identify2RD2|||false///identify2RD3|||false///textidentify2RD|||///identify2RD4|||false///designRD1|||false///designRD2|||false///designRD3|||false///textdesignRD|||///designRD4|||false///designRD21|||false///designRD22|||false///designRD23|||false///textdesignRD2|||///designRD24|||false///createRD1|||false///createRD2|||false///createRD3|||false///textcreateRD|||///createRD4|||false///createRD21|||false///createRD22|||false///createRD23|||false///textcreateRD2|||///createRD24|||false///iterateRD1|||false///iterateRD2|||false///iterateRD3|||false///textiterateRD|||///iterateRD4|||false///iterateRD21|||false///iterateRD22|||false///iterateRD23|||false///textiterateRD2|||///iterateRD24|||false///communicateRD1|||false///communicateRD2|||false///communicateRD3|||false///textcommunicateRD|||///communicateRD4|||false///communicateRD21|||false///communicateRD22|||false///communicateRD23|||false///textcommunicateRD2|||///communicateRD24|||false///textrobotDesign1|||///textrobotDesign2|||///Community|||false///Breakthrough|||false///Rising|||false///Motivate|||false///textdiscovery|||///discovery1|||false///discovery2|||false///discovery3|||false///discovery4|||false///textinnovation|||///innovation1|||false///innovation2|||false///innovation3|||false///innovation4|||false///textimpact|||///impact1|||false///impact2|||false///impact3|||false///impact4|||false///textinclusion|||///inclusion1|||false///inclusion2|||false///inclusion3|||false///inclusion4|||false///textteamwork|||///teamwork1|||false///teamwork2|||false///teamwork3|||false///teamwork4|||false///textfun|||///fun1|||false///fun2|||false///fun3|||false///fun4|||false///textrobotDesign1|||///textrobotDesign2|||"
load2020CV()
