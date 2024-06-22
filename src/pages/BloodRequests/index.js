

// // import React, { useState } from 'react';
// // import styled from '@emotion/styled';
// // import { getBloodRequests } from '../../api/blood_requests';

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
// //       case 'approved':
// //         return 'background-color: #ff9800;'; // Orange
// //       case 'pending':
// //         return 'background-color: #2196F3;'; // Blue
// //       default:
// //         return 'background-color: #4CAF50;'; // Green
// //     }
// //   }}
// // `;

// // const BloodEntry = async() => {

// //   const [request, setRequest] = useState([]);
// //   // eslint-disable-next-line
// //   const [loading, setLoading] = useState(true);
// //   // eslint-disable-next-line
// //   const [error, setError] = useState(null);

// //   React.useEffect(() => {
// //     const fetchRequests = async () => {
// //       try {
// //         const data = await getBloodRequests();
// //         setRequest(data.data); 
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchRequests();
// //   }, []);

// //   console.log(request);

// //   const [requests, setRequests] = useState([
// //     {
// //       "id": "35263278238728372",
// //       "center": "Red Cross",
// //       "units": 2,
// //       "date": "2024-05-01",
// //       "status": "pending"
// //     },
// //     {
// //       "id": "35263278238728373",
// //       "center": "Blood Bank",
// //       "units": 3,
// //       "date": "2024-05-02",
// //       "status": "pending"
// //     },
// //     {
// //       "id": "35263278238728374",
// //       "center": "Healthcare Center",
// //       "units": 1,
// //       "date": "2024-05-03",
// //       "status": "pending"
// //     },
// //     {
// //       "id": "35263278238728375",
// //       "center": "City Hospital",
// //       "units": 4,
// //       "date": "2024-05-04",
// //       "status": "pending"
// //     },
// //     {
// //       "id": "35263278238728376",
// //       "center": "Emergency Care",
// //       "units": 2,
// //       "date": "2024-05-05",
// //       "status": "pending"
// //     },
// //     {
// //       "id": "35263278238728377",
// //       "center": "Community Clinic",
// //       "units": 3,
// //       "date": "2024-05-06",
// //       "status": "pending"
// //     },
// //     {
// //       "id": "35263278238728378",
// //       "center": "Medical Center",
// //       "units": 2,
// //       "date": "2024-05-07",
// //       "status": "pending"
// //     },
// //     {
// //       "id": "35263278238728379",
// //       "center": "Health Center",
// //       "units": 3,
// //       "date": "2024-05-08",
// //       "status": "pending"
// //     },
// //     {
// //       "id": "35263278238728380",
// //       "center": "Emergency Room",
// //       "units": 1,
// //       "date": "2024-05-09",
// //       "status": "pending"
// //     },
// //     {
// //       "id": "35263278238728381",
// //       "center": "Urgent Care",
// //       "units": 2,
// //       "date": "2024-05-10",
// //       "status": "pending"
// //     }
// //   ]
// //   );

// //   const handleApprove = id => {
// //     const updatedRequests = requests.map(request => {
// //       if (request.id === id) {
// //         return { ...request, status: 'approved' };
// //       }
// //       return request;
// //     });
// //     setRequests(updatedRequests);
// //   };

// //   return (
// //     <Container>
// //       <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Requests</h1>

// //       <Table>
// //         <TableHeader>
// //           <tr>
// //             <th>id</th>
// //             <th>Center</th>
// //             <th>Units</th>
// //             <th>Date</th>
// //             <th>Status</th>
// //             <th>Action</th>
// //           </tr>
// //         </TableHeader>
// //         <tbody>
// //           {requests.map(request => (
// //             <TableRow key={request.id}>
// //               <TableCell>{request.id}</TableCell>
// //               <TableCell>{request.center}</TableCell>
// //               <TableCell>{request.units}</TableCell>
// //               <TableCell>{request.date}</TableCell>
// //               <TableCell>
// //                 <StatusLabel status={request.status}>
// //                   {request.status}
// //                 </StatusLabel>
// //               </TableCell>
// //               <TableCell>
// //                 {request.status === 'pending' && (
// //                   <button onClick={() => handleApprove(request.id)}>
// //                     Approve
// //                   </button>
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







































