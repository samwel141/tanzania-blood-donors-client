
// // // import React from 'react';
// // // import styled from '@emotion/styled';

// // // // Styled components for the table
// // // const Container = styled.div`
// // //   margin-top: 70px;
// // //   width: 100%; /* Ensure the table occupies full width */
// // // `;

// // // const Table = styled.table`
// // //   width: 100%; /* Occupy full width */
// // //   border-collapse: collapse;
// // // `;

// // // const TableHeader = styled.thead`
// // //   background-color: #2196F3;
// // //   color: white;
// // //   font-size: 20px;
// // // `;

// // // const TableRow = styled.tr`
// // //   &:hover {
// // //     background-color: #f2f2f2;
// // //   }
// // // `;

// // // const TableCell = styled.td`
// // //   padding: 8px;
// // //   border: 1px solid #ddd;
// // //   text-align: center; /* Center all content */
// // //   font-size: 17px;
// // // `;

// // // const StatusLabel = styled.span`
// // //   padding: 8px;
// // //   border-radius: 4px;
// // //   font-weight: bold;
// // //   text-align: center;
// // //   color: white;

// // //   ${({ status }) => {
// // //     switch (status) {
// // //       case 'Approved':
// // //         return 'background-color: #ff9800;'; // Orange
// // //       case 'Rejected':
// // //         return 'background-color: #4CAF50;'; // Green
// // //       default:
// // //         return 'background-color: #2196F3;'; // Blue
// // //     }
// // //   }}
// // // `;

// // // const BloodEntry = () => {
// // //   // Dummy data for blood requests
// // //   const bloodRequests = [
// // //     {
// // //       id: 1,
// // //       patientName: 'John Doe',
// // //       patientAge: 30,
// // //       reason: 'Accident',
// // //       bloodGroup: 'A+',
// // //       unit: 2,
// // //       date: '2024-04-20',
// // //       status: 'Approved'
// // //     },
// // //     {
// // //       id: 2,
// // //       patientName: 'Jane Smith',
// // //       patientAge: 25,
// // //       reason: 'Surgery',
// // //       bloodGroup: 'B-',
// // //       unit: 3,
// // //       date: '2024-04-21',
// // //       status: 'Rejected'
// // //     },
// // //     {
// // //       id: 3,
// // //       patientName: 'Alice Johnson',
// // //       patientAge: 40,
// // //       reason: 'Illness',
// // //       bloodGroup: 'O+',
// // //       unit: 1,
// // //       date: '2024-04-22',
// // //       status: 'Pending'
// // //     }
// // //   ];

// // //   return (
// // //     <Container>
// // //       {/* <h4 style={{ textAlign: 'center' }}>My Blood Request</h4> */}
// // //       <h1 style={{ textAlign: 'left', marginLeft: '20px'}}>Blood Entry</h1>

// // //       <Table>
// // //         <TableHeader>
// // //           <tr>
// // //             <th>Patient Name</th>
// // //             <th>Patient Age</th>
// // //             <th>Reason</th>
// // //             <th>Blood Group</th>
// // //             <th>Unit</th>
// // //             <th>Date</th>
// // //             <th>Status</th>
// // //           </tr>
// // //         </TableHeader>
// // //         <tbody>
// // //           {bloodRequests.map(request => (
// // //             <TableRow key={request.id}>
// // //               <TableCell>{request.patientName}</TableCell>
// // //               <TableCell>{request.patientAge}</TableCell>
// // //               <TableCell>{request.reason}</TableCell>
// // //               <TableCell>{request.bloodGroup}</TableCell>
// // //               <TableCell>{request.unit}</TableCell>
// // //               <TableCell>{request.date}</TableCell>
// // //               <TableCell>
// // //                 <StatusLabel status={request.status}>
// // //                   {request.status}
// // //                 </StatusLabel>
// // //               </TableCell>
// // //             </TableRow>
// // //           ))}
// // //         </tbody>
// // //       </Table>
// // //     </Container>
// // //   );
// // // };

// // // export default BloodEntry;

















// // import React, { useState } from 'react';
// // import styled from '@emotion/styled';

