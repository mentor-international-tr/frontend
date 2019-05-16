import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = (theme: any): any => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
});

interface MITable {
  classes: {
    [key: string]: any,
  };
  tableHeaders: string[];
  tableBody: object[];
  includeOnly: string[];
}
const MITable: React.SFC<MITable> = ({
  classes,
  tableHeaders,
  tableBody,
  includeOnly,
}) => {
  const includeObj = includeOnly.reduce(
    (acc: any, prop: string) => {
      console.log(acc);
      return {
        ...acc,
        [prop]: true,
      };
    },
    {},
  );
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {tableHeaders.map((headerName: string) => {
              return (
                <CustomTableCell
                  component="th"
                  align="center"
                  key={headerName}
                >
                  {headerName}
                </CustomTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.map((row: { [key: string]: any }) => (
            <TableRow className={classes.row} key={row.id}>
              {Object.keys(row).map((key: string) => {
                if (includeOnly) {
                  if (includeObj[key]) {
                    return (
                      <CustomTableCell
                        align="center"
                        key={key}
                      >
                        {row[key]}
                      </CustomTableCell>
                    );
                  }
                } else {
                  return (
                    <CustomTableCell
                      align="center"
                      key={key}
                    >
                      {row[key]}
                    </CustomTableCell>
                  );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

MITable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MITable);