// // import React, { useState, useEffect } from 'react';
// // import styled from '@emotion/styled';
// // import { getBloodRequests } from '../../api/blood_requests';

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
// //       case 'approved':
// //         return 'background-color: #ff9800;'; // Orange
// //       case 'pending':
// //         return 'background-color: #2196F3;'; // Blue
// //       default:
// //         return 'background-color: #4CAF50;'; // Green
// //     }
// //   }}
// // `;

// // const BloodEntry = () => {
// //   const [requests, setRequests] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // useEffect(() => {
// //   //   const fetchRequests = async () => {
// //   //     try {
// //   //       const data = await getBloodRequests();
// //   //       setRequests(data.data); // Assuming the response structure is { total: number, data: [...] }
// //   //     } catch (err) {
// //   //       setError(err.message);
// //   //     } finally {
// //   //       setLoading(false);
// //   //     }
// //   //   };

// //   //   fetchRequests();
// //   // }, []);



// //   useEffect(() => {
// //     const fetchRequests = async () => {
// //       try {
// //         const data = await getBloodRequests();
// //         // Convert createdAt to Date object
// //         const formattedRequests = data.data.map(request => ({
// //           ...request,
// //           createdAt: request.createdAt ? new Date(request.createdAt) : null
// //         }));
// //         setRequests(formattedRequests); // Assuming the response structure is { total: number, data: [...] }
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
  
// //     fetchRequests();
// //   }, []);
  




// // console.log(requests);
// //   const handleApprove = id => {
// //     const updatedRequests = requests.map(request => {
// //       if (request.id === id) {
// //         return { ...request, status: 'approved' };
// //       }
// //       return request;
// //     });
// //     setRequests(updatedRequests);
// //   };

// //   if (loading) return ( <div style={{alignItems: 'center', justifyContent: 'center'}}>Loading...</div>);
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <Container>
// //       <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Requests {'-'} {requests.length}</h1>

// //       <Table>
// //         <TableHeader>
// //           <tr>
// //             <th>id</th>
// //             <th>Center</th>
// //             <th>Units</th>
// //             <th>Date</th>
// //             <th>Status</th>
// //             <th>Action</th>
// //           </tr>
// //         </TableHeader>
// //         <tbody>
// //           {requests.map(request => (
// //             <TableRow key={request._id}>
// //               <TableCell>{request._id}</TableCell>
// //               <TableCell>{request.center_name ? request.center_name: request.center_id}</TableCell>
// //               <TableCell>{request.basic_info.total_requested}</TableCell>
// //               <TableCell>{request.createdAt.toLocaleDateString()}</TableCell>
// //               <TableCell>
// //                 <StatusLabel status={request.status}>
// //                   {request.status}
// //                 </StatusLabel>
// //               </TableCell>
// //               <TableCell>
// //                 {request.status === 'pending' && (
// //                   <button onClick={() => handleApprove(request.id)}>
// //                     Approve
// //                   </button>
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




// import React, { useState, useEffect } from 'react';
// import styled from '@emotion/styled';
// import { getBloodRequests } from '../../api/blood_requests';

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
//     cursor: pointer; /* Change cursor on hover */
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

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 9999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const ModalContent = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 8px;
//   width: 80%; /* Adjust modal width */
//   max-width: 600px; /* Set maximum width for responsiveness */
//   text-align: center;
// `;

// const ModalCloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   font-size: 18px;
//   cursor: pointer;
// `;

// const CloseModalButton = styled.button`
//   margin-top: 20px;
//   margin-left: 300px;
//   margin-right: 10px;
//   padding: 10px 20px;
//   background-color: #f44336;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const ActionButton = styled.button`
//   margin: 0 10px;
//   padding: 10px 20px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const BloodEntry = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const data = await getBloodRequests();
//         // Convert createdAt to Date object
//         const formattedRequests = data.data.map(request => ({
//           ...request,
//           createdAt: request.createdAt ? new Date(request.createdAt) : null
//         }));
//         setRequests(formattedRequests);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleApprove = id => {
//     const updatedRequests = requests.map(request => {
//       if (request.id === id) {
//         return { ...request, status: 'approved' };
//       }
//       return request;
//     });
//     setRequests(updatedRequests);
//   };