// // // Styled components for the table
// // const Container = styled.div`
// //   margin-top: 70px;
// //   width: 100%; /* Ensure the table occupies full width */
// // `;

// // const Table = styled.table`
// //   width: 100%; /* Occupy full width */
// //   border-collapse: collapse;
// // `;

// // const TableHeader = styled.thead`
// //   background-color: #2196F3;
// //   color: white;
// //   font-size: 20px;
// // `;

// // const TableRow = styled.tr`
// //   &:hover {
// //     background-color: #f2f2f2;
// //   }
// // `;

// // const TableCell = styled.td`
// //   padding: 8px;
// //   border: 1px solid #ddd;
// //   text-align: center; /* Center all content */
// //   font-size: 17px;
// // `;

// // const StatusLabel = styled.span`
// //   padding: 8px;
// //   border-radius: 4px;
// //   font-weight: bold;
// //   text-align: center;
// //   color: white;

// //   ${({ status }) => {
// //     switch (status) {
// //       case 'Approved':
// //         return 'background-color: #ff9800;'; // Orange
// //       case 'Rejected':
// //         return 'background-color: #4CAF50;'; // Green
// //       default:
// //         return 'background-color: #2196F3;'; // Blue
// //     }
// //   }}
// // `;

// // const ActionButton = styled.button`
// //   padding: 5px 10px;
// //   margin: 5px;
// //   border: none;
// //   border-radius: 4px;
// //   cursor: pointer;

// //   ${({ type }) => {
// //     switch (type) {
// //       case 'approve':
// //         return 'background-color: #4CAF50; color: white;'; // Green
// //       case 'disapprove':
// //         return 'background-color: #f44336; color: white;'; // Red
// //       default:
// //         return '';
// //     }
// //   }}
// // `;

// // const BloodEntry = () => {
// //   const [requests, setRequests] = useState([
// //     {
// //       id: 1,
// //       patientName: 'John Doe',
// //       patientAge: 30,
// //       reason: 'Accident',
// //       bloodGroup: 'A+',
// //       unit: 2,
// //       date: '2024-04-20',
// //       status: 'Pending'
// //     },
// //     {
// //       id: 2,
// //       patientName: 'Jane Smith',
// //       patientAge: 25,
// //       reason: 'Surgery',
// //       bloodGroup: 'B-',
// //       unit: 3,
// //       date: '2024-04-21',
// //       status: 'Pending'
// //     },
// //     {
// //       id: 3,
// //       patientName: 'Alice Johnson',
// //       patientAge: 40,
// //       reason: 'Illness',
// //       bloodGroup: 'O+',
// //       unit: 1,
// //       date: '2024-04-22',
// //       status: 'Pending'
// //     }
// //   ]);

// //   const handleApprove = id => {
// //     const updatedRequests = requests.map(request => {
// //       if (request.id === id) {
// //         return { ...request, status: 'Approved' };
// //       }
// //       return request;
// //     });
// //     setRequests(updatedRequests);
// //   };

// //   const handleDisapprove = id => {
// //     const updatedRequests = requests.map(request => {
// //       if (request.id === id) {
// //         return { ...request, status: 'Pending' };
// //       }
// //       return request;
// //     });
// //     setRequests(updatedRequests);
// //   };

// //   return (
// //     <Container>
// //       <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Entry</h1>

// //       <Table>
// //         <TableHeader>
// //           <tr>
// //             <th>Patient Name</th>
// //             <th>Patient Age</th>
// //             <th>Reason</th>
// //             <th>Blood Group</th>
// //             <th>Unit</th>
// //             <th>Date</th>
// //             <th>Status</th>
// //             <th>Actions</th> {/* New column for Actions */}
// //           </tr>
// //         </TableHeader>
// //         <tbody>
// //           {requests.map(request => (
// //             <TableRow key={request.id}>
// //               <TableCell>{request.patientName}</TableCell>
// //               <TableCell>{request.patientAge}</TableCell>
// //               <TableCell>{request.reason}</TableCell>
// //               <TableCell>{request.bloodGroup}</TableCell>
// //               <TableCell>{request.unit}</TableCell>
// //               <TableCell>{request.date}</TableCell>
// //               <TableCell>
// //                 <StatusLabel status={request.status}>
// //                   {request.status}
// //                 </StatusLabel>
// //               </TableCell>
// //               <TableCell>
// //                 {request.status === 'Pending' && (
// //                   <>
// //                     <ActionButton
// //                       type="approve"
// //                       onClick={() => handleApprove(request.id)}
// //                     >
// //                       Approve
// //                     </ActionButton>
// //                   </>
// //                 )}
// //                 {request.status === 'Approved' && (
// //                   <>
// //                     <ActionButton
// //                       type="disapprove"
// //                       onClick={() => handleDisapprove(request.id)}
// //                     >
// //                       Disapprove
// //                     </ActionButton>
// //                   </>
// //                 )}
// //               </TableCell>
// //             </TableRow>
// //           ))}
// //         </tbody>
// //       </Table>
// //     </Container>
// //   );
// // };

