import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const IconList = ({ icons, type = 'list' }) => {
  return (
    <div className={`icon-${type}`}>
      {icons &&
        icons.map(icon =>
          icon.url ? (
            <a href={icon.url ? icon.url : '#'}>
              <FontAwesomeIcon icon={icon.fontAwesomeName} />
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
