
// import React from "react";

// const Home = () => {
//     return (
//         <div style={{marginTop: 70}}>
//             Hello from Home Page
//         </div>
//     )
// }

// export default Home;






// import React from 'react';
// // import styled from 'styled-components';
// import styled from '@emotion/styled';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faSpinner, faCheckCircle, faTint } from '@fortawesome/free-solid-svg-icons';

// // Styled components for cards
// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 20px;
// `;

// const Card = styled.div`
//   background-color: #f8f9fa;
//   padding: 20px;
// `;

// const CardBody = styled.div`
//   // Define styles for card body here
// `;

// const BloodType = styled.div`
//   font-size: 24px;
// `;

// const BloodIcon = styled.i`
//   margin-right: 5px;
// `;

// const BloodUnit = styled.div`
//   font-weight: bold;
// `;

// const BloodStat = styled.div`
//   margin-top: 10px;
// `;

// const BloodStatIcon = styled.div`
//   margin-right: 10px;
// `;

// // Dummy data for variables
// const totaldonors = 1000;
// const totalrequest = 500;
// const totalapprovedrequest = 300;
// const totalbloodunit = 15000;

// // React component for blood stats card
// const BloodStatsCard = ({ icon, title, value }) => {
//   let iconComponent;

//   switch (icon) {
//     case 'fa-users':
//       iconComponent = <FontAwesomeIcon icon={faUsers} />;
//       break;
//     case 'fa-spinner':
//       iconComponent = <FontAwesomeIcon icon={faSpinner} />;
//       break;
//     case 'fa-check-circle':
//       iconComponent = <FontAwesomeIcon icon={faCheckCircle} />;
//       break;
//     case 'fa-tint':
//       iconComponent = <FontAwesomeIcon icon={faTint} />;
//       break;
//     default:
//       iconComponent = null;
//   }

//   return (
//     <Card>
//       <CardBody>
//         <BloodStatIcon>
//           {iconComponent}
//         </BloodStatIcon>
//         <BloodStat>
//           {title} <br />
//           {value}
//         </BloodStat>
//       </CardBody>
//     </Card>
//   );
// };

// // Main React component
// const BloodBank = () => (
//   <Container style={{marginTop: 70}}>
//     {/* Blood stats cards */}
//     <BloodStatsCard icon="fa-users" title="Total Donors" value={totaldonors} />
//     <BloodStatsCard icon="fa-spinner" title="Total Requests" value={totalrequest} />
//     <BloodStatsCard icon="fa-check-circle" title="Approved Requests" value={totalapprovedrequest} />
//     <BloodStatsCard icon="fa-tint" title="Total Blood Unit (in ml)" value={totalbloodunit} />

//     {/* Blood type cards */}
//     {/* Add BloodTypeCard components here */}

//     {/* Additional content */}
//     {/* Add any additional content here */}
//   </Container>
// );

// export default BloodBank;













// import React from 'react';
// import styled from '@emotion/styled';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faSpinner, faCheckCircle, faTint } from '@fortawesome/free-solid-svg-icons';

// // Styled components for cards
// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust min-width as needed */
//   gap: 20px;
// `;

// const Card = styled.div`
//   background-color: #f8f9fa;
//   padding: 20px;
//   height: 150px; /* Set a fixed height */
//   width: 100%; /* Spread through the full width */
// `;

// const CardBody = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const BloodStatIcon = styled.div`
//   margin-right: 10px;
// `;

// // Dummy data for variables
// const totaldonors = 1000;
// const totalrequest = 500;
// const totalapprovedrequest = 300;
// const totalbloodunit = 15000;

// // React component for blood stats card
// const BloodStatsCard = ({ icon, title, value }) => {
//   let iconComponent;
//   let iconColor;

//   switch (icon) {
//     case 'fa-users':
//       iconComponent = <FontAwesomeIcon icon={faUsers} />;
//       break;
//     case 'fa-spinner':
//       iconComponent = <FontAwesomeIcon icon={faSpinner} />;
//       break;
//     case 'fa-check-circle':
//       iconComponent = <FontAwesomeIcon icon={faCheckCircle} />;
//       break;
//     case 'fa-tint':
//       iconComponent = <FontAwesomeIcon icon={faTint} />;
//       break;
//     default:
//       iconComponent = null;
//   }

//   iconColor = 'red'; // Set the icon color

//   return (
//     <Card>
//       <CardBody>
//         <BloodStatIcon>
//           {React.cloneElement(iconComponent, { style: { color: iconColor } })}
//         </BloodStatIcon>
//         {title} <br />
//         {value}
//       </CardBody>
//     </Card>
//   );
// };

// // Main React component
// const BloodBank = () => (
//   <Container style={{ marginTop: 70 }}>
//     {/* Blood stats cards */}
//     <BloodStatsCard icon="fa-users" title="Total Donors" value={totaldonors} />
//     <BloodStatsCard icon="fa-spinner" title="Total Requests" value={totalrequest} />
//     <BloodStatsCard icon="fa-check-circle" title="Approved Requests" value={totalapprovedrequest} />
//     <BloodStatsCard icon="fa-tint" title="Total Blood Unit (in ml)" value={totalbloodunit} />

//     {/* Blood type cards */}
//     {/* Add BloodTypeCard components here */}

//     {/* Additional content */}
//     {/* Add any additional content here */}
//   </Container>
// );

// export default BloodBank;















// import React from 'react';
// import styled from '@emotion/styled';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faSpinner, faCheckCircle, faTint } from '@fortawesome/free-solid-svg-icons';