// // export default BloodEntry;







// import React, { useState } from 'react';
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
//       case 'approved':
//         return 'background-color: #ff9800;'; // Orange
//       case 'pending':
//         return 'background-color: #2196F3;'; // Blue
//       default:
//         return 'background-color: #4CAF50;'; // Green
//     }
//   }}
// `;

// const BloodEntry = () => {
//   const [requests, setRequests] = useState([
//     {
//       "id": "35263278238728372",
//       "center": "Red Cross",
//       "units": 2,
//       "date": "2024-05-01",
//       "status": "pending"
//     },
//     {
//       "id": "35263278238728373",
//       "center": "Blood Bank",
//       "units": 3,
//       "date": "2024-05-02",
//       "status": "pending"
//     },
//     {
//       "id": "35263278238728374",
//       "center": "Healthcare Center",
//       "units": 1,
//       "date": "2024-05-03",
//       "status": "pending"
//     },
//     {
//       "id": "35263278238728375",
//       "center": "City Hospital",
//       "units": 4,
//       "date": "2024-05-04",
//       "status": "pending"
//     },
//     {
//       "id": "35263278238728376",
//       "center": "Emergency Care",
//       "units": 2,
//       "date": "2024-05-05",
//       "status": "pending"
//     },
//     {
//       "id": "35263278238728377",
//       "center": "Community Clinic",
//       "units": 3,
//       "date": "2024-05-06",
//       "status": "pending"
//     },
//     {
//       "id": "35263278238728378",
//       "center": "Medical Center",
//       "units": 2,
//       "date": "2024-05-07",
//       "status": "pending"
//     },
//     {
//       "id": "35263278238728379",
//       "center": "Health Center",
//       "units": 3,
//       "date": "2024-05-08",
//       "status": "pending"
//     },
//     {
//       "id": "35263278238728380",
//       "center": "Emergency Room",
//       "units": 1,
//       "date": "2024-05-09",
//       "status": "pending"
//     },
//     {
//       "id": "35263278238728381",
//       "center": "Urgent Care",
//       "units": 2,
//       "date": "2024-05-10",
//       "status": "pending"
//     }
//   ]
//   );

//   const handleApprove = id => {
//     const updatedRequests = requests.map(request => {
//       if (request.id === id) {
//         return { ...request, status: 'approved' };
//       }
//       return request;
//     });
//     setRequests(updatedRequests);
//   };

//   return (
//     <Container>
//       <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Entries</h1>

//       <Table>
//         <TableHeader>
//           <tr>
//             <th>id</th>
//             <th>Center</th>
//             <th>Units</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </TableHeader>
//         <tbody>
//           {requests.map(request => (
//             <TableRow key={request.id}>
//               <TableCell>{request.id}</TableCell>
//               <TableCell>{request.center}</TableCell>
//               <TableCell>{request.units}</TableCell>
//               <TableCell>{request.date}</TableCell>
//               <TableCell>
//                 <StatusLabel status={request.status}>
//                   {request.status}
//                 </StatusLabel>
//               </TableCell>
//               <TableCell>
//                 {request.status === 'pending' && (
//                   <button onClick={() => handleApprove(request.id)}>
//                     Approve
//                   </button>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default BloodEntry;














