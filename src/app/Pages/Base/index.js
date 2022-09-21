import React from "react";
import BarraTopo from "../../components/BarraTopo";
import Menu from "../../components/Menu";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex horizontal f-height">
        <div className="flex vertical">
          <Menu history={this.props.history} />
        </div>
        <div className="flex vertical f-width">
          <div className="flex horizontal">
            <BarraTopo />
          </div>
          <div className="flex f-height f-width">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
