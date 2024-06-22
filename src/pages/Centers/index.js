


// import React from 'react';
// import styled from '@emotion/styled';

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

// const Centers = () => {
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
//       <h1 style={{ textAlign: 'left', marginLeft: '20px'}}>Blood Centers</h1>

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

// export default Centers;



import React, { useState } from 'react';
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

const Centers = () => {
  const [hospitals, setHospitals] = useState([
    {
      "name": "Grace General Hospital",
      "username": "gracehospital1",
      "password": "gracepass123",
      "address": "123 Main Street",
      "location": "lat 1 lng 1",
      "region": "Kigoma",
      "phone": "0756436587",
      "whatsapp": "https://wa.me/0756436587",
      "instagram": "https://instagram.com/gracehospital",
      "facebook": "https://facebook.com/gracehospital",
      "twitter": "https://twitter.com/gracehospital"
    },
    {
      "name": "Hope Hospital and Clinic",
      "username": "hopehospital2",
      "password": "hopepass123",
      "address": "456 Elm Street",
      "location": "lat 2 lng 2",
      "region": "Arusha",
      "phone": "0756436588",
      "whatsapp": "https://wa.me/0756436588",
      "instagram": "https://instagram.com/hopehospital",
      "facebook": "https://facebook.com/hopehospital",
      "twitter": "https://twitter.com/hopehospital"
    },
    {
      "name": "Sunrise Medical Center",
      "username": "sunrisehospital3",
      "password": "sunrisepass123",
      "address": "789 Oak Street",
      "location": "lat 3 lng 3",
      "region": "Dodoma",
      "phone": "0756436589",
      "whatsapp": "https://wa.me/0756436589",
      "instagram": "https://instagram.com/sunrisehospital",
      "facebook": "https://facebook.com/sunrisehospital",
      "twitter": "https://twitter.com/sunrisehospital"
    },
    {
      "name": "Royal Hospital",
      "username": "royalhospital4",
      "password": "royalpass123",
      "address": "101 Maple Street",
      "location": "lat 4 lng 4",
      "region": "Mbeya",
      "phone": "0756436590",
      "whatsapp": "https://wa.me/0756436590",
      "instagram": "https://instagram.com/royalhospital",
      "facebook": "https://facebook.com/royalhospital",
      "twitter": "https://twitter.com/royalhospital"
    },
    {
      "name": "Unity Healthcare Center",
      "username": "unityhospital5",
      "password": "unitypass123",
      "address": "202 Pine Street",
      "location": "lat 5 lng 5",
      "region": "Mwanza",
      "phone": "0756436591",
      "whatsapp": "https://wa.me/0756436591",
      "instagram": "https://instagram.com/unityhospital",
      "facebook": "https://facebook.com/unityhospital",
      "twitter": "https://twitter.com/unityhospital"
    },
    {
      "name": "Evergreen Medical Clinic",
      "username": "evergreenhospital6",
      "password": "evergreenpass123",
      "address": "303 Cedar Street",
      "location": "lat 6 lng 6",
      "region": "Dar es Salaam",
      "phone": "0756436592",
      "whatsapp": "https://wa.me/0756436592",
      "instagram": "https://instagram.com/evergreenhospital",
      "facebook": "https://facebook.com/evergreenhospital",
      "twitter": "https://twitter.com/evergreenhospital"
    },
    {
      "name": "Miracle Health Center",
      "username": "miraclehospital7",
      "password": "miraclepass123",
      "address": "404 Birch Street",
      "location": "lat 7 lng 7",
      "region": "Tanga",
      "phone": "0756436593",
      "whatsapp": "https://wa.me/0756436593",
      "instagram": "https://instagram.com/miraclehospital",
      "facebook": "https://facebook.com/miraclehospital",
      "twitter": "https://twitter.com/miraclehospital"
    },
    {
      "name": "Golden Gate Medical Center",
      "username": "goldenhospital8",
      "password": "goldenpass123",
      "address": "505 Walnut Street",
      "location": "lat 8 lng 8",
      "region": "Kilimanjaro",
      "phone": "0756436594",
      "whatsapp": "https://wa.me/0756436594",
      "instagram": "https://instagram.com/goldenhospital",
      "facebook": "https://facebook.com/goldenhospital",
      "twitter": "https://twitter.com/goldenhospital"
    },
    {
      "name": "Harmony Health Services",
      "username": "harmonyhospital9",
      "password": "harmonypass123",
      "address": "606 Sycamore Street",
      "location": "lat 9 lng 9",
      "region": "Pwani",
      "phone": "0756436595",
      "whatsapp": "https://wa.me/0756436595",
      "instagram": "https://instagram.com/harmonyhospital",
      "facebook": "https://facebook.com/harmonyhospital",
      "twitter": "https://twitter.com/harmonyhospital"
    },
    {
      "name": "Angel Medical Center",
      "username": "angelhospital10",
      "password": "angelpass123",
      "address": "707 Maple Street",
      "location": "lat 10 lng 10",
      "region": "Morogoro",
      "phone": "0756436596",
      "whatsapp": "https://wa.me/0756436596",
      "instagram": "https://instagram.com/angelhospital",
      "facebook": "https://facebook.com/angelhospital",
      "twitter": "https://twitter.com/angelhospital"
    },
    {
      "name": "Crown Medical Center",
      "username": "crownhospital11",
      "password": "crownpass123",
      "address": "808 Oak Street",
      "location": "lat 11 lng 11",
      "region": "Mara",
      "phone": "0756436597",
      "whatsapp": "https://wa.me/0756436597",
      "instagram": "https://instagram.com/crownhospital",
      "facebook": "https://facebook.com/crownhospital",
      "twitter": "https://twitter.com/crownhospital"
    },
  ]
  );

  return (
    <Container>
      <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Entry</h1>

      <Table>
        <TableHeader>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Address</th>
            <th>Location</th>
            <th>Region</th>
            <th>Phone</th>
            <th>WhatsApp</th>
            {/* <th>Instagram</th>
            <th>Facebook</th>
            <th>Twitter</th> */}
          </tr>
        </TableHeader>
        <tbody>
          {hospitals.map((hospital, index) => (
            <TableRow key={index}>
              <TableCell>{hospital.name}</TableCell>
              <TableCell>{hospital.username}</TableCell>
              <TableCell>{hospital.password}</TableCell>
              <TableCell>{hospital.address}</TableCell>
              <TableCell>{hospital.location}</TableCell>
              <TableCell>{hospital.region}</TableCell>
              <TableCell>{hospital.phone}</TableCell>
              <TableCell>{hospital.whatsapp}</TableCell>
              {/* <TableCell>{hospital.instagram}</TableCell>
              <TableCell>{hospital.facebook}</TableCell>
              <TableCell>{hospital.twitter}</TableCell> */}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Centers;
