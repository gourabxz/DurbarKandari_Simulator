import React from "react";
import '../index.css'
export default class DataGen extends React.Component {
  constructor(props) {
    super();
    this.pressureData = props.dbRef.ref("data/sensorData");
    this.state = {
        prData: 0,
        prDataArr: [],
        flData: 0,
        flDataArr: []
    };
  }

  writeData(pr_Data, flow_data) {
    this.pressureData.set({
      prData: pr_Data,
      flowData: flow_data
    });
  }

  genPrData(){
    var i = 0;
    setInterval(()=>{
        var prSinWave = 2 * Math.sin((0.5 * Math.PI * i) / 5) + Math.sin((Math.PI * i) / 5) + 2.598;
        var flSineWave = 8 * Math.sin((0.5 * Math.PI * i) / 8) + Math.sin((Math.PI * i) / 5) + 2.598;
        
        if(this.state.prDataArr.length === 10){
            this.writeData(this.state.prDataArr, this.state.flDataArr)
            this.setState({prDataArr: [prSinWave], flDataArr: [flSineWave]});
            
        }else{
            this.setState({
                prData: prSinWave,
                prDataArr: [...this.state.prDataArr, prSinWave],
                flData: flSineWave,
                flDataArr: [...this.state.flDataArr, flSineWave]
            })
        }
        i++;
    }, 200)
  }
  componentDidMount() {
    this.genPrData();
  }

  render() {
    return (
      <div>
        <p>Pressure Sensor value: </p>
        <span className="uk-badge sensorBadge uk-dark">{(this.state.prData * 100).toFixed(2)}</span>
        <p>Flow Sensor value: </p>
        <span className="uk-badge sensorBadge uk-dark">{(this.state.flData * 100).toFixed(2)}</span>
      </div>
    );
  }
}
