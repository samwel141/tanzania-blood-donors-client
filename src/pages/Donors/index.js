

// import React from 'react';
// import styled from '@emotion/styled';

// // Styled components for the table
// const Container = styled.div`
//   margin-top: 70px;
//   width: 100%; /* Ensure the table occupies full width */
// `;

// const Table = styled.table`
//   width: 100%; /* Occupy full width */
//   border-collapse: collapse;
// `;

// const TableHeader = styled.thead`
//   background-color: #2196F3;
//   color: white;
//   font-size: 20px;
// `;

// const TableRow = styled.tr`
//   &:hover {
//     background-color: #f2f2f2;
//   }
// `;

// const TableCell = styled.td`
//   padding: 8px;
//   border: 1px solid #ddd;
//   text-align: center; /* Center all content */
//   font-size: 17px;
// `;

// const StatusLabel = styled.span`
//   padding: 8px;
//   border-radius: 4px;
//   font-weight: bold;
//   text-align: center;
//   color: white;

//   ${({ status }) => {
//     switch (status) {
//       case 'Approved':
//         return 'background-color: #ff9800;'; // Orange
//       case 'Rejected':
//         return 'background-color: #4CAF50;'; // Green
//       default:
//         return 'background-color: #2196F3;'; // Blue
//     }
//   }}
// `;

// const Donors = () => {
//   // Dummy data for blood requests
//   const bloodRequests = [
//     {
//       id: 1,
//       patientName: 'John Doe',
//       patientAge: 30,
//       reason: 'Accident',
//       bloodGroup: 'A+',
//       unit: 2,
//       date: '2024-04-20',
//       status: 'Approved'
//     },
//     {
//       id: 2,
//       patientName: 'Jane Smith',
//       patientAge: 25,
//       reason: 'Surgery',
//       bloodGroup: 'B-',
//       unit: 3,
//       date: '2024-04-21',
//       status: 'Rejected'
//     },
//     {
//       id: 3,
//       patientName: 'Alice Johnson',
//       patientAge: 40,
//       reason: 'Illness',
//       bloodGroup: 'O+',
//       unit: 1,
//       date: '2024-04-22',
//       status: 'Pending'
//     }
//   ];

//   return (
//     <Container>
//       {/* <h4 style={{ textAlign: 'center' }}>My Blood Request</h4> */}
//       <h1 style={{ textAlign: 'left', marginLeft: '20px'}}>All Donors</h1>

//       <Table>
//         <TableHeader>
//           <tr>
//             <th>Patient Name</th>
//             <th>Patient Age</th>
//             <th>Reason</th>
//             <th>Blood Group</th>
//             <th>Unit</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </TableHeader>
//         <tbody>
//           {bloodRequests.map(request => (
//             <TableRow key={request.id}>
//               <TableCell>{request.patientName}</TableCell>
//               <TableCell>{request.patientAge}</TableCell>
//               <TableCell>{request.reason}</TableCell>
//               <TableCell>{request.bloodGroup}</TableCell>
//               <TableCell>{request.unit}</TableCell>
//               <TableCell>{request.date}</TableCell>
//               <TableCell>
//                 <StatusLabel status={request.status}>
//                   {request.status}
//                 </StatusLabel>
//               </TableCell>
//             </TableRow>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default Donors;


import React from 'react';
import styled from '@emotion/styled';

// Styled components for the table
const Container = styled.div`
  margin-top: 70px;
  width: 100%; /* Ensure the table occupies full width */
`;

const Table = styled.table`
  width: 100%; /* Occupy full width */
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #2196F3;
  color: white;
  font-size: 20px;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center; /* Center all content */
  font-size: 17px;
`;

const StatusLabel = styled.span`
  padding: 8px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  color: white;

  ${({ status }) => {
    switch (status) {
      case 'Approved':
        return 'background-color: #ff9800;'; // Orange
      case 'Rejected':
        return 'background-color: #4CAF50;'; // Green
      default:
        return 'background-color: #2196F3;'; // Blue
    }
  }}
`;

