import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import ListTeacherPosition from '../components/ListTeacherPosition.jsx';
import LeftPanel from '../components/LeftPanel.jsx';
import CreateTeacherPosition from '../components/CreateTeacherPosition.jsx';

const TeacherPosition = () => {
  const [teacherPositions, setTeacherPositions] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchTeacherPositions();
  }, []);

  const fetchTeacherPositions = async () => {
    try {
      const res = await fetch('http://localhost:8080/teacher-positions');
      const data = await res.json();
      if (Array.isArray(data.data)) {
        setTeacherPositions(data.data);
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching teacher positions:', error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <LeftPanel />
        <div className="flex-1 bg-white p-6 overflow-auto">
          <div className="text-sm text-gray-500 mb-4">Dữ liệu / Vị trí công tác</div>
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded"
              onClick={() => setIsCreating(true)}
            >
              + Tạo
            </button>
            <button
              className="bg-gray-200 px-4 py-2 rounded"
              onClick={() => window.location.reload()} // Refresh the page
            >
              Làm mới
            </button>
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">STT</th>
                <th className="border border-gray-300 p-2">Mã</th>
                <th className="border border-gray-300 p-2">Tên</th>
                <th className="border border-gray-300 p-2">Trạng thái</th>
                <th className="border border-gray-300 p-2">Mô tả</th>
              </tr>
            </thead>
            <tbody>
              {teacherPositions.map((position, index) => (
                <tr key={position._id}>
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{position.code}</td>
                  <td className="border border-gray-300 p-2">{position.name}</td>
                  <td className="border border-gray-300 p-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        position.isActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}
                    >
                      {position.isActive ? 'Hoạt động' : 'Ngừng'}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-2">{position.des || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {isCreating && (
            <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50 overflow-auto">
              <CreateTeacherPosition
                onClose={() => {
                  setIsCreating(false);
                  fetchTeacherPositions(); 
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherPosition;