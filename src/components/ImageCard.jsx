import React from "react";
import PropTypes from "prop-types";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef(); // Allows access to specific DOM element with a ref attribute
  }

  componentDidMount() {
    // On load, img element will receive a calculated CSS span attribute for CSS-Grid.
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        data-test="component-image-card"
      >
        <img
          alt={description}
          src={urls.regular}
          ref={this.imageRef}
          data-test="image"
        />
      </div>
    );
  }
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageCard;
