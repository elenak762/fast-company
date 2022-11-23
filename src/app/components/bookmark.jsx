import React from "react";

const Bookmark = ({ status, ...rest }) => {
    return (
        <button className="btn btn-light" {...rest}>
            <i className={"bi bi-bookmark" + (status ? "-fill" : "")}></i>
        </button>
    );
};

export default Bookmark;
