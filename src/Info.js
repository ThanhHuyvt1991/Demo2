import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1
  },
  paper: {},
  paddingLeft: {
    paddingLeft: 16
  }
};

class Info extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Grid item xs={12} className={classes.paper}>
            <p>
              Outsourcing to Vietnam has attracted the majority of foreign
              direct investments (FDI) for South-East-Asia during recent years.
              With a working population of 54 million among the 92 million
              citizens and an average of 29 years, Vietnam has developed its
              position for offshore outsourcing. The country is a real success
              story. The use of the Latin alphabet and English as part of the
              curriculum allows easy communication with foreign customers. More
              than 250 thousand students graduate each year with the vast
              majority of information technology. BPO Outsourcing Vietnam
              Advantage
            </p>
            <p>
              DIGI-TEXX is the first 100% FDI Business Process Outsourcing
              company in Vietnam, established in 2003. We offer significant
              advantages for our customers with an extensive portfolio of
              outsourcing services. Data Entry & Document Processing, Contact
              Center & Help Desk, Scanning & Archiving, Image Processing,
              Software Outsourcing & Information Technology (IT).
            </p>
            <p>
              Vietnam has become the world’s top outsourcing location for the
              first time in terms of costs, risks and operational conditions,
              according to the latest research from global real estate adviser
              Cushman & Wakefield (C&W).
            </p>
            <ul className={classes.paddingLeft}>
              <li>
                Low turnover rates of less than 5% compared to 10% to 20% in
                other Asian countries.
              </li>
              <li>
                Attrition rate between 6% to 8%. For IT and outsourcing in
                India, attrition rates regularly climb beyond 20 per cent, and
                the trend is driving wages higher.
              </li>
              <li>
                Modern IT skills in Vietnam equal to and in some cases exceed
                what India offers.
              </li>
              <li>
                English skills in Vietnam are excellent and the use of the Latin
                alphabet allows for easy communication with Western customers.
              </li>
              <li>
                Cost of labour which is approximately 50% lower than that of
                India or China (compared with tier-one cities).
              </li>
              <li>
                Vietnam’s laws and public policies favour business and foreign
                investment and the country are constantly strengthening its
                protection and enforcement of intellectual property rights.
              </li>
              <li>
                Software City Vietnam OutsourcingMoreover, the model of Quang
                Trung Software City (where DIGI-TEXX is located) is now being
                emulated in many Vietnamese regions, offering the perfect
                conditions for efficient and precise work. The world’s biggest
                BPO conference (VNITO 2015 & 2017), held in Ho Chi Minh City,
                shows a highly favourable and supportive environment for IT/BPO
                in Vietnam. We are also happy to announce that we were awarded
                our Medal of 15th Anniversary of companion with Quang Trung
                Software City.
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Info.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Info);
