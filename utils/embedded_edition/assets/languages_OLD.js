// This is where all the translations go for every language
// Language switcher v2.0 Dynamic Content Replacer

// For forwards compatibility with older versions of the scorer, just add "languageInit();version=versionText" at the end of this file.
// Note that the line "langs=[XXX]" has no effect in old versions of the scorer and will just be ignored. To update the language list in old versions, copy that line to the equivalent place in index.html

// Universal

versionNum = "2.3"
versionDay = 3
versionMonth = 12
versionYear = 2020
versionText = ""

//langs=['en:United States:English','pt:Brazil:Portugues','de:Germany:Deutsche','es:Spain:Español','sk:Slovakia:Slovenský','nl:Netherlands:Nederlands','el:Greece:ελληνικά','hu:Hungary:Magyar','he:Israel:עִבְרִית‎','fr:France:français']
langs = ['en:United States:English','es:Spain:Español','el:Greece:Ελληνικά','pt:Brazil:Portugues','nl:Netherlands:Nederlands','th:Thailand:ไทย','ro:Romania:Română','he:Israel:עִבְרִית‎',"sl:Slovenia:slovenščino"]
//  langs=['en:United States:English','es:Spain:Español','pt:Brazil:Portugues','de:Germany:Deutsche','el:Greece:ελληνικά','tr:Turkey:Türk','ro:Romania:Română','nl:Netherlands:Nederlands','hu:Hungary:Magyar','it:Italy:Italiano']

monthNames = []

// Default Language (English/en)

