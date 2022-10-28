import './ABIMethodExecutor.scss';
import React from "react";
import {ABIMethod, ABIMethodParams} from "algosdk";
import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    TextField
} from "@mui/material";
import {CancelOutlined} from "@mui/icons-material";
import ABIMethodExecutorCls from '../../../../packages/abi/classes/ABIMethodExecutor';
import ABIMethodSignature from "../ABIMethodSignature/ABIMethodSignature";
import {shadedClr} from "../../../../utils/common";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

interface ABIMethodExecutorProps{
    show: boolean,
    method: ABIMethodParams,
    handleClose?: Function
}

const defaultProps: ABIMethodExecutorProps = {
    show: false,
    method: {
        args: [],
        name: '',
        returns: {
            type: '',
            desc: '',
        },
        desc: ''
    }
};

function ABIMethodExecutor({show = defaultProps.show, method = defaultProps.method, handleClose}: ABIMethodExecutorProps): JSX.Element {

    function onClose(ev) {
        handleClose();
        ev.preventDefault();
        ev.stopPropagation();
    }

    console.log(method);
    const abiMethodInstance = new ABIMethod(method);
    const abiMethodExecutorInstance = new ABIMethodExecutorCls(method);
    const canExecute = abiMethodExecutorInstance.canExecute();
    const args = abiMethodInstance.args;

    return (<div className={"abi-method-executor-wrapper"}>
        <div className={"abi-method-executor-container"}>

            {show ? <Dialog
                onClose={onClose}
                fullWidth={true}
                maxWidth={"md"}
                open={show}

                PaperProps={{
                    sx: {
                        height: '80vh'
                    }
                }}
            >
                <DialogTitle >
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <div style={{fontWeight: "bold", fontSize: 18}}>Execute ABI Method</div>
                        </div>
                        <div>
                            <IconButton color="warning" onClick={onClose}>
                                <CancelOutlined />
                            </IconButton>
                        </div>

                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className="abi-method-executor-modal-content">
                        <div className="abi-method-executor-header">
                            {/*<div className="abi-method-name">*/}

                            {/*</div>*/}
                        </div>
                        <div className="abi-method-executor-body">

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={7} lg={7} xl={7}>
                                    <div className="abi-method-executor-panel-wrapper">
                                        <div className="abi-method-executor-panel-container">
                                            <ABIMethodSignature color={"warning"} method={method} sx={{background: shadedClr}} fields ={['sig']}></ABIMethodSignature>

                                            {canExecute ? <div className="abi-method-args-form-wrapper">
                                                <div className="abi-method-args-form-container">
                                                    {/*<div className="abi-method-args-form-title">Arguments</div>*/}
                                                    {args.map((arg) => {
                                                        return <div className="abi-method-arg" key={arg.name}>
                                                            <TextField
                                                                fullWidth
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                label={arg.name + " (" + arg.type.toString() + ')'}
                                                                variant="outlined" />
                                                        </div>
                                                    })}
                                                    <div className="abi-method-execute">
                                                        <Button
                                                            style={{marginRight: '10px'}}
                                                            variant={"outlined"}
                                                            className="black-button"
                                                            onClick={onClose}
                                                        >Close</Button>
                                                        <Button
                                                            startIcon={<OfflineBoltIcon></OfflineBoltIcon>}
                                                            variant={"contained"}
                                                            className="black-button"
                                                        >Execute</Button>
                                                    </div>
                                                </div>
                                            </div> : <div className="info-message">
                                                <Alert icon={false} color={"warning"}>
                                                    Group transactions are not yet supported by dappflow. It is on our roadmap though.
                                                </Alert>
                                            </div>}
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
                                    <div className="abi-method-result-wrapper">
                                        <div className="abi-method-result-container">
                                            <div className="abi-method-result-title">
                                                Result
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>



                        </div>
                    </div>

                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog> : ''}

        </div>
    </div>);
}

export default ABIMethodExecutor;
