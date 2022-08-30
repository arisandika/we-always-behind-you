import ThemeProvider from "react-bootstrap/ThemeProvider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/LandingPage.css";
import image from "../assets/images/image1.png";
import CustomButton from "./CustomButton";

function LandingPage() {
  return (
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <Row className="row container-md p-0">
          <Col className="column1 col-md-6 p-0">
            <div className="imageSection3 d-block d-lg-none d-md-none d-sm-block">
              <img src={image} alt="img" className="img3 img-fluid position-absolute align-center" />
            </div>
            <div className="captionSection text-white ms-0 ms-lg-3 ps-0 ps-lg-3 pt-5 pt-lg-3">
              <h6 className="fw-normal">Kami dari departement keamanan.</h6>
              <h1 className="text fw-bold fs-1">Siap melayani segala macam pertolongan yang anda butuhkan!</h1>
              <div className="mt-3">
                <a href="#">
                  <CustomButton />
                </a>
              </div>
            </div>
          </Col>
          <Col className="column2 col-md-6 p-0 d-none d-lg-block d-md-block d-sm-none">
            <div className="imageSection1 d-none d-lg-block d-md-none d-sm-none">
              <img src={image} alt="logo" className="img1 img-fluid position-absolute align-center" />
            </div>
            <div className="imageSection2 d-none d-lg-none d-md-block d-sm-none">
              <img src={image} alt="logo" className="img2 img-fluid position-absolute align-center" />
            </div>
          </Col>
        </Row>
      </div>
    </ThemeProvider>
  );
}

export default LandingPage;
