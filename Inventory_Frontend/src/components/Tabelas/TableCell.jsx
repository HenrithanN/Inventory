import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
const StyledTableCell = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontsize:15,
      fontWeight:700,
    },
    body: {
      fontSize: 15,
    },
  }))(TableCell);

export default StyledTableCell;

