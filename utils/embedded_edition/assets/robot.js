// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset

var identifier = ""



function load2020RD() {
	identifier = "RD"

	// Override function in scoring system during the checking for button conflicts


	clearbuffer()

	// Draw the layout

	// Draw the layout

	addToBuffer("<h1>Robot Design</h1>")
	addToBuffer("<p class='no-print'>Instructions: Teams should communicate to the judges their achievement in each of the criteria below. This rubric should be filled out during the Robot Design explanation.<br><br><b>Judges are required to tick one box on a separate line to indicate the level the team has achieved. If the team exceeds, please make a short comment in the Exceeds box.</b></p>")
	startRubric()

	startRow()
	addLevels("#EAF4EB","#C1DFC5","#8DC89A","#46AE6F","Beginning","Developing","Accomplished","Exceeds","How has the team exceeded?")

	closeRow()

	startRow()
	addSubSection("Identify -Team determined which missions to attempt, explored building and coding resources, and sought guidance as needed","#D7E9D9",["identifyRD","identify2RD"])
	closeRow()

	startRow()
	addOption("identifyRD","Minimal evidence of mission strategy","1")
	addOption("identifyRD","Partial evidence of mission strategy","2")
	addOption("identifyRD","Clear evidence of mission strategy","3")
	addFreeOption("identifyRD","4")
	closeRow()

	startRow(bgcolor="pink")
	addOption("identify2RD","Minimal use of building or coding resources","1")
	addOption("identify2RD","Some use of building or coding resources","2")
	addOption("identify2RD","Clear use of building or coding resources to support their mission strategy","3")
	addFreeOption("identify2RD","4")
	closeRow()



	startRow()
	addSubSection("Design - Team members worked collaboratively on their designs and developed the building and coding skills needed.","#D7E9D9",["designRD","designRD2"])
	closeRow()

	startRow(bgcolor="pink")
	addOption("designRD","Minimal evidence that all team members contributed ideas","1")
	addOption("designRD","Partial evidence that all team members contributed ideas","2")
	addOption("designRD","Clear evidence that all team members contributed ideas","3")
	addFreeOption("designRD","4")
	closeRow()

	startRow()
	addOption("designRD2","Minimal evidence of building and coding skills in all team members","1")
	addOption("designRD2","Partial evidence of building and coding skills in all team members","2")
	addOption("designRD2","Clear evidence of building and coding skills in all team members","3")
	addFreeOption("designRD2","4")
	closeRow()



	startRow()
	addSubSection("Create - Team developed original designs or improved on existing ones according to their mission strategy","#D7E9D9",["createRD","createRD2"])
	closeRow()

	startRow()
	addOption("createRD","Unclear explanation of attachments and their purpose","1")
	addOption("createRD","Simple explanation of attachments and their purpose","2")
	addOption("createRD","Clear explanation of attachments and their purpose","3")
	addFreeOption("createRD","4")
	closeRow()

	startRow()
	addOption("createRD2","Unclear explanation of code and/or sensor use","1")
	addOption("createRD2","Simple explanation of code and/or sensor use","2")
	addOption("createRD2","Clear explanation of code and/or sensor use","3")
	addFreeOption("createRD2","4")
	closeRow()



	startRow()
	addSubSection("Iterate - Team repeatedly tested their robot and code to identify areas for improvement and incorporated the findings into their solutions.","#D7E9D9",["iterateRD","iterateRD2"])
	closeRow()

	startRow()
	addOption("iterateRD","Minimal evidence of testing their robot and code","1")
	addOption("iterateRD","Partial evidence of testing their robot and code","2")
	addOption("iterateRD","Clear evidence of testing their robot and code","3")
	addFreeOption("iterateRD","4")
	closeRow()

	startRow(bgcolor="pink")
	addOption("iterateRD2","Minimal evidence of improvements based on testing","1")
	addOption("iterateRD2","Partial evidence of improvements based on testing","2")
	addOption("iterateRD2","Clear evidence of improvements based on testing","3")
	addFreeOption("iterateRD2","4")
	closeRow()




	startRow()
	addSubSection("Communicate - Team effectively explained what they learned from the robot design process and celebrated their progress.","#D7E9D9",["communicateRD","communicateRD2"])
	closeRow()

	startRow(bgcolor="pink")
	addOption("communicateRD","Unclear explanation of process and lessons learned","1")
	addOption("communicateRD","Simple explanation of process and lessons learned","2")
	addOption("communicateRD","Detailed explanation of process and lessons learned","3")
	addFreeOption("communicateRD","4")
	closeRow()

	startRow(bgcolor="pink")
	addOption("communicateRD2","Team shows minimal pride or enthusiasm for their work","1")
	addOption("communicateRD2","Team shows partial pride or enthusiasm for their work","2")
	addOption("communicateRD2","Team clearly shows pride or enthusiasm for their work","3")
	addFreeOption("communicateRD2","4")
	closeRow()

	addToBuffer("<p style='background-color:pink'>Criteria on this page with this style of check box count dually toward Innovation Project and Core Values awards rankings</p>")


	addComments("robotDesign","Robot Design -- How did the team approach solving robot game missions using building and coding?","Great Job","Think About")

	endRubric()



	addToBuffer("Total Points:<text> </text><b style='color:red;' id='rdpts'></b>")

	/*
	window.onload = function() {
	check_missions()
	recalc(0,"advantage1",0)
	}
	*/

	writebuffer("robotlist")
}
load2020RD()
