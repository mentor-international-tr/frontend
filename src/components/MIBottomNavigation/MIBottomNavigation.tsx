import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, SyntheticEvent } from "react";
import classNames from "classnames";

const styles = {
  root: {},
};

interface NavItem {
  label: string;
  icon: React.ReactElement;
  clickHandler: React.ReactEventHandler<any>;
}

export interface MIBottomNavigation {
  classes: any;
  className?: string;
  navItems: NavItem[];
}

const MIBottomNavigation: React.SFC<MIBottomNavigation> = ({
  classes,
  className,
  navItems,
}) => {
  const [value, setValue] = useState(0);
  console.log(className);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classNames(classes.root, className)}
    >
      {navItems.map((item: NavItem) => {
        return (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            icon={item.icon}
            onClick={item.clickHandler}
          />
        );
      })}
    </BottomNavigation>
  );
};
MIBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MIBottomNavigation);
