import React from 'react';
import { PeopleParents } from '../../types/types';

type Props = {
  person: PeopleParents;
};

export const PersonRow: React.FC<Props> = ({
  person,
}) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>{person.motherName || '-'}</td>
      <td>{person.fatherName || '-'}</td>
    </tr>
  );
};