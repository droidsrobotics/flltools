import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.page.html',
  styleUrls: ['./scorer.page.scss'],
})
export class ScorerPage implements OnInit {

  constructor() { }
  ngOnInit() {
eval(`

if (document.getElementById("loadedSC").value != "done") {
  //document.getElementById("loadedSC").value = "done"
  }
`)

  }
  ionViewWillEnter() {
      eval(`
      
      if (document.getElementById("loadedSC").value != "done") {
        //document.getElementById("loadedSC").value = "done"
  
all_mission = []
buffer = ""
rbchildren = []
rbchildrenEX = []
ssecct = 0  

load2021();
        //
      
    try {
      var segment = document.getElementsByClassName("scorersegment")[0];
      var slides = document.getElementsByClassName("scorerslides")[0];

      segment.addEventListener('ionChange', (ev) => onSegmentChange(ev, "scorer"));
      slides.addEventListener('ionSlideDidChange', (ev) => onSlideDidChange(ev, "scorer"));
    } catch { }
    loadsave(blanksave)
    drawBasic();
    displaysaves(); 
    var fileInputT = document.getElementById('fileInputT');

    fileInputT.addEventListener('change', function (e) {
        var file = fileInputT.files[0];
        var textType = /text.*/;
  
        var reader = new FileReader();
  
        reader.onload = function (e) {
            data = reader.result;
            //alert(data)
  
            loadScore(data)
            loadScore(data)
        }
  
        reader.readAsText(file);
  
    });

    var fileInput = document.getElementById('fileInput');

      fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var textType = /text.*/;

        var reader = new FileReader();

        reader.onload = function (e) {
          data = reader.result;
          //alert(data)

          window.localStorage.DRUESscorer = data.split(';')[0];
          window.localStorage.DRUES1scorer = data.split(';')[1];
          maximum = window.localStorage.DRUESscorer.split('/').length - 1
        }

        reader.readAsText(file);

      });
    }
    initpage();switchLanguage();
    
    `)
    
  }

}
