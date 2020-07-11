import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.common.white,
        },
      },
  }))(TableRow);

export default StyledTableRow;