//   const handleRowClick = request => {
//     setSelectedRequest(request);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   if (loading) return (<div style={{ alignItems: 'center', justifyContent: 'center' }}>Loading...</div>);
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <Container>
//       <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Requests - {requests.length}</h1>

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
//             <TableRow key={request._id} onClick={() => handleRowClick(request)}>
//               <TableCell>{request._id}</TableCell>
//               <TableCell>{request.center_name ? request.center_name : request.center_id}</TableCell>
//               <TableCell>{request.basic_info.total_requested}</TableCell>
//               <TableCell>{request.createdAt.toLocaleDateString()}</TableCell>
//               <TableCell>
//                 <StatusLabel status={request.status}>{request.status}</StatusLabel>
//               </TableCell>
//               <TableCell>
//                 {request.status === 'pending' && (
//                   <ActionButton onClick={() => handleApprove(request.id)}>Approve</ActionButton>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </tbody>
//       </Table>

//       {isModalOpen && (
//         <ModalOverlay>
//           <ModalContent>
//             <ModalCloseButton onClick={handleCloseModal}>Close</ModalCloseButton>
//             <h2>Blood Request Details</h2>
//             <p>ID: {selectedRequest._id}</p>
//             <p>Center: {selectedRequest.center_name ? selectedRequest.center_name : selectedRequest.center_id}</p>
//             <p>Units: {selectedRequest.basic_info.total_requested}</p>
//             <p>Date: {selectedRequest.createdAt.toLocaleDateString()}</p>
//             {/* Additional details here */}
//             {/* <ActionButton onClick={() => console.log('Issue action')}>Issue</ActionButton> */}
//             <ActionButton onClick={handleCloseModal}>Approve</ActionButton>
//             <CloseModalButton onClick={handleCloseModal}>Cancell</CloseModalButton>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </Container>
//   );
// };

// export default BloodEntry;












// import React, { useState, useEffect } from 'react';
// import styled from '@emotion/styled';
// import { getBloodRequests } from '../../api/blood_requests';

// // Styled components for the table
// const Container = styled.div`
//   margin-top: 70px;
//   width: 100%; /* Ensure the table occupies full width */
// `;

// const Table = styled.table`
//   width: 100%; /* Occupy full width */
//   border-collapse: collapse;
// `;

// const ApproveButton = styled.button`
//   margin-top: 20px;
//   padding: 10px 20px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const TableHeader = styled.thead`
//   background-color: #2196F3;
//   color: white;
//   font-size: 20px;
// `;

// const TableRow = styled.tr`
//   &:hover {
//     background-color: #f2f2f2;
//     cursor: pointer; /* Change cursor on hover */
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

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 9999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const ModalContent = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 8px;
//   width: 80%; /* Adjust modal width */
//   max-width: 600px; /* Set maximum width for responsiveness */
//   max-height: 80%; /* Set maximum height */
//   overflow-y: auto; /* Make content scrollable */
//   text-align: center;
// `;

// const ModalCloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   font-size: 18px;
//   cursor: pointer;
// `;

// const CloseModalButton = styled.button`
//   margin-top: 20px;
//   padding: 10px 20px;
//   background-color: #f44336;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const ActionButton = styled.button`
//   margin: 0 10px;
//   padding: 10px 20px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const SeeMoreButton = styled.button`
//   margin: 0 10px;
//   padding: 10px 20px;
//   background-color: #2196F3;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
// `;
// const SeeMoreLink = styled.a`
//   display: block;
//   margin-top: 20px;
//   color: #2196F3;
//   cursor: pointer;
//   text-decoration: underline;
// `;

// const BloodEntry = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const data = await getBloodRequests();
//         const formattedRequests = data.data.map(request => ({
//           ...request,
//           createdAt: request.createdAt ? new Date(request.createdAt) : null
//         }));
//         setRequests(formattedRequests);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleApprove = (id, event) => {
//     // event.stopPropagation();
//     const updatedRequests = requests.map(request => {
//       if (request.id === id) {
//         return { ...request, status: 'approved' };
//       }
//       return request;
//     });
//     setRequests(updatedRequests);
//     setIsModalOpen(false);
//   };

//   const handleRowClick = request => {
//     setSelectedRequest(request);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setShowMore(false); 
//   };

//   const handleToggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const openModal = (request) => {
//     setSelectedRequest(request);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedRequest(null);
//     setIsModalOpen(false);
//     setShowMore(false);
//   };

 

//   if (loading) return (<div style={{ alignItems: 'center', justifyContent: 'center' }}>Loading...</div>);
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <Container>
//       {/* <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Requests - {requests.length}</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error loading data: {error.message}</p>} */}

