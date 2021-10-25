import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [connectionStatus, setConnectionStatus] = useState(true);

  useEffect(() => {
    const handleConnectionStatus = () => {
      setConnectionStatus(!connectionStatus);
    };
    window.addEventListener('online', handleConnectionStatus);
    window.addEventListener('offline', handleConnectionStatus);

    return () => {
      window.removeEventListener('online', handleConnectionStatus);
      window.removeEventListener('offline', handleConnectionStatus);
    };
  }, [connectionStatus]);

  const onlineStatus = connectionStatus ? 'online' : 'offline';
  const statusClassName = connectionStatus ? 'status' : 'status status_offline';

  return <div className={statusClassName}>{onlineStatus}</div>;
};

export default ConnectionStatus;
