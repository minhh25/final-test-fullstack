import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import ListTeacher from '../components/ListTeacher.jsx';
import LeftPanel from '../components/LeftPanel.jsx';
import CreateTeacher from '../components/CreateTeacher.jsx';

const Teacher = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalTeachers, setTotalTeachers] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <LeftPanel />
        <div className="flex-1 bg-white p-6 overflow-auto">
          <div className="flex flex-start text-sm text-gray-500 mb-4">Giáo viên</div>
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded"
              onClick={() => setIsCreating(true)}
            >
              + Tạo
            </button>
            <button
              className="bg-gray-200 px-4 py-2 rounded"
              onClick={() => window.location.reload()} // Refresh page
            >
              Làm mới
            </button>
          </div>
          {isCreating ? (
            <CreateTeacher onClose={() => setIsCreating(false)} />
          ) : (
            <>
              <ListTeacher
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                setTotalTeachers={setTotalTeachers}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  Tổng: <span className="font-bold">{totalTeachers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    className="border rounded px-2 py-1"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                  >
                    <option value={10}>10 / trang</option>
                    <option value={20}>20 / trang</option>
                    <option value={50}>50 / trang</option>
                    <option value={100}>100 / trang</option>
                  </select>
                  <div className="flex items-center gap-2">
                    <button
                      className="border rounded px-2 py-1"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      &lt;
                    </button>
                    <span>{currentPage}</span>
                    <button
                      className="border rounded px-2 py-1"
                      disabled={currentPage === Math.ceil(totalTeachers / itemsPerPage)}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teacher;