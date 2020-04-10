import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <Fragment>
      {robots.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        );
      })}
    </Fragment>
  );
};

export default CardList;
