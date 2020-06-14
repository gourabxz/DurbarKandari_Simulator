import React from "react";

export default class DataGen extends React.Component {
  constructor(props) {
    super();
    this.pressureData = props.dbRef.ref("data/sensorData");
    this.state = {
        prData: 0,
        prDataArr: [],
        timer: 0
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
        
        if(this.state.prDataArr.length === 10){
            this.writeData(this.state.prDataArr, null)
            this.setState({prDataArr: [prSinWave]});
            
        }else{
            this.setState({
                prData: prSinWave,
                prDataArr: [...this.state.prDataArr, prSinWave]
            })
        }
        i++;
        
        // console.log(this.state.prDataArr)
    }, 200)
  }
  componentDidMount() {
    this.genPrData();
    console.log(this.state.prData);
  }

  render() {
    return (
      <div>
        <p>Pressure Sensor value: {(this.state.prData * 100).toFixed(2)}</p>
        <p>{this.state.timer}</p>
      </div>
    );
  }
}
