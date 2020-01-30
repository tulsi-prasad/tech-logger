import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ techs }) => {
    return (
        <li className="collection-item">
            <div>
                {techs.firstName} {techs.lastName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

TechItem.propTypes = {
    techs: PropTypes.object.isRequired
};

export default TechItem;
