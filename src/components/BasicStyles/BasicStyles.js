import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
  },
  heightFluid: {
    height: "100%",
  },
  boxSection: {
    marginBottom: "6vh !important",
    paddingTop: "9vh",
  },
  root: {
    maxWidth: 345,
  },

  cardItem: {
    textTransform: "uppercase",
    fontWeight: "700",
  },
  zeroRadius: {
    borderRadius: "0 !important",
  },
  my4: {
    marginBottom: "1.5rem",
    marginTop: "1.5rem",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  pt4: {
    paddingTop: "1.5rem",
  },
  marginStep: {
    marginBottom: "4.5rem",
  },
  chatImg: {
    height: "100px",
  },
  step: {
    display: "flex",
    width: "100%",
    border: "7px solid blue",
    height: "auto",
    borderRadius: "50px",
    padding: "15px 20px",
    alignItems: "center",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  mb4: {
    marginBottom: "1.5rem",
  },
  mt4: {
    marginTop: "1.5rem",
  },
  mt100: {
    marginTop: "100px",
  },
  widthFluid: {
    width: "100%",
  },
  noPadding: {
    padding: "0",
  },
  contactUs: {
    color: "white !important",
    backgroundColor: "#343a40!important",
  },
  contactUsContainerPadding: {
    padding: "20px 30px",
  },
  contactUsFormPadding: {
    paddingTop: "30px",
    paddingBottom: "30px",
  },
  contacts: {
    width: "100%",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
  },
  bold: {
    fontWeight: "600",
  },
}));

export default useStyles;