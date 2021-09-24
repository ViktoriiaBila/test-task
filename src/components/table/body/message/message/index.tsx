import React from 'react';
import '../../../../../models/types';

export function TableMessage(): JSX.Element {
  return (
    <tr className="table__body__message">
      <td className="table__body__message__icon"></td>
      <td className="table__body__message__name"></td>
      <td className="table__body__message__text"></td>
      <td className="table__body__message__time"></td>
      <td className="table__body__message__date"></td>
    </tr>
  );
}
