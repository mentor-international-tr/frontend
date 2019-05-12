import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import themeStyles from "../../lib/styles/variables";
// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: themeStyles.blue,
    color: themeStyles.white,
    "&:hover": {
      background: themeStyles.darker_blue,
    },
  },
};

const PrimaryButton: any = (props: any) => {
  const { classes, children, className, ...other } = props;

  return (
    <Button
      className={classNames(classes.root, className)}
      {...other}
      data-testid="primary-button"
    >
      {children}
    </Button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(PrimaryButton);
