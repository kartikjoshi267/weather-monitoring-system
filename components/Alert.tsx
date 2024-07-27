
const Alert = ({ alerts }: { alerts: any[] }) => {
  if (!alerts.length) return null;

  return (
    <div className="mt-4 p-4 bg-red-100 rounded">
      <h2 className="text-xl font-bold text-red-600">Alerts</h2>
      {alerts.map((alert: any, index: any) => (
        <p key={index}>{alert.message}</p>
      ))}
    </div>
  );
};

export default Alert;