// <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Requests - {requests.length}</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error loading data: {error.message}</p>}
//       {!loading && !error && (
//       <Table>
//         <TableHeader>
//           <tr>
//             <th>id</th>
//             <th>Center</th>
//             <th>Units</th>
//             <th>Date</th>
//             {/* <th>Status</th>
//             <th>Action</th> */}
//           </tr>
//         </TableHeader>
//         <tbody>
//           {requests.map(request => (
//             <TableRow key={request._id} onClick={() => handleRowClick(request)}>
//               <TableCell>{request._id}</TableCell>
//               <TableCell>{request.center_name ? request.center_name : request.center_id}</TableCell>
//               <TableCell>{request.basic_info.total_requested}</TableCell>
//               <TableCell>{request.createdAt.toLocaleDateString()}</TableCell>
//               {/* <TableCell>
//                 <StatusLabel status={request.status}>{request.status}</StatusLabel>
//               </TableCell>
//               <TableCell>
//                 {request.status === 'pending' && (
//                   <>
//                     <ActionButton onClick={(e) => handleApprove(request.id, e)}>Approve</ActionButton>
//                     <SeeMoreButton onClick={(e) => { e.stopPropagation(); handleRowClick(request); }}>See more</SeeMoreButton>
//                   </>
//                 )}
//               </TableCell> */}
//             </TableRow>
//           ))}
//         </tbody>
//       </Table>

//       {isModalOpen && selectedRequest && (
//         <ModalOverlay>
//           <ModalContent>
//             <ModalCloseButton onClick={handleCloseModal}>×</ModalCloseButton>
//             <h2>Blood Request Details</h2>
//             <p>ID: {selectedRequest._id}</p>
//             <p>Center: {selectedRequest.center_name ? selectedRequest.center_name : selectedRequest.center_id}</p>
//             <p>Units: {selectedRequest.basic_info.total_requested}</p>
//             <p>Date: {selectedRequest.createdAt.toLocaleDateString()}</p>
//              <div style={{display: 'flex', justifyContent: 'space-around'}}>
//              <ApproveButton onClick={handleApprove}>Approve</ApproveButton>
//              <CloseModalButton onClick={closeModal}>Close</CloseModalButton>
//              </div>
//              {!showMore && (
//                   <SeeMoreLink onClick={() => setShowMore(true)}>See more</SeeMoreLink>
//                 )}
//               {showMore && (
//                   <SeeMoreLink onClick={() => setShowMore(false)}>See less</SeeMoreLink>
//                 )}   
          
