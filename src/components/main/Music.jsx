import React from "react";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };

    this.url = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/audio/SxoktnUHBjzy8oizv/trumpet-fanfare1_WM.mp3";
    this.audio = new Audio(this.url);
  }

  play = () => {
    this.setState({
      play: true,
    });
    this.audio.play();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
