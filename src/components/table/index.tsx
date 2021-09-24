import React from 'react';
import './table.scss';
import '../../models/types';

export function Table(props: ITableProps): JSX.Element {
  return (
    <table className="table">
      <thead className="table__header"></thead>
      <tbody className="table__body">
        <tr className="table__body__message">
          <td className="table__body__message__icon"></td>
          <td className="table__body__message__name"></td>
          <td className="table__body__message__text"></td>
          <td className="table__body__message__time"></td>
          <td className="table__body__message__date"></td>
        </tr>
        <tr className="table__body__message">
          <td className="table__body__message__phone"></td>
        </tr>
      </tbody>
    </table>
  );
}
