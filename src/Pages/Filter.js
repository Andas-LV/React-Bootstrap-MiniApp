import React, { useState } from 'react';
import '../index.css';

const Filter = () => {
    let card;
  // Имитация списка пользователей
  const initialUsers = [
    { id: 1, name: 'Asta' , className:{card}},
    { id: 2, name: 'Juno' },
    { id: 3, name: 'Yami' },
    { id: 4, name: 'Julius' },
    { id: 5, name: 'Reel' },
    { id: 6, name: 'Vanjins' },
    { id: 7, name: 'Leo' },
    { id: 8, name: 'Noel' },
    { id: 9, name: 'Claus' },
    { id: 10, name: 'Lack' },
  ];

  // Состояние для хранения списка пользователей и фильтров
  const [users, setUsers] = useState(initialUsers);
  const [filter, setFilter] = useState('');

  // Функция для обновления фильтра
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Функция для применения фильтрации и получения отфильтрованного списка пользователей
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Фильтровать по имени"
        value={filter}
        onChange={handleFilterChange}
        className='searcher'
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;