import { Box, LinearProgress } from "@mui/material";
import "./Desktop1.css";
const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <div className="otp-box-wrapper">
        <div className="otp-box">
          <div className="synergy">SYNERGY</div>
          <div className="verify-e-mail-address-parent">
            <div className="verify-e-mail-address">Verify E-mail address</div>
            <div className="please-enter-the">
              Please enter the OTP we’ve sent to user@gmail.com
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="frame-child" />
            <div className="frame-child" />
            <div className="frame-child" />
          </div>
          <div className="otp-timer">Resend OTP</div>
          <Box className="progresslinear" sx={{ width: 200 }}>
            <LinearProgress color="primary" variant="determinate" value={100} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
