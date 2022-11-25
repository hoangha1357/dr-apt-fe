import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Header from "../component/Header";
import "./../assets/css/userinfo.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ListAppointment from '../component/ListAppointment'
import ProfileEditable from "../component/ProfileEditable";
import patient_avt from "./../assets/img/patient-avt.jpg";
import doctor_avt from "./../assets/img/handdrawn_vector_61.jpg";
import { BsGeoAltFill } from "react-icons/bs";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const StyledTabs = styled((props) => (
    <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",

    },
    "& .MuiTabs-fixed": {
        borderBottom: "1px solid rgba(0,0,0,.125);",
    },
    "& .MuiTabs-indicatorSpan": {
        //   maxWidth: 40,
        width: "100%",
        backgroundColor: "#15558D",
        fontWeight: "600",
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#272B41",
    "&.Mui-selected": {
        color: "#15558D",
        fontWeight: 600,
    },
    "&.Mui-focusVisible": {
        backgroundColor: "#15558D",
        fontWeight: 600,
    },
}));

const UserInfo = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`,
        };
    }

    return (
        <div className="user-profile">
            <Header />
            <Container fluid className="breadcum">
                <Breadcrumb>
                    <Breadcrumb.Item className="white-color" href="#">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item
                        className="white-color"
                        href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                    >
                        Patients
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h3 className="white-color">Profile</h3>
            </Container>
            <Container fluid className="user-info mt-5">
                <Row>
                    <Col lg={3} className="profile-left">
                        <div className="profile-container pt-3 pb-3">
                            <div className="patient-avt mt-2">
                                <img src={patient_avt} alt="hehe" />
                            </div>
                            <div className="patient-name mt-2 text-center">
                                <h3>Lê Hoàng An</h3>
                            </div>
                            <div className="patient-id text-center">
                                <strong>Patient ID: </strong>
                                <span>1900000</span>
                            </div>
                            <div className="patient-loaction mt-2 text-center pb-3">
                                <BsGeoAltFill />
                                <span className="mx-2">Quận 7, Tp.Hồ Chí Minh</span>
                            </div>
                            <div className="patient-phone mt-2 d-flex justify-content-between px-4">
                                <span className="text-semibold">Phone: </span>
                                <span className="color-gray">0988777999</span>
                            </div>
                            <div className="patient-age mt-2 d-flex justify-content-between px-4">
                                <span className="text-semibold">Age: </span>
                                <span className="color-gray">20</span>
                            </div>
                            <div className="patient-blood mt-2 d-flex justify-content-between px-4">
                                <span className="text-semibold">Blood group: </span>
                                <span className="color-gray">AB</span>
                            </div>
                        </div>

                        <div className="last-booking mt-5">
                            <h2 className="pb-4 pt-3 px-4">Last booking</h2>
                            <div className="last-booking-item d-flex px-3 pt-3 pb-3">
                                <div className="last-booking-item-avt ">
                                    <img src={doctor_avt} alt="doctor" width={"100%"} height={"100%"} />
                                </div>
                                <div className="last-booking-item-info flex-grow-1 mx-4 ">
                                    <p className="text-semibold">Dr. Hà Duyên Thắng</p>
                                    <p className="color-gray">Nha sĩ</p>
                                    <p className="color-gray">12/10/2022 14:30</p>
                                </div>
                            </div>
                            <div className="last-booking-item d-flex px-3 pt-3 pb-3">
                                <div className="last-booking-item-avt ">
                                    <img src={doctor_avt} alt="doctor" width={"100%"} height={"100%"} />
                                </div>
                                <div className="last-booking-item-info flex-grow-1 mx-4 ">
                                    <p className="text-semibold">Dr. Hà Duyên Thắng</p>
                                    <p className="color-gray">Nha sĩ</p>
                                    <p className="color-gray">12/10/2022 14:30</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <Box sx={{ width: "100%", fontSize: 15 }}>
                            <StyledTabs
                                value={value}
                                onChange={handleChange}
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                                variant="fullWidth"
                            >
                                <StyledTab value={0} label="Lịch sử đặt hẹn" {...a11yProps(0)} />
                                <StyledTab value={1} label="Thông tin cá nhân" {...a11yProps(1)} />
                                <StyledTab value={2} label="Item Three" {...a11yProps(2)} />
                            </StyledTabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <ListAppointment />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <ProfileEditable />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserInfo;
