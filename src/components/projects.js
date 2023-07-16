import React from "react";
import WebsiteProjects from "./smallComponent/websiteProjects";
import BlockchainProjects from "./smallComponent/blockchainProjects";
import DesignProject from "./smallComponent/designProject";

const Projects = () => {
    return (
        <div>
            <WebsiteProjects />
            <BlockchainProjects />

        </div>
    );
};

export default Projects;
