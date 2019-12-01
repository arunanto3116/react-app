import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import Card from "@material-ui/core/Card";
import CircularProgress from '@material-ui/core/CircularProgress';
import DataTableFilter from "../../components/DataTableFilter/DataTableFilter";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import FormDialog from "../../components/FormDialog/FormDialog";
import Avatar from '@material-ui/core/Avatar';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            filterText: ""
        };
        this.changeFilterText = this.changeFilterText.bind(this);
    }
    componentWillMount(){
        this.props.getUsers();
    }
    getData(){
        let users = [];
        let {filterText} = this.state;
        filterText = filterText.toLowerCase();
        if(this.props.loginReducer.users.length > 0){
            users = this.props.loginReducer.users.map((data)=>{
                let { email, name, phone, gender } = data.user;
                let picture = (data.user.hasOwnProperty('picture') && data.user.picture.hasOwnProperty('thumbnail')) ?
                                        <Avatar alt="Avatar" src={data.user.picture.thumbnail} />
                                    :
                                        <Avatar>
                                            <PersonIcon />
                                         </Avatar>;
                return {
                    email,
                    name: name.title+ ' ' + name.first + ' ' + name.last,
                    phone,
                    avatar: picture,
                    gender
                };
            });
            if(filterText != ""){
                users = users.filter(item => {
                   return ((item.name && item.name.toLowerCase().includes(filterText)) || (item.email && item.email.toLowerCase().includes(filterText)) || (item.phone && item.phone.toLowerCase().includes(filterText)) || (item.gender && item.gender.toLowerCase().includes(filterText)));
                });
            }
        }
        return users;
    }
    changeFilterText(e){
        let value  =  e.target.value;
        this.setState({filterText: value});
    }
    clearFilter = () => {
        this.setState({filterText: ""});
    }
    handleOpenDialogclick = () => {
        this.props.showDialog(true);
    }
    saveUserData = (user) => {
        this.props.addUser(user);
    }
    handleCloseDialogclick = () => {
        this.props.showDialog(false);
    }
    render() {

        const columns = [
          {
              name: 'Avatar',
              selector: 'avatar',
              maxWidth: '130px'
          },
          {
            name: 'Name',
            selector: 'name',
            sortable: true,
            style: {textTransform:'capitalize'}
          },
          {
            name: 'Email',
            selector: 'email',
            sortable: true,
          },
          {
            name: 'Phone',
            selector: 'phone',
            sortable: true,
          },
          {
            name: 'Gender',
            selector: 'gender',
            sortable: true,
            style: {textTransform:'capitalize'}
          }
        ];

        return (
            <div>
                <Card className="data-table-container">
                    <div className="add-button-container">
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<AddIcon fontSize="large"/>}
                          className="add-button"
                          onClick={() => this.handleOpenDialogclick()}
                        >
                          Add New User
                        </Button>
                    </div>
                    <DataTable
                      title="Users"
                      columns={columns}
                      data={this.getData()}
                      pagination
                      progressPending={this.props.loginReducer.isLoading}
                      progressComponent={<CircularProgress />}
                      subHeader
                      subHeaderComponent={<DataTableFilter filterText={this.state.filterText} value = {this.state.filterText} onFilter={this.changeFilterText} clearFilter={this.clearFilter}/>}
                    />
                </Card>
                {(this.props.loginReducer.showDialog) ?
                    <FormDialog showDialog={this.props.loginReducer.showDialog} closeDialog={this.handleCloseDialogclick} saveData={this.saveUserData}/>
                    : null
                }
            </div>
        );
    }
}

export default Home;