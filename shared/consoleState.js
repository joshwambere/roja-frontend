import { useSelector } from 'react-redux';

const consoleState = () => {
  const state = useSelector((state) => state);
  console.log(state);
  console.log('=====================================================');
};

export default consoleState;
