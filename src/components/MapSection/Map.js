import React, { Component } from "react";

import MapGL, {
  Marker,
  NavigationControl,
  FlyToInterpolator
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import api from "../../API/api";

const navStyle = {
  position: "absolute",
  top: 10,
  left: 0,
  padding: "10px"
};

class Map extends Component {
  constructor() {
    super();
    this.state = {
      defaultSettings: {
        latitude: -37.8124,
        longitude: 144.9623,
        width: "100%",
        height: "50vh",
        zoom: 12
      },
      searchText: ""
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    //const delay = ms => new Promise(res => setTimeout(res, ms));
    //await delay(1000);
    let defaultSettings = this.state.defaultSettings;
    window.navigator.geolocation.getCurrentPosition(
      position => {
        let { latitude, longitude } = position.coords;
        defaultSettings.latitude = latitude;
        defaultSettings.longitude = longitude;

        this.setState({ defaultSettings: defaultSettings });
      },
      err => {
        console.log(err.message);
        defaultSettings.latitude = -37.8124;
        defaultSettings.longitude = 144.9623;
      }
    );
    let request = await api.get("/tafe_info");
    let response = request.data.data;

    this.setState({ data: response });
  };

  onInputChange = event => {
    this.setState({ searchText: event.target.value });
  };

  renderSidePanelItems = searchText => {
    return this.state.data
      .filter(item => item.tafe_name.toLowerCase().includes(searchText))
      .map(item => {
        return (
          <div key={item.tafe_id} style={{ borderBottom: "1px solid #eee" }}>
            <div className="mx-2">
              <h6
                className="mt-2"
                onClick={() => {
                  this.flyToPoint(
                    Number(item.latitude),
                    Number(item.longitude)
                  );
                }}
              >
                {item.tafe_name}
              </h6>
              <p>{item.street_address}</p>
            </div>
          </div>
        );
      });
  };

  renderMarker = () => {
    return this.state.data.map(item => {
      return (
        <Marker
          key={item.tafe_id}
          latitude={Number(item.latitude)}
          longitude={Number(item.longitude)}
        >
          <img
            src="/img/location.png"
            alt="map marker"
            style={{
              height: `${this.state.defaultSettings.zoom * 0.2}rem`,
              width: `${this.state.defaultSettings.zoom * 0.2}rem`
            }}
          />
        </Marker>
      );
    });
  };

  flyToPoint = (lat, lon) => {
    let newDefault = this.state.defaultSettings;
    newDefault.latitude = lat;
    newDefault.longitude = lon;
    newDefault.zoom = 15;
    this.setState({ defaultSettings: newDefault });
  };

  render() {
    if (this.state.data === undefined) {
      return (
        <div className="text-center p-3 col-12">
          <div
            style={{ width: "10rem", height: "10rem" }}
            className="spinner-border text-warning"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <>
        <div
          className="col-md-3 rounded"
          style={{ border: "1px solid #eee", padding: 0, height: "50vh" }}
        >
          <div style={{ borderBottom: "1px solid #eee" }}>
            <div className="px-2">
              <input
                className="form-control my-2 "
                type="text"
                placeholder="Search"
                onChange={this.onInputChange}
                value={this.state.searchText}
              />
            </div>
          </div>
          <div style={{ overflow: "auto", height: "85%" }}>
            {this.renderSidePanelItems(this.state.searchText)}
          </div>
        </div>
        <div className="col-md-9">
          <MapGL
            {...this.state.defaultSettings}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={defaultSettings => {
              this.setState({ defaultSettings: defaultSettings });
            }}
            transitionDuration={500}
            transitionInterpolator={new FlyToInterpolator()}
          >
            {this.renderMarker()}
            <div className="nav" style={navStyle}>
              <NavigationControl />
            </div>
          </MapGL>
        </div>
      </>
    );
  }
}

const response = [
  {
    tafe_id: 1,
    tafe_name: "name1",
    street_address: "1 tafe road",
    suburb: "1 Tafe",
    latitude: -37.89257,
    longitude: 145.00844
  },
  {
    tafe_id: 2,
    tafe_name: "name2",
    street_address: "2 tafe road",
    suburb: "2 Tafe",
    latitude: -37.878443,
    longitude: 145.03422
  } /*,
  {
    tafe_id: 3,
    tafe_name: "name1",
    street_address: "1 tafe road",
    suburb: "1 Tafe",
    latitude: -37.89257,
    longitude: 145.00844
  },
  {
    tafe_id: 4,
    tafe_name: "name2",
    street_address: "2 tafe road",
    suburb: "2 Tafe",
    latitude: -37.878443,
    longitude: 145.03422
  },
  {
    tafe_id: 5,
    tafe_name: "name1",
    street_address: "1 tafe road",
    suburb: "1 Tafe",
    latitude: -37.89257,
    longitude: 145.00844
  },
  {
    tafe_id: 6,
    tafe_name: "name2",
    street_address: "2 tafe road",
    suburb: "2 Tafe",
    latitude: -37.878443,
    longitude: 145.03422
  }*/
];

export default Map;
