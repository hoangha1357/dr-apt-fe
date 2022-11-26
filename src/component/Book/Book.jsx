import React from 'react'
import { useState } from 'react'
import './Book.css'




const Book = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(!showModal);
    }

    const [date, setDate] = useState('');
    const [timeBegin, setTimeBegin] = useState('');
    const [timeEnd, setTimeEnd] = useState('');

    const [healthIssue, setHealthIssue] = useState('');

    //daycheck, day
    // bcheck, echeck, b, e

    //lọc ngày
    // 1. b<e
    // Đăng ký thất bại! Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc.
    // 2. b,e <=bcheck && b,e>=echeck
    // Đăng ký thất bại! Đã có người đặt lịch hẹn thời gian trên.





    console.log("date ", date);
    console.log("timeBegin ", timeBegin);
    console.log("timeEnd ", timeEnd);
    console.log("healthIssue ", healthIssue);
    return (
        <div className="appointment">
            {showModal && <div className="modal_appointment">
                <h2 className='modal_title'>ĐẶT LỊCH KHÁM</h2>
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
                            <div className="value"><input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
                        </div>

                        <div className="essential_info">
                            <div className="title">Thời gian</div>
                            <div className="colon">:</div>
                            <div className="value"><input type="time" value={timeBegin} onChange={(e) => setTimeBegin(e.target.value)} /> - <input type="time" value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)} /></div>
                        </div>
                    </div>


                </div>
                <div className="health-issue">
                    <div className="health-issue-title"><label htmlFor="health-issue">Vấn đề sức khỏe hiện tại của bạn?</label></div>
                    <textarea id="health-issue" name="health-issue" type="textarea" value={healthIssue} onChange={(e) => setHealthIssue(e.target.value)} />

                </div>

                <div className="btn-modal">
                    <button className='btn-modal-confirm' onClick={handleClick}>Hủy</button>

                    <button className='btn-modal-confirm' onClick={handleClick}>Xác nhận</button>

                </div>
            </div>}
            <button className='btn_book' onClick={handleClick}>Book</button>
        </div>
    )
}

export default Book;