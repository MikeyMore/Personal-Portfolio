import React from 'react';
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import '../styles/Resume.css';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = 'https://raw.githubusercontent.com/MikeyMore/Personal-Portfolio/main/master/MichaelMorenoResume.pdf';

export default function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(window.innerWidth); 
    }, []);

  return (
    <div>
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.1} />
          </Document>
        </Row>
    </div>
  )
}

