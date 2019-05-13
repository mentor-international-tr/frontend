import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme: any) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
});

export interface TextButtonProps {
  classes: any;
  children: React.ReactChild;
  btnProps?: object;
}

const TextButton: React.SFC<TextButtonProps> = ({
  classes,
  children,
  btnProps,
}) => {
  return (
    <Button className={classes.button} {...btnProps}>
      {children}
    </Button>
  );
};
TextButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButton);
