var React = require('react');
var ReactDOM = require('react-dom');

var ReactBootstrap = require('react-bootstrap');

var ReactBSTable = require('react-bootstrap-table');  
var BootStrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;

var Navbar = ReactBootstrap.Navbar,
Nav = ReactBootstrap.Nav,
NavItem = ReactBootstrap.NavItem,
DropdownButton = ReactBootstrap.DropdownButton,
MenuItem = ReactBootstrap.MenuItem;


var products = [{
      product: "Fixed Saver",
      interestRate: 2.20,
      interestType: "fixed",
      minDeposit: 500
  },{
      product: "Flex Saver",
      interestRate: 2.20,
      interestType: "fixed",
      minDeposit: 500
  }];


var SavingsHeader = React.createClass({
    
    render : function(){
        return(
    
              <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Llyods Bank </a>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle />
                </Navbar.Header>
               </Navbar>

        );
        
    } 
});

var SavingsTable = React.createClass({
    
    format : function(cell, row){
           return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
         },
    render : function(){
        return(
            <div className ="tablesaw tablesaw-stack" data-tablesaw-mode="stack">
            <BootStrapTable data={products} pagination={true} pageSize={5}>
                <TableHeaderColumn dataField="product" isKey={true} >Product</TableHeaderColumn> 
                <TableHeaderColumn dataField="interestRate" dataCardView ={true} >Interest Rate</TableHeaderColumn>
                <TableHeaderColumn dataField="minDeposit" dataCardView ={true} >Minimum Deposit</TableHeaderColumn>
                <TableHeaderColumn dataField="interestType" dataCardView ={true}>Interest Type</TableHeaderColumn>
            </BootStrapTable>
            </div>
              );
        
    }
    
});


var SavingsAccount = React.createClass({
    render : function(){
        return(
            <div>
               <SavingsHeader />
               <SavingsTable />
               
            </div>
        );
    }
    
    
});

ReactDOM.render(<SavingsAccount />,document.getElementById('app'));