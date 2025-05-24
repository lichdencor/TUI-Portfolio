interface ProgressItemProps {
  title: string;
  date: string;
  value: number;
}

export const ProgressItem: React.FC<ProgressItemProps> = ({ title, date, value }) => (
  <li>
    <h3>{title}</h3>
    <span>Ongoing - Expected Completion: </span>
    <span>{date}</span>
    <div className="progress-bar">
      <div style={{ width: `${value}%` }}>
        <span className="progress-label">{value}%</span>
      </div>
    </div>
  </li>
);

