import { Component, OnInit, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { FormsModule, FormControl }   from '@angular/forms';
import T from "src/assets/tester.js";
declare var Plotly: any;
declare var $: any;



@Component({
  selector: 'app-graft',
  templateUrl: './graft.component.html',
  styleUrls: ['./graft.component.css']
})

export class GraftComponent implements OnInit, AfterViewInit  {
  @ViewChild("tester", { static: true })
  private myPlot: ElementRef;
  @ViewChild("selectPoints", { static: false })
  private points: ElementRef;
  public dataSelect:any;
  public selectPoint: string;


  public data:any = {
    y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
    type: 'box',
    name: 'All Points',
    marker: {
      color: 'rgb(7,40,89)'
    },
    boxpoints: 'Outliers'
  };

 public layout = {
    title:'A Line Chart in Plotly'
  };

public data2:any = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'All Points',
  jitter: 0.3,
  pointpos: -1.8,
  marker: {
    color: 'rgb(7,40,89)'
  },
  boxpoints: 'all'
};


  
  constructor() { }


  ngAfterViewInit() {
    $(this.points.nativeElement).on('change', (e) => {
      console.log('Change made -- ngAfterViewInit');
      this.testClick(e);
    });
  }

  testClick(dt){
    console.log(dt);

  }

  

  ngOnInit() {
    
    // let myPlot = document.getElementById('Test');
    // console.log(myPlot);
    $.getScript("assets/tester.js");
    Plotly.newPlot(this.myPlot.nativeElement, [this.data, this.data2], this.layout);
    // let myPlot = document.getElementById('tester');
    // console.log(myPlot);
    // $(myPlot).on("plotly_click", function(data){
    //   console.log('work1', data);
    //   var pn='',
    //       tn='',
    //       colors=[];
    //   for(var i=0; i < data.points.length; i++){
    //     pn = data.points[i].pointNumber;
    //     tn = data.points[i].curveNumber;
    //     colors = data.points[i].data.marker.color;
    //   };
    //   colors[pn] = '#C54C82';
    //   var update = {'marker':{color: colors, size:16}};
    //   Plotly.restyle('myDiv', update, [tn]);
    // });

    // $(myPlot).on("plotly_selected", function(eventData){
    //   console.log('work 2', eventData);
    // });
    // $('button').click(function(){
    //   $.getScript("assets/tester.js", function( data, textStatus, jqxhr ) {
    //     console.log('ts', data);
    //   });
    //    });
  }

}
