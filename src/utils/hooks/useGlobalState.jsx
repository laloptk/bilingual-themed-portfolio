import { useContext } from 'react';
import { GlobalStateContext } from '../../components/GlobalStateProvider';

const useGlobalState = (initialState) => {
  return useContext(GlobalStateContext);
};

export default useGlobalState;