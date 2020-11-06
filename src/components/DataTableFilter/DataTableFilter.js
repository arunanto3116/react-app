import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

class DataTableFilter extends Component {
    render(){
        return (
            <>
                <TextField id="search" type="text" placeholder="Search" value={this.props.filterText} onChange={this.props.onFilter} />
                <IconButton aria-label="delete" className={this.props.classes} onClick={this.props.clearFilter}>
                  <DeleteForeverOutlinedIcon />
                </IconButton>
            </>
        );
    }
};

DataTableFilter.defaultProps = {
    classes: ""
}

export default DataTableFilter;