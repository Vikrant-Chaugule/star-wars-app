import "./DetailsItemRow.css";

interface IDetailsItemRowProps {
  label: string;
  info: string | string[];
}

export const DetailsItemRowProps = ({ label, info }: IDetailsItemRowProps) => {
  const renderInfo = () => {
    if (Array.isArray(info)) {
      return (
        <div>
          {info?.map((el: string) => (
            <p key={el} className="details-item-info">
              {el}
            </p>
          ))}
        </div>
      );
    }
    return <p className="details-item-info">{info ?? "N/A"}</p>;
  };

  return (
    <div className="details-item-row">
      <p className="details-item-label">{label}</p>
      {renderInfo()}
    </div>
  );
};
