import { useContext } from 'react';
import { GlobalStateContext } from '../../components/GlobalStateProvider';

const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export default useGlobalState;