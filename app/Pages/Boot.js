import React from "react";
import DataGen from "./DataGen";
import * as firebase from "firebase/app";
import "firebase/database";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

export default class Boot extends React.Component {
    constructor(props){
        super();
        this.state = {
            connectionSate: false
          };
          this.firebaseConfig = {
            apiKey: "AIzaSyCa658195IzUWjmjCg51YHdH8NvyPPue5U",
            authDomain: "esponair.firebaseapp.com",
            databaseURL: "https://esponair.firebaseio.com",
            projectId: "esponair",
            storageBucket: "esponair.appspot.com",
            messagingSenderId: "878103505508",
            appId: "1:878103505508:web:ed3d5340a890ab93"
          };
    }

    connect() {
        if (!this.state.connectionSate) {
          if (!firebase.apps.length) {
            firebase.initializeApp(this.firebaseConfig);
            this.setState({ connectionSate: true });
            this.dataBaseRef = firebase.database();
          } else {
            this.setState({ connectionSate: false });
          }
        } else {
          window.location.reload();
        }
      }

    render(){
        return(
            <div className="uk-container mainContainer">
            <div className="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
              <h3 className="uk-card-title">Connect to database</h3>
              <p>Allow this machine to communicate with web app</p>
              <button
                onClick={() => this.connect()}
                className="uk-button uk-button-primary"
              >
                {this.state.connectionSate ? "Disconnect" : "Connect"}
              </button>
              <p>{this.state.connectionSate ? "connected" : "not connected"}</p>
            </div>
    
            <div>
              <div className="uk-card uk-card-primary uk-card-body">
                <h4 className="uk-card-title">Sensor values</h4>
                {this.state.connectionSate ? (
                  <DataGen dbRef={this.dataBaseRef} />
                ) : null}
              </div>
            </div>
          </div>
        )
    }
}