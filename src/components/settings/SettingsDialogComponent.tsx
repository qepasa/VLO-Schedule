import { Box, Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Tab, Tabs, Theme, Typography } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import React, { FunctionComponent, useState } from "react";
import GroupFiltersComponent from "./GroupFiltersComponent";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: '50vh',
            maxHeight: '90vh',
        },
    }));

type SettingsDialogOwnProps = {
    open: boolean;
    onClose: () => void;
};

type SettingsDialogProps = SettingsDialogOwnProps;

const SettingsDialogComponent: FunctionComponent<SettingsDialogProps> = ({ open, onClose }) => {
    const cssClasses = useStyles();
    const [value, setValue] = useState('1');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return <Dialog open={open} onClose={onClose} aria-labelledby="settings-dialog" className={cssClasses.root}>
            <DialogTitle id="settings-dialog-title">Ustawienia</DialogTitle>
            <TabContext value={value} >
                <TabList
                    indicatorColor="secondary"
                    textColor="secondary"
                    onChange={handleChange}
                >
                    <Tab label="Filtry grup" textColor="secondary" value="1"></Tab>
                </TabList>
                <DialogContent>
                    <TabPanel value="1" >
                        <GroupFiltersComponent />
                    </TabPanel>
                </DialogContent>
            </TabContext>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Zamknij</Button>
            </DialogActions>
        </Dialog>;
};

export default SettingsDialogComponent;