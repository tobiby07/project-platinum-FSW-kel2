import Navbar from "./layouts/Header/component/Navbar";
import Footer from "./layouts/footer/Footer";
import { CgDanger } from "react-icons/cg";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <>
  <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
              <span className="display-1 fw-bold">4</span>
              <CgDanger size={100} color="red"/>
              <span className="display-1 fw-bold bsb-flip-h">4</span>
            </h2>
            <h3 className="h2 mb-2">Oops! You're lost.</h3>
            <p className="mb-5">The page you are looking for was not found.</p>
            <a
              className="btn bsb-btn-5xl btn-danger rounded-pill px-5 fs-6 m-0"
              href="/"
              role="button"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
