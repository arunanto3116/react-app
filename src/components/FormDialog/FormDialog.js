import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const FormDialog = (props) => {
    const [user, setUser] = React.useState({
            name: {
                title: '',
                first: '',
                last: ''
            },
            gender: 'male',
            email: '',
            username: '',
            password: '',
            dob: new Date(),
            phone: ''
    });
    const handleChange = (type, value) => {
        let data = {...user};
        if(type=="title" || type=="first" || type=="last"){
            data.name[type] = value;
        }else{
            data[type] = value;
        }
        setUser(data);
    };
    const formError = (user.name.first.trim() && user.username.trim() && user.password.trim()) ? false : true;
  return (
    <div>
      <Dialog open={props.showDialog} aria-labelledby="form-dialog-title" maxWidth={"md"} fullWidth={true}>
        <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
        <DialogContent>
            <Grid container justify="center">
                <Grid item lg={4} xs={12} md={4} sm={12} className="">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="tile"
                        label="Title"
                        type="text"
                        fullWidth
                        value={user.name.title}
                        onChange={(e) => {handleChange('title',e.target.value)}}
                    />
                </Grid>
                <Grid item lg={4} xs={12} md={4} sm={12} className="">
                    <TextField
                        {...!user.name.first.trim() && {error:true}}
                        autoFocus
                        margin="dense"
                        id="first_nmae"
                        label="First Name *"
                        type="text"
                        fullWidth
                        value={user.name.first}
                        onChange={(e) => {handleChange('first',e.target.value)}}
                    />
                </Grid>
                <Grid item lg={4} xs={12} md={4} sm={12} className="">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="last_nmae"
                        label="Last Name"
                        type="text"
                        fullWidth
                        value={user.name.last}
                        onChange={(e) => {handleChange('last',e.target.value)}}
                    />
                </Grid>
                <Grid item lg={6} xs={12} md={6} sm={6} className="">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="text"
                        fullWidth
                        type="text"
                        value={user.phone}
                        onChange={(e) => {handleChange('phone',e.target.value)}}
                    />
                </Grid>
                <Grid item lg={6} xs={12} md={6} sm={6} className="">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={user.email}
                        onChange={(e) => {handleChange('email',e.target.value)}}
                    />
                </Grid>
                <Grid item lg={6} xs={12} md={6} sm={6} className="">
                    <FormControl className="select-box-container">
                      <InputLabel id="gender-label">Gender</InputLabel>
                      <Select
                        labelId="gender-label"
                        id="gender-select"
                        value={user.gender}
                        onChange={(e) => {handleChange('gender',e.target.value)}}
                      >
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                        <MenuItem value={"others"}>Others</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={6} xs={12} md={6} sm={6} className="">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="DOB"
                            format="MM/dd/yyyy"
                            value={user.dob}
                            onChange={(e) => {handleChange('dob',e)}}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                            className="date-selector-container"
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item lg={6} xs={12} md={6} sm={6} className="">
                    <TextField
                        {...!user.username.trim() && {error:true}}
                        autoFocus
                        margin="dense"
                        id="user_nmae"
                        label="User Name *"
                        type="text"
                        fullWidth
                        value={user.username}
                        onChange={(e) => {handleChange('username',e.target.value)}}
                    />
                </Grid>
                <Grid item lg={6} xs={12} md={6} sm={6} className="">
                    <TextField
                        {...!user.password.trim() && {error:true}}
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password *"
                        type="password"
                        fullWidth
                        value={user.password}
                        onChange={(e) => {handleChange('password',e.target.value)}}
                    />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.closeDialog()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => props.saveData(user)} color="primary" {...formError && {disabled:true}}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;