import { Component, OnInit } from '@angular/core';

declare let L;

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  
  distance:number = 0;

  constructor() { }

  ngOnInit() {
    const map = L.map('map').setView([10.762622, 106.660172], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var searchControl = L.esri.Geocoding.geosearch().addTo(map);

    var results = L.layerGroup().addTo(map);

    searchControl.on('results', function(data){
      results.clearLayers();
      for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });

  }

}