// // Styled components for cards
// const Container = styled.div`
//   display: flex;
//   gap: 30px;
// `;

// const Card = styled.div`
//   background-color: #f8f9fa;
//   padding: 20px;
//   height: 200px; /* Set a fixed height */
//   width: 200px; /* Spread through the full width */
// `;

// const CardBody = styled.div`
//   display: flex;
//   align-items: center;

// `;

// const BloodStatIcon = styled.div`
//   margin-right: 10px;
// `;

// // Dummy data for variables
// const totaldonors = 1000;
// const totalrequest = 500;
// const totalapprovedrequest = 300;
// const totalbloodunit = 15000;

// // React component for blood stats card
// const BloodStatsCard = ({ icon, title, value }) => {
//   let iconComponent;
//   let iconColor;

//   switch (icon) {
//     case 'fa-users':
//       iconComponent = <FontAwesomeIcon icon={faUsers} />;
//       break;
//     case 'fa-spinner':
//       iconComponent = <FontAwesomeIcon icon={faSpinner} />;
//       break;
//     case 'fa-check-circle':
//       iconComponent = <FontAwesomeIcon icon={faCheckCircle} />;
//       break;
//     case 'fa-tint':
//       iconComponent = <FontAwesomeIcon icon={faTint} />;
//       break;
//     default:
//       iconComponent = null;
//   }

//   iconColor = 'red'; // Set the icon color

//   return (
//     <Card>
//       <CardBody>
//         <BloodStatIcon>
//           {React.cloneElement(iconComponent, { style: { color: iconColor } })}
//         </BloodStatIcon>
//         {title} <br />
//         {value}
//       </CardBody>
//     </Card>
//   );
// };

// // Main React component
// const BloodBank = () => (
//   <Container style={{ marginTop: 90, marginInline: 50  }}>
//     {/* Blood stats cards */}
//     <BloodStatsCard icon="fa-users" title="Total Donors" value={totaldonors} />
//     <BloodStatsCard icon="fa-spinner" title="Total Requests" value={totalrequest} />
//     <BloodStatsCard icon="fa-check-circle" title="Approved Requests" value={totalapprovedrequest} />
//     <BloodStatsCard icon="fa-tint" title="Total Blood Unit (in ml)" value={totalbloodunit} />
//     <BloodStatsCard icon="fa-tint" title="Total Blood Unit (in ml)" value={totalbloodunit} />

//     {/* Blood type cards */}
//     {/* Add BloodTypeCard components here */}

//     {/* Additional content */}
//     {/* Add any additional content here */}
//   </Container>
// );

// export default BloodBank;
















import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faSpinner, faCheckCircle, faTint } from '@fortawesome/free-solid-svg-icons';


// Styled components for cards
const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap; 
`;

const Card = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  height: 200px; /* Set a fixed height */
  width: 200px; /* Spread through the full width */
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
`;

const BloodStatIcon = styled.div`
  margin-right: 10px;
`;

const BloodStatText = styled.div`
  font-family: 'Arial', sans-serif; /* Change font family */
  font-size: 18px; /* Increase font size */
  font-weight: 600; /* Increase font weight */
`;

const BloodStatValue = styled.span`
  color: blue; /* Change color of the numbers */
  font-size: 24px; /* Increase font size of the numbers */
`;

// Dummy data for variables
const totaldonors = 1000;
const totalrequest = 500;
const totalapprovedrequest = 300;
const totalbloodunit = 15000;

// React component for blood stats card
const BloodStatsCard = ({ icon, title, value, theme }) => {
  let iconComponent;
  let iconColor;

  switch (icon) {
    case 'fa-users':
      iconComponent = <FontAwesomeIcon icon={faUsers} size="2x" />; 
      break;
    case 'fa-spinner':
      iconComponent = <FontAwesomeIcon icon={faSpinner} size="2x" />; 
      break;
    case 'fa-check-circle':
      iconComponent = <FontAwesomeIcon icon={faCheckCircle} size="2x" />; 
      break;
    case 'fa-tint':
      iconComponent = <FontAwesomeIcon icon={faTint} size="2x" />; 
      break;
    default:
      iconComponent = null;
  }

//   iconColor = 'rgb(233, 91, 91);';
  iconColor = '#cc574f';

  return (
    <Card>
      <CardBody>
        <BloodStatIcon>
          {React.cloneElement(iconComponent, { style: { color: iconColor } })}
        </BloodStatIcon>
        <BloodStatText>
          {title} <br />
          <BloodStatValue>{value}</BloodStatValue>
        </BloodStatText>
      </CardBody>
    </Card>
  );
};

// Main React component
const Home = () => (
  <div style={{marginTop: 80 }}>
     <h1 style={{ textAlign: 'left', marginLeft: '20px'}}>Home</h1>
  <Container style={{  marginInline: 50 }}>
    {/* Blood stats cards */}
    <BloodStatsCard icon="fa-users" title="Total Donors" value={totaldonors} />
    <BloodStatsCard icon="fa-spinner" title="Total Requests" value={totalrequest} />
    <BloodStatsCard icon="fa-check-circle" title="Approved Requests" value={totalapprovedrequest} />
    <BloodStatsCard icon="fa-tint" title="Total Blood Unit (in ml)" value={totalbloodunit} />
    <BloodStatsCard icon="fa-tint" title="Total Blood Unit (in ml)" value={totalbloodunit} />

    {/* Blood type cards */}
    {/* Add BloodTypeCard components here */}

    {/* Additional content */}
    {/* Add any additional content here */}
  </Container>
  </div>
);

export default Home;
