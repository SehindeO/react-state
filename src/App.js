import React from "react";
import "react-responsive-modal/styles.css";
import "./App.css";

import { Modal } from "react-responsive-modal";
// import ProfilPhoto from "./image/profilPhoto.jpg";
import Profil from "./Components/Profile/Profil";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Olasehinde Odesina",
      bio:
        "An Interactive, Business Analyst, Full-stack software development expertise. Focus on building scalable, problem-solving platforms that are user-friendly. A Member of MANES ICEBORN (LAF3FS) Nigeria Hackerspace. I started my professional career with MTN Nigeria, later Joined Logitrade Engineering Limited (LE). An Engineering Company.Olasehinde  has a wide experience in the Nigeria Oil & Gas Industry and Nigeria Power, Mine & Steel Industry, where he served and worked under the Longest serving Director of Steel in Nigeria, worked with Three (3) different Passed Managing Directors of Ajaokuta Steel Company (ASCL) directly with lot of Managerial, Organizational and Problem solving Skills before Co-founded Edengard Global Limited as a Startup in Lagos, Nigeria in September 2015. www.edengardglobal.com. Edengard Global Limited now has over Fifty (50) Clients across the all the Sectors in Nigeria, including the Oil and Gas, FMCGs, Telecommunication Space. Edengard Global Limited Partners with MECON Limited, formerly known as Metallurgical & Engineering Consultants (India) Limited, ANSELL, Ariva Technology PVT India and Qatar German Gasket Factory (Q-GER).",
        
      profession: "Business Consultant",
    },
    show: false,
    date: new Date(),
  };
  componentDidMount() {
    this.timer = setInterval(() => this.refrechDate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  refrechDate() {
    this.setState({
      date: new Date(),
    });
  }
  onOpenModal = () => {
    this.setState({ show: true });
  };
  onCloseModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { show, date } = this.state;
    return (
      <React.Fragment>
        <div className="date-container">
          <h2>It's : {date.toLocaleTimeString()}</h2>
        </div>
        <div className="App">
          <h1 style={{ color: "#3fb0ac" }}>Welcome to my webpage</h1>
          <p>press the button to show the profile </p>
          <div>
            <i className="fas fa-level-down-alt"></i>
          </div>

          <button className="btn" onClick={this.onOpenModal}>
            Show Profile
          </button>
          <Modal open={show} onClose={this.onCloseModal} center>
            <Profil persone={this.state.Person} />
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
