import ThemeProvider from "react-bootstrap/ThemeProvider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import qualified from "../assets/images/qualified.png";
import locate from "../assets/images/locate.png";
import thumb from "../assets/images/thumb.png";
import ilustrate from "../assets/images/ilustrate2.png";
import "../style/BenefitSectionMobile.css";

function BenefitSectionMobile() {
  return (
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
      <div className="sectionMobile d-block d-sm-block d-md-none d-lg-none">
        <div className="rectangle text-center px-3">
          <div className="text pt-5">
            <h2>Best Benefit With</h2>
            <h2 className="sub">Security Department</h2>
          </div>
          <div>
            <p className="text text-head text-white">Beberapa keuntungan yang akan kalian dapatkan, serta jaminan yang aman dan terpercaya. Kami selalu memberikan layanan yang terbaik.</p>
          </div>
          <div className="text text-content">
            <img src={qualified} alt="qualified" height="60px" className="mt-5 mb-4" />
            <h5>Qualified Personel</h5>
            <p>Dengan personil kita yang sudah terkualifikasi secara fisik, mental & kejiwaan demi menjaga kualitas.</p>
            <a href="#" className="text-decoration-none">
              Baca selengkapnya...
            </a>
          </div>
          <div className="text text-content">
            <img src={locate} alt="locate" height="60px" className="mt-5 mb-4" />
            <h5>Available Everywhere</h5>
            <p>Tersedia di berbagai kota kota besar maupun di pelosok daerah. Layanan kami ada dimanapun anda berada.</p>
            <a href="#" className="text-decoration-none">
              Baca selengkapnya...
            </a>
          </div>
          <div className="text text-content pb-5">
            <img src={thumb} alt="thumb" height="60px" className="mt-5 mb-4" />
            <h5>Best Services</h5>
            <p>Memberi keamanan, keselamatan dan perlindungan yang terbaik serta kenyamanan untuk kalian semua.</p>
            <a href="#" className="text-decoration-none">
              Baca selengkapnya...
            </a>
          </div>
        </div>
        <div className="ilusSection2 container d-flex justify-content-center align-items-center">
          <a href="#">
            <img src={ilustrate} alt="ilustrate" height="160px" />
          </a>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default BenefitSectionMobile;
