import React from 'react'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
import './../assets/css/userinfo.css'
const ProfileEditable = () => {
    return (
        <div>
            <div className="profile_edit">
                <h2>Chỉnh sửa thông tin cá nhân</h2>
                <div className="avatar_edit">
                    <div className="avt-container">
                        <img src="" alt="" />
                    </div>
                    <div className="avt_edit_description"></div>
                    <div className="avt_edit_action"></div>
                </div>
                <form action="" className="infor_edit">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box sx={{ mb: 1, fontWeight: 600, fontSize: '15px', mt: 2 }}>
                                <label htmlFor="">Họ</label>
                            </Box>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                className="form-inputtext"
                                placeholder="Nhập họ: "
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box sx={{ mb: 1, fontWeight: 600, fontSize: '15px', mt: 2 }}>
                                <label htmlFor="">Tên</label>
                            </Box>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                className="form-inputtext"
                                placeholder="Nhập tên:"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box sx={{ mb: 1, fontWeight: 600, fontSize: '15px', mt: 2 }}>
                                <label htmlFor="">Email</label>
                            </Box>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                className="form-inputtext"
                                placeholder="Nhập email:"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box sx={{ mb: 1, fontWeight: 600, fontSize: '15px', mt: 2 }}>
                                <label htmlFor="">Số điện thoại</label>
                            </Box>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                className="form-inputtext"
                                placeholder="Nhập số điện thoại:"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Box sx={{ mb: 1, fontWeight: 600, fontSize: '15px', mt: 2 }}>
                                <label htmlFor="">Giới thiệu</label>
                            </Box>
                            <textarea name="bio" id="bio" rows="4" className="form-inputtext"></textarea>
                        </Grid>
                    </Grid>
                    <Box sx={{ my: 1.5 }}>
                        <button type="submit" className='btn btn-primary'>Lưu thay đổi</button>
                    </Box>
                </form>

                <h2>Xoá tài khoản</h2>
            </div>
        </div>
    )
}

export default ProfileEditable
