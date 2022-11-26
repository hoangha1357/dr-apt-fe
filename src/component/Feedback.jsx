import * as React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton'

const FeedbackModal = (showModal) => {
    const handleClick = (e) => {
        
    }
    return (
        showModal && (
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
                        value={""}
                        // onChange={(e) => setHealthIssue(e.target.value)}
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
        )
    )
}

function Media(props) {
    const { loading = false } = props

    return (
        <Card sx={{ m: 2 }}>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                        <Avatar
                            alt="Ted talk"
                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                        />
                    )
                }
                action={loading ? null : <IconButton aria-label="settings">{/* <MoreVertIcon /> */}</IconButton>}
                title={
                    loading ? <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} /> : 'Ted'
                }
                subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : '5 hours ago'}
            />
            {/* {loading ? (
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            ) : (
                // <CardMedia
                //     component="img"
                //     height="140"
                //     image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                //     alt="Nicola Sturgeon on a TED talk stage"
                // />
                "But when it comes to other components, you may not want to repeat the width and height. In these instances, you can pass children and it will infer its width and height from them."
            )} */}

            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                ) : (
                    <Typography variant="body2" color="text.secondary" component="p">
                        {
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                    </Typography>
                )}
            </CardContent>
        </Card>
    )
}

const Feedback = () => {
    const handleFeedback = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <button onClick={(e) => handleFeedback(e)}>Write feedback</button>
            <Media />
            <Media />
            <Media />
            <Media />
        </div>
    )
}

export default Feedback
