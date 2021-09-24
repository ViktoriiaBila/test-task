import React from 'react';
import './table.scss';
import '../../models/types';
import { TableHeader } from './header';
import { TableBody } from './body';

export function Table(props: ITableProps): JSX.Element {
  return (
    <table className="table">
      <TableHeader />
      <TableBody />
    </table>
  );
}
