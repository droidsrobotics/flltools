// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset

specialCasesComplete = 0
function specialCasesCheck(mission) {

}

// Override function when calculating points for each mission
function specialCasesRecalc(mission) {
	
}

identifier = "EX"

var load2020CV = (function () {

	// Override function in scoring system during the checking for button conflicts


	clearbuffer()

	// Draw the layout

	addToBuffer("<h1>Reviewing Sheet</h1>")
	addToBuffer("<p>Instructions: Reviewers are required to tick one box on each separate line to indicate the team’s achievement.")

	addToBuffer('<div id="tabs-1">')
	addEStrengths(
		"Coding Award - These teams gave effective explanations about how their code made their team models move and showed good communication skills.",
		"Team Poster Award - These teams showed creativity on their team poster and clearly explained what they had learned through their FIRST(R) LEGO(R) League Explore team journey",
		"Core Values Award - These teams demonstrated great teamwork as they explored the challenge, showing they fully understood the FIRST® Core Values.",
		"Team Model Award - These teams displayed innovation and creativity through the design and building of their team models.",
		""
	)
	addToBuffer('</div>')

	addToBuffer('<div id="tabs-2">')

	startRubric()

	startrow()
	addELevels("white","white","white","white","Beginning","Accomplished","Exceeds")
	closeRow()

	startRow()
	addESubSection("Challenge Solution","green",["challenge","challenge2"])
	closeRow()

	startRow()
	addESection("What did your team learn about the challenge?", "The team learned about the challenge and explored the multiple solutions.")
	addCVOption("challenge","","1")
	addCVOption("challenge","","2")
	addCVOption("challenge","","3")
	closeRow()
	
	startRow()
	addESection("How could this impact your community?", "The team’s solution has the potential to make a great impact on the community.")
	addCVOption("challenge2","","1")
	addCVOption("challenge2","","2")
	addCVOption("challenge2","","3")
	closeRow()

	startRow()
	addESubSection("Core Values","green",["corevalues","corevalues2"])
	closeRow()

	startRow()
	addESection("How did you use Core Values?", "Team members explained how they worked as a team and understood the Core Values giving examples")
	addCVOption("corevalues","","1")
	addCVOption("corevalues","","2")
	addCVOption("corevalues","","3")
	closeRow()

	startRow()
	addESection("What skills did you learn from each other?", "Team members showed they had learned new skills when working together.")
	addCVOption("corevalues2","","1")
	addCVOption("corevalues2","","2")
	addCVOption("corevalues2","","3")
	closeRow()
	
	startRow()
	addESubSection("Team Model","green",["teammodel","teammodel2"])
	closeRow()

	startRow()
	addESection("Describe your team model.", "The team described the team model and the solutions to the challenge that it represented.")
	addCVOption("teammodel","","1")
	addCVOption("teammodel","","2")
	addCVOption("teammodel","","3")
	closeRow()

	startRow()
	addESection("Did you include the treadmill, the heart game, or the combined build?", "The team included one or more of the components in their team model.")
	addCVOption("teammodel2","","1")
	addCVOption("teammodel2","","2")
	addCVOption("teammodel2","","3")
	closeRow()

	startRow()
	addESubSection("Coding","green",["coding","coding2"])
	closeRow()

	startRow()
	addESection("What part of your model is motorized?", "Team used motor(s) and sensors to make their model move and be interactive")
	addCVOption("coding","","1")
	addCVOption("coding","","2")
	addCVOption("coding","","3")
	closeRow()

	startRow()
	addESection("How did you code your motorized part?", "Team members explained how their code(s) made their model move.")
	addCVOption("coding2","","1")
	addCVOption("coding2","","2")
	addCVOption("coding2","","3")
	closeRow()
	

	startRow()
	addESubSection("Team Poster","green",["teamposter","teamposter2"])
	closeRow()

	startRow()
	addESection("What did you include in your team poster?", "The poster showed information about their challenge solutions, team model, coding, and their team.")
	addCVOption("teamposter","","1")
	addCVOption("teamposter","","2")
	addCVOption("teamposter","","3")
	closeRow()

	startRow()
	addESection("How does it show your team journey?", "Team members told or showed how they worked as a team to create their poster.")
	addCVOption("teamposter2","","1")
	addCVOption("teamposter2","","2")
	addCVOption("teamposter2","","3")
	closeRow()

	endRubric()	

// 	addToBuffer(' <button class="no-print" onclick="setTimeout(function()\
// 	{\
// 	  rubricCalc()\
// \
// 	}, 100);" style="max-width: 500px" type="reset">Reset</button>')

	addToBuffer('</div>')

	addToBuffer("<i style='display:none'>Total Points: <b style='color:red;' id='cvpts'></b></i>")

	/*
	window.onload = function() {
	check_missions()
	recalc(0,"advantage1",0)
	}
	*/

	writebuffer("cvlist")
})();

