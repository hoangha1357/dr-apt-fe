import React, { useEffect } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './../../assets/css/userinfo.css'
import Container from 'react-bootstrap/Container'
import Header from '../Header'
import '../../assets/css/userinfo.css'
import { useState } from 'react'
import './Appointment.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import ListAppointment from '../ListAppointment'
import ProfileEditable from '../ProfileEditable'
import { BsGeoAltFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { getAllAppointments } from '../../redux/userSlice'
import Feedback from '../Feedback'
import axios from 'axios'

function TabPanel(props) {
    const { children, value, index, ...other } = props

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
    )
}

const StyledTabs = styled((props) => (
    <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-fixed': {
        borderBottom: '1px solid rgba(0,0,0,.125);',
    },
    '& .MuiTabs-indicatorSpan': {
        //   maxWidth: 40,
        width: '100%',
        backgroundColor: '#15558D',
        fontWeight: '600',
    },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: '#272B41',
    '&.Mui-selected': {
        color: '#15558D',
        fontWeight: 600,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#15558D',
        fontWeight: 600,
    },
}))

const Appointment = () => {
    const [showModal, setShowModal] = useState(false)
    const [doctor, setDoctor] = useState('')
    const [patient, setPatient] = useState('')

    const [date, setDate] = useState('')
    const [timeBegin, setTimeBegin] = useState('')
    const [timeEnd, setTimeEnd] = useState('')

    const [healthIssue, setHealthIssue] = useState('')

    const handleClick = () => {
        setShowModal(!showModal)
        setDate('')
        setDoctor('')
        setHealthIssue('')
        setPatient('')
        setTimeBegin('')
        setTimeEnd('')
    }

    const handleConfirm = () => {
        const data = {
            doctor,
            patient,
            date,
            description: healthIssue,
            aprove: '???',
        }

        axios
            .post('/appointment', data)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const dispatch = useDispatch()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        dispatch(getAllAppointments('hehe'))
    }, [])

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }

    return (
        <div className="user-profile">
            {showModal && (
                <div className="modal_appointment">
                    <h2 className="modal_title">ĐẶT LỊCH KHÁM</h2>
                    <div className="info_appointment">
                        <div className="img_doctor">
                            <img src="/assets/images/doctor.jpg" alt="doctor" />
                        </div>
                        <div className="info">
                            <div className="essential_info">
                                <div className="title">Bác Sĩ</div>
                                <div className="colon">:</div>
                                <div className="value">Nguyễn Văn A</div>
                            </div>

                            <div className="essential_info">
                                <div className="title">Chuyên khoa</div>
                                <div className="colon">:</div>
                                <div className="value">Tai - Mũi - Họng</div>
                            </div>

                            <div className="essential_info">
                                <div className="title">Năm kinh nghiệm</div>
                                <div className="colon">:</div>
                                <div className="value">4 năm</div>
                            </div>

                            <div className="essential_info">
                                <div className="title">Ngày khám bệnh</div>
                                <div className="colon">:</div>
                                <div className="value">
                                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                </div>
                            </div>

                            <div className="essential_info">
                                <div className="title">Thời gian</div>
                                <div className="colon">:</div>
                                <div className="value">
                                    <input
                                        type="time"
                                        value={timeBegin}
                                        onChange={(e) => setTimeBegin(e.target.value)}
                                    />{' '}
                                    - <input type="time" value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="health-issue">
                        <div className="health-issue-title">
                            <label htmlFor="health-issue">Vấn đề sức khỏe hiện tại của bạn?</label>
                        </div>
                        <textarea
                            id="health-issue"
                            name="health-issue"
                            type="textarea"
                            value={healthIssue}
                            onChange={(e) => setHealthIssue(e.target.value)}
                        />
                    </div>

                    <div className="btn-modal">
                        <button className="btn-modal-confirm" onClick={handleClick}>
                            Hủy
                        </button>

                        <button className="btn-modal-confirm" onClick={handleClick}>
                            Xác nhận
                        </button>
                    </div>
                </div>
            )}
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
                        Doctor
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h3 className="white-color">Doctor</h3>
            </Container>
            <Container fluid className="user-info mt-5">
                <Row>
                    <Col lg={3} className="profile-left">
                        <div className="profile-container pt-3 pb-3">
                            <div className="patient-avt mt-2">
                                <img src="/assets/images/doctor.jpg" alt="hehe" />
                            </div>
                            <div className="patient-name mt-2 text-center">
                                <h3>Nguyễn Văn A</h3>
                            </div>
                            <div className="patient-id text-center">
                                <strong>Doctor ID: </strong>
                                <span>1900000</span>
                            </div>
                            <div className="patient-loaction mt-2 text-center pb-3">
                                <BsGeoAltFill />
                                <span className="mx-2">Quận 7, Tp.Hồ Chí Minh</span>
                            </div>

                            <div className="patient-phone mt-2 d-flex justify-content-between px-4">
                                <span className="text-semibold">Chuyên khoa: </span>
                                <span className="color-gray">Tai - Mũi - Họng</span>
                            </div>

                            <div className="patient-phone mt-2 d-flex justify-content-between px-4">
                                <span className="text-semibold">Năm kinh nghiệm:</span>
                                <span className="color-gray">4 năm</span>
                            </div>
                            <div className="patient-phone mt-2 d-flex justify-content-between px-4">
                                <span className="text-semibold">Phone: </span>
                                <span className="color-gray">0988777999</span>
                            </div>
                            <div className="patient-age mt-2 d-flex justify-content-between px-4">
                                <span className="text-semibold">Age: </span>
                                <span className="color-gray">30</span>
                            </div>
                        </div>

                        <div className="css_center">
                            <button className="btn_book " onClick={handleClick}>
                                Book
                            </button>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <Box sx={{ width: '100%', fontSize: 15 }}>
                            <StyledTabs
                                value={value}
                                onChange={handleChange}
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                                variant="fullWidth"
                            >
                                <StyledTab value={0} label="Lịch làm việc" {...a11yProps(0)} />
                              
                                <StyledTab value={2} label="Feedback" {...a11yProps(2)} />
                            </StyledTabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <ListAppointment />
                        </TabPanel>
                      
                        <TabPanel value={value} index={2}>
                            <Feedback />
                        </TabPanel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Appointment
