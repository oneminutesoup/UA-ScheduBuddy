import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";

import ControlContainer from "./ControlContainer";
import ScheduleContainer from "./ScheduleContainer";

let API_URL = process.env.REACT_APP_API_URL;

const Main = () => {
  const [terms, setTerms] = useState([]);
  const [b64images, setB64images] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/api/v1/terms`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTerms(data.objects);
      });
  }, []);

  return (
    <Box mt={(5, 5)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ControlContainer
            setB64images={setB64images}
            root_url={API_URL}
            terms={terms}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <ScheduleContainer b64images={b64images} root_url={API_URL} terms={terms} />
        </Grid>
        <Grid item xs={12} md={8}></Grid>
      </Grid>
    </Box>
  );
};

export default Main;
