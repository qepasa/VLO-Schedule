import { Box, Button, Dialog, DialogActions, DialogTitle, Tab, Tabs, Typography } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import GroupFiltersComponent from "./GroupFiltersComponent";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

type SettingsDialogOwnProps = {
    open: boolean;
    onClose: () => void;
};

type SettingsDialogProps = SettingsDialogOwnProps;

const SettingsDialogComponent: FunctionComponent<SettingsDialogProps> = ({ open, onClose }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="settings-dialog">
            <DialogTitle id="settings-dialog-title">Ustawienia</DialogTitle>
            <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={handleChange}
            >
                <Tab label="Filtry grup" textColor="secondary"></Tab>
            </Tabs>
            <TabPanel value={value} index={0}>
                <GroupFiltersComponent />
            </TabPanel>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Zamknij</Button>
            </DialogActions>
        </Dialog>

    </div>;
};

export default SettingsDialogComponent;