function languageInit() {
	translatorCredit = ""

	yes = "Yes"
	no = "No"
	partly = "Partly"
	completely = "Completely"
	resetText = "Reset"
	saveText = "Save" // As verb
	saveNText = "Save" // As noun
	savescoreText = "Save Score"
	loadsaveText = "Load Score No."
	deletesaveText = "Delete All Saved Scores"
	importsaveText = "Import Shared Scores"
	exportsaveText = "Share Scores"
	signin = "Sign in with"
	signout = "Sign out of"
	GoogleCreate = "Create New Spreadsheet"
	GoogleOpen = "Open Google Spreadsheet"
	created = "Created"
	savedto = "Saved to"
	dateText = "Date/Time"
	totalText = "Total Points"
	savedText = "Saved"
	loadedText = "Loaded"

	monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	improvementText = "Score History"
	scorerText = "Scorer"
	timersText = "Timers"
	savesText = "Saves"
	startText = "Start"
	stopText = "Stop"
	pointsText = "Points"

	sketchTitle = "Strategy Planner"
	drawingsText = "Saved Drawings"
	saveDrawingText = "Save Drawing"
	deleteSavedDrawingsText = "Delete All Saved Drawings"
	loadSavedDrawingText = "Load Saved Drawing"
	exportSavedDrawingsText = "Share Drawings"
	importSavedDrawingsText = "Import Shared Drawings"
	exportPNGText = "Export Drawing as PNG"

	doneText = "Completed"

	timerText = "Timer:"
	stopwatchText = "Stopwatch:"

	undefinedText = "undefined"

	revisionText = "RePLAY Scorer Version "
	copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
	tournamentText = "A version of this scorer with added features needed for a tournament can be found <a href='tournament.html' data-ajax='false'>here</a>."

	title = "FLL RePLAY Scorer"

	missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)

	M00 = "Advantage"
	M00a = "Does the team's Equipment fit in the Small Inspection Area?"

	M01 = "Innovation Project"
	M01a = "Is any part of the model touching either the RePLAY logo or the gray area around the bench?"
	M01b = "The model must be made of at least two white LEGO pieces and measures at least as long as four LEGO studs in at least one direction."

	M02 = "Step Counter"
	M02a = "The bottom of the pointer is on"
	M02b = "None"
	M02c = "Magenta"
	M02d = "Yellow"
	M02e = "Blue"

	M03 = "Slide"
	M03a = "Is the first slide figure off the slide?"
	M03b = "Is the second slide figure off the slide?"
	M03c = "Is a slide figure completely in home?"
	M03d = "Is a slide figure held completely off the mat by the heavy tire and is touching nothing else?"

	M04 = "Bench"
	M04a = "Is the bench down flat?"
	M04b = "How many cubes are touching the mat in hopscotch spaces?"
	M04c = "Is the backrest completely out of both of its holes?"

	M05 = "Basketball"
	M05a = "Is there is a cube in the crate?"
	M05b = "Does the crate rest on the middle height’s white stopper?"
	M05c = "Does the crate rest on the top height’s white stopper?"

	M06 = "Pull-Up Bar"
	M06a = "Has the robot passed completely through the pull-up bar’s upright frame at any time?"
	M06b = "Does the pull-up bar hold 100% of the robot up off the mat at the end of the match?"

	M07 = "Robot Dance"
	M07a = "Is the robot’s controller at least partly over the dance floor in a “dancing” motion at the end of the match?"
	M07b = "Any silly or skilled repetitive action counts as dancing – do something fun! For M07, you cannot score this plus the “held up” score from M06 in the same match."

	M08 = "Boccia"
	M08a = "Have both share models sent only one cube anywhere onto the opposing field and those cubes color-match each other?"
	M08b = "How many cubes are completely in your frame or target?"
	M08c = "Is there at least one yellow cube completely in your target?"

	M09 = "Tire Flip"
	M09a = "Is the light (blue tread) tire white center up?"
	M09b = "Is the heavy (black tread) tire white center up?"
	M09c = "How many white-center-up tires are completely in the large target circle?"
	M09d = "If the heavy tire crosses the red flip line at any time, even partly, it scores zero."

	M10 = "Cell Phone"
	M10a = "Is the cell phone white side up and resting on only the mat?"

	M11 = "Treadmill"
	M11a = "The robot has spinned the rollers so the pointer points to"
	M11b = "None"
	M11c = "Grey"
	M11d = "Red"
	M11e = "Orange"
	M11f = "Yellow"
	M11g = "Light Green"
	M11h = "Dark Green"

	M12 = "Row Machine"
	M12a = "Is the free wheel completely outside the large circle?"
	M12b = "Is the free wheel completely in the small circle"

	M13 = "Weight Machine"
	M13a = "The stopper is under the lever and lever setting is on"
	M13b = "None"
	M13c = "Blue"
	M13d = "Magenta"
	M13e = "Yellow"

	M14 = "Health Units"
	M14a = "How many health units are touching either the RePLAY logo or the gray area around the bench?"
	M14b = "How many health units are looped over a pull-up bar post as shown – maximum of four – and touching no equipment?"

	M15 = "Precision"
	M15a = "How many Precision Tokens are left on the field?"


	if (language == "es") {
		translatorCredit = "Traducido a Español por Sanjay Seshan"

		yes = "Sí"
		no = "No"
		partly = "Parcialmente"
		completely = "Completamente"
		resetText = "Reiniciar"
		saveText = "Guardar"
		savescoreText = "Guardar Puntación"
		loadsaveText = "Cargar Puntación No."
		deletesaveText = "Eliminar Todos los Guardados"
		importsaveText = "Importar Puntaciones Compartidos"
		exportsaveText = "Compartir Puntaciones"
		created = "Hecho"
		savedto = "Guardado a"
		dateText = "Fecha/Tiempo"
		totalText = "Total Puntos"
		savedText = "Guardado"
		loadedText = "Cargado"

		monthNames = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Augusto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		improvementText = "Historia de Guardados"
		scorerText = "Marcador"
		timersText = "Temporizadoes"
		savesText = "Guardados"
		startText = "Empezar"
		stopText = "Parar"
		pointsText = "Puntos"

		sketchTitle = "Planificador de estrategia"
		drawingsText = "Dibujos guardados"
		saveDrawingText = "Guardar dibujo"
		deleteSavedDrawingsText = "Eliminar todos los dibujos"
		loadSavedDrawingText = "Cargar dibujo guardado"
		exportSavedDrawingsText = "Compartir dibujos guardados"
		importSavedDrawingsText = "Importar dibujos compartidos"
		exportPNGText = "Exportar dibujo como PNG"

		doneText = "Completado"

		timerText = "Temporizador:"
		stopwatchText = "Parar Reloj:"

		undefinedText = "Sin definido"

		revisionText = "Marcador RePLAY versión "
		copyrightText = "Los derechos de autor (c) " + versionYear + " Seshan Brothers"
		tournamentText = "Un versión de este marcador con más carictaristicas para un torneo puede se encontrado a <a href='tournament.html' data-ajax='false'>here</a>."

		title = "Marcador de FLL RePLAY"

		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)

		M00 = "Bonificación por Inspección del Equipamiento"
		M00a = "¿Cabe todo vuestro equipamiento en la zona de inspección menor?"

		M01 = "Proyecto de Innovación"
		M01a = "¿Hay alguna parte del modelo que toca el logo RePLAY o el área gris alrededor del banco?"
		M01b = "El modelo es construido con, al menos, dos piezas LEGO y mide, como mínimo, cuatro espigas LEGO de largo en, al menos, una dirección."

		M02 = "Contador de Pasos"
		M02a = "La parte baja del puntero está sobre el color "
		M02b = "Nada"
		M02c = "Magenta"
		M02d = "Amarillo"
		M02e = "Azul"

		M03 = "Tobogán"
		M03a = "¿Está la primera figura fuera del tobogán?"
		M03b = "¿Está la segunda figura fuera del tobogán?"
		M03c = "¿Está una figura del tobogán completamente en casa?"
		M03d = "¿Está una figura del tobogán aguantada completamente por la rueda pesada sin tocar el tapete y no está tocando nada más?"

		M04 = "Banco"
		M04a = "¿Está el banco bajado?"
		M04b = "¿Cuántas cubos están en los espacios de la rayuela?" 
		M04c = "¿Está el respaldo del banco compleatamente fuera de ambos orificios?"

		M05 = "Baloncesto"
		M05a = "¿Hay un cubo dentro del cajón?"
		M05b = "¿Reposa el cajón sobre el tope blanco a media altura del poste?"
		M05c = "¿Reposa el cajón reposa sobre el tope blanco a máxima altura del poste?"

		M06 = "Larguero"
		M06a = "¿Pasa el robot completamente a través del larguero en cualquier momento?"
		M06b = "¿Aguanta el larguero el 100% del robot alzado sin tocar el tapete al final de la partida?"

		M07 = "Danza del Robot"
		M07a = "¿Está al menos parte del controlador del robot sobre la pista de baile en un movimiento de “danza” al final de la partida?"
		M07b = "¡Cualquier acción repetitiva, graciosa o ridícula, cuenta como danza - haced algo divertido! No podéis conseguir esta puntuación de ‘danzando’ (M07) y la de “colgado” (M06) en la misma partida."

		M08 = "Boccia"
		M08a = "¿Han ambos compartidores de bochas enviado solo un cubo a cualquier parte del terreno opuesto y ambos cubos son del mismo color?"
		M08b = "¿Cuántas cubos están completamente en vuestro campo o diana?" 
		M08c = "¿Hay por lo menos un cubo armarillo completamente dentro de vuestro diana?"

		M09 = "Voltear Neumáticos"
		M09a = "¿Está el neumático ligero (con banda de rodadura azul) con el centro blanco arriba?"
		M09b = "¿Está el neumático pesado (con banda de rodadura negra) con el centro blanco arriba?"
		M09c = "¿Cuántas neumáticos con el centro blanco arriba completamente dentro del círculo grande?"
		M09d = "Si el neumático pesado cruza la linia roja de voleteando, se marca cero."

		M10 = "Teléfono Móvil"
		M10a = "¿Está el teléfono móvil con vuestro cara blanca boca arriba y descansa solo sobre el tapete?"

		M11 = "Cinta de Correr"
		M11a = "El robot ha girado los rodillos así que el puntero indica"  
		M11b = "Nada"
		M11c = "Gris"
		M11d = "Rojo"
		M11e = "Naranja"
		M11f = "Armarillo"
		M11g = "Verde claro"
		M11h = "Verde oscuro"

		M12 = "Máquina de Remo"
		M12a = "¿Está la rueda libre compleramente fuera del círculo grande?" 
		M12b = "¿Está la rueda libre compleramente fuera del círculo pequeño?"

		M13 = "Máquina de Pesas"
		M13a = "El tope está debajo de la palanca y la posición de la palanca es"
		M13b = "Nada"
		M13c = "Azul"
		M13d = "Magenta"
		M13e = "Amarillo"

		M14 = "Porciones de Salud"
		M14a = "¿Cuántas porciones de salud están tocando el logo RePLAY o el área gris alredador del banco?" 
		M14b = "¿Cuántas porciones de salud están colgadas sobre un poste del larguero - máximo de cuatro - y sin contacto con equipamiento?"

		M15 = "Precisión"
		M15a = "¿Cuántas testigos de precisión quedan en el terreno de juego?"


	
	


	} else if (language == "el") {
		translatorCredit = " Translated into Greek by Michail Marinakis – Mεταφράστηκε στα ελληνικά από τον Μιχάλη Μαρινάκη"

		yes = "Ναι"
		no = "Όχι"
		partly = "Μερικώς"
		completely = "Εντελώς"
		resetText = "Επαναφορά"
		saveText = "Αποθήκευση"
		savescoreText = "Αποθήκευση Βαθμολογίας"
		loadsaveText = "Φόρτωση Αποθηκευμένης Βαθμολογίας:"
		deletesaveText = " Διαγραφή Όλων των Βαθμολογιών "
		importsaveText = "Εισαγωγή Βαθμολογιών"
		exportsaveText = "Εξαγωγή Βαθμολογιών"
		signin = " Σύνδεση με"
		signout = " Έξοδος"
		GoogleCreate = "Δημιουργία Νέου Λογιστικού Φύλλου"
		GoogleOpen = "Άνοιγμα Google Spreadsheet"
		created = "Δημιουργήθηκε"
		savedto = "Αποθηκεύτηκε σε"
		dateText = "Ημερομηνία/Ώρα"
		totalText = "Συνολική Βαθμολογία"
		savedText = "Αποθηκεύτηκε"
		loadedText = "Φορτώθηκε"
		
		monthNames =["Μήνας", "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"];
		improvementText = "Score History"
		scorerText = "Καταγραφή Βαθμολογίας"
		timersText = "Χρονόμετρα"
		savesText = "Αποθηκεύσεις"
		startText = "Έναρξη"
		stopText = "Παύση"
		pointsText = "Βαθμοί"
		
		sketchTitle = "Σχεδιαστής Στρατηγικής"
		drawingsText = "Αποθηκευμένα Σχέδια"
		saveDrawingText = "Αποθήκευση Σχεδίου"
		deleteSavedDrawingsText = "Διαγραφή ΟΛΩΝ των αποθηκευμένων σχεδίων"
		loadSavedDrawingText = "Εισαγωγή Αποθηκευμένου Σχεδίου"
		exportSavedDrawingsText = "Εξαγωγή Σχεδίου"
		importSavedDrawingsText = "Εισαγωγή Αποθηκευμένου Σχεδίου"
		exportPNGText = "Εξαγωγή Σχεδίου σε μορφή PNG"
		
		doneText = "Ολοκλήρωση"
		
		timerText = " Χρόνος:"
		stopwatchText = " Χρονόμετρο:"
		
		undefinedText = "δεν καθορίζεται"
		
		revisionText = "RePLAY Scorer Έκδοση "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		tournamentText = "Μία έκδοση με δυνατότητες και λειτουργείες που απαιτούνται σε ένα event μπορείτε να βρείτε εδώ <a href='tournament.html' data-ajax='false'>here</a>."
		
		title = "FLL RePLAY Βαθμολογία"
		
		missionNumbering = "Α" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)
		
		M00 = "Bonus Επιθεώρησης Εξοπλισμού"
		M00a = "Όλος σας ο Εξοπλισμός χωράει στην Μικρή Περιοχή Επιθεώρησης"
		
		M01 = "Project Καινοτομίας"
		M01a = " Αγγίζει κάποιο τμήμα του το λογότυπο RePLAY ή τη γκρι περιοχή γύρω από τον πάγκο;"
		M01b = " Είναι κατασκευασμένο από τουλάχιστον δύο λευκά κομμάτια LEGO και μετρά τουλάχιστον όσο τέσσερα σημεία LEGO σε τουλάχιστον μία κατεύθυνση."
		
		M02 = "Μετρητής Βημάτων"
		M02a = " ο κάτω δείκτης είναι:"
		M02b = "σε κανένα χρώμα"
		M02c = "στη ματζέντα"
		M02d = "στο κίτρινο"
		M02e = "στο μπλε"
		
		M03 = "Τσουλήθρα"
		M03a = "Μία φιγούρα είναι εκτός της τσουλήθρας"
		M03b = "Και οι δύο φιγούρες είναι εκτός της τσουλήθρας"
		M03c = "Μία φιγούρα είναι πλήρως στην Βάση"
		M03d = "Μία φιγούρα υποστηρίζεται μόνο από τον μεγάλο τροχό, δεν είναι σε επαφή με το Mat και δεν ακουμπά τίποτα άλλο"
		
		M04 = "Πάγκος"
		M04a = "Ο πάγκος είναι κάτω"
		M04b = "Πόσοι κύβοι υπάρχουν σε χώρους κουτσού και αγγίζουν το Mat;"
		M04c = "Η πλάτη του καθίσματος είναι εντελώς έξω από τις δύο οπές της"
		
		M05 = "Μπάσκετ"
		M05a = "Υπάρχει κύβος στην μπασκέτα"
		M05b = "η μπασκέτα στηρίζεται στην λευκή ασφάλεια του μεσαίου ύψους"
		M05c = "η μπασκέτα στηρίζεται στην λευκή ασφάλεια του μέγιστου ύψους"
		
		M06 = "Μονόζυγο"
		M06a = "Το ρομπότ πέρασε εντελώς μέσα από το όρθιο πλαίσιο του μονόζυγου κάποια στιγμή"
		M06b = "Το μονόζυγο υποστηρίζει και κρατά το 100% του ρομπότ πάνω από το Mat στο τέλος του αγώνα"
		
		M07 = "Χορός Ρομπότ"
		M07a = "Ο ελεγκτής του ρομπότ βρίσκεται τουλάχιστον εν μέρει πάνω από την πίστα χορού σε κίνηση «χορού» στο τέλος του αγώνα"
		M07b = " Κάθε επαναλαμβανόμενη δράση θεωρείται χορός - κάντε κάτι διασκεδαστικό! Για την Α07, δεν μπορείτε να το σκοράρετε συν το σκορ «κρέμασμα» από την Α06 στον ίδιο αγώνα."
		
		M08 = "Boccia"
		M08a = "Και οι δύο εκτοξευτές έχουν στείλει μόνο έναν κύβο οπουδήποτε στο αντίπαλο πεδίο και αυτοί οι κύβοι ταιριάζουν χρωματικά μεταξύ τους"
		M08b = "Πόσοι κύβοι υπάρχουν εντελώς μέσα στο πλαίσιο ή στο στόχο σας"
		M08c = "Υπάρχει τουλάχιστον ένας κίτρινος κύβος εντελώς στον στόχο σας"
		
		M09 = "Αναστροφή Ελαστικών"
		M09a = "Το ελαφρύ (μπλε) ελαστικό είναι με το λευκό κέντρο προς τα πάνω"
		M09b = "Το βαρύ ελαστικό (μαύρο) είναι με το λευκό προς τα πάνω"
		M09c = "Πόσα ελαστικά με το λευκό κέντρο προς τα πάνω βρίσκονται εντελώς στον μεγάλο κύκλο στόχο"
		M09d = "Εάν το βαρύ ελαστικό διασχίσει την κόκκινη γραμμή ανά πάσα στιγμή, ακόμη και εν μέρει, σκοράρει μηδέν."
		
		M10 = "Κινητό Τηλέφωνο"
		M10a = "Το κινητό ακουμπά μόνο το Mat και η άσπρη πλευρά είναι προς τα πάνω"
		
		M11 = "Διάδρομος"
		M11a = "Το ρομπότ περίστρεψε τους κυλίνδρους και αυτοί δείχνουν:"
		M11b = "Κανένα"
		M11c = "Γκρι"
		M11d = "Κόκκινο"
		M11e = "Πορτοκαλί"
		M11f = "Κίτρινο"
		M11g = "Λαχανί"
		M11h = "Πράσινο"
		
		M12 = "Εργόμετρο"
		M12a = "Η Ελεύθερη Ρόδα είναι εντελώς έξω από τον μεγάλο κύκλο"
		M12b = " Η Ελεύθερη Ρόδα είναι εντώς του μικρού κυκλού "
		
		M13 = "Μηχανή Βάρους"
		M13a = "Η ασφάλεια βρίσκεται κάτω από το μοχλό και η ρύθμιση μοχλού είναι:"
		M13b = "σε κανένα"
		M13c = "στο μπλε"
		M13d = "στη ματζέντα"
		M13e = "στο κίτρινο"
		
		M14 = "Μονάδες Υγείας"
		M14a = "Πόσες Μονάδες Υγείας είναι σε επαφή με το λογότυπο RePLAY ή τη γκρι περιοχή γύρω από τον πάγκο"
		M14b = "Πόσες Μονάδες Υγείας είναι κρεμασμένες στο μονόζυγο – μέγιστο τέσσερις – και δεν είναι σε επαφή με εξοπλισμό"
		
		M15 = "Ακρίβεια"
		M15a = "Πόσες Μάρκες Ακριβείας υπάρχουν στο Field;"
		
		
	}  else if (language == "pt") { 
		translatorCredit = "Translated into Portuguese by Lucas Colonna and Anderson Harayashiki Moreira"

		yes = "Sim"
		no = "Não"
		partly = "Parcialmente"
		completely = "Completamente"
		resetText = "Reiniciar"
		saveText = "Salvar"
		savescoreText = "Salvar Pontuação"
		loadsaveText = "Carregar Pontuação:"
		deletesaveText = "Apagar Pontuações Salvas"
		importsaveText = "Importar Arquivo"
		exportsaveText = "Exportar Arquivo"
		signin = "Entrar como"
		signout = "Sair"
		GoogleCreate = "Criar Nova Planilha"
		GoogleOpen = "Abrir Planilha do Google"
		created = "Criado"
		savedto = "Salvo em"
		dateText = "Data/Horário"
		totalText = "Pontuação Total"
		savedText = "Salvo"
		loadedText = "Carregado"
		
		monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
		improvementText = "Histórico de Pontuação"
		scorerText = "Pontuador"
		timersText = "Tempo"
		savesText = "Salvar"
		startText = "Iniciar"
		stopText = "Parar"
		pointsText = "Pontos"
		
		sketchTitle = "Planejador de Estratégia"
		drawingsText = "Desenhos Salvos"
		saveDrawingText = "Salvar Desenho"
		deleteSavedDrawingsText = "Apagar Todos os Desenhos Salvos"
		loadSavedDrawingText = "Carregar Desenho Salvo"
		exportSavedDrawingsText = "Compartilhar Desenhos"
		importSavedDrawingsText = " Importar Desenhos Compartilhados"
		exportPNGText = "Exportar Desenho como .PNG"
		
		doneText = "Completo"
		
		timerText = "Temporizador:"
		stopwatchText = "Cronômetro:"
		
		undefinedText = "Indefinido"
		
		revisionText = "Pontuador RePLAY versão "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		tournamentText = " Uma versão desse pontuador com recursos para torneios pode ser encontrada em <a href='tournament.html' data-ajax='false'>aqui</a>."
		
		title = "Pontuador FLL RePLAY"
		
		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)
		
		M00 = "Bônus de Inspeção de Equipamentos"
		M00a = "Todos os seus equipamentos couberam no espaço de inspeção pequeno?"
		
		M01 = "Projeto de Inovação"
		M01a = "Está, pelo menos com uma de suas partes, em contato com a logo RePLAY ou a área cinza ao redor do banco?"
		M01b = "É formado por pelo menos duas peças LEGO brancas e mede, pelo menos, quatro pinos de um bloco LEGO em uma das direções."
		
		M02 = "Contador de Passos"
		M02a = "O ponteiro inferior está em"
		M02b = "Nenhum"
		M02c = "Magenta"
		M02d = "Amarelo"
		M02e = "Azul"
		
		M03 = "Escorregador"
		M03a = "Um boneco está fora do escorregador?"
		M03b = "O segundo boneco está fora do escorregador?"
		M03c = "Um boneco do escorregador está na área do robô?"
		M03d = "Um dos bonecos está completamente fora do tapete, sobre o pneu pesado, sem estar tocando em mais nada?"
		
		M04 = "Banco"
		M04a = "O banco está completamente abaixado?"
		M04b = "O banco está completamente abaixado e há cubos tocando o tapete nos espaços da amarelinha?"
		M04c = "O encosto está completamente removido dos seus buracos de encaixe?"
		
		M05 = "Basquetebol"
		M05a = "Há um cubo dentro do caixote?"
		M05b = "O caixote está apoiado sobre a trava branca no meio do poste?"
		M05c = "O caixote está apoiado sobre a trava branca na parte de cima do poste?"
		
		M06 = "Barra Fixa"
		M06a = " O robô passou completamente sob a estrutura da barra fixa a qualquer momento?"
		M06b = " A barra fixa está segurando 100% do robô fora do tapete no final do round?"
		
		M07 = "Dança do Robô"
		M07a = " O controlador do robô está, pelo menos parcialmente, sobre a pista de dança, movendo-se como se estivesse fazendo uma \"dança\" no final do round?"
		M07b = " Qualquer ação repetitiva boba ou que demonstre habilidade conta como se fosse uma dança - façam algo divertido! Não é possível marcar pontos pela M07 e pelo robô \"pendurado\" da M06 no mesmo round."
		
		M08 = "Bocha"
		M08a = "O modelo lançador de cada equipe enviou apenas um cubo para qualquer lugar da arena adversária e os cubos são da mesma cor um do outro?"
		M08b = "Há cubos completamente dentro da sua quadra ou alvo?"
		M08c = "Há pelo menos um cubo amarelo completamente dentro do seu alvo?"
		
		M09 = "Tombamento de Pneu"
		M09a = "O pneu leve (banda azul) está com a parte central branca virada para cima?"
		M09b = "O pneu pesado (banda preta) está com a parte central branca virada para cima?"
		M09c = "Quantos pneus com a parte central branca virada para cima estão completamente dentro do círculo alvo grande?"
		M09d = "Se o pneu pesado cruzar a linha vermelha a qualquer momento, mesmo que parcialmente, a pontuação será zero"
		
		M10 = "Telefone Celular"
		M10a = "O lado branco do telefone celular está virado para cima, apoiado somente sobre o tapete?"
		
		M11 = "Esteira"
		M11a = "O robô girou os roletes de modo que o ponteiro aponte para o"
		M11b = "Nenhum"
		M11c = "Cinza"
		M11d = "Vermelho"
		M11e = "Laranja"
		M11f = "Amarelo"
		M11g = "Verde claro"
		M11h = "Verde escuro"
		
		M12 = "Máquina de Remo"
		M12a = "A roda está completamente fora do círculo grande?"
		M12b = "A roda está completamente dentro do círculo pequeno?"
		
		M13 = "Aparelho de ginástica"
		M13a = "A trava está embaixo da alavanca e o ajuste da alavanca está no"
		M13b = "Nenhum"
		M13c = "Azul"
		M13d = "Magenta"
		M13e = "Amarelo"
		
		M14 = "Unidades de Saúde"
		M14a = "Quantas unidades de saúde estão tocando a logo RePLAY ou a área cinza ao redor do banco?"
		M14b = "Quantas unidades de saúde estão com a argola pendurada em uma das barras verticais da barra fixa, como ilustrado - quatro no máximo - e sem tocar em nenhum equipamento?"
		
		M15 = "Discos de Precisão"
		M15a = "Quantos discos de precisão estão na arena?"
		
		

	} else if (language == "nl") {
		translatorCredit = "Translated into Dutch by Irene Hulsen"

		yes = "Ja"
		no = "Nee"
		partly = "Gedeeltelijk"
		completely = "Volledig"
		resetText = "Reset"
		saveText = "Opslaan" // As verb
		saveNText = "Opslaan" // As noun
		savescoreText = "Score opslaan"
		loadsaveText = "Laad scorenr."
		deletesaveText = "Verwijder alle opgeslagen scores"
		importsaveText = "Importeer gedeelde scores"
		exportsaveText = "Deel scores"
		created = "Gemaakt"
		savedto = "Opgeslagen naar"
		dateText = "Datum/Tijd"
		totalText = "Totaal aantal punten"
		savedText = "Opgeslagen"
		loadedText = "Geladen"
		
		monthNames = ["", "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		improvementText = "Score geschiedenis"
		scorerText = "Scorer"
		timersText = "Timers"
		savesText = "Opgeslagen"
		startText = "Start"
		stopText = "Stop"
		pointsText = "Punten"
		
		sketchTitle = "FLL RePLAY strategieplanner"
		drawingsText = "Opgeslagen tekeningen"
		saveDrawingText = "Tekening opslaan"
		deleteSavedDrawingsText = "Verwijder alle opgeslagen tekeningen"
		loadSavedDrawingText = "Laad opgeslagen tekening"
		exportSavedDrawingsText = "Deel tekeningen"
		importSavedDrawingsText = "Importeer gedeelde tekeningen"
		exportPNGText = "Exporteer tekening als PNG"
		
		doneText = "Voltooid"
		
		timerText = "Timer:"
		stopwatchText = "Stopwatch:"
		
		undefinedText = "niet gedefinieerd"
		
		revisionText = "RePLAY scorer versie "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		tournamentText = "Een versie van deze scorer met extra functies die nodig zijn voor een toernooi is te vinden op <a href='tournament.html' data-ajax='false'></a>."
		
		title = "FLL RePLAY scorer"
		
		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)
		
		M00 = "Bonus"
		M00a = "Past alle uitrusting van het team in de kleine inspectieruimte?"
		
		M01 = "Innovatieproject"
		M01a = "Raakt een deel van het model het RePLAY logo aan of het grijze gebied rond de bank?"
		M01b = "Het model moet gemaakt zijn van tenminste twee witte LEGO onderdelen en minimaal vier LEGO noppen meten in minstens één richting."
		
		M02 = "Stappenteller"
		M02a = "De onderkant van de aanwijzer staat op"
		M02b = "Geen"
		M02c = "Magenta"
		M02d = "Geel"
		M02e = "Blauw"
		
		M03 = "Glijbaan"
		M03a = "Is het eerste glijbaanfiguur van de glijbaan af?"
		M03b = "Is het tweede glijbaanfiguur van de glijbaan af?"
		M03c = "Is een glijbaanfiguur volledig in THUIS?"
		M03d = "Wordt een glijbaanfiguur volledig van de mat gehouden door de zware band en raakt het niets anders?"
		
		M04 = "Bank"
		M04a = "Ligt de bank plat?"
		M04b = "Hoeveel blokjes raken de mat in de hinkelbaanruimtes?"
		M04c = "Is de rugleuning volledig uit beide gaten?"
		
		M05 = "Basketbal"
		M05a = "Is er een blokje in de krat?"
		M05b = "Steunt de krat op de middelste witte stop?"
		M05c = "Steunt de krat op de bovenste witte stop?"
		
		M06 = "Optrekstang"
		M06a = "Is de robot op een bepaald moment volledig voorbij het rechtopstaande frame van de opstrekstang gegaan?"
		M06b = "Houdt de opstrekstang 100% van de robot van de mat aan het einde van de wedstrijd?"
		
		M07 = "Robotdans"
		M07a = "Staat de controller van de robot aan het einde van de wedstrijd tenminste gedeeltelijk over de dansvloer in een “dansende” beweging?"
		M07b = "Elke gekke of gedurfde herhalende actie telt als dansen – doe iets leuks! Je kunt in dezelfde wedstrijd niet scoren voor M07 en het “omhoog houden” van M06."
		
		M08 = "Boccia"
		M08a = "Hebben beide deelmodellen slechts één blokje ergens op het tegenoverliggende veld neergelegd en hebben die blokjes dezelfde kleur?"
		M08b = "Hoeveel blokjes zijn volledig in jullie frame of doel?"
		M08c = "Is er tenminste 1 geel blokje volledig in jullie doel?"
		
		M09 = "Banden omdraaien"
		M09a = "Is de lichte (blauwe) band omgedraaid, wit naar boven?"
		M09b = "Is de zware (zwarte) band omgedraaid, wit naar boven?"
		M09c = "Hoeveel omgedraaide banden, wit naar boven, zijn volledig in de grote doelcirkel?"
		M09d = "Als de zware band op enig moment de rode markeringslijn passeert, zelfs gedeeltelijk, dan scoort hij nul punten."
		
		M10 = "Mobieltje"
		M10a = "Is het mobieltje omgedraaid met de witte kant naar boven en rust het alleen op de mat?"
		
		M11 = "Loopband"
		M11a = "De robot heeft de rollen gedraaid, zodat de wijzer wijst naar"
		M11b = "Geen"
		M11c = "Grijs"
		M11d = "Rood"
		M11e = "Oranje"
		M11f = "Geel"
		M11g = "Lichtgroen"
		M11h = "Donkergroen"
		
		M12 = "Roeimachine"
		M12a = "Is het losse wiel volledig buiten de grote cirkel?"
		M12b = "Is het losse wiel volledig in de kleine cirkel?"
		
		M13 = "Gewichtsapparaat"
		M13a = "De stop is onder de hendel en de hendel is ingesteld op"
		M13b = "Geen"
		M13c = "Blauw"
		M13d = "Magenta"
		M13e = "Geel"
		
		M14 = "Gezondsheidsunits"
		M14a = "Hoeveel gezondheidsunits raken het RePLAY logo aan of het grijze gebied rond de bank?"
		M14b = "Hoeveel gezondsheidsunits zijn gelust aan een paal van de opstrekstang, zoals afgebeeld – maximaal vier – en raken geen uitrusting aan?"
		
	    M15 = "Precisie"
	    M15a = "Hoeveel precisietekens zijn er op het veld overgebleven?"

	} else if (language == "th") {
		translatorCredit = "Translated into Thai by Wil Losereewanich (วรมันต์ ลอเสรีวานิช)"

		yes = "ใช่"
		no = "ไม่ใช่"
		partly = "บางส่วน"
		completely = "ทั้งหมด"
		resetText = "Reset"
		saveText = "บันทึก" // As verb
		saveNText = "การบันทึก" // As noun
		savescoreText = "บันทึกคะแนน"
		loadsaveText = "โหลดคะแนนครั้งที่"
		deletesaveText = "ลบการบันทึกของทุกคะแนน"
		importsaveText = "นำเข้าคะแนนที่ได้แชร์"
		exportsaveText = "แชร์คะแนน"
		created = "สร้าง"
		savedto = "บันทึกไปยัง"
		dateText = "วันและเวลา"
		totalText = "คะแนนรวม"
		savedText = "บันทึกแล้ว"
		loadedText = "โหลดแล้ว"

		monthNames = ["", "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
		improvementText = "ประวัติคะแนน"
		scorerText = "บันทึกคะแนน"
		timersText = "จับเวลา"
		savesText = "การบันทึก"
		startText = "Start"
		stopText = "Stop"
		pointsText = "คะแนน"

		sketchTitle = "FLL RePLAY Strategy Planner"
		drawingsText = "ภาพวัดที่ได้บันทึกไว้"
		saveDrawingText = "บันทึกภาพวาด"
		deleteSavedDrawingsText = "ลบภาพวาดที่ได้บันทึกไว้ทั้งหมด"
		loadSavedDrawingText = "โหลดภาพวาดที่ได้บันทึกไว้"
		exportSavedDrawingsText = "แบ่งปันภาพวาด"
		importSavedDrawingsText = "นำเข้าภาพวาดที่ได้แชร์"
		exportPNGText = "ส่งภาพวาดเป็นรูป PNG"

		doneText = "เสร็จสิ้น"

		timerText = "Timer:"
		stopwatchText = "Stopwatch:"

		undefinedText = "undefined"

		revisionText = "RePLAY Scorer เวอร์ชัน "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		tournamentText = "เครื่องมือคำนวณคะแนนเวอร์ชันสำหรับการแข่งขันสามารถพบได้ที่  <a href='tournament.html' data-ajax='false'>เว็บไซต์</a>."

		title = "FLL RePLAY Scorer"

		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)

		M00 = "ผลประโยชน์"
		M00a = "อุปกรณ์ของทีมทั้งหมดอยู่ภายใน Small Inspection Area"

		M01 = "โครงงานนวัตกรรม"
		M01a = "ชิ้นส่วนบางส่วนของโมเดลสัมผัสโลโก้ RePLAY หรือพื้นที่สีเทาบริเวณม้านั่ง"
		M01b = "โมเดลจะต้องสร้างจากชิ้นส่วน LEGO สีขาวอย่างน้อยสองชิ้น และมีความยาวอย่างน้อย 4 ปุ่ม LEGO ในอย่างน้อยหนึ่งทิศทาง"

		M02 = "เครื่องนับก้าว"
		M02a = "หัวของตัวชี้อยู่ที่"
		M02b = "—"
		M02c = "สีบานเย็น"
		M02d = "สีเหลือง"
		M02e = "สีฟ้า"

		M03 = "สไลด์"
		M03a = "หุ่นมนุษย์ตัวแรกอยู่ภายนอกสไลด์"
		M03b = "หุ่นมนุษย์ตัวที่สองอยู่ภายนอกสไลด์"
		M03c = "หุ่นมนุษย์หนึ่งตัวอยู่ในพื้นที่ Home อย่างสมบูรณ์"
		M03d = "หุ่นมนุษย์หนึ่งตัวอยู่บนล้อหนักโดยสิ้นเชิง ไม่สัมผัสสนามหรือสิ่งอื่นใด"

		M04 = "ม้านั่ง"
		M04a = "ม้านั่งถูกพับลงให้เรียบ"
		M04b = "จำนวนลูกบาศก์ที่สัมผัสสนามภายในพื้นที่ตั้งเต"
		M04c = "พนักพิงไม่อยู่บนรูทั้งสองโดยสิ้นเชิง"

		M05 = "บาสเกตบอล"
		M05a = "มีลูกบาศก์หนึ่งลูกในห่วง"
		M05b = "ห่วงรองรับอยู่บนตัวหยุดสีขาวระดับปานกลาง"
		M05c = "ห่วงรองรับอยู่บนตัวหยุดสีขาวระดับสูง"

		M06 = "บาร์โหน"
		M06a = "หุ่นยนต์ได้เคลื่อนที่ผ่านใต้กรอบแนวตั้งของบาร์โหนอย่างสิ้นเชิง"
		M06b = "บาร์โหนยก 100% ของหุ่นยนต์ขึ้นเหนือสนาม ณ ตอนจบของรอบการแข่งขัน"

		M07 = "หุ่นยนต์เต้น"
		M07a = "ตัวควบคุมของหุ่นยนต์อยู่เหนือเวทีเต้นอย่างน้อยบางส่วน และเคลื่อนที่ “เต้น” ณ ตอนจบของรอบการแข่งขัน"
		M07b = "การเต้นคือการเคลื่อนไหวซ้ำๆ ไม่ว่าจะตลกหรือมีลีลา ดังนั้นคุณสามารถทำให้มันสนุกได้! สำหรับ M07 ในหนึ่งรอบการแข่งขัน คุณไม่สามารถทำคะแนนส่วนนี้พร้อมกับคะแนนจากภารกิจ M06 ได้"

		M08 = "บอคเซีย"
		M08a = "โมเดลแชร์ทั้งสองส่งลูกบาศก์แค่หนึ่งลูกต่อโมเดลไปยังสนามของอีกฝ่าย และลูกบาศก์ทั้งสองมีสีตรงกัน"
		M08b = "จำนวนลูกบาศก์ที่อยู่ภายในกรอบหรือเป้าหมาย โดยสิ้นเชิง"
		M08c = "มีลูกบาศก์สีเหลืองอย่างน้อยหนึ่งลูกภายในเป้าหมาย โดยสิ้นเชิง"

		M09 = "พลิกล้อ"
		M09a = "ล้อเบา (ยางสีฟ้า) มีด้านสีขาวอยู่ข้างบน"
		M09b = "ล้อหนัก (ยางสีดำ) มีด้านสีขาวอยู่ข้างบน"
		M09c = "จำนวนล้อที่มีด้านสีขาวอยู่ข้างบนที่อยู่ในพื้นที่เป้าหมายใหญ่ โดยสิ้นเชิง"
		M09d = "หากล้อหนักข้ามเส้นพลิกสีแดง เมื่อไหร่ก็ตาม แม้แค่บางส่วน คะแนนจะกลายเป็นศูนย์"

		M10 = "โทรศัพท์"
		M10a = "หน้าสีขาวของโทรศัพท์อยู่ข้างบน และโทรศัพท์รองรับโดยสนามโดยสิ้นเชิง"

		M11 = "ลู่วิ่ง"
		M11a = "หุ่นยนต์ได้หมุนลูกกลิ้งทำให้ตัวชี้ชี้ไปที่"
		M11b = "—"
		M11c = "สีเทา"
		M11d = "สีแดง"
		M11e = "สีส้ม"
		M11f = "สีเหลือง"
		M11g = "สีเขียวอ่อน"
		M11h = "สีเขียวเข้ม"

		M12 = "เครื่องกรรเชียงบก"
		M12a = "ล้ออิสระอยู่ภายนอกวงกลมใหญ่โดยสิ้นเชิง"
		M12b = "ล้ออิสระอยู่ภายในวงกลมเล็กโดยสิ้นเชิง"

		M13 = "เครื่องเล่นเวท"
		M13a = "ตัวหยุดอยู่ใต้คันโยก ซึ่งอยู่ที่"
		M13b = "—"
		M13c = "สีฟ้า"
		M13d = "สีบานเย็น"
		M13e = "สีเหลือง"

		M14 = "หน่วยสุขภาพ"
		M14a = "จำนวนหน่วยสุขภาพที่สัมผัสโลโก้ RePLAY หรือพื้นที่สีเทาบริเวณม้านั่ง"
		M14b = "จำนวนหน่วยสุขภาพที่เกี่ยวบนเสาของบาร์โหนตามกติกา (มากสุด 4 หน่วย) และไม่สัมผัสอุปกรณ์ใด"

		M15 = "ความแม่นยำ"
		M15a = "จำนวนเหรียญความแม่นยำที่เหลือบนสนาม"


	} else if (language == "ro") {
		translatorCredit = "Traducerea și adaptarea în limba română realizată de Ștefan RĂDULESCU @ Asociația pentru educație STEM creativă (CRESTEM)."

		yes = "Da"
		no = "Nu"
		partly = "Parțial"
		completely = "Complet"
		resetText = "Resetați"
		saveText = "Salvați" // As verb
		saveNText = "Salvare" // As noun
		savescoreText = "Salvați punctajul"
		loadsaveText = "Încărcați punctajul nr."
		deletesaveText = "Ștergeți punctajele salvate"
		importsaveText = "Importați punctajele salvate local"
		exportsaveText = "Exportați punctajele local"
		created = "Creat"
		savedto = "Salvat în"
		dateText = "Data/Ora"
		totalText = "Total puncte"
		savedText = "Salvat"
		loadedText = "Încărcat"
		
		monthNames = ["", "ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"];
		improvementText = "Istoric punctaj"
		scorerText = "Calculator de scor"
		timersText = "Cronometre"
		savesText = "Salvări"
		startText = "Start"
		stopText = "Stop"
		pointsText = "Puncte"
		
		sketchTitle = "Planificarea strategiei FLL RePLAY"
		drawingsText = "Schițe salvate"
		saveDrawingText = "Salvați schița"
		deleteSavedDrawingsText = "Ștergeți toate schițele salvate"
		loadSavedDrawingText = "Încărcați schiță salvată"
		exportSavedDrawingsText = "Exportați schița local"
		importSavedDrawingsText = "Importați o schiță salvată local"
		exportPNGText = "Exportați schița în format PNG"
		
		doneText = "Completat"
		
		timerText = "Temporizator:"
		stopwatchText = "Cronometru:"
		
		undefinedText = "nedefinit"
		
		revisionText = "Calculator de scor RePLAY. Versiunea "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		tournamentText = "O versiunea a calculatorului de scor cu funcționalități necesare în cadrul unui turneu este disponibil <a href='tournament.html' data-ajax='false'>aici</a>."
		
		title = "Calculator de scor FLL RePLAY"
		
		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)
		
		M00 = "Bonus inspecție echipament"
		M00a = "Echipamentul echipei, inclusiv robotul, încape în zona mică de inspecție?"
		
		M01 = "Proiectul de inovare"
		M01a = "Orice parte a modelului atinge sigla RePLAY sau zona gri din jurul băncii?"
		M01b = "Modelul trebuie să fie alcătuit din cel puțin două piese LEGO și să măsoare cel puțin patru crampoane (studs) pe o latură."
		
		M02 = "Contorul de pași"
		M02a = "Acul indicator al brațului este pe"
		M02b = "nici o culoare"
		M02c = "roz"
		M02d = "galben"
		M02e = "albastru"
		
		M03 = "Toboganul"
		M03a = "Prima figurină este coborâtă de pe tobogan?"
		M03b = "A doua figurină este coborâtă de pe tobogan?"
		M03c = "Este figurina complet în bază?"
		M03d = "Este o figurină susținută complet de anvelopa grea, fără să atingă planșa sau orice altceva?"
		
		M04 = "Banca"
		M04a = "Banca este aplatizată?"
		M04b = "Câte cuburi sunt în contact cu planșa în zonele pentru șotron?"
		M04c = "Spătarul băncii a fost înlăturat complet din ambele părți ale băncii?"
		
		M05 = "Coșul de baschet"
		M05a = "Există un cub în coș?"
		M05b = "Coșul de baschet a fost ridicat și așezat pe piedica albă de la mijloc?"
		M05c = "Coșul de baschet a fost ridicat și așezat pe piedica albă din vârf?"
		
		M06 = "Bara de tracțiuni"
		M06a = "Robotul a trecut complet pe sub cadrul barei de tracțiuni, oricând în timpul meciului?"
		M06b = "Bara de tracțiuni susține 100% din greutatea robotului fără ca acesta să atingă planșa, la sfârșitul meciului?"
		
		M07 = "Dansul robotului"
		M07a = "O porțiune a cărămizii inteligente a robotului este cel puțin parțial deasupra ringului de dans, iar robotul “dansează” când se termină meciul?"
		M07b = "Orice mișcare repetitivă, amuzantă sau maiestuoasă, a robotului se consideră ca fiind dans - faceți ceva distractiv! Pentru M07, nu puteți obține punctajul de la această misiune împreună cu punctajul pentru “susținere” de la misiunea M06 în cadrul aceluiași meci."
		
		M08 = "Jocul Boccia"
		M08a = "Ambele lansatoare (modelele comune) au trimis un singur cub oriunde pe masa opusă și cuburile sunt de aceeași culoare?"
		M08b = "Câte cuburi sunt complet în interiorul ramei sau țintei voastre?"
		M08c = "Există cel puțin un cub de culoare galbenă complet în interiorul țintei?"
		
		M09 = "Răsturnarea anvelopelor"
		M09a = "Anvelopa ușoară (albastră) este întoarsă cu centrul alb în sus?"
		M09b = "Anvelopa grea (neagră) este întoarsă cu centrul alb în sus?"
		M09c = "Câte anvelope au centrul alb în sus și sunt complet în cercul mare?"
		M09d = "Dacă anvelopa grea trece, chiar și parțial, peste linia roșie, oricând în timpul meciului, scorul va fi zero."
		
		M10 = "Telefonul"
		M10a = "Telefonul este cu partea albă în sus și așezat direct pe planșă?"
		
		M11 = "Banda de alergare"
		M11a = "Robotul a mișcat rolele, iar acul indicator arată"
		M11b = "nici o culoare"
		M11c = "gri"
		M11d = "roșu"
		M11e = "portocaliu"
		M11f = "galben"
		M11g = "verde deschis"
		M11h = "verde închis"
		
		M12 = "Aparatul de vâslit"
		M12a = "Roata liberă este în afara cercului mare?"
		M12b = "Roata liberă este în interiorul cercului mic?"
		
		M13 = "Aparatul de forță"
		M13a = "Piedica este pusă și gradul de dificultate este"
		M13b = "nici o culoare"
		M13c = "albastru"
		M13d = "roz"
		M13e = "galben"
		
		M14 = "Unitățile de sănătate"
		M14a = "Câte unități de sănătate ating sigla RePLAY sau zona gri de lângă bancă?"
		M14b = "Câte unități de sănătate sunt poziționate pe bara de tracțiuni – maximum patru – și fără să atingă vreun echipament?"
		
		M15 = "Precizia"
		M15a = "Câte jetoane de precizie au rămas pe masă la sfârșitul meciului?"			
	} else if (language == "he") {
		translatorCredit =  "תורגם לעברית ע\"י D-Bug #3316 מעירוני ד', תל אביב"

		yes = "כן"
		no = "לא"
		partly = "חלקית"
		completely = "לחלוטין"
		resetText = "אתחול"
		saveText = "שמור" // As verb
		saveNText = "שמירה" // As noun
		savescoreText = "שמירת התוצאה"
		loadsaveText = "טען תוצאה מספר"
		deletesaveText = "מחיקת כל התוצאות השמורות"
		importsaveText = "ייבא תוצאות שמורות"
		exportsaveText = "שיתוף תוצאות"
		created = "נוצר"
		savedto = "נשמר ב-"
		dateText = "תאריך/שעה"
		totalText = "סה“כ נקודות"
		savedText = "נשמר"
		loadedText = "נטען"
		
		monthNames = ["", "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
		improvementText = "הסטוריית ניקוד"
		scorerText = "מנקד"
		timersText = "טיימרים"
		savesText = "שמורים"
		startText = "התחל"
		stopText = "הפסק"
		pointsText = "נקודות"
		
		sketchTitle = "FLL RePLAY תכנון אסטרטגיה"
		drawingsText = "שרטוטים שמורים"
		saveDrawingText = "שמור שרטוט"
		deleteSavedDrawingsText = "מחק שרטוטים שמורים"
		loadSavedDrawingText = "טען שרטוטים שמורים"
		exportSavedDrawingsText = "שיתוף שרטוטים"
		importSavedDrawingsText = "ייבא שרטוטים משותפים"
		exportPNGText = " PDF יצוא שרטוט כקובץ "
		
		doneText = "בוצע"
		
		timerText = "טיימר:"
		stopwatchText = "סטופר:"
		
		undefinedText = "לא מוגדר"
		
		revisionText = "RePLAY Scorer Version "
		copyrightText = "Copyright (c) " + versionYear + " האחים סשן"
		tournamentText = "גרסה של מנקד זה עם פיצ'רים לטורניר נמצאת כאן <a href='tournament.html' data-ajax='false'>here</a>."
		
		title = "FLL RePLAY מנקד"
		
		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)
		
		M00 = "בונוס ביקורת ציוד"
		M00a = "כל הציוד שלכם נכנס באיזור הביקורת הקטן?"
		
		M01 = "פרוייקט החדשנות"
		M01a = "אחד החלקים של המודל נוגע בסמל ריפליי או באיזור האפור שמסביב לספסל?"
		M01b = "המודל חייב להיות בנוי מלפחות שני חלקי לגו לבנים ובאורך של לפחות ארבע בליטות לגו לפחות בכיוון אחד"
		
		M02 = "מונה צעדים"
		M02a = "חלקו התחתון של המצביע נמצא על"
		M02b = "כלום"
		M02c = "מג'נטה"
		M02d = "צהוב"
		M02e = "כחול"
		
		M03 = "מגלשה"
		M03a = "דמות מגלשה אחת מחוץ למגלשה?"
		M03b = "שתי דמויות המגלשה מחוץ למגלשה?"
		M03c = "דמות מגלשה אחת נמצאת לגמרי בתוך הבית?"
		M03d = "דמות מגלשה אחת מוחזקת מבלי לגעת בשטיח המשחק על ידי הצמיג הכבד ולא נוגעת בשום דבר אחר?"
		
		M04 = "ספסל"
		M04a = "הספסל שטוח לחלוטין? "
		M04b = "כמה קוביות נוגעות בשטיח המשחק בתוך אזור משחק הקלאס?"
		M04c = "משענת הגב לחלוטין מחוץ לשני החורים שלה?"
		
		M05 = "כדורסל"
		M05a = "יש קובייה בארגז? "
		M05b = "הארגז מונח על מעצור הגובה הלבן האמצעי?"
		M05c = "הארגז מונח על מעצור הגובה הלבן העליון?"
		
		M06 = "מוט מתח"
		M06a = "הרובוט עבר לחלוטין דרך המסגרת האנכית של מוט המתח בזמן כלשהו?"
		M06b = "מוט המתח מחזיק 100% מהרובוט מבלי שייגע בשטיח המשחק בסוף המקצה?"
		
		M07 = "ריקוד הרובוט"
		M07a = "בקר הרובוט נמצא לפחות חלקית מעל לרחבת הריקודים ונע בתנועת “ריקוד“ בסוף המקצה?"
		M07b =  " כל תנועה מחזורית, הן משעשעת והן מקצועית, נחשבת לניקוד – עשו משהו מהנה! עבור ניקוד על משימה 7, לא ניתן לקבל ניקוד גם על “רובוט מוחזק“ במשימה 6 באותו מקצה. "
		
		M08 = "בוצ'יה"
		M08a = "האם שני דגמי השיתוף שלחו קובייה אחת בלבד למקום כלשהו בזירה הנגדית והקוביות האלו תואמות בצבעים זו לזו?"
		M08b = "כמה קוביות נמצאות לחלוטין המסגרת או מטרה שלכם?"
		M08c = "יש לפחות קובייה צהובה אחת לחלוטין במטרה שלכם?"
		
		M09 = "הפיכת צמיגים"
		M09a = "האם הצמיג הקל (בעל הסוליה הכחולה) עם המרכז הלבן כלפי מעלה?"
		M09b = "האם הצמיג הכבד (בעל הסוליה השחורה) עם המרכז הלבן כלפי מעלה?"
		M09c = "כמה צמיגים שהמרכז הלבן שלהם פונה כלפי מעלה נמצאים לגמרי בתוך מעגל המטרה הגדול?"
		M09d = "אם הצמיג הכבד חוצה בשלב כלשהו, אפילו חלקית, את קו ההיפוך, הוא מקנה 0 נקודות. קו ההפיכה רץ כל הדרך מצפון לדרום, ורק חלק ממנו נראה."
		
		M10 = "טלפון נייד"
		M10a = "הצד הלבן של הטלפון פונה כלפי מעלה והטלפון מונח על השטיח בלבד?"
		
		M11 = "הליכון"
		M11a = "הרובוט סובב את הגלגלות כך שהמצביע מצביע על"
		M11b = "כלום"
		M11c = "אפור"
		M11d = "אדום"
		M11e = "כתום"
		M11f = "צהוב"
		M11g = "ירוק בהיר"
		M11h = "ירוק כהה"
		
		M12 = "מכונת חתירה"
		M12a = "האם הגלגל החופשי נמצא לגמרי מחוץ למעגל הגדול?"
		M12b = "האם הגלגל החופשי נמצא לגמרי בתוך המעגל הקטן?"
		
		M13 = "מכונת משקולות"
		M13a = "המעצור נמצא מתחת לזרוע ומצב הזרוע"
		M13b = "כלום"
		M13c = "כחול"
		M13d = "מג'נטה"
		M13e = "צהוב"
		
		M14 = "יחידות בריאות"
		M14a = "כמה יחידות בריאות נוגעות בסמל ריפליי או באזור האפור שמסביב לספסל?"
		M14b = "כמה יחידות בריאות מושחלות על העמוד של מוט המתח כמו שמודגם – מקסימום ארבע – ולא נוגעות בשום ציוד?"
		
		M15 = "דיוק"
		M15a = "כמה אסימוני דיוק נותרו על הזירה?"		
	} else if (language == "sl") {
		translatorCredit = "V slovenščino prevedel Primož Dornik član skupine First Prule League iz Osnovne šole Prule, Ljubljana"

		yes = "Da"
		no = "Ne"
		partly = "Delno"
		completely = "Popolnoma"
		resetText = "Ponastavi"
		saveText = "Shrani" // As verb
		saveNText = "Shrani" // As noun
		savescoreText = "Shrani točke"
		loadsaveText = "Naloži število točk."
		deletesaveText = " Izbriši vse shranjene rezultate"
		importsaveText = "Uvozi deljen rezultat"
		exportsaveText = "Deli rezultat"
		created = " Ustvarjeno"
		savedto = " Shranjeno v"
		dateText = "Datum/Čas"
		totalText = " Skupno število točk"
		savedText = "Shranjeno"
		loadedText = " Naloženo"
		
		monthNames = ["", "Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "August", "September", "Oktober", "November", "December"];
		improvementText = "Zgodovina rezultatov"
		scorerText = "Točkovnik"
		timersText = "Štoparica"
		savesText = "Shranjeni rezultati"
		startText = "Začni"
		stopText = "Ustavi"
		pointsText = "Točke"
		
		sketchTitle = "FLL RePLAY Načrtovalec strategije"
		drawingsText = "Shranjene slike"
		saveDrawingText = "Shrani sliko"
		deleteSavedDrawingsText = "Izbriši vse shranjene slike"
		loadSavedDrawingText = " Naloži shranjeno sliko "
		exportSavedDrawingsText = "Deli sliko"
		importSavedDrawingsText = " Uvozi deljene slike "
		exportPNGText = " Izvozi sliko kot PNG"
		
		doneText = " Dokončano"
		
		timerText = "Časovnik:"
		stopwatchText = "Štoparica:"
		
		undefinedText = "nedoločeno"
		
		revisionText = "RePLAY Točkovnik  Verzija:"
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		tournamentText = "Verzijo tega točkovnika z dodanimi funkcijami najdete na <a href='tournament.html' data-ajax='false'>tukaj</a>."
		
		title = "FLL RePLAY Točkovnik"
		
		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)
		
		M00 = "Pred začetkom"
		M00a = " Ali se oprema ekipe prilega majhni coni za pregled?"
		
		M01 = " Inovativni model"
		M01a = " Ali se kateri koli del modela dotika logotipa REPLAY ali sive površine okoli klopi?"
		M01b = " Model mora biti narejen iz najmanj dveh belih gradniki LEGO in mora vsaj v eno smer meriti vsaj toliko, kot štirje LEGO pini."
		
		M02 = "Števec korakov"
		M02a = "Konica kazalca leži na"
		M02b = "Začetku"
		M02c = "Roza podlagi"
		M02d = "Rumeni podlagi"
		M02e = "Modri podlagi"
		
		M03 = "Tobogan"
		M03a = "Ali je prva figura spuščena iz tobogana?"
		M03b = " Ali sta obe figurici spuščeni iz tobogana?"
		M03c = "Ali je figurica popolnoma v Domu?"
		M03d = "Ali se figurica ne dotika podlage, je na težji gumi in se ne dotika ničesar drugega?"
		
		M04 = "Klop"
		M04a = "Ali je klop položena na tla?"
		M04b = "Koliko kock se dotika podlage v posameznih prostorih?"
		M04c = "Ali je naslonjalo popolnoma iz obeh lukenj?"
		
		M05 = "Košarka"
		M05a = "Ali je kocka v košu?"
		M05b = "Ali je koš ustavljen na sredini belega vodila?"
		M05c = "Ali je koš ustavljen na vrhu belega vodila?"
		
		M06 = "Drog za zgibe"
		M06a = "Se je robot kadar koli popolnoma prešel skozi pokončni okvir?"
		M06b = "Ali robot visi na drogu za zgibe na koncu tekme?"
		
		M07 = "Robot pleše"
		M07a = " Ali je kocka robota med plesom vsaj delno and površino plesišča na koncu tekme?"
		M07b = " Vsaka ponavljajoča se akcija šteje za ples - naredite nekaj zabavnega! Na isti tekmi ne morete opraviti misij M06 in M07 hkrati."
		
		M08 = "Balinanje"
		M08a = "Ali sta obe skupini poslali eno kocko na sosednje polje in se barvi ujemata?"
		M08b = "Koliko kock je popolnoma v okvirju ali tarči?"
		M08c = "Ali je vsaj ena rumena kocka v vaši tarči?"
		
		M09 = "Obračanje gume"
		M09a = "Ali je lažja (modra) guma obrnjena z belim platiščem navzgor?"
		M09b = "Ali je težja (črna) guma obrnjena z belim platiščem navzgor?"
		M09c = "Koliko gum, obrnjenih z belim platiščem navzgor, je popolnoma v velikem ciljnem krogu?"
		M09d = "Če težka guma kadar koli, celo delno, prečka rdečo črto, točk ni"
		
		M10 = "Mobilnik"
		M10a = "Ali je mobilnik obrnjen z belo stranjo navzgor in se dotika samo podlage?"
		
		M11 = "Tekalna steza"
		M11a = "Robot je zavrtel valje, tako da kazalec kaže na "
		M11b = "Črno"
		M11c = "Sivo"
		M11d = "Rdečo"
		M11e = "Oranžno"
		M11f = "Rumeno"
		M11g = "Svetlo zelena"
		M11h = "Temno zelena"
		
		M12 = "Vesljač"
		M12a = "Ali je prosto kolo popolnoma zunaj velikega kroga?"
		M12b = "Ali je prosto kolo popolnoma v majhnem krogu?"
		
		M13 = "Dvigovanje uteži"
		M13a = "Zatič je pod vzvodom in je nastavljen pod"
		M13b = "Črno"
		M13c = "Modro"
		M13d = "Roza"
		M13e = "Rumeno"
		
		M14 = "Enota zdravja"
		M14a = " Koliko enot zdravja se dotika logotipa RePLAY ali sive površine okoli klopi?"
		M14b = " Koliko enot zdravja je napetih čez drog za zgibe, kot je prikazano - največ štiri - in se ne dotikajo nobenih nastavkov ali robota?"
		
		M15 = "Natančnost"
		M15a = "Koliko žetonov za natančnost vam je ostalo?"		
	}


	versionText = versionNum + " - " + versionDay + " " + monthNames[versionMonth] + " " + versionYear


	improvement = improvementText

	window.monthNames = monthNames
}

languageInit()
version = versionText
