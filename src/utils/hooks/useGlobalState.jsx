import { useContext } from 'react';
import { GlobalStateContext } from '../../components/GlobalStateContext';

const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export default useGlobalState;