const Donors = () => {
  // Dummy data for blood requests
  const donorsData = [
    {
      "firstname": "John",
      "middlename": "Paul",
      "sirname": "Smith",
      "email": "john.smith@example.com",
      "password": "joh123",
      "phone": "1234567890",
      "sex": "male",
      "region": "New York",
      "dateOfBirth": "06/14/1985"
    },
    {
      "firstname": "Emily",
      "middlename": "James",
      "sirname": "Johnson",
      "email": "emily.johnson@example.com",
      "password": "emily123",
      "phone": "9876543210",
      "sex": "female",
      "region": "Los Angeles",
      "dateOfBirth": "03/22/1990"
    },
    {
      "firstname": "David",
      "middlename": "Robert",
      "sirname": "Williams",
      "email": "david.williams@example.com",
      "password": "david123",
      "phone": "5551234567",
      "sex": "male",
      "region": "Chicago",
      "dateOfBirth": "09/05/1982"
    },
    {
      "firstname": "Sarah",
      "middlename": "Michael",
      "sirname": "Brown",
      "email": "sarah.brown@example.com",
      "password": "sarah123",
      "phone": "4449876543",
      "sex": "female",
      "region": "Houston",
      "dateOfBirth": "11/30/1978"
    },
    {
      "firstname": "Daniel",
      "middlename": "Christopher",
      "sirname": "Jones",
      "email": "daniel.jones@example.com",
      "password": "daniel123",
      "phone": "3215554321",
      "sex": "male",
      "region": "Phoenix",
      "dateOfBirth": "08/17/1989"
    },
    {
      "firstname": "Sophia",
      "middlename": "David",
      "sirname": "Garcia",
      "email": "sophia.garcia@example.com",
      "password": "sophia123",
      "phone": "7893216540",
      "sex": "female",
      "region": "Philadelphia",
      "dateOfBirth": "05/10/1983"
    },
    {
      "firstname": "Michael",
      "middlename": "Matthew",
      "sirname": "Rodriguez",
      "email": "michael.rodriguez@example.com",
      "password": "michael123",
      "phone": "2346789012",
      "sex": "male",
      "region": "San Antonio",
      "dateOfBirth": "02/28/1975"
    },
    {
      "firstname": "Emma",
      "middlename": "Joseph",
      "sirname": "Martinez",
      "email": "emma.martinez@example.com",
      "password": "emma123",
      "phone": "8765432109",
      "sex": "female",
      "region": "San Diego",
      "dateOfBirth": "07/03/1995"
    },
    {
      "firstname": "Christopher",
      "middlename": "Andrew",
      "sirname": "Hernandez",
      "email": "christopher.hernandez@example.com",
      "password": "chris123",
      "phone": "8901234567",
      "sex": "male",
      "region": "Dallas",
      "dateOfBirth": "04/15/1986"
    },
    {
      "firstname": "Ava",
      "middlename": "Daniel",
      "sirname": "Lopez",
      "email": "ava.lopez@example.com",
      "password": "ava123",
      "phone": "4567890123",
      "sex": "female",
      "region": "San Jose",
      "dateOfBirth": "12/19/1980"
    },
    {
      "firstname": "Matthew",
      "middlename": "Anthony",
      "sirname": "Gonzalez",
      "email": "matthew.gonzalez@example.com",
      "password": "matt123",
      "phone": "6789012345",
      "sex": "male",
      "region": "Austin",
      "dateOfBirth": "10/25/1992"
    },
    {
      "firstname": "Olivia",
      "middlename": "Thomas",
      "sirname": "Wilson",
      "email": "olivia.wilson@example.com",
      "password": "olivia123",
      "phone": "9012345678",
      "sex": "female",
      "region": "Jacksonville",
      "dateOfBirth": "01/08/1987"
    },
    {
      "firstname": "James",
      "middlename": "Jason",
      "sirname": "Anderson",
      "email": "james.anderson@example.com",
      "password": "james123",
      "phone": "3456789012",
      "sex": "male",
      "region": "San Francisco",
      "dateOfBirth": "09/13/1984"
    },
    {
      "firstname": "Isabella",
      "middlename": "David",
      "sirname": "Taylor",
      "email": "isabella.taylor@example.com",
      "password": "isabella123",
      "phone": "6789012345",
      "sex": "female",
      "region": "Indianapolis",
      "dateOfBirth": "03/18/1998"
    },
    {
      "firstname": "Liam",
      "middlename": "Kevin",
      "sirname": "Thomas",
      "email": "liam.thomas@example.com",
      "password": "liam123",
      "phone": "2345678901",
      "sex": "male",
      "region": "Columbus",
      "dateOfBirth": "11/26/1981"
    },
    {
      "firstname": "Charlotte",
      "middlename": "James",
      "sirname": "Moore",
      "email": "charlotte.moore@example.com",
      "password": "charlotte123",
      "phone": "5678901234",
      "sex": "female",
      "region": "Fort Worth",
      "dateOfBirth": "07/21/1994"
    },
    {
      "firstname": "Ethan",
      "middlename": "Andrew",
      "sirname": "Jackson",
      "email": "ethan.jackson@example.com",
      "password": "ethan123",
      "phone": "8901234567",
      "sex": "male",
      "region": "Charlotte",
      "dateOfBirth": "05/04/1980"
    },
    {
      "firstname": "Amelia",
      "middlename": "Joseph",
      "sirname": "White",
      "email": "amelia.white@example.com",
      "password": "amelia123",
      "phone": "1234567890",
      "sex": "female",
      "region": "Seattle",
      "dateOfBirth": "10/15/1976"
    },
    {
      "firstname": "Alexander",
      "middlename": "Daniel",
      "sirname": "Harris",
      "email": "alexander.harris@example.com",
      "password": "alex123",
      "phone": "4567890123",
      "sex": "male",
      "region": "Denver",
      "dateOfBirth": "02/09/1991"
    },
    {
      "firstname": "Mia",
      "middlename": "Matthew",
      "sirname": "Martinez",
      "email": "mia.martinez@example.com",
      "password": "mia123",
      "phone": "7890123456",
      "sex": "female",
      "region": "Portland",
      "dateOfBirth": "12/03/1988"
    },
    {
      "firstname": "William",
      "middlename": "Michael",
      "sirname": "Young",
      "email": "william.young@example.com",
      "password": "william123",
      "phone": "9012345678",
      "sex": "male",
      "region": "Las Vegas",
      "dateOfBirth": "08/27/1979"
    }
  ]
  
  return (
    <Container>
      {/* <h4 style={{ textAlign: 'center' }}>My Blood Request</h4> */}
      <h1 style={{ textAlign: 'left', marginLeft: '20px'}}>All Donors</h1>

      <Table>
        <TableHeader>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Sex</th>
            <th>Region</th>
            <th>Date of Birth</th>
          </tr>
        </TableHeader>
        <tbody>
          {donorsData.map((donor, index) => (
            <TableRow key={index}>
              <TableCell>{donor.firstname}</TableCell>
              <TableCell>{donor.middlename}</TableCell>
              <TableCell>{donor.sirname}</TableCell>
              <TableCell>{donor.email}</TableCell>
              <TableCell>{donor.phone}</TableCell>
              <TableCell>{donor.sex}</TableCell>
              <TableCell>{donor.region}</TableCell>
              <TableCell>{donor.dateOfBirth}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Donors;
