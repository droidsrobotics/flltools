import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawplan',
  templateUrl: './drawplan.page.html',
  styleUrls: ['./drawplan.page.scss'],
})
export class DrawplanPage implements OnInit {

  constructor() { }
  ngOnInit() {}
  ionViewWillEnter() {
    eval(`
    initpage();
    switchLanguage();
    if (document.getElementById("loadedDP").value != "done") {
      //document.getElementById("loadedDP").value = "done"

    // document.getElementById("mat").src = matimage;
    const img = document.getElementById('srcmat');
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth; // Or img.width if you're sure it's loaded
    canvas.height = img.naturalHeight; // Or img.height
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL('image/png'); // Default is 'image/png'
    document.getElementById("mat").src = dataURL

    var width = window.innerWidth-20
    //height = String((width*530/944)-100)
    //height = String((width*530/944))
    var height = window.innerHeight - 200
  console.log(width)
    if (width < height * 2333 / 1166) {
        height = width * 1166 / 2333
    }
    if (height < width * 1166 / 2333) {
        width = height * 2333 / 1166
    }
    document.getElementById('wPaint').style.width=width+"px"
    document.getElementById('wPaint').style.height=height+"px"

    var dataUrl;
    var imageData = $("#wPaint").wPaint("image");

    $("#canvasImage").attr('src', imageData);
    $('#wPaint').wPaint('image', '<image_data>');

    var images = [
        'assets/images/head.jpg',
    ];

    $('#wPaint').wPaint({
      path: './',
      menuOffsetLeft: -35,
      menuOffsetTop: -50,
      saveImg: saveImg,
      loadImgBg: loadImgBg,
      loadImgFg: loadImgFg,
  });

  $(function () {
      $("#btnSave").click(function () {
          html2canvas($("#widget"), {
              onrendered: function (canvas) {
                  theCanvas = canvas;
                  document.body.appendChild(canvas);

                  // Convert and download as image
                  Canvas2Image.saveAsPNG(canvas);
                  $("#img-out").append(canvas);
                  // Clean up
                  //document.body.removeChild(canvas);
              }
          });
      });
  });



    var ppi = width / 96
    var bw = width;
    var bh = height;
    var p = 0;
    var cw = bw + (p * 2) + 1;
    var ch = bh + (p * 2) + 1;



    var flag = false;
    var    prevX = 0;
    var    currX = 0;
    var    prevY = 0;
    var    currY = 0;
    var    dot_flag = false;


    var x = "black";
    var y = 2;
    var drawmode = 'pencil';

    $('#wPaint').wPaint('setFillStyle','yellow');

    var context = canvas.getContext("2d");
    context.fillStyle = "yellow"
    

    var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
        
  
    drawBoard()

    customElements.define('modal-page', class extends HTMLElement {
        connectedCallback() {
          this.innerHTML = \`
      <ion-header>
        <ion-toolbar>
          <ion-title>Saved Drawings</ion-title>
          <ion-buttons slot="primary">
            <ion-button onClick="modalElement.dismiss()">
              <ion-icon slot="icon-only" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
      <div style="width: 30em; height: 30em;" data-role="popup" id="popupMap" data-overlay-theme="b"
      data-theme="b" data-corners="false" data-tolerance="15,15">

    
      <!-- <a href="#" data-rel="back" data-role="ion-button" data-theme="b" data-icon="delete" data-iconpos="notext"
                      class="ui-btn-right">Close</a> -->
      <div style="margin:5px">
        <ion-button text-wrap class="ion-button"
          onclick="svimg(); mymaxDP = window.localStorage.canvasImage2021.split('|').length-1; alert(doneText)"
          data-inline="true" style=""><text id="saveDrawingText">Save Drawing</text></ion-button>
        <br><ion-button text-wrap
          onclick="window.localStorage.canvasImage2021 = ''; document.getElementById('saveidDP').max = 1 ; showPastDraws();alert(doneText);"
          data-inline="true"><text id="deleteSavedDrawingsText">Delete All Saved Drawings</text></ion-button>
    
        <br>
    
        <table>
          <tr>
            <td>
              <!-- <ion-button data-inline="true" onclick="
    
                 "><text id="loadSavedDrawingText">Load Saved Drawing</text></ion-button> -->
            </td>
            <td>
              <script>
                if (window.localStorage.canvasImage2021 == undefined) {
                  window.localStorage.canvasImage2021 = ''
                }
                mymaxDP = window.localStorage.canvasImage2021.split('|').length - 1;
    </script>
    <div style="max-width: 350px; " class="ui-block-b ">
      <ion-item>
    
        <ion-button style="text-align: left; " id="loadText" class="ui-shadow ui-btn ui-corner-all " type="button " onclick="loadsaveDP(window.localStorage.canvasImage2021.split('|')[parseInt(document.getElementById('saveidDP').value)]);
                      loadsaveDP(window.localStorage.canvasImage2021.split('|')[parseInt(document.getElementById('saveidDP').value)]);
                      setTimeout(function() {
                      loadsaveDP(window.localStorage.canvasImage2021.split('|')[parseInt(document.getElementById('saveidDP').value)]);
                      }, 200);
                      ionAlert(doneText);">
          Load Saved Drawing</ion-button>
        <ion-item no-lines>
    
          <!--
                        <div data-role="stepper " data-direction="vertical ">
    
                            <div style="max-width: 60px; " class="button-wrap "> -->
          <ion-button type="button" value="- "
            onclick="document.getElementById( 'saveidDP').value--; if (document.getElementById( 'saveidDP').value < 1) {document.getElementById( 'saveidDP').value=1 } ">
            <ion-icon name="remove-outline"></ion-icon>
          </ion-button>
          <!-- </div>
                        </div>
                    </div>
                    <div class="ui-block-c " style="max-width: 60px; ">
                        <div style="max-width: 60px; " class="button-wrap "> -->
          <ion-input style="height: 41px;text-align: center; " type="number " data-highlight="true " data-theme="b "
            onchange=" if (this.value> mymaxDP) {this.value = mymaxDP}" search="2" class="quantity" data-show-value="true"
            name="saveidDP" id="saveidDP" value="1" min="1" step="1"></ion-input>
          <!-- </div>
                    </div>
                    <div class="ui-block-d" style="max-width: 60px; ">
                        <div style="max-width: 60px; " class="button-wrap"> -->
          <ion-button type="button" value="+"
            onclick="document.getElementById('saveidDP').value++; if (document.getElementById('saveidDP').value > mymaxDP) {document.getElementById('saveidDP').value = mymaxDP}">
            <ion-icon name="add-outline"></ion-icon>
          </ion-button>
          <!-- </div>-->
        </ion-item>
      </ion-item>
    </div>
    <!--
                            <input id="saveidDP" type="text" data-inline="true" data-role="spinbox"
                              onchange="if (mymaxDP < this.value) {this.value = mymaxDP} " min="1" value="1"> -->
    </td>
    
    </tr>
    </table>
    
    <br>
    <br>
    <div id="drawSaveShare" class="">
      <!-- <a style="display:none; position: fixed;    bottom: -10000;   left: -100000;" id="exportDP"
                                    href="#">Export
                                    Saves</a> -->
      <ion-button text-wrap data-inline="true" class="ui-mini no-mobile" onclick="downloadSaves()"><text
          id="exportSavedDrawingsText">Share Drawings</text></ion-button>
      <script type="text/javascript">
                          // var anchor = document.getElementById('exportDP');
                          // anchor.onclick = function () {
                          //     var currentTime = new Date()
                          //     var day = currentTime.getDate()
                          //     anchor.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(window.localStorage.canvasImage2021);
                          //     anchor.download = day + 'mydrawings.DRCI';
                          //     //     setTimeout(function(){   ;  anchor.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(window.localStorage.DRAA1scorer);    anchor.download = day + 'myscores.AA1EV3';}, 50)
                          // };
    
      </script>
    <br>
      <ion-button text-wrap class="ui-mini no-mobile" data-inline="true" onclick="// alert('choose .DRCI file') ;
                            document.getElementById('fileInputDP').click() "><text id="importSavedDrawingsText">Import Shared Drawings</text></ion-button>
    <br>
      <ion-button text-wrap data-inline="true" class="" onclick="exporter();"><text id="exportPNGText">Export Drawing as PNG</text></ion-button>
      <input onchange="" style=" display:none; position: fixed;    bottom: -10000;   left: -100000; " type="file"
        id="fileInputDP" accept=".DRCI"><br>
      <!--Drawplan Scoring System Version 4.2.0 scorer<br>-->
    </div>
    
    <div id="pastDraws"> </div>
    
    </div>
    </div>
    </ion-content>\`;
    }
    });
  }
    `)
  }

}
