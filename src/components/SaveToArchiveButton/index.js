import React, { useState, useEffect } from "react";
import { Dropdown,  } from "react-bootstrap";
// import { handleSearchAPIRequest } from "./handlers";
import API from "../../util/API";


const SaveToArchiveButton = ({archives}) => {

    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Save to Archive
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
            {
                archives.length > 0 ?
                archives.map(archive => {
                    return  <Dropdown.Item key={archives.indexOf(archive)} href={archives.indexOf(archive)}>{archive.archiveName}</Dropdown.Item>
                })
                :
                null
            }
        </Dropdown.Menu>
      </Dropdown>
    );
};

export default SaveToArchiveButton;