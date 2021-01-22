import { makeStyles } from "@material-ui/core";

const commonStyles = makeStyles({
  root: {
    marginTop: "30%",
    marginLeft: 30,
    marginRight: 30,
  },
  questionArea: {
    color: "white",
    fontSize: 25,
    fontFamily: "Noto Sans KR, sans-serif !important",
  },
  styledbutton: {
    backgroundColor: "rgba(189,195,199,0.7)",
    width: "100%",
    marginTop: 25,
    outline: "none",
    borderRadius: 15,
  },
  buttonArea: {
    marginTop: "20%",
    display: "block",
  },
  buttonText: {
		color: "white",
		fontSize: 20,
		fontFamily: "Noto Sans KR sans-serif !important",
	},
	link: {
		textDecoration: "none",
	},
	boldText: {
		fontWeight: "bold",
  },
});

export default commonStyles;