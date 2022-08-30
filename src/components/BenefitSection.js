import ThemeProvider from "react-bootstrap/ThemeProvider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import qualified from "../assets/images/qualified.png";
import locate from "../assets/images/locate.png";
import thumb from "../assets/images/thumb.png";
import ilustrate from "../assets/images/ilustrate1.png";
import picagent from "../assets/images/pic-agent.png";
import "../style/BenefitSection.css";

function BenefitSection() {
  return (
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
      <div className="section d-none d-sm-none d-md-none d-lg-block">
        <div className="rectangle d-flex">
          <Row className="row align-items-center h-50 m-1 m-lg-5 m-md-5">
            <Col className="col-md-6 h-50 p-0">
              <div className="text">
                <h2>Best Benefit With</h2>
                <h2 className="sub">Security Department</h2>
              </div>
            </Col>
            <Col className="col-md-6 ps-0 h-50 p-0">
              <p className="text text-end text-white">Beberapa keuntungan yang akan kalian dapatkan, serta jaminan yang aman dan terpercaya. Kami selalu memberikan layanan yang terbaik.</p>
            </Col>
            <Col className="col-md-4 h-25 pe-4 p-0">
              <div className="text text-content">
                <img src={qualified} alt="qualified" height="70px" className="mt-5 mb-4" />
                <h5>Qualified Personel</h5>
                <p>Dengan personil kita yang sudah terkualifikasi secara fisik, mental & kejiwaan demi menjaga kualitas.</p>
                <a href="#" className="text-decoration-none">
                  Baca selengkapnya...
                </a>
              </div>
            </Col>
            <Col className="col-md-4 h-25 pe-4 p-0">
              <div className="text text-content">
                <img src={locate} alt="locate" height="70px" className="mt-5 mb-4" />
                <h5>Available Everywhere</h5>
                <p>Tersedia di berbagai kota kota besar maupun di pelosok daerah. Layanan kami ada dimanapun.</p>
                <a href="#" className="text-decoration-none">
                  Baca selengkapnya...
                </a>
              </div>
            </Col>
            <Col className="col-md-4 h-25 pe-2 p-0">
              <div className="text text-content">
                <img src={thumb} alt="thumb" height="70px" className="mt-5 mb-4" />
                <h5>Best Services</h5>
                <p>Memberi keamanan, keselamatan dan perlindungan yang terbaik serta kenyamanan untuk kalian semua.</p>
                <a href="#" className="text-decoration-none">
                  Baca selengkapnya...
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="ilusSection container d-flex justify-content-center align-items-center">
          <a href="#">
            <img src={ilustrate} alt="ilustrate" height="230px" />
          </a>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default BenefitSection;
