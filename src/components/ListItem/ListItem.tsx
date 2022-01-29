import { Link } from "react-router-dom";
import "./ListItem.css";

interface IListItemProp {
  id: string;
  index: string;
  title: string;
  subTitle: string;
}

export const ListItem = ({ id, index, title, subTitle }: IListItemProp) => {
  return (
    <Link to={`${id}`} className="list-item">
      <div className="title">
        <div>{index + 1}</div>
        <div>{title}</div>
      </div>
      <div className="sub-title">{subTitle}</div>
    </Link>
  );
};
