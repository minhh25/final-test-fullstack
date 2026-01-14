import React, { useState, useEffect } from 'react';

const ListTeacher = ({ currentPage, itemsPerPage, setTotalTeachers }) => {
  const [listTeacher, setListTeacher] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const res = await fetch('http://localhost:8080/teachers');
      const data = await res.json();
      if (Array.isArray(data.data)) {
        setListTeacher(data.data); 
        setTotalTeachers(data.data.length); 
        console.log('Fetched Teachers:', data.data); 
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTeachers = listTeacher.slice(startIndex, endIndex);

  return (
    <div className="p-6">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Mã</th>
            <th className="border border-gray-300 p-2">Giáo viên</th>
            <th className="border border-gray-300 p-2">Trình độ (cao nhất)</th>
            <th className="border border-gray-300 p-2">Bộ môn</th>
            <th className="border border-gray-300 p-2">TT Công tác</th>
            <th className="border border-gray-300 p-2">Địa chỉ</th>
            <th className="border border-gray-300 p-2">Trạng thái</th>
            <th className="border border-gray-300 p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTeachers.map((teacher, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{teacher.code}</td>
              <td className="border border-gray-300 p-2">
                <div className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-bold">{teacher.userId?.name || 'N/A'}</div>
                    <div className="text-sm text-gray-500">{teacher.userId?.email || 'N/A'}</div>
                    <div className="text-sm text-gray-500">{teacher.userId?.phoneNumber || 'N/A'}</div>
                  </div>
                </div>
              </td>
              <td className="border border-gray-300 p-2">
                {teacher.degrees.length > 0 ? (
                  <>
                    <div>Bậc: {teacher.degrees[0].type}</div>
                    <div>Chuyên ngành: {teacher.degrees[0].major}</div>
                  </>
                ) : (
                  'N/A'
                )}
              </td>
              <td className="border border-gray-300 p-2">N/A</td>
              <td className="border border-gray-300 p-2">
                {teacher.teacherPositionId?.name || 'N/A'}
              </td>
              <td className="border border-gray-300 p-2">{teacher.userId?.address || 'N/A'}</td>
              <td className="border border-gray-300 p-2">
                <span className={`px-2 py-1 rounded ${teacher.isActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {teacher.isActive ? 'Đang công tác' : 'Không hoạt động'}
                </span>
              </td>
              <td className="border border-gray-300 p-2">
                <button className="text-indigo-700">Chi tiết</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTeacher;