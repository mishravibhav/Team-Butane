import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Styles from "./work.module.css";

const Head = styled.div`
  margin-top: 50px;
  padding: 5px;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const Line = styled.div`
  align-items: center;
  height: 5px;
  width: 100px;
  background: #f4d13b;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;
const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  text-align: left;
  margin-bottom: 5px;
`;
const Visible = styled.div`
  width: 400px;
  text-align: left;
`;
const Note = styled.div`
  div {
    padding: 20px;
  }
`;
const Layout = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const PricingCard = styled.div`
  width: 400px;
  border: 1px solid black;
  height: 500px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
`;
const PricinHead = styled.div`
  height: 120px;
  justify-content: center;
  background: #303030;
  padding: 20px;
  h4 {
    color: white;
  }
  h5 {
    color: #4fd198;
  }
`;
const BoxContent = styled.div`
  margin-top: 100px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;

  div {
    color: #303030;
  }
`;
const ButtonSubmit = styled.button`
  background: #ff4200;
  color: white;
  width: 250px;
  padding: 10px;
  border: hidden;
  margin-left: 39%;
  margin-right: auto;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 50px;
  align-items: center;
  text-align: center;
`;
class Working extends React.Component {
  constructor(porps) {
    super(porps);
  }
  render() {
    return (
      <div style={{marginTop:"100px"}}>
        <Head>Crowdfunding Basics</Head>
        <Line />
        <Accordion style={{overFlow:"hidden"}}>
          <Box>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  <Visible>What is crowdfunding?</Visible>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Crowdfunding is all about creating a community around your
                  project. A community that funds the project and also helps in
                  spreading the word about your project. It’s all about asking
                  for small amounts of money from many people instead of finding
                  that one or two people to cut you a large cheque.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Box>

          <Box>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="light" eventKey="1">
                  <Visible>What are the advantages of crowdfunding?</Visible>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Crowdfunding is not just about money, it’s about getting
                  social validation. With many people funding your project, you
                  can get access to direct distribution, creative independence
                  since there is no investor, and a community that can support
                  your creative ambitions for life!
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Box>

          <Box>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="light" eventKey="2">
                  <Visible>
                    What do people get in return for funding your project?
                  </Visible>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Wishberry is a rewards-based crowdfunding platform, which
                  means that funders do not get any monetary return (such as
                  profits, equity etc.) for their funding to creative projects.
                  They are asked for small amounts (such as ₹ 500, 5000, 10,000
                  etc.) in return for intangible rewards such as early bird or
                  special access to the project they funded (invite to film
                  premiers), limited edition merchandize, experience in the
                  making of the project etc.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Box>

          <Box>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="light" eventKey="3">
                  <Visible>Who are the people who fund these ideas?</Visible>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Funding usually begins at home! By this we mean, a project
                  creator’s personal contacts such as friends, family,
                  colleagues, alumni, as well as Facebook fans and friends,
                  twitter followers etc. If the project becomes viral and gains
                  popularity, and it connects with a lot of people emotionally,
                  then it has the potential to even get funds from complete
                  strangers on the internet! So, it really depends on the
                  awesomeness of the idea.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Box>

          <Box>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="light" eventKey="4">
                  <Visible>How does crowdfunding work on Wishberry?</Visible>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  If you have a project that you want to raise funds for, you
                  simply have to submit your project on Wishberry by filling a
                  form. If your project gets approved, you get a Wishberry
                  consultant to help you prepare for crowdfunding. Once ready,
                  your campaign goes live and you get up to 45 days to raise
                  your funding goal. If you are unable to raise your funding
                  goal by this time, the money is returned to your funders.
                  Therefore, you get All or Nothing. For more details, visit our
                  Project Rules here.
                  <br /> <br />
                  If you want to fund a project on Wishberry, simply go to
                  Browse Projects, choose the ones you like, select a reward and
                  then go ahead and pay for it, using Credit/debit card or
                  netbanking. You can also order a cash/cheque pick up from your
                  doorstep.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Box>

          <Box>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="light" eventKey="5">
                  Why All or Nothing?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  Sounds scary right? But don’t worry, Wishberry has a 70%
                  success rate despite this policy. What’s interesting is that
                  all other platforms that don’t have this policy suffer from
                  less than 10% success rate. This means you have only a 10%
                  chance of raising funds successfully on platforms that don’t
                  follow the ‘All or Nothing’ policy.
                  <br /> <br />
                  Globally, experts consider ‘All or Nothing’ as the best
                  practice for all crowdfunding platforms. Under this policy, we
                  become your partners. If you lose, we lose too. This policy
                  also brings out trust and transparency in the project that
                  encourages people to fund it without worrying about project
                  delivery.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Box>
        </Accordion>

        <Head>Services Offered</Head>
        <Line />

        <table>
          <thead>
            <tr>
              <th colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal Consultation</td>
              <td>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/2089/2089713.svg"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Social Media Management</td>
              <td>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/2089/2089713.svg"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>PR & Publicity</td>
              <td>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/2089/2089713.svg"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>Email Marketing</td>
              <td>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/2089/2089713.svg"
                  alt=""
                />
              </td>
            </tr>
            <tr className={Styles.bottomLine}>
              <td>Global Payments</td>

              <td>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/2089/2089713.svg"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>

        <Head>Pricing</Head>
        <Line />
        <Layout>
          <PricingCard>
            <PricinHead>
              <h4>CATEGORY 1</h4>
              <h5>Less than 5 lakhs</h5>
            </PricinHead>
            <BoxContent>
              <h4>₹ 3,499 + Taxes</h4>
              <div>Non refundable, One time fee</div>
            </BoxContent>
            <BoxContent>
              <h4> 9.5% Wishberry commission</h4>
              <div>only upon campaign's success</div>
            </BoxContent>
          </PricingCard>

          <PricingCard>
            <PricinHead>
              <h4>CATEGORY 2</h4>
              <h5>More than 5 lakhs</h5>
            </PricinHead>
            <BoxContent>
              <h4>₹ 5,999 + Taxes</h4>
              <div>Non refundable, One time fee</div>
            </BoxContent>
            <BoxContent>
              <h4>9.5% Wishberry commission</h4>
              <div>only upon campaign's success</div>
            </BoxContent>
          </PricingCard>

          <PricingCard>
            <PricinHead>
              <h4>CATEGORY 2</h4>
              <h5>Student Campaigns</h5>
            </PricinHead>
            <BoxContent>
              <h4>₹ 2,499 + Taxes</h4>
              <div>Non refundable, One time fee</div>
            </BoxContent>
            <BoxContent>
              <h4>9.5% Wishberry commission</h4>
              <div>only upon campaign's success</div>
            </BoxContent>
          </PricingCard>
        </Layout>
        <ButtonSubmit>SUBMIT YOUR PROJECT</ButtonSubmit>
        <Box>
          <Note>
            <div>Note</div>
            <div>
              - This information will only be used to evaluate your project to
              see if you fit our selection guidelines.
            </div>
            <div>
              - Payment gateway charges of 2-4% depending on currency and mode
              of payment.
            </div>
            <div>
              - Currency conversion rate on transaction fee, wherever
              applicable.
            </div>
            <div>- GST wherever applicable.</div>
          </Note>
        </Box>
      </div>
    );
  }
}
export default Working;
