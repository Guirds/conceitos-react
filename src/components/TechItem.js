import React from 'react';
import ProTypes from 'prop-types';

function TechItem({tech, onDelete}) {
  return(
    <li>
      {tech}
      <button type="button" onClick={onDelete}>Remover</button>
    </li>
  );
};

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.ProTypes = {
  tech: ProTypes.string,
  onDelete: ProTypes.func.isRequired,
};

export default TechItem;ProTypes