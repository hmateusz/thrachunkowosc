declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: HTMLElement, opts?: MapOptions);
      setCenter(latLng: LatLng): void;
      setZoom(zoom: number): void;
    }

    class Marker {
      constructor(opts?: MarkerOptions);
      addListener(eventName: string, handler: Function): void;
    }

    class InfoWindow {
      constructor(opts?: InfoWindowOptions);
      open(map: Map, anchor?: Marker): void;
    }

    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }

    namespace event {
      function trigger(instance: any, eventName: string): void;
    }

    interface MapOptions {
      center?: LatLng;
      zoom?: number;
      styles?: MapTypeStyle[];
      zoomControl?: boolean;
      mapTypeControl?: boolean;
      streetViewControl?: boolean;
      fullscreenControl?: boolean;
    }

    interface MarkerOptions {
      position?: LatLng;
      map?: Map;
      title?: string;
      animation?: Animation;
    }

    interface InfoWindowOptions {
      content?: string | HTMLElement;
    }

    interface MapTypeStyle {
      featureType?: string;
      elementType?: string;
      stylers?: Array<{ [key: string]: any }>;
    }

    enum Animation {
      DROP = 1,
      BOUNCE = 2
    }
  }
}

declare global {
  interface Window {
    google: typeof google;
  }
} 