import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchBar from "material-ui-search-bar";



const Teble = ({ list }) => {
  console.log(list);
  const [searched, setSearched] = useState("")
  const [rows, setRows] = useState(list);




  const requestSearch = (searched) => {
    const filteredRows = list.filter((row) => {
      return row.Name.includes(searched) 
        });
    setRows(filteredRows);
  };

  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };

  return (
    <>
      <SearchBar
      style={{width:'50%'}}
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          // onCancelSearch={() => cancelSearch()}
        />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Id</b>
              </TableCell>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>City</b>
              </TableCell>
              <TableCell>
                <b>Address</b>
              </TableCell>
              <TableCell>
                <b>Phone</b>
              </TableCell>
              <TableCell>
                <b>status</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.Address}</TableCell>
                <TableCell>{row.Phone}</TableCell>
                <TableCell>{row.statu}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Teble;
