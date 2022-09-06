import React from "react";
import Teble from "./Teble";

const User = () => {
  const userList = [
    {
      id: 1,
      Name: "tushar",
      city: "surat",
      Address: "dharma nagar",
      Phone: 1234567890,
      statu: "active",
    },
    {
      id: 2,
      Name: "vivek",
      city: "surat",
      Address: "mota varachha",
      Phone: 9987654321,
      statu: "block",
    },
    {
      id: 3,
      Name: "jay",
      city: "surat",
      Address: " varachha",
      Phone: 55587654321,
      statu: "disactive",
    },
    {
      id: 4,
      Name: "keyur",
      city: "surat",
      Address: "mota varachha",
      Phone: 12127654321,
      statu: "block",
    },
    {
      id: 5,
      Name: "raghu",
      city: "surat",
      Address: "varachha",
      Phone: 34347654321,
      statu: "active",
    },
    {
      id: 6,
      Name: "kevin",
      city: "surat",
      Address: "yogi chow",
      Phone: 12345654321,
      statu: "disactive",
    },
    {
      id: 7,
      Name: "kreesh",
      city: "surat",
      Address: "podar",
      Phone: 12345654321,
      statu: "active",
    },
    {
      id: 8,
      Name: "amit",
      city: "surat",
      Address: "varachha",
      Phone: 72345654321,
      statu: "block",
    },
    {
      id: 9,
      Name: "vrajesh",
      city: "surat",
      Address: "nana varachha",
      Phone: 32345654321,
      statu: "active",
    },
    {
      id: 10,
      Name: "meet",
      city: "surat",
      Address: "podar",
      Phone: 62345654321,
      statu: "dicactive",
    },
  ];
  return (
    <>
      <h1>USER DATA</h1>
      <Teble list={userList} />
    </>
  );
};

export default User
