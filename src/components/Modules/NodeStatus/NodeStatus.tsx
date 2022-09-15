import './NodeStatus.scss';
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import NodeCatchup from "./cards/NodeCatchup/NodeCatchup";
import {Grid} from "@mui/material";


function NodeStatus(): JSX.Element {

    const node = useSelector((state: RootState) => state.node);

    return (<div className={"node-status-wrapper"}>
        <div className={"node-status-container"}>

            <div className={"node-status-header"}>
                <div>
                    Node status
                </div>
            </div>
            <div className={"node-status-body"}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <NodeCatchup loading={node.loadingStatus} status={node.status}></NodeCatchup>
                    </Grid>
                </Grid>

            </div>
        </div>
    </div>);
}

export default NodeStatus;
