import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const ReactApps = ({ images }) => (
  <SingleSection
    title="React Apps"
    subtitle=""
    projectList={projectList}
    sectionId="react-apps"
  />
);

export default ReactApps;
