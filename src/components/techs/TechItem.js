import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ techs, deleteTech }) => {
    const onDelete = () => {
        deleteTech(techs.id);
        M.toast({ html: "Technician deleted" });
    };

    return (
        <li className="collection-item">
            <div>
                {techs.firstName} {techs.lastName}
                <a href="#!" className="secondary-content" onClick={onDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

TechItem.propTypes = {
    techs: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechItem);
