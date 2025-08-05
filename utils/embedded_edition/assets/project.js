// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset

var identifier = ""
function load2020RP() {
	identifier = "IP"

	// Override function in scoring system during the checking for button conflicts


	clearbuffer()

	// Draw the layout
 
	addToBuffer("<h1>Innovation Project</h1>")
	addToBuffer("<p class='no-print'>Instructions: Teams should communicate to the judges their achievement in each of the criteria below. This rubric should be filled out during the Innovation Project presentation.<br><br><b>Judges are required to tick one box on a separate line to indicate the level the team has achieved. If the team exceeds, please make a short comment in the Exceeds box.</b></p>")
	startRubric()

	startRow()
	addLevels("#E9EBF8","#BCC7E7","#8AA4D5","#5484C4","Beginning","Developing","Accomplished","Exceeds","How has the team exceeded?")
	closeRow()

	startRow()
	addSubSection("Identify - Team had a clearly defined problem that was well researched.","#D2DAF1",["identify","identify2"])
	closeRow()

	startRow()
	addOption("identify","Unclear definition of the problem","1")
	addOption("identify","Partially clear definition of the problem","2")
	addOption("identify","Clear definition of the problem","3")
	addFreeOption("identify","4")
	closeRow()

	startRow(bgcolor="pink")
	addOption("identify2","Minimal evidence of research","1")
	addOption("identify2","Partial evidence of research from one or more sources","2")
	addOption("identify2","Clear, detailed research from a variety of sources","3")
	addFreeOption("identify2","4")
	closeRow()



	startRow()
	addSubSection("Design - Team worked together while creating a project plan and developing their ideas.","#D2DAF1",["design","design2"])
	closeRow()

	startRow()
	addOption("design","Minimal evidence of an effective project plan","1")
	addOption("design","Partial evidence of an effective project plan","2")
	addOption("design","Clear evidence of an effective project plan","3")
	addFreeOption("design","4")
	closeRow()

	startRow(bgcolor="pink")
	addOption("design2","Minimal evidence that development process involved all team members","1")
	addOption("design2","Partial evidence that development process involved all team member","2")
	addOption("design2","Clear evidence that development process involved all team members","3")
	addFreeOption("design2","4")
	closeRow()



	startRow()
	addSubSection("Create - Team developed an original idea or built on an existing one with a prototype model/drawing to represent their solution.","#D2DAF1",["create","create2"])
	closeRow()

	startRow(bgcolor="pink")
	addOption("create","Minimal explanation of innovative solution","1")
	addOption("create","Simple explanation of innovative solution","2")
	addOption("create","Detailed explanation of innovative solution","3")
	addFreeOption("create","4")
	closeRow()

	startRow()
	addOption("create2","Unclear model/drawing that represents the solution","1")
	addOption("create2","Simple model/drawing that represents the solution","2")
	addOption("create2","Detailed model/drawing that represents the the solution","3")
	addFreeOption("create2","4")
	closeRow()




	startRow()
	addSubSection("Iterate - Teams shared their ideas, collected feedback, and included improvements in their solution.","#D2DAF1",["iterate","iterate2"])
	closeRow()

	startRow()
	addOption("iterate","Minimal sharing of their solution","1")
	addOption("iterate","Solution shared with at least one person/group","2")
	addOption("iterate","Solution shared with multiple people/groups","3")
	addFreeOption("iterate","4")
	closeRow()

	startRow()
	addOption("iterate2","Minimal evidence of improvements based on feedback","1")
	addOption("iterate2","Partial evidence of improvements based on feedback","2")
	addOption("iterate2","Clear evidence of improvements based on feedback","3")
	addFreeOption("iterate2","4")
	closeRow()




	startRow()
	addSubSection("Communicate - Team shared an effective presentation of their solution, its impact on their users, and celebrated their team's progress.","#D2DAF1",["communicate","communicate2"])
	closeRow()

	startRow(bgcolor="pink")
	addOption("communicate","Unclear explanation of the solution and its potential impact on others","1")
	addOption("communicate","Partially clear explanation of solution and its potential impact on others","2")
	addOption("communicate","Clear explanation of solution and its potential impact on others","3")
	addFreeOption("communicate","4")
	closeRow()

	startRow(bgcolor="pink")
	addOption("communicate2","Presentation shows minimal pride or enthusiasm for their work","1")
	addOption("communicate2","Presentation shows partial pride or enthusiasm for their work","2")
	addOption("communicate2","Presentation clearly shows pride or enthusiasm for their work","3")
	addFreeOption("communicate2","4")
	closeRow()

	addToBuffer("<p style='background-color:pink'>Criteria on this page with this style of check box count dually toward Innovation Project and Core Values awards rankings</p>")


	addComments("innovationProject","Innovation Project -- How did the team identify and approach solving a problem connected to the season theme","Great Job","Think About")

	endRubric()


	addToBuffer("Total Points:<text> </text><b style='color:red;' id='ippts'></b>")

	
	/*
	window.onload = function() {
	check_missions()
	recalc(0,"advantage1",0)
	}
	*/

	writebuffer("projectlist")
}
load2020RP()
