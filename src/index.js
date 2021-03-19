import React, { useEffect } from "react";
import Data from "./midi.xml";
import ReactDOM from "react-dom";
import { Button, Container } from "./styled";
import useFetch from "use-http";

const BlobDiv = ({ blob: { Name, Url } }) => (
  <Container>
    <h4>{Name}</h4>
    <a href={Url}>{Url}</a>
    <Button>start</Button>
  </Container>
);

const title = "React with Webpack and Babel";
const blobs = Data.EnumerationResults.Blobs[0].Blob;

ReactDOM.render(
  <div>
    {blobs.map((b, i) =>
      b.Url.toString().endsWith(".wav") ? (
        <audio controls key={i} src={b.Url} />
      ) : (
        <BlobDiv key={i} blob={b} />
      )
    )}
  </div>,
  document.getElementById("app")
);
module.hot.accept();
