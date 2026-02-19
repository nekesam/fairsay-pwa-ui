//

import { useAppContext } from '../context/AppContext';

export const Alert = () => {
  const { alert } = useAppContext();
  if (!alert) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, padding: '12px 24px', color: 'white', zIndex: 1000,
    }}>
      {alert.message}
    </div>
  );
};