import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getBloodSubmits } from '../../api/blood_requests';

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
    cursor: pointer; /* Change cursor on hover */
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center; /* Center all content */
  font-size: 17px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%; /* Adjust modal width */
  max-width: 600px; /* Set maximum width for responsiveness */
  max-height: 80%; /* Set maximum height */
  overflow-y: auto; /* Make content scrollable */
  text-align: center;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const CloseModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const ApproveButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const SeeMoreLink = styled.a`
  display: block;
  margin-top: 20px;
  color: #2196F3;
  cursor: pointer;
  text-decoration: underline;
`;

const BloodEntry = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getBloodSubmits();
        setRequests(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const openModal = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRequest(null);
    setIsModalOpen(false);
    setShowMore(false);
  };

  const handleApprove = () => {
    // Handle the approve action here
    console.log('Approved:', selectedRequest);
  };

  return (
    <Container>
        <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Submits - {requests.length}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data: {error.message}</p>}
      {!loading && !error && (

        
        <Table>
          <TableHeader>
            <tr>
              <th>ID</th>
              <th>Center ID</th>
              <th>Facility Sending Sample</th>
              <th>Center</th>
              <th>Hub</th>
              <th>Sender Name</th>
              <th>Dispatch Date</th>
              {/* <th>Actions</th> */}
            </tr>
          </TableHeader>
          <tbody>
            {requests.map((request) => (
              <TableRow key={request._id} onClick={() => openModal(request)}>
                <TableCell>{request._id}</TableCell>
                <TableCell>{request.center_id}</TableCell>
                <TableCell>{request.facility_sending_sample}</TableCell>
                <TableCell>{request.center}</TableCell>
                <TableCell>{request.hub}</TableCell>
                <TableCell>{request.sender_name}</TableCell>
                <TableCell>{request.dispatch_date}</TableCell>
                {/* <TableCell>
                  <SeeMoreLink onClick={(e) => { e.stopPropagation(); openModal(request); }}>See more</SeeMoreLink>
                </TableCell> */}
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
            <h2>Blood Submit Details</h2>
            {selectedRequest && (
              <>
                <p><strong>ID:</strong> {selectedRequest._id}</p>
                <p><strong>Center ID:</strong> {selectedRequest.center_id}</p>
                <p><strong>Facility Sending Sample:</strong> {selectedRequest.facility_sending_sample}</p>
                <p><strong>Center:</strong> {selectedRequest.center}</p>
                <p><strong>Hub:</strong> {selectedRequest.hub}</p>
                <p><strong>Sender Name:</strong> {selectedRequest.sender_name}</p>
                <p><strong>Dispatch Date:</strong> {selectedRequest.dispatch_date}</p>
               <div style={{ display: 'flex', justifyContent: 'space-around'}}>
               <ApproveButton onClick={handleApprove}>Approve</ApproveButton>
                <CloseModalButton onClick={closeModal}>Close</CloseModalButton>
               </div>

                {!showMore && (
                  <SeeMoreLink onClick={() => setShowMore(true)}>See more</SeeMoreLink>
                )}
                 {showMore && (
                  <SeeMoreLink onClick={() => setShowMore(false)}>See less</SeeMoreLink>
                )}

                {showMore && (
                  <div style={{overflow: 'scroll'}}>
                 
                    <h3>Samples - {selectedRequest.samples.length}</h3>
                    <Table>
                      <TableHeader>
                        <tr>
                          <th>Sample ID</th>
                          <th>HIV</th>
                          <th>HBsAg</th>
                          <th>Syphilis</th>
                          <th>BGS</th>
                          <th>HCV</th>
                          <th>Other</th>
                        </tr>
                      </TableHeader>
                      <tbody>
                        {selectedRequest.samples.map((sample) => (
                          <TableRow key={sample._id}>
                            <TableCell>{sample.sample_id}</TableCell>
                            <TableCell>{sample.hiv}</TableCell>
                            <TableCell>{sample.hbsag}</TableCell>
                            <TableCell>{sample.syphilis}</TableCell>
                            <TableCell>{sample.bgs}</TableCell>
                            <TableCell>{sample.hcv}</TableCell>
                            <TableCell>{sample.other}</TableCell>
                          </TableRow>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default BloodEntry;
