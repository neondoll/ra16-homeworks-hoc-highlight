import New from "../wrappers/New.jsx";
import Popular from "../wrappers/Popular.jsx";
import PropTypes from "prop-types";

function withHighlight(Component) {
  const HocComponent = (props) => {
    const { views } = props;

    if (views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }

    if (views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }

    return (
      <Component {...props} />
    );
  };

  const name = Component.displayName || Component.name || "Component";

  HocComponent.displayName = `WithHighlight(${name})`;
  HocComponent.propTypes = { views: PropTypes.number.isRequired };

  return HocComponent;
}

export default withHighlight;