//             {showMore && (
//               <div>
//                 <h3>Detailed Information</h3>
//                 {selectedRequest.basic_info && (
//                   <>
//                     <p>Name of Requester: {selectedRequest.basic_info.name_of_requester}</p>
//                     <p>Designation of Requester: {selectedRequest.basic_info.designation_of_requester}</p>
//                     <p>Name of Approver: {selectedRequest.basic_info.name_of_approver}</p>
//                     <p>Total Expired: {selectedRequest.basic_info.total_expired}</p>
//                   </>
//                 )}
//                 <h4>Whole Blood Details</h4>
//                 {selectedRequest.whole_blood && Object.entries(selectedRequest.whole_blood).map(([key, value]) => (
//                   <div key={key}>
//                     <h5>{key.replace('_', ' ').toUpperCase()}</h5>
//                     <p>Stock (Adult): {value.stock.adult}</p>
//                     <p>Stock (Pediatric): {value.stock.pediatric}</p>
//                     <p>Requested (Adult): {value.requested.adult}</p>
//                     <p>Requested (Pediatric): {value.requested.pediatric}</p>
//                     <p>Issued (Adult): {value.issued.adult}</p>
//                     <p>Issued (Pediatric): {value.issued.pediatric}</p>
//                     <p>Total: {value.total}</p>
//                     <p>Remarks: {value.remarks}</p>
//                   </div>
//                 ))}
//                 <h4>PRC Details</h4>
//                 {selectedRequest.prc && Object.entries(selectedRequest.prc).map(([key, value]) => (
//                   <div key={key}>
//                     <h5>{key.replace('_', ' ').toUpperCase()}</h5>
//                     <p>Stock (Adult): {value.stock.adult}</p>
//                     <p>Stock (Pediatric): {value.stock.pediatric}</p>
//                     <p>Requested (Adult): {value.requested.adult}</p>
//                     <p>Requested (Pediatric): {value.requested.pediatric}</p>
//                     <p>Issued (Adult): {value.issued.adult}</p>
//                     <p>Issued (Pediatric): {value.issued.pediatric}</p>
//                     <p>Total: {value.total}</p>
//                     <p>Remarks: {value.remarks}</p>
//                   </div>
//                 ))}
//                 <h4>FFP Details</h4>
//                 {selectedRequest.ffp && Object.entries(selectedRequest.ffp).map(([key, value]) => (
//                   <div key={key}>
//                     <h5>{key.replace('_', ' ').toUpperCase()}</h5>
//                     <p>Stock (Adult): {value.stock.adult}</p>
//                     <p>Stock (Pediatric): {value.stock.pediatric}</p>
//                     <p>Requested (Adult): {value.requested.adult}</p>
//                     <p>Requested (Pediatric): {value.requested.pediatric}</p>
//                     <p>Issued (Adult): {value.issued.adult}</p>
//                     <p>Issued (Pediatric): {value.issued.pediatric}</p>
//                     <p>Total: {value.total}</p>
//                     <p>Remarks: {value.remarks}</p>
//                   </div>
//                 ))}
//                 <h4>PRC Details</h4>
//                 {selectedRequest.prc && Object.entries(selectedRequest.prc).map(([key, value]) => (
//                   <div key={key}>
//                     <h5>{key.replace('_', ' ').toUpperCase()}</h5>
//                     <p>Stock (Adult): {value.stock.adult}</p>
//                     <p>Stock (Pediatric): {value.stock.pediatric}</p>
//                     <p>Requested (Adult): {value.requested.adult}</p>
//                     <p>Requested (Pediatric): {value.requested.pediatric}</p>
//                     <p>Issued (Adult): {value.issued.adult}</p>
//                     <p>Issued (Pediatric): {value.issued.pediatric}</p>
//                     <p>Total: {value.total}</p>
//                     <p>Remarks: {value.remarks}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
         
//           </ModalContent>
//         </ModalOverlay>
//       )}
//       )}
//     </Container>
//   );
// };

// export default BloodEntry;











import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getBloodRequests } from '../../api/blood_requests';

const Container = styled.div`
  margin-top: 70px;
  width: 100%; /* Ensure the table occupies full width */
`;

