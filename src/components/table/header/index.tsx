import React from 'react';
import '../../../models/types';

export function TableHeader(): JSX.Element {
  return (
    <thead className="table__header">
      <button className="table__header__reloadBtn" type="button">
        <div className="table__header__reloadBtn__icon"></div>
      </button>
      <h2>Знайдено 8 клієнтів</h2>
    </thead>
  );
}
