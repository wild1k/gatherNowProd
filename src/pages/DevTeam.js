import React from "react";
import "../index.css";
import ImageRow from "../components/ImageRow";
import CassPhoto from "./../utils/Images/CassHead.jpg";
import EnriquePhoto from "./../utils/Images/EnriqueHead.jpg";
import AnthonyPhoto from "./../utils/Images/AnthonyHead.jpg";
import MikePhoto from "./../utils/Images/Mikeheadshot.jpg";
import HannibalPhoto from "./../utils/Images/HWhead.png";

import "../index";

export default function DevTeam() {
  return (
    <div className="container">
      <ImageRow />
      <h1> The Development Team:</h1>
      <h1>
        <a
          href="https://www.linkedin.com/in/cassandra-chamberlain-875794166/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Cassandra Chamberlain
        </a>
      </h1>
      <img className="headshot" alt="headshot Cassandra" src={CassPhoto} />

      <h1>

        <a   href="https://www.linkedin.com/in/enrique-garcia-30353715a/"

          target="_blank"
          rel="noopener noreferrer">Enrique Garcia</a>
      </h1>

      <img className="headshot" alt="headshot Enrique" src={EnriquePhoto} />

      <h1>

        <a    href="https://github.com/ajper05/"
          target="_blank"
          rel="noopener noreferrer">Anthony Perez</a>
      </h1>

      <img className="headshot" alt="headshot Anthony" src={AnthonyPhoto} />
      <h1>
        <a  href="https://github.com/mlshenk"
          target="_blank"
          rel="noopener noreferrer">Mike Shenk</a>
      </h1>

      <img className="headshot" alt="headshot Mike" src={MikePhoto} />
      <h1>
         <a href="https://www.linkedin.com/in/hannibal-wyman-17068926/"  target="_blank"
          rel="noopener noreferrer">Hannibal Wyman</a>
      </h1>

      <img className="headshot" alt="headshot Hannibal" src={HannibalPhoto} />
    </div>
  );
}
