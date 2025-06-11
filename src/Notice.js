import React from "react";
import Table from "react-bootstrap/Table";
import Image from 'react-bootstrap/Image';
import Moment from "react-moment";

export const Notice = () => {
  const notices = [
      {
        title:
          "\u0938\u0942\u091a\u0928\u093e : \u0928\u093f\u0935\u093f\u0926\u093e \u0916\u094b\u0932\u0928\u0947 \u0915\u0940 \u0924\u093f\u0925\u093f \u092e\u0947\u0902 \u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928",
        notice: "notice_8823220659.pdf",
        home: "1",
        new: "1",
        date: "2025-05-13 12:04:49",
      },
      {
        title:
          "\u0905\u0924\u093f \u0905\u0932\u094d\u092a\u0915\u093e\u0932\u0940\u0928 \u0928\u093f\u0935\u093f\u0926\u093e \u0938\u0942\u091a\u0928\u093e",
        notice: "notice_6710366038.pdf",
        home: "1",
        new: "1",
        date: "2025-05-10 06:39:49",
      },
      {
        title:
          "\u092a\u0941\u0938\u094d\u0924\u0915 \u0915\u094d\u0930\u092f \u0939\u0947\u0924\u0941 \u0928\u093f\u0935\u093f\u0926\u093e \u0906\u092e\u0902\u0924\u094d\u0930\u0923 \u0938\u0942\u091a\u0928\u093e",
        notice: "notice_2705483846.pdf",
        home: "1",
        new: "1",
        date: "2025-01-18 04:06:08",
      },
      {
        title:
          "\u0938\u0921\u093c\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u0902\u0915\u0947\u0924\u093e\u0935\u0932\u0940",
        notice: "notice_6148551916.pdf",
        home: "1",
        new: "1",
        date: "2025-01-18 04:03:12",
      },
      {
        title: "Class Routine of 1st, 3rd and 5th Semester",
        notice: "notice_4595841504.pdf",
        home: "1",
        new: "1",
        date: "2024-11-07 10:56:11",
      },
      {
        title: "Orientation Programme for Session : 2024-27 Students",
        notice: "notice_5456916475.pdf",
        home: "1",
        new: "1",
        date: "2024-09-10 10:57:14",
      },
      {
        title: "Regarding Registration of Lateral Diploma Students",
        notice: "notice_4465946876.pdf",
        home: "1",
        new: "1",
        date: "2023-11-23 10:42:01",
      },
      {
        title: "Regarding Registration of Regular Diploma Students",
        notice: "notice_1394565575.pdf",
        home: "1",
        new: "1",
        date: "2023-11-23 10:40:55",
      },
      {
        title: "Mentors alloted to 1st Semester (2023-24) students.",
        notice: "notice_9973190007.pdf",
        home: "1",
        new: "2",
        date: "2023-08-26 01:53:52",
      },
      {
        title:
          "Notice regarding beginning of 1st Year Classes of New Session 2023-24.",
        notice: "notice_8496842505.pdf",
        home: "1",
        new: "2",
        date: "2023-08-19 01:18:57",
      },
      {
        title: "Notice regarding allotment of seats in the Hostel.",
        notice: "notice_9781626360.pdf",
        home: "1",
        new: "2",
        date: "2023-07-10 05:09:19",
      },
      {
        title: "Routine of 2nd, 4th and 6th Semester (All Branch)",
        notice: "notice_6632757592.pdf",
        home: "1",
        new: "2",
        date: "2023-04-17 10:42:27",
      },
      {
        title:
          "Notice regarding Class of 2nd and 4th Semester Student (All Branch)",
        notice: "notice_3357944437.pdf",
        home: "1",
        new: "2",
        date: "2023-04-12 04:32:40",
      },
      {
        title: "Notice regarding Form fill up of 1st and 3rd Semester Students",
        notice: "notice_9498266666.pdf",
        home: "1",
        new: "2",
        date: "2023-03-01 12:10:48",
      },
      {
        title: "Notice regarding admission in 3rd semester (2021-24) Batch.",
        notice: "notice_9362459303.pdf",
        home: "1",
        new: "2",
        date: "2023-02-17 04:16:20",
      },
      {
        title: "AA LEVEL E-KALYAN NOTICE",
        notice: "notice_4611365408.pdf",
        home: "1",
        new: "2",
        date: "2023-02-16 11:45:14",
      },
      {
        title: "NPCI not active account student list (E-Kalyan)",
        notice: "notice_1755782808.pdf",
        home: "1",
        new: "2",
        date: "2023-02-16 11:38:22",
      },
      {
        title: "JUT Challan",
        notice: "notice_2568261926.pdf",
        home: "1",
        new: "1",
        date: "2023-01-07 04:07:26",
      },
      {
        title: "JUT Registration Notice (2022-23) for Regular Students",
        notice: "notice_6563323312.pdf",
        home: "1",
        new: "2",
        date: "2023-01-07 04:06:42",
      },
      {
        title: "JUT Registration Notice (2022-23) for Lateral Students",
        notice: "notice_9939524065.pdf",
        home: "1",
        new: "2",
        date: "2023-01-07 04:06:14",
      },
  ];
  return (
    <div>
      <h1>Notice</h1>
      <Table striped bordered hover>
        <thead>
          
          <tr>
            <th>Sl.</th>
            <th>Title</th>
            <th>Notice</th>
            <th>Home</th>
            <th>New</th>
            <th>Date</th>
          </tr>
        </thead>
      <tbody>
          {
            notices.map((notice,index) => {
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{notice.title} {notice.new==1?<Image src="https://gpa.ac.in/new.gif" />:""}</td>
                  <td><a href="https://gpa.ac.in/admin/uploads/{$notice.notice}">Notice</a></td>
                  <td>{notice.home}</td>
                  <td>{notice.new}</td>
                  <td><Moment format="YYYY/MM/DD">{notice.date}</Moment></td>
                </tr>
              
            )
            }
            )
          }
      </tbody>
    </Table>
    </div>
  );
};
