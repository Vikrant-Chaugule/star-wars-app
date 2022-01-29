import { Link } from "react-router-dom";
import "./ListItem.css";

export interface IListItemProp {
  id: string;
  title: string;
  subTitle: string;
}

export const ListItem = ({
  id,
  index,
  title,
  subTitle,
}: IListItemProp & { index: number }) => {
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
