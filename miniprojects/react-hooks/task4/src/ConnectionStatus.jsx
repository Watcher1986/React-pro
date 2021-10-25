import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [connectionStatus, setConnectionStatus] = useState('online');

  useEffect(() => {
    const onOnline = () => {
      setConnectionStatus('online');
    };
    const onOffline = () => {
      setConnectionStatus('offline');
    };
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, [connectionStatus]);

  const statusClassName = connectionStatus === 'online' ? 'status' : 'status status_offline';
  return <div className={statusClassName}>{connectionStatus}</div>;
};

export default ConnectionStatus;
