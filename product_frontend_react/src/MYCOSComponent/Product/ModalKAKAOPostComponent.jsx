import React, {useState,useEffect} from 'react';
import {Table, TableBody, TableCell, TableRow, Grid, Button, Modal, Backdrop, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

import DaumPostcode from 'react-daum-postcode';

function ModalKAKAOPostComponent(props) {



    // 모달
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(5, 5, 5),
          borderRadius:'10px'
        },
      }));

    const classes = useStyles();


    return (
        <Modal  
        className={classes.modal}
        open={props.isOpenPost}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        >
            <Fade in={props.isOpenPost}>
                <div className={classes.paper} style={{width:'640px'}}>
                    {props.isOpenPost && props.seachAddress()}
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalKAKAOPostComponent
