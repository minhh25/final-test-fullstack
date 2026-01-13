import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import ListTeacherPosition from '../components/ListTeacherPosition.jsx';
import LeftPanel from '../components/LeftPanel.jsx';
import CreateTeacherPosition from '../components/CreateTeacherPosition.jsx';

const TeacherPosition = () => {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <LeftPanel />
        <div className="flex-1 bg-white p-6 overflow-auto">
          <div className="flex flex-start text-sm text-gray-500 mb-4">Vị trí công tác</div>
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded"
              onClick={() => setIsCreating(true)}
            >
              + Tạo
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded">Làm mới</button>
          </div>
          {isCreating ? (
            <CreateTeacherPosition onClose={() => setIsCreating(false)} />
          ) : (
            <ListTeacherPosition />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherPosition;