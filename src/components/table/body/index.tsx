import React from 'react';
import '../../../models/types';
import { TableMessage } from './message/message';
import { TableMessagePhone } from './message/phone';

export function TableBody(): JSX.Element {
  return (
    <tbody className="table__body">
      <TableMessage />
      <TableMessagePhone />
    </tbody>
  );
}
