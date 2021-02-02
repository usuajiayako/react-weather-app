import './Title.css';
import { FaCloudSun } from 'react-icons/fa';

const Title = () => {
  return (
    <header className="title">
      <h1>Weather Watcher</h1>
      <FaCloudSun size={40} />
    </header>
  );
};

export default Title;
