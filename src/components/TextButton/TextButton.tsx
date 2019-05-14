import React, { isValidElement } from "react";
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
  children: React.ReactElement | string;
  btnProps?: object;
}

const TextButton: React.SFC<TextButtonProps> = ({
  classes,
  children,
  btnProps,
}) => {
  return (
    <Button className={classes.button} {...btnProps}>
      {isValidElement(children)
        ? React.cloneElement(children)
        : children}
    </Button>
  );
};
TextButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButton);
