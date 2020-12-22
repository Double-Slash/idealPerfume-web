import React from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Button)({
  backgroundColor: "rgba(189,195,199,0.7)",
  width: "100%",
  marginTop: 25,
  outline: "none",
  borderRadius: 15,
});

const useStyles = makeStyles({
	root: {
		marginTop: "30%", 
		marginLeft: 30, 
		marginRight: 30,
	},
	questionArea: {
		color: "white",
		fontSize: 25,
		fontFamily: [
			'Noto Sans KR',
			'sans-serif',
		].join(','),
	},
	buttonArea: {
		marginTop: "40%",
		marginLeft: 60,
		marginRight: 60,
		display: "block",
	},
	button: {
		color: "white",
		fontSize: 20,
		fontFamily: [
			'Noto Sans KR',
			'sans-serif',
		].join(','),
	},
	link: {
		textDecoration: "none",
	},
	boldText: {
		fontWeight: "bold",
	},
});

const Page9 = () => {
	const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fade in={true} timeout={3000}>
        <Typography className={classes.questionArea}>
          <span className={classes.boldText}>Q.</span>
          <br></br>
          <span>원하는</span>
					<br></br>
          <span className={classes.boldText}> 향수의 지속 시간</span>
					<span>이 있나요?</span>
        </Typography>
      </Fade>

      <Fade in={true} timeout={5000}>
        <div className={classes.buttonArea}>
          <Link
            to="/page8"
            className={classes.link}
          >
            <StyledButton>
              <Typography className={classes.button}>
                1 ~ 2 시간
              </Typography>
            </StyledButton>
          </Link>

          <Link
            to="/page8"
            className={classes.link}
          >
            <StyledButton>
              <Typography className={classes.button}>
                3 ~ 5 시간
              </Typography>
            </StyledButton>
					</Link>
					<Link
						to="/page8"
						className={classes.link}
					>
						<StyledButton>
							<Typography className={classes.button}>
								5시간 이상
              </Typography>
            </StyledButton>
          </Link>
          <Link
            to="/page8"
            className={classes.link}
          >
            <StyledButton>
              <Typography className={classes.button}>
                없음
              </Typography>
            </StyledButton>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Page9;
