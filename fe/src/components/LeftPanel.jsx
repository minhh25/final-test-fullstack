import React from 'react';
import { Link } from 'react-router-dom';

const LeftPanel = () => {
  return (
    <aside className="w-64 bg-gray-100 h-full shadow-md">
      <nav className="flex flex-col p-4">
        <div className="font-bold text-lg mb-4">Thống kê</div>
        <div className="font-bold text-lg mb-4">Lớp học</div>
        <div className="font-bold text-lg mb-4">Học sinh</div>
        <Link to="/teacher" className="font-bold text-lg mb-4">
          Giáo viên
        </Link>
        <div className="font-bold text-lg mb-4">Dữ liệu</div>
        <Link to="/teacher-position" className="font-bold text-lg mb-4">
          Vị trí công tác
        </Link>
      </nav>
    </aside>
  );
};

export default LeftPanel;