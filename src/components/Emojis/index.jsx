import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import EmojiBox from '../EmojiBox';
import styles from './Emojis.module.css';
import Empty from '../Empty';

import { filterEmojis } from '../../utils/filterEmojis';

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    setFilteredEmojis(
      filterEmojis({
        emojisData,
        searchText,
      })
    );
  }, [emojisData, searchText]);

  if (filteredEmojis.length > 0) {
    return (
      <div className={styles.emojisGrid}>
        {filteredEmojis.map((data, index) => (
          <div>
            <EmojiBox key={index} title={data.title} symbol={data.symbol} />
          </div>
        ))}
      </div>
    );
  } else {
    return <Empty text="Oops, Zero Finding. Let's try another keyword!" />;
  }
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
};

export default Emojis;
