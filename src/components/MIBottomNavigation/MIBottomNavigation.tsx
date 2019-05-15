import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
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
  highlightNone?: boolean;
}

const MIBottomNavigation: React.SFC<MIBottomNavigation> = ({
  classes,
  className,
  navItems,
  highlightNone,
}) => {
  const [value, setValue] = useState(
    highlightNone ? -1 : 0,
  );

  const handleChange = (event: any, newValue: number) => {
    if (highlightNone) {
      return;
    }
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
