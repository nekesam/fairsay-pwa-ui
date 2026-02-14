//

import { useAppContext } from '../context/AppContext';
import { theme } from '../styles/theme';

export const Alert = () => {
  const { alert } = useAppContext();
  if (!alert) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, padding: '12px 24px',
      backgroundColor: theme.colors[alert.type], color: 'white', borderRadius: theme.radius,
      zIndex: 1000, boxShadow: theme.shadow
    }}>
      {alert.message}
    </div>
  );
};