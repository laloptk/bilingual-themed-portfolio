import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const IconList = ({ icons, type = 'list' }) => {
  return (
    <div className={`icon-${type}`}>
      {icons &&
        icons.map(icon =>
          icon.url ? (
            <a 
              key={icon.id}
              href={icon.url ? icon.url : '#'}
              rel="noopener noreferrer"
              aria-label={`Visit my ${icon.name ?? ''} profile`}
            >
              <FontAwesomeIcon icon={icon.fontAwesomeName} aria-hidden="true"/>
            </a>
          ) : (
            <span>
              <FontAwesomeIcon icon={icon.fontAwesomeName} />
            </span>
          )
        )}
    </div>
  );
};

export default IconList;
