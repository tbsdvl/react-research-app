import React, { useState, useEffect } from "react";
import API from "../../util/API";


const CreateArchiveButton = ({ name, archives, setArchives }) => {

    return (
        <button
            type="submit"
            onClick={async () => {
                await API.createArchive({ archiveName: name, articles: [] });
                const newArchives = await API.getArchives();
                setArchives(newArchives.data);
            }}
        >
            Create Archive
        </button>
    );
};

export default CreateArchiveButton;