blanksave = "identify1|||false///identify2|||false///identify3|||false///textidentify|||///identify4|||false///identify21|||false///identify22|||false///identify23|||false///textidentify2|||///identify24|||false///design1|||false///design2|||false///design3|||false///textdesign|||///design4|||false///design21|||false///design22|||false///design23|||false///textdesign2|||///design24|||false///create1|||false///create2|||false///create3|||false///textcreate|||///create4|||false///create21|||false///create22|||false///create23|||false///textcreate2|||///create24|||false///iterate1|||false///iterate2|||false///iterate3|||false///textiterate|||///iterate4|||false///iterate21|||false///iterate22|||false///iterate23|||false///textiterate2|||///iterate24|||false///communicate1|||false///communicate2|||false///communicate3|||false///textcommunicate|||///communicate4|||false///communicate21|||false///communicate22|||false///communicate23|||false///textcommunicate2|||///communicate24|||false///textinnovationProject1|||///textinnovationProject2|||///identifyRD1|||false///identifyRD2|||false///identifyRD3|||false///textidentifyRD|||///identifyRD4|||false///identify2RD1|||false///identify2RD2|||false///identify2RD3|||false///textidentify2RD|||///identify2RD4|||false///designRD1|||false///designRD2|||false///designRD3|||false///textdesignRD|||///designRD4|||false///designRD21|||false///designRD22|||false///designRD23|||false///textdesignRD2|||///designRD24|||false///createRD1|||false///createRD2|||false///createRD3|||false///textcreateRD|||///createRD4|||false///createRD21|||false///createRD22|||false///createRD23|||false///textcreateRD2|||///createRD24|||false///iterateRD1|||false///iterateRD2|||false///iterateRD3|||false///textiterateRD|||///iterateRD4|||false///iterateRD21|||false///iterateRD22|||false///iterateRD23|||false///textiterateRD2|||///iterateRD24|||false///communicateRD1|||false///communicateRD2|||false///communicateRD3|||false///textcommunicateRD|||///communicateRD4|||false///communicateRD21|||false///communicateRD22|||false///communicateRD23|||false///textcommunicateRD2|||///communicateRD24|||false///textrobotDesign1|||///textrobotDesign2|||///Community|||false///Breakthrough|||false///Rising|||false///Motivate|||false///textdiscovery|||///discovery1|||false///discovery2|||false///discovery3|||false///discovery4|||false///textinnovation|||///innovation1|||false///innovation2|||false///innovation3|||false///innovation4|||false///textimpact|||///impact1|||false///impact2|||false///impact3|||false///impact4|||false///textinclusion|||///inclusion1|||false///inclusion2|||false///inclusion3|||false///inclusion4|||false///textteamwork|||///teamwork1|||false///teamwork2|||false///teamwork3|||false///teamwork4|||false///textfun|||///fun1|||false///fun2|||false///fun3|||false///fun4|||false///textrobotDesign1|||///textrobotDesign2|||"

