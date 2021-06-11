import React, {useState, useEffect} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Grid, Button} from '@material-ui/core';
import ApiService from '../../ApiService';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const columns = [
    { id: 'name', label: '주문', minWidth: 60 },
    { id: 'code', label: '날짜', minWidth: 80 },
    { id: 'population', label: '배송현황', minWidth: 80},
    { id: 'size', label: '총계', minWidth: 200 },
    { id: 'density', label: '', minWidth: 200, align: 'right' },
  ];
  
//   function createData(name, code, population, size) {
//     const density = population / size;
//     return { name, code, population, size, density };
//   }
  
//   const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
//   ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
      border:'0px',
      boxShadow:'0px',
    },
    container: {
      maxHeight: 440,
      border:'0px',
      
    },
  });
  

  export default function StickyHeadTable(props) {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        ApiService.getUserOrderList(props.user.user_email)
        .then( res => {
            setOrderList(res.data);
            console.log(orderList);
        })
        .catch(err => {
            console.log('product_list print error!', err);
        })
    },[props.user.user_email])


    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
    <Grid item xs={6} sm={9}>
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orderList.map((order) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={order.order_id} >
                            <TableCell style={{border:'0px'}}>{order.order_id}</TableCell>
                            <TableCell style={{border:'0px'}}>{order.order_date}</TableCell>
                            <TableCell style={{border:'0px'}}>{order.order_status}</TableCell>
                            <TableCell style={{border:'0px'}}>총 금액 : {order.total_price}, {order.order_product_amount}개 상품</TableCell>
                            <TableCell style={{textAlign:'right', border:'0px'}}>
                                <Button style={button1}>주문상세</Button>
                                <Button style={button2}>취소</Button>
                            </TableCell>
                        </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={orderList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    </Grid>
    );
  }

const button1 = {
    backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white', border:'0px'
}

const button2 = {
    width:'70px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'gray', border:'1px solid gray'
}






















// function DeliveryInfoComponent(props) {
//     return (
//         <Grid item xs={6} sm={7}>
//             <div style={{fontSize:'13px', textAlign:'left', marginBottom:'20px'}}>주문상세 내역</div>
//             <div style={{minHeight:'800px'}}>

//                 <Table style={{marginBottom:'20px'}}>
//                     <TableBody >
//                         <TableRow style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
//                             <Grid item xs={6} sm={8} style={{minWidth:'560px'}}>                        
//                                 <TableCell style={{border:'0px'}}>주문번호</TableCell>
//                                 <TableCell style={{border:'0px'}}>날짜</TableCell>
//                                 <TableCell style={{border:'0px'}}>배송 상태</TableCell>
//                                 <TableCell style={{border:'0px'}}>총계</TableCell>
//                             </Grid>
//                             <Grid item xs={6} sm={4} style={{minWidth:'280px'}}>                        
                            
//                             </Grid>
//                         </TableRow>
//                         <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'0px', paddingBottom:'0px', paddingTop:'0px'}}/>



//                         <TableRow style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
//                             <Grid item xs={6} sm={8} style={{minWidth:'560px'}}>                        
//                                 <TableCell style={{border:'0px'}}>#111111</TableCell>
//                                 <TableCell style={{border:'0px'}}>2021-06-11</TableCell>
//                                 <TableCell style={{border:'0px'}}>배송준비중</TableCell>
//                                 <TableCell style={{border:'0px'}}>총 금액 : 95000원, 6개 상품</TableCell>
//                             </Grid>
//                             <Grid item xs={6} sm={4} style={{minWidth:'280px'}}>                        
//                                 <TableCell style={{border:'0px'}}><Button style={button}>배송조회</Button><Button style={button}>배송조회</Button></TableCell>
//                             </Grid>
//                         </TableRow>
//                     </TableBody>
//                 </Table>
//             </div>
//         </Grid>
//     )
// }


// export default DeliveryInfoComponent
