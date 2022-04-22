import { useState } from 'react';

export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({
    name: 'yishuihan',
    age: 18
  });

  return {
    masterState,
    setMasterState,
  };
}
