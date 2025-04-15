import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// ✅ Direct path from the public folder
//const pdf = "/Ador_Negash_Resume.pdf";
const pdf = `${window.location.origin}/Ador_Negash_Resume.pdf`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            download="Ador_Negash_Resume.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume d-flex justify-content-center">
          <Document file={pdf}>
            <Page
              pageNumber={1}
              scale={width > 1200 ? 2.0 : width > 786 ? 1.5 : 0.8}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            download="Ador_Negash_Resume.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
