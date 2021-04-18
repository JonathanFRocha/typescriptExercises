// Instruction to every other class on how they can be a argument to addmarker
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  content(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.content(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
