import PropTypes from 'prop-types';
import classNames from 'classnames';
import DecoratedListItem from './decorated-list-item';

import '../styles/components/info-list.scss';

const InfoList = ({
  infoData,
  columns,
  isCompact,
  highlightFirstItem,
  noTitles,
  className,
  ...props
}) => (
  <div
    className={classNames(className, 'info-list', {
      'info-list--columns': columns,
    })}
    {...props}
  >
    {infoData.map(
      // Only draw if there is content
      (item, index) =>
        item.content && (
          <DecoratedListItem
            title={item.title}
            content={item.content}
            highlight={index === 0 && highlightFirstItem}
            compact={isCompact}
            hideTitle={noTitles}
            key={item.title}
          />
        )
    )}
  </div>
);

InfoList.propTypes = {
  /**
   * An array of objects each containing 'title' and 'content'
   */
  infoData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
  /**
   * A boolean indicating whether the component should span multiple
   * columns on medium to large screens or not.
   */
  columns: PropTypes.bool,
  /**
   * A boolean indicating whether the component should render
   * as a compact list
   */
  isCompact: PropTypes.bool,
  /**
   * Should the first content item in the InfoList be bold
   */
  highlightFirstItem: PropTypes.bool,
  /**
   * Display titles or not
   */
  noTitles: PropTypes.bool,
  /**
   * CSS Class name coming from the parent
   */
  className: PropTypes.string,
};

InfoList.defaultProps = {
  columns: false,
  isCompact: false,
  noTitles: false,
  highlightFirstItem: false,
  className: null,
};

export default InfoList;