const Table = styled.table`
  width: 100%; /* Occupy full width */
  border-collapse: collapse;
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

const StatusLabel = styled.span`
  padding: 8px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  color: white;

  ${({ status }) => {
    switch (status) {
      case 'approved':
        return 'background-color: #ff9800;'; // Orange
      case 'pending':
        return 'background-color: #2196F3;'; // Blue
      default:
        return 'background-color: #4CAF50;'; // Green
    }
  }}
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
        const data = await getBloodRequests();
        const formattedRequests = data.data.map(request => ({
          ...request,
          createdAt: request.createdAt ? new Date(request.createdAt) : null
        }));
        setRequests(formattedRequests);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = (id, event) => {
    // event.stopPropagation();
    const updatedRequests = requests.map(request => {
      if (request.id === id) {
        return { ...request, status: 'approved' };
      }
      return request;
    });
    setRequests(updatedRequests);
    setIsModalOpen(false);
  };

  const handleRowClick = request => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowMore(false); 
  };



  const closeModal = () => {
    setSelectedRequest(null);
    setIsModalOpen(false);
    setShowMore(false);
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Requests - {requests.length}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <>
          <Table>
            <TableHeader>
              <tr>
                <th>id</th>
                <th>Center</th>
                <th>Total Units</th>
                <th>Date</th>
              </tr>
            </TableHeader>
            <tbody>
              {requests.map(request => (
                <TableRow key={request._id} onClick={() => handleRowClick(request)}>
                  <TableCell>{request._id}</TableCell>
                  <TableCell>{request.center_name ? request.center_name : request.center_id}</TableCell>
                  <TableCell>{request.basic_info.total_requested}</TableCell>
                  <TableCell>{request.createdAt.toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>

          {isModalOpen && (
            <ModalOverlay>
              <ModalContent>
                <ModalCloseButton onClick={handleCloseModal}>Close</ModalCloseButton>
                <h2>Blood Request Details</h2>
                <p>ID: {selectedRequest._id}</p>
                <p>Center: {selectedRequest.center_name ? selectedRequest.center_name : selectedRequest.center_id}</p>
                <p>Total Units: {selectedRequest.basic_info.total_requested}</p>
                <p>Date: {selectedRequest.createdAt.toLocaleDateString()}</p>
              {/* <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
               <ActionButton onClick={() => handleApprove(selectedRequest.id)}>Approve</ActionButton>
               <CloseModalButton onClick={handleCloseModal}>Cancel</CloseModalButton>
              </div> */}
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
              <div>
                <h3>Detailed Information</h3>
                {selectedRequest.basic_info && (
                  <>
                    <p>Name of Requester: {selectedRequest.basic_info.name_of_requester}</p>
                    <p>Designation of Requester: {selectedRequest.basic_info.designation_of_requester}</p>
                    <p>Name of Approver: {selectedRequest.basic_info.name_of_approver}</p>
                    <p>Total Expired: {selectedRequest.basic_info.total_expired}</p>
                  </>
                )}
                <h4>Whole Blood Details</h4>
                {selectedRequest.whole_blood && Object.entries(selectedRequest.whole_blood).map(([key, value]) => (
                  <div key={key}>
                    <h5>{key.replace('_', ' ').toUpperCase()}</h5>
                    <p>Stock (Adult): {value.stock.adult}</p>
                    <p>Stock (Pediatric): {value.stock.pediatric}</p>
                    <p>Requested (Adult): {value.requested.adult}</p>
                    <p>Requested (Pediatric): {value.requested.pediatric}</p>
                    <p>Issued (Adult): {value.issued.adult}</p>
                    <p>Issued (Pediatric): {value.issued.pediatric}</p>
                    <p>Total: {value.total}</p>
                    <p>Remarks: {value.remarks}</p>
                  </div>
                ))}
                <h4>PRC Details</h4>
                {selectedRequest.prc && Object.entries(selectedRequest.prc).map(([key, value]) => (
                  <div key={key}>
                    <h5>{key.replace('_', ' ').toUpperCase()}</h5>
                    <p>Stock (Adult): {value.stock.adult}</p>
                    <p>Stock (Pediatric): {value.stock.pediatric}</p>
                    <p>Requested (Adult): {value.requested.adult}</p>
                    <p>Requested (Pediatric): {value.requested.pediatric}</p>
                    <p>Issued (Adult): {value.issued.adult}</p>
                    <p>Issued (Pediatric): {value.issued.pediatric}</p>
                    <p>Total: {value.total}</p>
                    <p>Remarks: {value.remarks}</p>
                  </div>
                ))}
                <h4>FFP Details</h4>
                {selectedRequest.ffp && Object.entries(selectedRequest.ffp).map(([key, value]) => (
                  <div key={key}>
                    <h5>{key.replace('_', ' ').toUpperCase()}</h5>
                    <p>Stock (Adult): {value.stock.adult}</p>
                    <p>Stock (Pediatric): {value.stock.pediatric}</p>
                    <p>Requested (Adult): {value.requested.adult}</p>
                    <p>Requested (Pediatric): {value.requested.pediatric}</p>
                    <p>Issued (Adult): {value.issued.adult}</p>
                    <p>Issued (Pediatric): {value.issued.pediatric}</p>
                    <p>Total: {value.total}</p>
                    <p>Remarks: {value.remarks}</p>
                  </div>
                ))}
                <h4>PRC Details</h4>
                {selectedRequest.prc && Object.entries(selectedRequest.prc).map(([key, value]) => (
                  <div key={key}>
                    <h5>{key.replace('_', ' ').toUpperCase()}</h5>
                    <p>Stock (Adult): {value.stock.adult}</p>
                    <p>Stock (Pediatric): {value.stock.pediatric}</p>
                    <p>Requested (Adult): {value.requested.adult}</p>
                    <p>Requested (Pediatric): {value.requested.pediatric}</p>
                    <p>Issued (Adult): {value.issued.adult}</p>
                    <p>Issued (Pediatric): {value.issued.pediatric}</p>
                    <p>Total: {value.total}</p>
                    <p>Remarks: {value.remarks}</p>
                  </div>
                ))}
              </div>
            )}
              </ModalContent>
            </ModalOverlay>
          )}
        </>
      )}
    </Container>
  );
};

export default BloodEntry;








